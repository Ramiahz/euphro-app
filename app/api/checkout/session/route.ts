import { NextResponse } from "next/server";
import { z } from "zod";

import { createClient } from "@/lib/supabase/server";
import { getStripeClient } from "@/lib/stripe/server";

const payloadSchema = z.object({
  venueSlug: z.string(),
  customerName: z.string().min(2),
  customerEmail: z.string().email(),
  customerPhone: z.string().min(6),
  eventType: z.string(),
  guestCount: z.string(),
  eventDate: z.string().optional(),
  areaPreference: z.string(),
  budgetRange: z.string(),
  supplierIds: z.string().optional(),
  estimatedTotal: z.string(),
  notes: z.string().optional()
});

export async function POST(request: Request) {
  try {
    const body = payloadSchema.parse(await request.json());
    const supabase = await createClient();

    const {
      data: { user }
    } = await supabase.auth.getUser();

    const { data: venue, error: venueError } = await supabase.from("venues").select("id, deposit_amount, name").eq("slug", body.venueSlug).single();
    if (venueError || !venue) return NextResponse.json({ error: "Venue not found." }, { status: 404 });

    const bookingReference = `EUP-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

    const { data: booking, error: bookingError } = await supabase
      .from("bookings")
      .insert({
        booking_reference: bookingReference,
        user_id: user?.id ?? null,
        venue_id: venue.id,
        customer_name: body.customerName,
        customer_email: body.customerEmail,
        customer_phone: body.customerPhone,
        event_type: body.eventType,
        guest_count: Number(body.guestCount),
        event_date: body.eventDate || null,
        area_preference: body.areaPreference,
        budget_range: body.budgetRange,
        status: "pending_payment",
        deposit_paid: false,
        deposit_amount: venue.deposit_amount,
        estimated_total: Number(body.estimatedTotal),
        customer_notes: body.notes ?? null
      })
      .select("id")
      .single();

    if (bookingError || !booking) return NextResponse.json({ error: "Could not create booking." }, { status: 500 });

    const supplierIds = body.supplierIds?.split(",").filter(Boolean) ?? [];
    if (supplierIds.length) {
      const { data: supplierRows } = await supabase.from("suppliers").select("id, name, price_from").in("id", supplierIds);
      if (supplierRows?.length) {
        await supabase.from("booking_items").insert(
          supplierRows.map((row) => ({
            booking_id: booking.id,
            item_type: "supplier",
            item_id: row.id,
            display_name: row.name,
            price: row.price_from
          }))
        );
      }
    }

    await supabase.from("booking_items").insert({
      booking_id: booking.id,
      item_type: "venue",
      item_id: venue.id,
      display_name: venue.name,
      price: venue.deposit_amount
    });

    const origin = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    const session = await getStripeClient().checkout.sessions.create({
      mode: "payment",
      customer_email: body.customerEmail,
      metadata: { booking_id: booking.id },
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "gbp",
            unit_amount: venue.deposit_amount * 100,
            product_data: { name: `${venue.name} deposit` }
          }
        }
      ],
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/cancel`
    });

    await supabase.from("bookings").update({ stripe_checkout_session_id: session.id }).eq("id", booking.id);

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Invalid request." }, { status: 400 });
  }
}

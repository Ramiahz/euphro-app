import { NextResponse } from "next/server";
import { z } from "zod";

import { createClient } from "@/lib/supabase/server";
import { getStripeClient } from "@/lib/stripe/server";

const schema = z.object({ sessionId: z.string() });

export async function POST(request: Request) {
  try {
    const { sessionId } = schema.parse(await request.json());
    const session = await getStripeClient().checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json({ error: "Payment not completed." }, { status: 400 });
    }

    const supabase = await createClient();
    const bookingId = session.metadata?.booking_id;

    if (!bookingId) return NextResponse.json({ error: "Booking not linked." }, { status: 404 });

    await supabase
      .from("bookings")
      .update({
        deposit_paid: true,
        status: "pending_confirmation",
        updated_at: new Date().toISOString()
      })
      .eq("id", bookingId);

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Confirmation failed." }, { status: 400 });
  }
}

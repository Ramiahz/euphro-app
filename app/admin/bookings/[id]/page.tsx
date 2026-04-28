import { notFound } from "next/navigation";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";

export default async function AdminBookingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: booking } = await supabase
    .from("bookings")
    .select("*, venues(name), booking_items(display_name, price, item_type)")
    .eq("id", id)
    .single();

  if (!booking) notFound();

  async function updateBooking(formData: FormData) {
    "use server";
    const supabase = await createClient();
    await supabase
      .from("bookings")
      .update({
        status: String(formData.get("status")),
        internal_notes: String(formData.get("internal_notes")),
        updated_at: new Date().toISOString()
      })
      .eq("id", id);
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{booking.booking_reference}</h1>
      <Card>
        <CardHeader><CardTitle>Booking details</CardTitle></CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>Customer: {booking.customer_name} · {booking.customer_email}</p>
          <p>Venue: {booking.venues?.name}</p>
          <p>Event: {booking.event_type} · {booking.guest_count} guests · {booking.event_date ?? "TBC"}</p>
          <p>Deposit: £{booking.deposit_amount} ({booking.deposit_paid ? "Paid" : "Pending"})</p>
          <p>Status: {booking.status}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>Add-ons</CardTitle></CardHeader>
        <CardContent className="space-y-2 text-sm">
          {booking.booking_items?.map((item: { display_name: string; price: number; item_type: string }) => (
            <p key={item.display_name}>{item.display_name} ({item.item_type}) · £{item.price}</p>
          ))}
        </CardContent>
      </Card>

      <form action={updateBooking} className="space-y-3 rounded-xl border bg-white p-4">
        <select name="status" defaultValue={booking.status} className="w-full rounded-md border p-2">
          {['draft','pending_payment','deposit_paid','pending_confirmation','confirmed','cancelled'].map((status) => <option key={status}>{status}</option>)}
        </select>
        <textarea name="internal_notes" defaultValue={booking.internal_notes ?? ""} className="w-full rounded-md border p-2" rows={4} />
        <button className="rounded-md bg-brand px-4 py-2 text-white">Update booking</button>
      </form>
    </div>
  );
}

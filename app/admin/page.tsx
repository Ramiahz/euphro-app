import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const [{ count: total }, { count: pending }, { count: depositPaid }, { data: recent }] = await Promise.all([
    supabase.from("bookings").select("id", { count: "exact", head: true }),
    supabase.from("bookings").select("id", { count: "exact", head: true }).eq("status", "pending_confirmation"),
    supabase.from("bookings").select("id", { count: "exact", head: true }).eq("deposit_paid", true),
    supabase.from("bookings").select("booking_reference, customer_name, status, created_at").order("created_at", { ascending: false }).limit(5)
  ]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Admin dashboard</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <Card><CardHeader><CardTitle>Total bookings</CardTitle></CardHeader><CardContent>{total ?? 0}</CardContent></Card>
        <Card><CardHeader><CardTitle>Pending confirmations</CardTitle></CardHeader><CardContent>{pending ?? 0}</CardContent></Card>
        <Card><CardHeader><CardTitle>Deposit paid</CardTitle></CardHeader><CardContent>{depositPaid ?? 0}</CardContent></Card>
      </div>

      <Card>
        <CardHeader><CardTitle>Recent bookings</CardTitle></CardHeader>
        <CardContent className="space-y-2 text-sm">
          {recent?.map((booking) => (
            <p key={booking.booking_reference}>{booking.booking_reference} · {booking.customer_name} · {booking.status}</p>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

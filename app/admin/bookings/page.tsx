import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";

export default async function AdminBookingsPage({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  const params = await searchParams;
  const supabase = await createClient();

  let query = supabase.from("bookings").select("id, booking_reference, customer_name, status, event_date, deposit_paid, venues(name)").order("created_at", { ascending: false });
  if (params.status) query = query.eq("status", params.status);

  const { data: bookings } = await query;

  return (
    <div>
      <h1 className="text-3xl font-semibold">Bookings</h1>
      <form className="mt-4">
        <input className="rounded-md border p-2" name="status" placeholder="Filter by status" defaultValue={params.status} />
        <button className="ml-2 rounded-md border px-3 py-2">Filter</button>
      </form>

      <div className="mt-6 space-y-3">
        {bookings?.map((booking) => (
          <Link href={`/admin/bookings/${booking.id}`} key={booking.id}>
            <Card>
              <CardHeader className="flex-row items-center justify-between space-y-0">
                <CardTitle className="text-base">{booking.booking_reference} · {booking.customer_name}</CardTitle>
                <Badge>{booking.status}</Badge>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>{booking.venues?.name} · {booking.event_date ?? "Date TBC"}</p>
                <p>{booking.deposit_paid ? "Deposit paid" : "Pending payment"}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

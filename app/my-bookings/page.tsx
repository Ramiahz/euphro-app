import { redirect } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";

export default async function MyBookingsPage() {
  const supabase = await createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: bookings } = await supabase
    .from("bookings")
    .select("id, booking_reference, status, event_date, deposit_amount, venues(name)")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-semibold">My bookings</h1>
      <div className="space-y-4">
        {bookings?.map((booking) => (
          <Card key={booking.id}>
            <CardHeader className="flex-row items-center justify-between space-y-0">
              <CardTitle className="text-base">{booking.booking_reference}</CardTitle>
              <Badge>{booking.status}</Badge>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>{booking.venues?.name}</p>
              <p>Event date: {booking.event_date ?? "TBC"}</p>
              <p>Deposit: £{booking.deposit_amount}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

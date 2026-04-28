import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";

export default async function AdminVenuesPage() {
  const supabase = await createClient();
  const { data: venues } = await supabase.from("venues").select("name, area, active, deposit_amount").order("name");

  return (
    <div>
      <h1 className="text-3xl font-semibold">Venues</h1>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {venues?.map((venue) => (
          <Card key={venue.name}><CardHeader><CardTitle className="text-base">{venue.name}</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">{venue.area} · Deposit £{venue.deposit_amount} · {venue.active ? "Active" : "Inactive"}</CardContent></Card>
        ))}
      </div>
    </div>
  );
}

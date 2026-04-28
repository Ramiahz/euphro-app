import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getVenues } from "@/lib/data";

export default async function VenuesPage({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  const params = await searchParams;
  const guestCount = params.guests ? Number(params.guests) : undefined;
  const budget = params.budget ? Number(params.budget) : undefined;

  const venues = await getVenues({
    area: params.area,
    guestCount,
    budget,
    query: params.q
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Browse Venues</h1>
      <p className="mt-2 text-muted-foreground">Curated spaces for premium London events.</p>
      <form className="mt-6 grid gap-3 rounded-xl border bg-white p-4 md:grid-cols-4">
        <input className="rounded-md border p-2" name="q" placeholder="Search venue" defaultValue={params.q} />
        <input className="rounded-md border p-2" name="area" placeholder="Area" defaultValue={params.area} />
        <input className="rounded-md border p-2" name="guests" placeholder="Guests" defaultValue={params.guests} />
        <button className="rounded-md bg-brand p-2 text-white">Apply filters</button>
      </form>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {venues.map((venue) => (
          <Link href={`/venues/${venue.slug}`} key={venue.id}>
            <Card className="h-full hover:border-brand">
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-2">
                  <span>{venue.name}</span>
                  <Badge variant="secondary">{venue.area}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>{venue.min_guests}-{venue.max_guests} guests</p>
                <p>From £{venue.starting_price}</p>
                <p>Deposit £{venue.deposit_amount}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}

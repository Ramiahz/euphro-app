import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getVenueBySlug } from "@/lib/data";

export default async function VenueDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const venue = await getVenueBySlug(slug);

  if (!venue) notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold">{venue.name}</h1>
      <p className="mt-2 text-muted-foreground">{venue.area} · {venue.address_summary}</p>
      <Card className="mt-6">
        <CardContent className="space-y-4 p-6">
          <p>{venue.description}</p>
          <div className="grid gap-2 text-sm md:grid-cols-2">
            <p>Capacity: {venue.min_guests}-{venue.max_guests} guests</p>
            <p>Starting price: £{venue.starting_price}</p>
            <p>Deposit amount: £{venue.deposit_amount}</p>
            <p>Category: {venue.category}</p>
          </div>
          <Button asChild>
            <Link href={`/build?venue=${venue.slug}`}>Start Event Here</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

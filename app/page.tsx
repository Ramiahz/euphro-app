import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getVenues } from "@/lib/data";

export default async function HomePage() {
  const venues = await getVenues();
  const featured = venues.slice(0, 3);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-10">
      <section className="rounded-3xl bg-gradient-to-r from-brand to-[#6e1d2e] p-8 text-white md:p-12">
        <p className="text-sm uppercase tracking-[0.25em] text-white/80">Premium London Event Booking</p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight md:text-5xl">Private members club feel. Frictionless checkout.</h1>
        <p className="mt-4 max-w-xl text-white/85">Book stylish London venues and trusted event suppliers in minutes with a premium, low-friction booking flow.</p>
        <div className="mt-8 flex gap-3">
          <Button asChild size="lg" variant="secondary">
            <Link href="/venues">Browse Venues</Link>
          </Button>
          <Button asChild size="lg" className="bg-white text-brand hover:bg-white/90">
            <Link href="/build">Build Your Event</Link>
          </Button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["Curated London Venues", "Hand-selected spaces across Chelsea, Soho, Shoreditch and more."],
          ["Fast Event Builder", "Complete event details and venue selection in a premium guided flow."],
          ["Deposit Checkout", "Secure your date with a fixed venue deposit and fast Stripe payment."]
        ].map(([title, desc]) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between">
          <h2 className="text-2xl font-semibold">Featured Venues</h2>
          <Link href="/venues" className="text-sm text-brand">View all venues</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((venue) => (
            <Card key={venue.id}>
              <CardHeader>
                <CardTitle>{venue.name}</CardTitle>
                <CardDescription>{venue.area}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{venue.min_guests}-{venue.max_guests} guests · from £{venue.starting_price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

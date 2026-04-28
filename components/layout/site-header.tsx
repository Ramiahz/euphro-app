import Link from "next/link";

import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-semibold tracking-tight text-brand">
          Euphro Events
        </Link>
        <nav className="flex items-center gap-3 text-sm">
          <Link href="/venues" className="text-muted-foreground hover:text-foreground">
            Venues
          </Link>
          <Link href="/build" className="text-muted-foreground hover:text-foreground">
            Build Event
          </Link>
          <Button asChild size="sm">
            <Link href="/booking-summary">Book now</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

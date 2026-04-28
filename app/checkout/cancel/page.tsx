import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function CheckoutCancelPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 text-center">
      <h1 className="text-3xl font-semibold">Payment cancelled</h1>
      <p className="mt-4 text-muted-foreground">No payment was taken. You can return to your booking summary and complete checkout when ready.</p>
      <Button asChild className="mt-6"><Link href="/booking-summary">Return to booking summary</Link></Button>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [status, setStatus] = useState("Finalising your booking...");

  useEffect(() => {
    async function confirm() {
      if (!sessionId) {
        setStatus("Payment succeeded, but no checkout session was found.");
        return;
      }

      const response = await fetch("/api/checkout/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId })
      });

      if (response.ok) {
        setStatus("Deposit received. Your booking is now pending confirmation.");
      } else {
        setStatus("Payment succeeded. We will confirm your booking manually shortly.");
      }
    }

    void confirm();
  }, [sessionId]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="text-3xl font-semibold">Thank you — booking request received</h1>
      <p className="mt-4 text-muted-foreground">{status}</p>
      <p className="mt-2 text-sm text-muted-foreground">Euphro will manually confirm availability with your venue and selected suppliers.</p>
      <div className="mt-6 flex justify-center gap-3">
        <Button asChild><Link href="/my-bookings">View my bookings</Link></Button>
        <Button asChild variant="outline"><Link href="/venues">Browse more venues</Link></Button>
      </div>
    </div>
  );
}

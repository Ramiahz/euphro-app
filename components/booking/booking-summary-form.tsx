"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function BookingSummaryForm({
  venueSlug,
  depositAmount,
  estimatedTotal,
  bookingPayload
}: {
  venueSlug: string;
  depositAmount: number;
  estimatedTotal: number;
  bookingPayload: Record<string, string>;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleCheckout(formData: FormData) {
    setLoading(true);
    setError(null);

    const payload = {
      ...bookingPayload,
      venueSlug,
      customerName: String(formData.get("customerName") || ""),
      customerEmail: String(formData.get("customerEmail") || ""),
      customerPhone: String(formData.get("customerPhone") || ""),
      notes: String(formData.get("notes") || "")
    };

    const response = await fetch("/api/checkout/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error ?? "Unable to start checkout.");
      setLoading(false);
      return;
    }

    window.location.href = data.url;
  }

  return (
    <form action={handleCheckout} className="space-y-4">
      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <Label htmlFor="customerName">Full name</Label>
          <Input id="customerName" name="customerName" required />
        </div>
        <div>
          <Label htmlFor="customerEmail">Email</Label>
          <Input id="customerEmail" name="customerEmail" type="email" required />
        </div>
      </div>
      <div>
        <Label htmlFor="customerPhone">Phone</Label>
        <Input id="customerPhone" name="customerPhone" required />
      </div>
      <div>
        <Label htmlFor="notes">Booking notes</Label>
        <Textarea id="notes" name="notes" />
      </div>

      <label className="flex items-center gap-2 text-sm text-muted-foreground">
        <input required type="checkbox" /> I agree to Euphro booking terms and manual confirmation process.
      </label>

      {error && <p className="text-sm text-red-600">{error}</p>}
      <div className="rounded-lg border bg-secondary/40 p-4 text-sm">
        <p>Estimated total: <strong>£{estimatedTotal}</strong></p>
        <p>Deposit due today: <strong>£{depositAmount}</strong></p>
      </div>

      <Button className="w-full" disabled={loading}>{loading ? "Redirecting..." : "Proceed to secure payment"}</Button>
    </form>
  );
}

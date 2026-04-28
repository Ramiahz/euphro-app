"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AREAS, BUDGET_RANGES, EVENT_TYPES } from "@/lib/constants/event";
import type { Supplier, Venue } from "@/lib/types/db";

const steps = ["Event type", "Guest count", "Date", "Area", "Budget", "Venue", "Add-ons", "Review"];

export function EventBuilderForm({ venues, suppliers }: { venues: Venue[]; suppliers: Supplier[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [step, setStep] = useState(0);
  const [selectedSuppliers, setSelectedSuppliers] = useState<string[]>([]);
  const [form, setForm] = useState({
    eventType: EVENT_TYPES[0],
    guestCount: 40,
    eventDate: "",
    area: AREAS[0],
    budget: BUDGET_RANGES[1],
    venueSlug: searchParams.get("venue") ?? venues[0]?.slug ?? "",
    notes: ""
  });

  const venue = useMemo(() => venues.find((item) => item.slug === form.venueSlug), [venues, form.venueSlug]);

  const next = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const back = () => setStep((prev) => Math.max(prev - 1, 0));

  const submit = () => {
    const params = new URLSearchParams({
      eventType: form.eventType,
      guestCount: String(form.guestCount),
      eventDate: form.eventDate,
      area: form.area,
      budget: form.budget,
      venue: form.venueSlug,
      suppliers: selectedSuppliers.join(","),
      notes: form.notes
    });
    router.push(`/booking-summary?${params.toString()}`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Build Your Event · Step {step + 1} of {steps.length}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-wrap gap-2 text-xs">
          {steps.map((s, i) => (
            <span key={s} className={`rounded-full px-3 py-1 ${i <= step ? "bg-brand text-white" : "bg-secondary"}`}>{s}</span>
          ))}
        </div>

        {step === 0 && (
          <select className="w-full rounded-md border p-3" value={form.eventType} onChange={(e) => setForm({ ...form, eventType: e.target.value })}>
            {EVENT_TYPES.map((type) => <option key={type}>{type}</option>)}
          </select>
        )}
        {step === 1 && (
          <input type="number" min={10} className="w-full rounded-md border p-3" value={form.guestCount} onChange={(e) => setForm({ ...form, guestCount: Number(e.target.value) })} />
        )}
        {step === 2 && (
          <input type="date" className="w-full rounded-md border p-3" value={form.eventDate} onChange={(e) => setForm({ ...form, eventDate: e.target.value })} />
        )}
        {step === 3 && (
          <select className="w-full rounded-md border p-3" value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })}>
            {AREAS.map((area) => <option key={area}>{area}</option>)}
          </select>
        )}
        {step === 4 && (
          <select className="w-full rounded-md border p-3" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })}>
            {BUDGET_RANGES.map((budget) => <option key={budget}>{budget}</option>)}
          </select>
        )}
        {step === 5 && (
          <select className="w-full rounded-md border p-3" value={form.venueSlug} onChange={(e) => setForm({ ...form, venueSlug: e.target.value })}>
            {venues.map((v) => (
              <option value={v.slug} key={v.id}>{v.name} · £{v.starting_price}</option>
            ))}
          </select>
        )}
        {step === 6 && (
          <div className="space-y-2">
            {suppliers.map((supplier) => (
              <label key={supplier.id} className="flex items-center gap-2 rounded-md border p-3">
                <input
                  type="checkbox"
                  checked={selectedSuppliers.includes(supplier.id)}
                  onChange={() => {
                    setSelectedSuppliers((prev) =>
                      prev.includes(supplier.id) ? prev.filter((id) => id !== supplier.id) : [...prev, supplier.id]
                    );
                  }}
                />
                <span className="text-sm">{supplier.name} ({supplier.type}) · from £{supplier.price_from}</span>
              </label>
            ))}
          </div>
        )}

        {step === 7 && (
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>{form.eventType} · {form.guestCount} guests</p>
            <p>{form.eventDate || "No date selected"} · {form.area} · {form.budget}</p>
            <p>Venue: {venue?.name}</p>
            <p>Add-ons selected: {selectedSuppliers.length}</p>
            <textarea className="w-full rounded-md border p-3" placeholder="Any notes" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
          </div>
        )}

        <div className="flex gap-3">
          <Button variant="outline" onClick={back} disabled={step === 0}>Back</Button>
          {step < steps.length - 1 ? (
            <Button onClick={next}>Next</Button>
          ) : (
            <Button onClick={submit}>Continue to Booking Summary</Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

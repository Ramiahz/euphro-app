import { EventBuilderForm } from "@/components/builder/event-builder-form";
import { getSuppliers, getVenues } from "@/lib/data";

export default async function BuildPage() {
  const [venues, suppliers] = await Promise.all([getVenues(), getSuppliers()]);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="mb-2 text-3xl font-semibold">Build Your Event</h1>
      <p className="mb-6 text-muted-foreground">Tell us the essentials and secure your venue in minutes.</p>
      <EventBuilderForm venues={venues} suppliers={suppliers} />
    </div>
  );
}

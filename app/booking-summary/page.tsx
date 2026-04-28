import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookingSummaryForm } from "@/components/booking/booking-summary-form";
import { getSuppliers, getVenues } from "@/lib/data";

export default async function BookingSummaryPage({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  const params = await searchParams;
  const [venues, suppliers] = await Promise.all([getVenues(), getSuppliers()]);
  const venue = venues.find((v) => v.slug === params.venue) ?? venues[0];

  const supplierIds = params.suppliers?.split(",").filter(Boolean) ?? [];
  const selectedSuppliers = suppliers.filter((s) => supplierIds.includes(s.id));
  const addOnsTotal = selectedSuppliers.reduce((acc, item) => acc + item.price_from, 0);
  const estimatedTotal = venue.starting_price + addOnsTotal;

  return (
    <div className="mx-auto grid max-w-5xl gap-6 px-4 py-10 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Booking Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p><strong>Event:</strong> {params.eventType ?? "Private Event"}</p>
          <p><strong>Guests:</strong> {params.guestCount ?? "N/A"}</p>
          <p><strong>Date:</strong> {params.eventDate ?? "Flexible"}</p>
          <p><strong>Area:</strong> {params.area ?? venue.area}</p>
          <p><strong>Budget:</strong> {params.budget ?? "N/A"}</p>
          <p><strong>Venue:</strong> {venue.name}</p>
          <p><strong>Add-ons:</strong> {selectedSuppliers.map((s) => s.name).join(", ") || "None"}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Customer details & payment</CardTitle>
        </CardHeader>
        <CardContent>
          <BookingSummaryForm
            venueSlug={venue.slug}
            depositAmount={venue.deposit_amount}
            estimatedTotal={estimatedTotal}
            bookingPayload={{
              eventType: params.eventType ?? "Other",
              guestCount: params.guestCount ?? "40",
              eventDate: params.eventDate ?? "",
              areaPreference: params.area ?? venue.area,
              budgetRange: params.budget ?? "",
              supplierIds: supplierIds.join(","),
              estimatedTotal: String(estimatedTotal),
              notes: params.notes ?? ""
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}

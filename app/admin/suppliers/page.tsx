import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createClient } from "@/lib/supabase/server";

export default async function AdminSuppliersPage() {
  const supabase = await createClient();
  const { data: suppliers } = await supabase.from("suppliers").select("name, type, area, price_from, active").order("name");

  return (
    <div>
      <h1 className="text-3xl font-semibold">Suppliers</h1>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {suppliers?.map((supplier) => (
          <Card key={supplier.name}><CardHeader><CardTitle className="text-base">{supplier.name}</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">{supplier.type} · {supplier.area} · from £{supplier.price_from} · {supplier.active ? "Active" : "Inactive"}</CardContent></Card>
        ))}
      </div>
    </div>
  );
}

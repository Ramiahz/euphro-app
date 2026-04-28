import Link from "next/link";

import { requireAdmin } from "@/lib/auth";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  await requireAdmin();

  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-[220px_1fr]">
      <aside className="rounded-xl border bg-white p-4 text-sm">
        <p className="mb-3 font-semibold">Admin</p>
        <div className="space-y-2">
          <Link href="/admin" className="block text-muted-foreground hover:text-foreground">Dashboard</Link>
          <Link href="/admin/bookings" className="block text-muted-foreground hover:text-foreground">Bookings</Link>
          <Link href="/admin/venues" className="block text-muted-foreground hover:text-foreground">Venues</Link>
          <Link href="/admin/suppliers" className="block text-muted-foreground hover:text-foreground">Suppliers</Link>
        </div>
      </aside>
      <section>{children}</section>
    </div>
  );
}

import { createClient } from "@/lib/supabase/server";
import type { Supplier, Venue } from "@/lib/types/db";

export async function getVenues(filters?: { area?: string; guestCount?: number; budget?: number; query?: string }) {
  const supabase = await createClient();
  let query = supabase.from("venues").select("*").eq("active", true).order("starting_price", { ascending: true });

  if (filters?.area) query = query.eq("area", filters.area);
  if (filters?.guestCount) query = query.lte("min_guests", filters.guestCount).gte("max_guests", filters.guestCount);
  if (filters?.budget) query = query.lte("starting_price", filters.budget);
  if (filters?.query) query = query.ilike("name", `%${filters.query}%`);

  const { data } = await query;
  return (data ?? []) as Venue[];
}

export async function getVenueBySlug(slug: string) {
  const supabase = await createClient();
  const { data } = await supabase.from("venues").select("*, venue_images(image_url, sort_order)").eq("slug", slug).single();
  return data;
}

export async function getSuppliers() {
  const supabase = await createClient();
  const { data } = await supabase.from("suppliers").select("*").eq("active", true).order("price_from", { ascending: true });
  return (data ?? []) as Supplier[];
}

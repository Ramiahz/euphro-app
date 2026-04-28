import { createClient } from "@supabase/supabase-js";

const venues = [
  { slug: "the-velvet-room-chelsea", name: "The Velvet Room", area: "Chelsea", address_summary: "King's Road, Chelsea", description: "Intimate velvet-lined lounge for refined birthday dinners and modern celebrations.", category: "Private Dining", min_guests: 20, max_guests: 60, starting_price: 2800, deposit_amount: 600, active: true, hero_image_url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" },
  { slug: "holland-court-terrace", name: "Holland Court Terrace", area: "Chelsea", address_summary: "Sloane Avenue, Chelsea", description: "A bright terrace-led venue with elegant interiors and understated luxury styling.", category: "Celebration", min_guests: 25, max_guests: 80, starting_price: 3400, deposit_amount: 700, active: true, hero_image_url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3" },
  { slug: "soho-house-cellar", name: "Soho House Cellar", area: "Soho", address_summary: "Greek Street, Soho", description: "Moody cellar bar experience perfect for stylish private parties with a club atmosphere.", category: "Party", min_guests: 30, max_guests: 90, starting_price: 3600, deposit_amount: 750, active: true, hero_image_url: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e" },
  { slug: "noir-dining-soho", name: "Noir Dining Studio", area: "Soho", address_summary: "Dean Street, Soho", description: "Design-forward private dining space with chef's counter and cocktail pairings.", category: "Private Dining", min_guests: 14, max_guests: 40, starting_price: 2600, deposit_amount: 550, active: true, hero_image_url: "https://images.unsplash.com/photo-1559339352-11d035aa65de" },
  { slug: "atlas-loft-shoreditch", name: "Atlas Loft", area: "Shoreditch", address_summary: "Redchurch Street, Shoreditch", description: "Industrial-chic loft with polished concrete, ambient lighting and premium sound.", category: "Celebration", min_guests: 40, max_guests: 120, starting_price: 4200, deposit_amount: 900, active: true, hero_image_url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3" },
  { slug: "copper-yard-studio", name: "Copper Yard Studio", area: "Shoreditch", address_summary: "Great Eastern Street, Shoreditch", description: "Flexible studio space for launches, graduations, and elevated casual events.", category: "Corporate Event", min_guests: 35, max_guests: 110, starting_price: 3900, deposit_amount: 850, active: true, hero_image_url: "https://images.unsplash.com/photo-1470337458703-46ad1756a187" },
  { slug: "the-orchid-club", name: "The Orchid Club", area: "Mayfair", address_summary: "Berkeley Square, Mayfair", description: "Luxury members-club style room with rich textures and impeccable service.", category: "Private Dining", min_guests: 18, max_guests: 55, starting_price: 5200, deposit_amount: 1200, active: true, hero_image_url: "https://images.unsplash.com/photo-1531058020387-3be344556be6" },
  { slug: "george-st-private-salon", name: "George St Private Salon", area: "Mayfair", address_summary: "George Street, Mayfair", description: "Sophisticated salon designed for intimate celebrations and executive dinners.", category: "Corporate Event", min_guests: 16, max_guests: 45, starting_price: 4800, deposit_amount: 1100, active: true, hero_image_url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1" },
  { slug: "docklight-gallery", name: "Docklight Gallery", area: "Canary Wharf", address_summary: "Cabot Square, Canary Wharf", description: "Glass-wrapped modern space with skyline views and strong brand-event appeal.", category: "Corporate Event", min_guests: 40, max_guests: 130, starting_price: 4500, deposit_amount: 1000, active: true, hero_image_url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30" },
  { slug: "harbour-club-room", name: "Harbour Club Room", area: "Canary Wharf", address_summary: "West India Quay, Canary Wharf", description: "Waterside private club room ideal for premium dinners and client celebrations.", category: "Private Dining", min_guests: 20, max_guests: 70, starting_price: 3700, deposit_amount: 800, active: true, hero_image_url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819" },
  { slug: "brixton-parlour", name: "Brixton Parlour", area: "Brixton", address_summary: "Brixton Village", description: "Creative, music-forward parlour for vibrant birthday and graduation nights.", category: "Celebration", min_guests: 30, max_guests: 100, starting_price: 2900, deposit_amount: 650, active: true, hero_image_url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce" },
  { slug: "electric-garden-loft", name: "Electric Garden Loft", area: "Brixton", address_summary: "Coldharbour Lane, Brixton", description: "Botanical loft with warm lighting and dancefloor-friendly layout.", category: "Party", min_guests: 35, max_guests: 120, starting_price: 3300, deposit_amount: 700, active: true, hero_image_url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7" },
  { slug: "notting-social-house", name: "Notting Social House", area: "Notting Hill", address_summary: "Westbourne Grove, Notting Hill", description: "Elegant townhouse venue with curated interiors and social-club atmosphere.", category: "Celebration", min_guests: 18, max_guests: 65, starting_price: 3500, deposit_amount: 750, active: true, hero_image_url: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf" },
  { slug: "portobello-private-club", name: "Portobello Private Club", area: "Notting Hill", address_summary: "Portobello Road, Notting Hill", description: "A polished private room balancing classic London charm and modern details.", category: "Private Dining", min_guests: 20, max_guests: 70, starting_price: 4100, deposit_amount: 850, active: true, hero_image_url: "https://images.unsplash.com/photo-1543007630-9710e4a00a20" },
  { slug: "kensington-atelier", name: "Kensington Atelier", area: "Kensington", address_summary: "Kensington High Street", description: "Gallery-inspired atelier space tailored for fashionable celebrations.", category: "Celebration", min_guests: 22, max_guests: 75, starting_price: 4300, deposit_amount: 950, active: true, hero_image_url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a" },
  { slug: "hyde-suite-kensington", name: "Hyde Suite", area: "Kensington", address_summary: "South Kensington", description: "Luxe suite venue for anniversaries, dinners and small corporate events.", category: "Corporate Event", min_guests: 18, max_guests: 60, starting_price: 4400, deposit_amount: 980, active: true, hero_image_url: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc" }
];

const suppliers = [
  { name: "Aster Night DJ", slug: "aster-night-dj", type: "dj", area: "Soho", description: "Open-format DJ for premium dinner-to-dance transitions.", price_from: 650, active: true },
  { name: "Velour House DJ", slug: "velour-house-dj", type: "dj", area: "Chelsea", description: "Luxury lounge and house sets with MC option.", price_from: 780, active: true },
  { name: "Neon District DJ", slug: "neon-district-dj", type: "dj", area: "Shoreditch", description: "High-energy late-evening club and celebration sound.", price_from: 720, active: true },
  { name: "Goldleaf Moments", slug: "goldleaf-moments", type: "photographer", area: "Mayfair", description: "Editorial event photographer with candid-first style.", price_from: 900, active: true },
  { name: "Dockside Frames", slug: "dockside-frames", type: "photographer", area: "Canary Wharf", description: "Corporate and social photography with rapid turnaround.", price_from: 760, active: true },
  { name: "Portobello Portraits", slug: "portobello-portraits", type: "photographer", area: "Notting Hill", description: "Luxury portrait and event storytelling package.", price_from: 820, active: true },
  { name: "House of Petals", slug: "house-of-petals", type: "decorator", area: "Kensington", description: "Premium floral styling and table design for intimate events.", price_from: 1200, active: true },
  { name: "Studio Garnet", slug: "studio-garnet", type: "decorator", area: "Soho", description: "Contemporary styling, lighting and backdrop design.", price_from: 980, active: true },
  { name: "Brixton Mood Design", slug: "brixton-mood-design", type: "decorator", area: "Brixton", description: "Creative party styling with bold colour and texture palettes.", price_from: 700, active: true },
  { name: "Chelsea Candlelight Co", slug: "chelsea-candlelight-co", type: "decorator", area: "Chelsea", description: "Elegant candle, tablescape and ambient styling.", price_from: 880, active: true }
];

async function run() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required");
  }

  const supabase = createClient(url, key, { auth: { persistSession: false } });

  const { error: venuesError } = await supabase.from("venues").upsert(venues, { onConflict: "slug" });
  if (venuesError) throw venuesError;

  const { error: suppliersError } = await supabase.from("suppliers").upsert(suppliers, { onConflict: "slug" });
  if (suppliersError) throw suppliersError;

  console.log(`Seeded ${venues.length} venues and ${suppliers.length} suppliers.`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});

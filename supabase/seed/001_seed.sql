insert into public.venues (slug, name, area, address_summary, description, category, min_guests, max_guests, starting_price, deposit_amount, active, hero_image_url)
values
('the-velvet-room-chelsea', 'The Velvet Room', 'Chelsea', 'King''s Road, Chelsea', 'Intimate velvet-lined lounge for refined birthday dinners and modern celebrations.', 'Private Dining', 20, 60, 2800, 600, true, 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4'),
('holland-court-terrace', 'Holland Court Terrace', 'Chelsea', 'Sloane Avenue, Chelsea', 'A bright terrace-led venue with elegant interiors and understated luxury styling.', 'Celebration', 25, 80, 3400, 700, true, 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3'),
('soho-house-cellar', 'Soho House Cellar', 'Soho', 'Greek Street, Soho', 'Moody cellar bar experience perfect for stylish private parties with a club atmosphere.', 'Party', 30, 90, 3600, 750, true, 'https://images.unsplash.com/photo-1575444758702-4a6b9222336e'),
('noir-dining-soho', 'Noir Dining Studio', 'Soho', 'Dean Street, Soho', 'Design-forward private dining space with chef''s counter and cocktail pairings.', 'Private Dining', 14, 40, 2600, 550, true, 'https://images.unsplash.com/photo-1559339352-11d035aa65de'),
('atlas-loft-shoreditch', 'Atlas Loft', 'Shoreditch', 'Redchurch Street, Shoreditch', 'Industrial-chic loft with polished concrete, ambient lighting and premium sound.', 'Celebration', 40, 120, 4200, 900, true, 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3'),
('copper-yard-studio', 'Copper Yard Studio', 'Shoreditch', 'Great Eastern Street, Shoreditch', 'Flexible studio space for launches, graduations, and elevated casual events.', 'Corporate Event', 35, 110, 3900, 850, true, 'https://images.unsplash.com/photo-1470337458703-46ad1756a187'),
('the-orchid-club', 'The Orchid Club', 'Mayfair', 'Berkeley Square, Mayfair', 'Luxury members-club style room with rich textures and impeccable service.', 'Private Dining', 18, 55, 5200, 1200, true, 'https://images.unsplash.com/photo-1531058020387-3be344556be6'),
('george-st-private-salon', 'George St Private Salon', 'Mayfair', 'George Street, Mayfair', 'Sophisticated salon designed for intimate celebrations and executive dinners.', 'Corporate Event', 16, 45, 4800, 1100, true, 'https://images.unsplash.com/photo-1528605248644-14dd04022da1'),
('docklight-gallery', 'Docklight Gallery', 'Canary Wharf', 'Cabot Square, Canary Wharf', 'Glass-wrapped modern space with skyline views and strong brand-event appeal.', 'Corporate Event', 40, 130, 4500, 1000, true, 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30'),
('harbour-club-room', 'Harbour Club Room', 'Canary Wharf', 'West India Quay, Canary Wharf', 'Waterside private club room ideal for premium dinners and client celebrations.', 'Private Dining', 20, 70, 3700, 800, true, 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819'),
('brixton-parlour', 'Brixton Parlour', 'Brixton', 'Brixton Village', 'Creative, music-forward parlour for vibrant birthday and graduation nights.', 'Celebration', 30, 100, 2900, 650, true, 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce'),
('electric-garden-loft', 'Electric Garden Loft', 'Brixton', 'Coldharbour Lane, Brixton', 'Botanical loft with warm lighting and dancefloor-friendly layout.', 'Party', 35, 120, 3300, 700, true, 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7'),
('notting-social-house', 'Notting Social House', 'Notting Hill', 'Westbourne Grove, Notting Hill', 'Elegant townhouse venue with curated interiors and social-club atmosphere.', 'Celebration', 18, 65, 3500, 750, true, 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf'),
('portobello-private-club', 'Portobello Private Club', 'Notting Hill', 'Portobello Road, Notting Hill', 'A polished private room balancing classic London charm and modern details.', 'Private Dining', 20, 70, 4100, 850, true, 'https://images.unsplash.com/photo-1543007630-9710e4a00a20'),
('kensington-atelier', 'Kensington Atelier', 'Kensington', 'Kensington High Street', 'Gallery-inspired atelier space tailored for fashionable celebrations.', 'Celebration', 22, 75, 4300, 950, true, 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a'),
('hyde-suite-kensington', 'Hyde Suite', 'Kensington', 'South Kensington', 'Luxe suite venue for anniversaries, dinners and small corporate events.', 'Corporate Event', 18, 60, 4400, 980, true, 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc')
on conflict (slug) do update set
  name = excluded.name,
  area = excluded.area,
  address_summary = excluded.address_summary,
  description = excluded.description,
  category = excluded.category,
  min_guests = excluded.min_guests,
  max_guests = excluded.max_guests,
  starting_price = excluded.starting_price,
  deposit_amount = excluded.deposit_amount,
  active = excluded.active,
  hero_image_url = excluded.hero_image_url;

insert into public.suppliers (name, slug, type, area, description, price_from, active)
values
('Aster Night DJ', 'aster-night-dj', 'dj', 'Soho', 'Open-format DJ for premium dinner-to-dance transitions.', 650, true),
('Velour House DJ', 'velour-house-dj', 'dj', 'Chelsea', 'Luxury lounge and house sets with MC option.', 780, true),
('Neon District DJ', 'neon-district-dj', 'dj', 'Shoreditch', 'High-energy late-evening club and celebration sound.', 720, true),
('Goldleaf Moments', 'goldleaf-moments', 'photographer', 'Mayfair', 'Editorial event photographer with candid-first style.', 900, true),
('Dockside Frames', 'dockside-frames', 'photographer', 'Canary Wharf', 'Corporate and social photography with rapid turnaround.', 760, true),
('Portobello Portraits', 'portobello-portraits', 'photographer', 'Notting Hill', 'Luxury portrait and event storytelling package.', 820, true),
('House of Petals', 'house-of-petals', 'decorator', 'Kensington', 'Premium floral styling and table design for intimate events.', 1200, true),
('Studio Garnet', 'studio-garnet', 'decorator', 'Soho', 'Contemporary styling, lighting and backdrop design.', 980, true),
('Brixton Mood Design', 'brixton-mood-design', 'decorator', 'Brixton', 'Creative party styling with bold colour and texture palettes.', 700, true),
('Chelsea Candlelight Co', 'chelsea-candlelight-co', 'decorator', 'Chelsea', 'Elegant candle, tablescape and ambient styling.', 880, true)
on conflict (slug) do update set
  name = excluded.name,
  type = excluded.type,
  area = excluded.area,
  description = excluded.description,
  price_from = excluded.price_from,
  active = excluded.active;

insert into public.venue_images (venue_id, image_url, sort_order)
select id, hero_image_url, 1 from public.venues
on conflict do nothing;

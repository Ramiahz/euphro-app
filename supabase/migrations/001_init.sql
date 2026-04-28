create extension if not exists pgcrypto;

create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text unique not null,
  role text not null default 'customer' check (role in ('customer','admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.venues (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  area text not null,
  address_summary text not null,
  description text not null,
  category text not null,
  min_guests integer not null,
  max_guests integer not null,
  starting_price numeric not null,
  deposit_amount numeric not null,
  active boolean not null default true,
  hero_image_url text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.venue_images (
  id uuid primary key default gen_random_uuid(),
  venue_id uuid not null references public.venues(id) on delete cascade,
  image_url text not null,
  sort_order integer not null default 1,
  created_at timestamptz not null default now()
);

create table if not exists public.suppliers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  type text not null check (type in ('dj','photographer','decorator')),
  area text not null,
  description text not null,
  price_from numeric not null,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  booking_reference text unique not null,
  user_id uuid references public.users(id) on delete set null,
  venue_id uuid not null references public.venues(id),
  customer_name text not null,
  customer_email text not null,
  customer_phone text not null,
  event_type text not null,
  guest_count integer not null,
  event_date date,
  area_preference text,
  budget_range text,
  status text not null default 'draft' check (status in ('draft','pending_payment','deposit_paid','pending_confirmation','confirmed','cancelled')),
  deposit_paid boolean not null default false,
  deposit_amount numeric not null,
  estimated_total numeric not null,
  customer_notes text,
  internal_notes text,
  stripe_checkout_session_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.booking_items (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid not null references public.bookings(id) on delete cascade,
  item_type text not null check (item_type in ('venue','supplier')),
  item_id uuid not null,
  display_name text not null,
  price numeric not null,
  created_at timestamptz not null default now()
);

alter table public.users enable row level security;
alter table public.venues enable row level security;
alter table public.venue_images enable row level security;
alter table public.suppliers enable row level security;
alter table public.bookings enable row level security;
alter table public.booking_items enable row level security;

create policy "Public read venues" on public.venues for select using (true);
create policy "Public read venue images" on public.venue_images for select using (true);
create policy "Public read suppliers" on public.suppliers for select using (true);

create policy "Users can upsert own profile" on public.users for all using (auth.uid() = id) with check (auth.uid() = id);
create policy "Users can read own bookings" on public.bookings for select using (user_id = auth.uid());
create policy "Users can create bookings" on public.bookings for insert with check (true);
create policy "Users can update own bookings" on public.bookings for update using (user_id = auth.uid());
create policy "Users can read own booking items" on public.booking_items for select using (
  exists(select 1 from public.bookings b where b.id = booking_id and b.user_id = auth.uid())
);
create policy "Users can insert booking items" on public.booking_items for insert with check (true);

create policy "Admin full access users" on public.users for all using (
  exists(select 1 from public.users u where u.id = auth.uid() and u.role = 'admin')
) with check (
  exists(select 1 from public.users u where u.id = auth.uid() and u.role = 'admin')
);
create policy "Admin full access bookings" on public.bookings for all using (
  exists(select 1 from public.users u where u.id = auth.uid() and u.role = 'admin')
) with check (
  exists(select 1 from public.users u where u.id = auth.uid() and u.role = 'admin')
);
create policy "Admin full access booking items" on public.booking_items for all using (
  exists(select 1 from public.users u where u.id = auth.uid() and u.role = 'admin')
) with check (
  exists(select 1 from public.users u where u.id = auth.uid() and u.role = 'admin')
);
create policy "Admin full access suppliers" on public.suppliers for all using (
  exists(select 1 from public.users u where u.id = auth.uid() and u.role = 'admin')
) with check (
  exists(select 1 from public.users u where u.id = auth.uid() and u.role = 'admin')
);
create policy "Admin full access venues" on public.venues for all using (
  exists(select 1 from public.users u where u.id = auth.uid() and u.role = 'admin')
) with check (
  exists(select 1 from public.users u where u.id = auth.uid() and u.role = 'admin')
);

create or replace function public.touch_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger touch_users before update on public.users for each row execute function public.touch_updated_at();
create trigger touch_venues before update on public.venues for each row execute function public.touch_updated_at();
create trigger touch_bookings before update on public.bookings for each row execute function public.touch_updated_at();

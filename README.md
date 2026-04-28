# Euphro Events MVP

Production-minded MVP for **Euphro Events** built with Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui primitives, Supabase, Stripe, and Vercel-friendly conventions.

## Step-by-step local setup

### 1) Install dependencies

```bash
npm install
```

### 2) Create `.env.local`

```bash
cp .env.example .env.local
```

Then set **all values** in `.env.local` (do not leave placeholders):

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000

NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY=YOUR_SUPABASE_SERVICE_ROLE_KEY

STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

### 3) Apply database schema

Run this SQL in the Supabase SQL editor:

- `supabase/migrations/001_init.sql`

### 4) Seed initial MVP data

Choose one approach:

- Run SQL seed directly in Supabase SQL editor:
  - `supabase/seed/001_seed.sql`
- Or run the script locally:

```bash
npm run seed
```

### 5) Start the app

```bash
npm run dev
```

Then open http://localhost:3000.

---

## What is included

### Public routes
- `/`
- `/venues`
- `/venues/[slug]`
- `/build`
- `/booking-summary`
- `/checkout/success`
- `/checkout/cancel`
- `/login`
- `/signup`

### Customer routes
- `/my-bookings`

### Admin routes
- `/admin`
- `/admin/bookings`
- `/admin/bookings/[id]`
- `/admin/venues`
- `/admin/suppliers`

---

## Booking + payment behavior

1. User builds event and reaches booking summary.
2. Booking is created with `status = pending_payment` **before** checkout.
3. Stripe Checkout charges the venue fixed deposit.
4. After successful checkout confirmation, booking is updated to:
   - `deposit_paid = true`
   - `status = pending_confirmation`
5. Admin can review/update booking status and internal notes.

---

## Data seeded for MVP

- 16 London venues across: Chelsea, Soho, Shoreditch, Mayfair, Canary Wharf, Brixton, Notting Hill, Kensington
- 10 suppliers: DJs, photographers, decorators

---

## Notes

- `/admin/*` requires Supabase auth and `users.role = 'admin'`.
- Email sending is intentionally skipped for MVP.
- Availability is not real-time in MVP.

# Euphro MVP Blueprint

## 1. Product Overview

### Product name
Euphro Events

### Product summary
Euphro is a premium, fast, low-friction event booking platform focused on helping users book small events by selecting a venue, customising key event details, optionally adding suppliers, and paying a deposit through a clean digital flow.

### Core promise
Euphro should feel like the fastest and simplest way to book a stylish small event.

### MVP goal
This MVP proves that users can:
1. Discover a suitable venue quickly
2. Customise a small event with simple options
3. Pay a deposit online
4. Receive confirmation that their request has been submitted
5. Be managed operationally through an internal admin dashboard

---

## 2. MVP Scope

### In scope for MVP
- Premium landing page
- Venue browsing
- Venue detail pages
- Multi-step event builder
- Add-on selection
- Booking summary
- Deposit checkout
- Booking confirmation
- Customer authentication
- Admin dashboard
- Manual back-office management of bookings

### Out of scope for MVP
- Native mobile app
- Instant venue approval automation
- Venue-side dashboard
- Supplier-side dashboard
- Live messaging/chat
- Reviews and ratings
- Advanced AI event planning
- Dynamic real-time pricing engine
- Full multi-party payout automation
- Full calendar sync with venues
- Map-first discovery as a core feature
- Corporate invoicing workflows
- Complex discount engine
- Waitlists
- Loyalty system

---

## 3. Target User

### Primary user
A customer planning a small event who wants a stylish, fast, simple booking experience.

### Likely event types
- Birthday dinner
- Private dining
- Small celebration
- Graduation dinner
- Anniversary
- Team dinner
- Corporate social event
- Small private party

### Geographic launch focus
London

### MVP market positioning
Premium, elegant, simple, fast.
Not a cluttered marketplace.
Not a manual concierge service.
A modern event checkout experience.

---

## 4. User Roles

### 4.1 Customer
A user who can:
- Browse venues
- View venue details
- Build an event
- Select add-ons
- Create a booking
- Pay a deposit
- View booking confirmation

### 4.2 Admin
An internal Euphro operator who can:
- View all bookings
- View booking details
- Update booking status
- Add internal notes
- Review selected venue and add-ons
- See deposit/payment status
- Manage venue and supplier records manually in MVP

### 4.3 Venue partner
Not a real in-product role in MVP.
Venues are managed manually by Euphro behind the scenes.

### 4.4 Supplier
Not a real in-product role in MVP.
Suppliers are managed manually by Euphro behind the scenes.

---

## 5. Product Principles

1. The experience must feel premium and elegant
2. The flow must feel fast and low-friction
3. Simplicity is more important than feature breadth
4. Admin power is more important than early automation
5. The booking flow must be easy to complete on mobile
6. Every screen should support conversion
7. The app should avoid clutter, noise, and marketplace chaos
8. The MVP should prioritise trust, clarity, and speed

---

## 6. Brand and UI Direction

### Brand feeling
- Premium
- Modern
- Elegant
- Stylish
- Clean
- Fast
- Refined

### Visual direction
- Burgundy / dark red / rich red as primary accent
- White / off-white backgrounds or premium light surfaces
- Optional dark sections for dramatic contrast
- Clean typography
- Spacious layout
- Minimal visual clutter
- Luxury hospitality feel
- "Private members club meets frictionless checkout"

### UX direction
- Strong calls to action
- Clear progress steps in event builder
- Smooth transitions
- Mobile-first layout
- Cards should feel polished and premium
- Avoid overly playful or gimmicky UI

---

## 7. Success Criteria for MVP

The MVP is successful if a real user can:
1. Land on the homepage
2. Understand the value proposition quickly
3. Browse venues
4. Select a venue or start an event build
5. Complete the event builder
6. See a clear booking summary
7. Pay a deposit
8. Receive confirmation
9. Trigger an admin workflow that allows Euphro to fulfil the booking manually

Secondary success criteria:
- The admin dashboard makes it easy to manage incoming bookings
- The flow feels trustworthy and premium
- The site works well on mobile and desktop
- The app has enough seeded London venues and suppliers to feel real

---

## 8. Core User Journey

### Primary journey
1. User lands on homepage
2. User clicks either:
   - "Browse Venues"
   - or "Build Your Event"
3. User explores venues or starts event setup
4. User enters key event information
5. User selects a venue
6. User optionally selects add-ons
7. User reviews booking summary
8. User signs in or creates an account if required
9. User pays deposit
10. Booking is created in the system
11. User sees confirmation screen
12. Confirmation email is sent
13. Admin sees booking in dashboard
14. Admin manually handles next steps with venue/supplier behind the scenes

---

## 9. MVP Pages

### Public pages
1. Home
2. Browse Venues
3. Venue Detail
4. Build Your Event
5. Booking Summary
6. Checkout Success
7. Checkout Cancel / Payment Failed
8. Login
9. Sign Up

### Private customer pages
10. My Bookings (optional if simple enough in MVP)
11. Booking Confirmation / Booking Detail (optional if useful)

### Admin pages
12. Admin Dashboard
13. Admin Bookings List
14. Admin Booking Detail
15. Admin Venues List (optional basic CRUD)
16. Admin Suppliers List (optional basic CRUD)

---

## 10. Detailed Page Definitions

### 10.1 Home
Purpose:
- Introduce Euphro
- Communicate speed + elegance + simplicity
- Push users into discovery or event building

Main sections:
- Hero section
- Value proposition
- Featured venues
- How it works
- CTA buttons
- Social proof placeholder
- Footer

Primary CTAs:
- Browse Venues
- Build Your Event

### 10.2 Browse Venues
Purpose:
- Let users discover venues quickly

Features:
- Venue cards
- Filters by area
- Filters by guest count
- Filters by budget
- Filters by category/event type
- Search bar (simple if included)

Each venue card should show:
- Image
- Name
- Area
- Capacity range
- Starting price
- Short descriptor

### 10.3 Venue Detail
Purpose:
- Help the user decide if a venue is right

Content:
- Image gallery
- Venue name
- Area
- Description
- Capacity
- Starting price
- Deposit amount
- Event types supported
- Key features
- CTA: Start Event Here

### 10.4 Build Your Event
Purpose:
- Walk the customer through a guided event setup

Recommended steps:
1. Event type
2. Guest count
3. Date
4. Area
5. Budget
6. Venue selection
7. Add-ons
8. Review summary

### 10.5 Booking Summary
Purpose:
- Show the user exactly what they are requesting and paying for

Includes:
- Selected venue
- Event details
- Add-ons
- Price estimate or displayed total
- Deposit amount
- Customer details
- Terms acknowledgement
- Proceed to payment button

### 10.6 Checkout Success
Purpose:
- Confirm payment and reassure user

Content:
- Confirmation headline
- Booking reference
- Summary of request
- What happens next
- Contact/help message

### 10.7 Login / Sign Up
Purpose:
- Let users authenticate before finalising booking if required

### 10.8 Admin Dashboard
Purpose:
- Allow Euphro team to operate the marketplace manually

Dashboard should show:
- Total bookings
- Recent bookings
- Booking statuses
- Pending confirmations
- Deposit-paid bookings
- Quick access to booking details

### 10.9 Admin Booking Detail
Purpose:
- Give full operational visibility into each booking

Should show:
- Booking ID
- Customer details
- Venue selected
- Add-ons selected
- Event details
- Deposit status
- Notes
- Current booking status
- Ability to update status

---

## 11. Event Builder Flow

### Step 1: Event Type
User selects one:
- Birthday
- Private Dining
- Anniversary
- Graduation
- Corporate Event
- Celebration
- Other

### Step 2: Guest Count
User enters expected number of guests

### Step 3: Date
User selects desired event date

### Step 4: Area
User selects preferred London area

### Step 5: Budget
User selects approximate budget range

### Step 6: Venue Selection
System shows relevant venue choices based on filters

### Step 7: Add-ons
User can optionally add suppliers such as:
- DJ
- Photographer
- Decorator

### Step 8: Review
User reviews booking before payment

---

## 12. Booking Model

### Business model in MVP
This MVP supports a booking request flow with deposit payment.

### How booking works
1. Customer selects event details
2. Customer selects a venue
3. Customer optionally selects add-ons
4. Customer pays a deposit online
5. Booking is created with a post-payment status
6. Booking is not automatically fully confirmed operationally
7. Euphro manually reviews and fulfils the booking
8. Admin updates the booking status after internal review / venue coordination

### Important business rule
Payment of the deposit does not necessarily equal final event confirmation.
In MVP, it means the request has been submitted and the booking is in the Euphro admin workflow.

---

## 13. Booking Statuses

Recommended statuses:

- `draft`
- `pending_payment`
- `deposit_paid`
- `pending_confirmation`
- `confirmed`
- `cancelled`

### Status logic
- `draft`: booking is being created but not submitted
- `pending_payment`: ready for deposit payment
- `deposit_paid`: payment succeeded
- `pending_confirmation`: awaiting Euphro manual review / operational confirmation
- `confirmed`: booking accepted and operationally confirmed
- `cancelled`: booking cancelled by admin or customer logic

### MVP flow recommendation
After successful payment:
- mark `deposit_paid = true`
- set booking status to `pending_confirmation`

---

## 14. Pricing Logic

### MVP pricing approach
Keep pricing simple.

### Venue pricing
Each venue should have:
- starting price
- deposit amount
- optional minimum spend note
- optional price descriptor

### Add-on pricing
Each add-on supplier should have:
- type
- display price or "from" price

### Booking total
The booking summary should display:
- selected venue price indicator
- selected add-ons
- calculated displayed total or estimated total
- deposit required today

### Deposit logic
MVP should support:
- fixed deposit amount per venue
or
- simple percentage deposit if needed

Preferred MVP approach:
- fixed deposit amount stored per venue

### Important note
Final operational adjustments can be handled manually behind the scenes in MVP.
Do not build a highly complex pricing engine in V1.

---

## 15. Admin Workflow

### Goal
Allow Euphro to fulfil bookings manually while the frontend feels polished and automated.

### Admin process after booking
1. User pays deposit
2. Booking enters system
3. Admin sees new booking in dashboard
4. Admin reviews:
   - event details
   - venue selected
   - add-ons selected
   - customer information
   - payment status
5. Admin contacts venue and/or supplier manually if needed
6. Admin updates booking status
7. Admin optionally adds internal notes
8. Admin confirms or cancels booking

### MVP philosophy
Optimise for internal control and speed, not full automation.

---

## 16. Notifications and Emails

### Customer emails
At minimum:
1. Booking submission confirmation
2. Deposit payment confirmation

### Admin notifications
At minimum:
1. New booking received
2. Payment succeeded

### Content principles
Emails should feel:
- premium
- clear
- reassuring
- short
- trustworthy

---

## 17. Authentication

### MVP auth requirement
Customers should be able to browse publicly.
Authentication should happen:
- before final booking submission
or
- before viewing booking confirmation / account area

### Admin auth
Admins must be restricted to admin-only routes.

### MVP philosophy
Do not add unnecessary auth friction early in the flow.

---

## 18. Database Entities

### Main entities
- users
- venues
- venue_images
- suppliers
- bookings
- booking_items
- admin_notes (optional)
- payments (optional if separate from booking payment fields)

---

## 19. Database Table Outline

### 19.1 users
Fields:
- id
- full_name
- email
- role
- created_at
- updated_at

Role values:
- customer
- admin

### 19.2 venues
Fields:
- id
- slug
- name
- area
- address_summary
- description
- category
- min_guests
- max_guests
- starting_price
- deposit_amount
- active
- hero_image_url
- created_at
- updated_at

### 19.3 venue_images
Fields:
- id
- venue_id
- image_url
- sort_order
- created_at

### 19.4 suppliers
Fields:
- id
- name
- slug
- type
- area
- description
- price_from
- active
- created_at
- updated_at

Supplier type examples:
- dj
- photographer
- decorator

### 19.5 bookings
Fields:
- id
- booking_reference
- user_id
- venue_id
- event_type
- guest_count
- event_date
- area_preference
- budget_range
- status
- deposit_paid
- deposit_amount
- estimated_total
- customer_notes
- internal_notes
- created_at
- updated_at

### 19.6 booking_items
Fields:
- id
- booking_id
- item_type
- item_id
- display_name
- price
- created_at

Item type examples:
- venue
- supplier

### 19.7 payments (optional)
Fields:
- id
- booking_id
- provider
- provider_payment_id
- amount
- currency
- status
- created_at

---

## 20. Data Relationships

- One user can have many bookings
- One venue can have many bookings
- One venue can have many images
- One booking can have many booking items
- One booking can include one venue and multiple suppliers
- Suppliers are attached to bookings through booking_items

---

## 21. Seed Data Requirements

The app should launch with realistic sample data.

### Venue seed target
At least 10-20 London venues

Each venue should include:
- name
- area
- stylish description
- capacity
- starting price
- deposit amount
- at least one image
- event categories

### Supplier seed target
At least 8-15 suppliers across categories:
- DJ
- Photographer
- Decorator

### Areas to include
Examples:
- Chelsea
- Soho
- Shoreditch
- Mayfair
- Canary Wharf
- Brixton
- Notting Hill
- Kensington

---

## 22. Functional Requirements

### Public browsing
- Users can browse venues without logging in
- Users can view venue detail pages without logging in

### Event building
- Users can move through a multi-step builder
- Builder state should persist during the flow
- Users can edit previous selections before checkout

### Booking creation
- A booking record should be created during or just before payment
- Payment success should update booking state correctly

### Payment handling
- Successful payment should update deposit-related fields
- Payment cancellation should not create a false confirmed booking state

### Admin management
- Admin can view all bookings
- Admin can filter by status
- Admin can open full booking detail
- Admin can update booking status
- Admin can add internal notes

---

## 23. Non-Functional Requirements

- Mobile-first
- Fast load times
- Premium feel
- Clean responsive layout
- Accessible enough for core interactions
- Clear error states
- No dead-end pages
- No confusing form steps
- No cluttered marketplace feeling

---

## 24. Technical Build Preferences

### Preferred stack
- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Supabase
- Stripe
- Vercel

### Architecture preferences
- Clean file structure
- Reusable UI components
- Server/client split handled cleanly
- Keep business logic readable
- Strict typing where possible
- Avoid overengineering
- Avoid unnecessary abstractions in MVP

---

## 25. Codex Instructions

When implementing this product, follow these rules:

1. Use this document as the product source of truth
2. Prioritise simplicity over overengineering
3. Keep the UI premium and elegant
4. Build mobile-first
5. Do not add features outside MVP scope unless explicitly asked
6. Prefer fixed, understandable business logic over complex automation
7. Make admin workflows practical and efficient
8. Preserve a polished, high-conversion booking flow
9. Use consistent naming across database, API, and UI
10. Keep the codebase clean and production-minded

### Important instruction
Do not invent major new features.
Do not create unnecessary dashboards for venues or suppliers.
Do not build a complex marketplace backend beyond MVP needs.
Do not add a native app layer.
Do not overcomplicate pricing.

---

## 26. Recommended Build Order

1. Project setup
2. Design system / base layout
3. Homepage
4. Browse Venues page
5. Venue Detail page
6. Event Builder flow
7. Booking Summary page
8. Authentication
9. Stripe deposit checkout
10. Success / cancel pages
11. Admin dashboard
12. Admin booking detail
13. Emails / notifications
14. Final polish and bug fixing

---

## 27. MVP Definition of Done

The MVP is complete when:
- A user can browse real seeded venues
- A user can complete the event builder
- A user can pay a deposit
- A booking is created successfully
- Admin can see and manage the booking
- Confirmation flow is clear
- The UI feels premium and trustworthy
- The app is functional on desktop and mobile
- The product is good enough for live testing with real users and venue partners

---

## 28. Future Phases (Not for MVP Build)

These are future possibilities, not current build scope:
- Venue partner dashboard
- Supplier dashboard
- Messaging
- Instant booking confirmation
- Dynamic pricing
- Calendar integrations
- Reviews
- Loyalty
- Smart recommendations
- Corporate workflows
- Full payout automation
- AI event planner
- Mobile app

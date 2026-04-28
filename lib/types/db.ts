export type UserRole = "customer" | "admin";
export type SupplierType = "dj" | "photographer" | "decorator";
export type BookingStatus =
  | "draft"
  | "pending_payment"
  | "deposit_paid"
  | "pending_confirmation"
  | "confirmed"
  | "cancelled";

export interface Venue {
  id: string;
  slug: string;
  name: string;
  area: string;
  address_summary: string;
  description: string;
  category: string;
  min_guests: number;
  max_guests: number;
  starting_price: number;
  deposit_amount: number;
  active: boolean;
  hero_image_url: string;
}

export interface Supplier {
  id: string;
  name: string;
  slug: string;
  type: SupplierType;
  area: string;
  description: string;
  price_from: number;
  active: boolean;
}

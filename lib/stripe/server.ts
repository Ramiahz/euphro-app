import Stripe from "stripe";

import { getStripeSecretKey } from "@/lib/env";

let stripeClient: Stripe | null = null;

export function getStripeClient() {
  if (!stripeClient) {
    stripeClient = new Stripe(getStripeSecretKey(), {
      apiVersion: "2024-11-20.acacia"
    });
  }

  return stripeClient;
}

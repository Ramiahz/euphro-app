function getEnv(name: string, fallback?: string) {
  const value = process.env[name] ?? fallback;
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export function getPublicEnv() {
  return {
    supabaseUrl: getEnv("NEXT_PUBLIC_SUPABASE_URL", "https://placeholder.supabase.co"),
    supabaseAnonKey: getEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY", "placeholder-anon-key"),
    appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"
  };
}

export function getStripeSecretKey() {
  return getEnv("STRIPE_SECRET_KEY", "sk_test_placeholder");
}

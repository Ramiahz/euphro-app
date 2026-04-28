"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const supabase = createClient();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setError(null);
    const email = String(formData.get("email"));
    const password = String(formData.get("password"));

    if (mode === "signup") {
      const fullName = String(formData.get("fullName") ?? "");
      const { error: signUpError, data } = await supabase.auth.signUp({ email, password });
      if (signUpError) return setError(signUpError.message);
      if (data.user) {
        await supabase.from("users").upsert({ id: data.user.id, email, full_name: fullName, role: "customer" });
      }
      router.push("/");
      router.refresh();
      return;
    }

    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    if (signInError) return setError(signInError.message);
    router.push("/");
    router.refresh();
  }

  return (
    <form action={onSubmit} className="space-y-4">
      {mode === "signup" && (
        <div>
          <Label htmlFor="fullName">Full name</Label>
          <Input id="fullName" name="fullName" required />
        </div>
      )}
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" required minLength={8} />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <Button className="w-full">{mode === "signup" ? "Create account" : "Log in"}</Button>
    </form>
  );
}

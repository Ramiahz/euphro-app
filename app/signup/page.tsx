import Link from "next/link";

import { AuthForm } from "@/components/auth/auth-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignupPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <Card>
        <CardHeader><CardTitle>Create account</CardTitle></CardHeader>
        <CardContent>
          <AuthForm mode="signup" />
          <p className="mt-4 text-sm text-muted-foreground">Already have an account? <Link href="/login" className="text-brand">Log in</Link></p>
        </CardContent>
      </Card>
    </div>
  );
}

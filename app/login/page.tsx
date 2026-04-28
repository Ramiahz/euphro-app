import Link from "next/link";

import { AuthForm } from "@/components/auth/auth-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-12">
      <Card>
        <CardHeader><CardTitle>Log in</CardTitle></CardHeader>
        <CardContent>
          <AuthForm mode="login" />
          <p className="mt-4 text-sm text-muted-foreground">No account? <Link href="/signup" className="text-brand">Sign up</Link></p>
        </CardContent>
      </Card>
    </div>
  );
}

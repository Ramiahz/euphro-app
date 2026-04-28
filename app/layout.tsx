import type { Metadata } from "next";
import "./globals.css";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

export const metadata: Metadata = {
  title: "Euphro Events",
  description: "Premium event booking for stylish London events"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main className="min-h-[calc(100vh-140px)]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "@/app/globals.css";
import { AppShell } from "@/components/app-shell";

export const metadata: Metadata = {
  title: "Creative Ad Maker",
  description: "Generate brand-safe ad creative from product imagery",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="bg-background">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

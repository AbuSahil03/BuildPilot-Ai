import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Providers } from "@/components/layout/providers";
import { siteConfig } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="[font-family:var(--font-body)]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

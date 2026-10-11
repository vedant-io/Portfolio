import "./globals.css";

import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";
import { caveat, fraunces, geistMono, geistSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Vedant Deshpande · Engineering & AI",
  description:
    "Full-stack and AI systems engineer. I build, ship, and debug software end-to-end - from web applications to self-hosted infrastructure.",
  robots: { index: true, follow: true },
  metadataBase: new URL("https://vedantd.in"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Vedant Deshpande · Engineering & AI",
    description:
      "Full-stack and AI systems engineer. I build, ship, and debug software end-to-end - from web applications to self-hosted infrastructure.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Vedant Deshpande · Engineering & AI",
    description:
      "Full-stack and AI systems engineer. I build, ship, and debug software end-to-end.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        geistSans.variable,
        geistMono.variable,
        caveat.variable,
        fraunces.variable
      )}
      suppressHydrationWarning
    >
      <body className="min-h-[100dvh] bg-paper text-ink antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

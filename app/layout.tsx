import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "DUSTY DRAFT",
  description:
    "Development Studio & Intelligence Lab. Building software, AI services and digital products.",

  keywords: [
    "AI",
    "Software Development",
    "Product Lab",
    "Dustie",
    "Meemo",
    "Painter",
    "Seoul",
  ],

  openGraph: {
    title: "DUSTY DRAFT",
    description: "Development Studio & Intelligence Lab",
    images: ["/images/hero.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#ede4da] text-neutral-900 flex flex-col">
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />

        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          strategy="afterInteractive"
          data-cf-beacon='{"token":"c75e6f29ecb44b61b280886115c10d45"}'
        />
      </body>
    </html>
  );
}
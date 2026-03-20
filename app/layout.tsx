import type { Metadata } from "next";
import { Lora, DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Les Tapis Boules du Charollais — Laine feutrée 100% Bourgogne",
    template: "%s — Les Tapis Boules du Charollais",
  },
  description:
    "Tapis artisanaux ronds en boules de laine cardée et feutrée à la main. Pièces uniques fabriquées en Bourgogne par Madeleine Benifei.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://lestapisboules-du-charollais.fr"
  ),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Les Tapis Boules du Charollais",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${lora.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-beige text-text-muted font-body antialiased">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

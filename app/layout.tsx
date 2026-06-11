import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { DisclaimerBar } from "@/components/layout/DisclaimerBar";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { websiteSchema } from "@/lib/schema";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = createPageMetadata({
  title:
    "Cornerstone Towns Brampton | Freehold Townhomes by Primont Homes",
  description:
    "Register for VIP access to Cornerstone Towns in Brampton by Primont Homes. 129 freehold townhomes in Northwest Brampton with Futura smart home technology. Launching Spring 2026.",
  path: "/",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body className={`${cormorant.variable} ${montserrat.variable}`}>
        <JsonLd data={websiteSchema()} />
        <DisclaimerBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

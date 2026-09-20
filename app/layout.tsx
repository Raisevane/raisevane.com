import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer, FloatingButtons } from "@/components/Footer";
import { AuroraBackground } from "@/components/AuroraBackground";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans-stack",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://raisevane.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Raisevane — Digital Craft Agency",
    template: "%s — Raisevane",
  },
  description:
    "Raisevane is a full-service digital agency helping startups and enterprises design, build, and scale modern software.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Raisevane",
    title: "Raisevane — Digital Craft Agency",
    description:
      "Web, mobile, AI and design under one roof. Raisevane designs, builds and scales modern software for startups and enterprises.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Raisevane — Full-service digital agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raisevane — Digital Craft Agency",
    description:
      "Web, mobile, AI and design under one roof. Raisevane designs, builds and scales modern software.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <AuroraBackground />
        <Navbar />
        {children}
        <Footer />
        <FloatingButtons />
        <Analytics />
      </body>
    </html>
  );
}

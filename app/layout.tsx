import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import HeroGlow from "@/components/hero/HeroGlow";
import Navbar from "@/components/nav/Navbar";
import PebooWidget from "@/components/peboo/PebooWidget";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PGJ Portfolio",
  description: "Work and experience portfolio of Phoebe Grace Juayong",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeroGlow />
        <Navbar />
        <Providers>{children}</Providers>
        {/* Peboo appears on all pages */}
        <PebooWidget />
      </body>
    </html>
  );
}

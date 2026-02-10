import React from "react";
import type { Metadata } from "next";
import { IBM_Plex_Sans_KR, Noto_Serif_KR, Roboto_Slab } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import FooterEn from "@/components/FooterEn";

const ibmPlex = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  display: "swap",
});

const notoSerif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-noto-serif",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-roboto-slab",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MBTI WORLD ANIMATION",
  description: "Discover your anime character match with this story-driven MBTI test.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ibmPlex.variable} ${notoSerif.variable} ${robotoSlab.variable}`}>
      <body className="bg-[#fdfcf9] text-[#0b1220] min-h-screen font-sans selection:bg-[#16324f] selection:text-white">
        <div className="bg-pattern min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-10">{children}</main>
          <FooterEn />
        </div>
      </body>
    </html>
  );
}

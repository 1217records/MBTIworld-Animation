import React from "react";
import type { Metadata } from "next";
import { IBM_Plex_Sans_KR, Noto_Serif_KR, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const ibmPlex = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  display: 'swap',
});

const notoSerif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["500", "700", "900"],
  variable: "--font-noto-serif",
  display: 'swap',
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-roboto-slab",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "MBTI WORLD ANIMATION",
  description: "내 MBTI는 어떤 캐릭터와 같을까?",
  keywords: ["MBTI", "애니메이션 MBTI", "원피스 MBTI", "나루토 MBTI", "성격테스트"],
  other: {
    "google-adsense-account": "ca-pub-4245569327602514",
  },
  openGraph: {
    title: "MBTI WORLD ANIMATION",
    description: "내 MBTI는 어떤 캐릭터와 같을까?",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${ibmPlex.variable} ${notoSerif.variable} ${robotoSlab.variable}`}>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4245569327602514"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4CC8Y8KXFX"
          strategy="beforeInteractive"
        />
        <Script id="ga-gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-4CC8Y8KXFX');`}
        </Script>
      </head>
      <body className="bg-[#fdfcf9] text-[#0b1220] min-h-screen font-sans selection:bg-[#16324f] selection:text-white">
        <div className="bg-pattern min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

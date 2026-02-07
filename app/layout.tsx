
import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import { IBM_Plex_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export const metadata: Metadata = {
  title: "애니메이션 MBTI 월드 | 나와 닮은 캐릭터 찾기",
  description: "원피스, 나루토 등 애니메이션 속 명장면을 통해 알아보는 나의 MBTI 성격 테스트. 당신의 영혼은 어떤 캐릭터와 닮았나요?",
  keywords: ["MBTI", "애니메이션 MBTI", "원피스 MBTI", "나루토 MBTI", "성격테스트"],
  openGraph: {
    title: "애니메이션 MBTI 월드",
    description: "당신의 영혼을 비추는 스토리 기반 심리 테스트",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={`${ibmPlex.variable} ${notoSerif.variable}`}>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4245569327602514"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
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

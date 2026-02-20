import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/components/AppShell";
import Script from "next/script";
import { SITE_ORIGIN } from "@/lib/site";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: "MBTI WORLD ANIMATION",
  description: "내 MBTI는 어떤 캐릭터와 같을까?",
  keywords: [
    "MBTI",
    "MBTI 테스트",
    "성격유형 테스트",
    "성격 테스트",
    "애니메이션 MBTI",
    "애니 MBTI",
    "캐릭터 MBTI",
    "애니 캐릭터 성격 테스트",
    "원피스 MBTI",
    "나루토 MBTI",
    "진격의 거인 MBTI",
    "강철의 연금술사 MBTI",
    "주술회전 MBTI",
    "짱구 MBTI",
    "캐릭터 매칭 테스트",
    "MBTI 궁합",
    "MBTI 유형별 특징",
    "스토리형 심리테스트",
    "세계관 기반 테스트",
    "MBTI WORLD ANIMATION",
  ],
  openGraph: {
    title: "MBTI WORLD ANIMATION",
    description: "내 MBTI는 어떤 캐릭터와 같을까?",
    type: "website",
    url: SITE_ORIGIN,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MBTI WORLD ANIMATION",
    url: SITE_ORIGIN,
    inLanguage: ["ko-KR", "en-US", "ja-JP"],
  };
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MBTI WORLD ANIMATION",
    url: SITE_ORIGIN,
  };

  return (
    <html lang="ko">
      <head>
        <meta name="google-adsense-account" content="ca-pub-4245569327602514" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4245569327602514"
          crossOrigin="anonymous"
        />
        <Script
          id="gtag-script"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4CC8Y8KXFX"
          strategy="afterInteractive"
        />
        <Script id="ga-gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-4CC8Y8KXFX');`}
        </Script>
      </head>
      <body className="bg-[#fdfcf9] text-[#0b1220] min-h-screen font-sans selection:bg-[#16324f] selection:text-white">
        <JsonLd data={[websiteSchema, organizationSchema]} />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}

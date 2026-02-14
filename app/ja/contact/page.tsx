import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import { localizedAlternates } from "@/lib/seo";
import ContactClientJa from "./ContactClient";

export const runtime = "edge";

export const metadata: Metadata = {
  title: `新しいテスト提案 | ${SITE_NAME}`,
  description: "MBTI WORLD ANIMATION に追加してほしいアニメ世界観を提案してください。",
  alternates: localizedAlternates("/contact", "ja"),
  openGraph: {
    title: `新しいテスト提案 | ${SITE_NAME}`,
    description: "MBTI WORLD ANIMATION に追加してほしいアニメ世界観を提案してください。",
    type: "website",
    url: `${SITE_ORIGIN}/ja/contact`,
  },
  twitter: {
    card: "summary_large_image",
    title: `新しいテスト提案 | ${SITE_NAME}`,
    description: "MBTI WORLD ANIMATION に追加してほしいアニメ世界観を提案してください。",
  },
};

export default function ContactPageJa() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "新しいテスト提案",
    description: "アニメ MBTI テストのテーマ提案ページ",
    mainEntityOfPage: `${SITE_ORIGIN}/ja/contact`,
  };

  return (
    <div className="max-w-xl mx-auto space-y-8 animate-in fade-in">
      <JsonLd data={jsonLd} />
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold font-serif text-[#16324f]">新しいテスト提案</h1>
        <p className="text-gray-500 text-sm">次に追加してほしいアニメ世界観を教えてください。</p>
        <p className="text-gray-400 text-xs">連絡先: mbtiworld.kr@gmail.com</p>
      </div>
      <ContactClientJa />
    </div>
  );
}

import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import { localizedAlternates } from "@/lib/seo";

export const runtime = "edge";

export const metadata: Metadata = {
  title: `利用規約 | ${SITE_NAME}`,
  description: "MBTI WORLD ANIMATION の利用規約。",
  alternates: localizedAlternates("/terms", "ja"),
  openGraph: {
    title: `利用規約 | ${SITE_NAME}`,
    description: "MBTI WORLD ANIMATION の利用規約。",
    type: "website",
    url: `${SITE_ORIGIN}/ja/terms`,
  },
};

export default function TermsJa() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "利用規約",
    description: "MBTI WORLD ANIMATION の利用規約",
    mainEntityOfPage: `${SITE_ORIGIN}/ja/terms`,
  };

  return (
    <div className="space-y-8 animate-in fade-in">
      <JsonLd data={jsonLd} />
      <div className="space-y-2">
        <h1 className="text-3xl font-bold font-serif text-[#16324f]">利用規約</h1>
        <p className="text-gray-400 text-sm">最終更新日: 2026年2月10日</p>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-8 text-sm text-gray-600 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">1. サービス目的</h2>
          <p>本サービスは、アニメ世界観をもとにしたエンタメ型MBTIテストを提供します。</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">2. 利用範囲</h2>
          <p>コンテンツは個人利用を前提とし、無断での商用再配布は禁止します。</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">3. 結果の扱い</h2>
          <p>結果は自己理解の参考情報であり、専門的診断を代替するものではありません。</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">4. お問い合わせ</h2>
          <p>規約に関するお問い合わせ: mbtiworld.kr@gmail.com</p>
        </section>
      </div>
    </div>
  );
}

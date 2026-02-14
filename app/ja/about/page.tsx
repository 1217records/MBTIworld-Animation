import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import { localizedAlternates } from "@/lib/seo";

export const runtime = "edge";

export const metadata: Metadata = {
  title: `サービス紹介 | ${SITE_NAME}`,
  description: "MBTI WORLD ANIMATION のコンセプトと運営方針を紹介します。",
  alternates: localizedAlternates("/about", "ja"),
  openGraph: {
    title: `サービス紹介 | ${SITE_NAME}`,
    description: "MBTI WORLD ANIMATION のコンセプトと運営方針を紹介します。",
    type: "website",
    url: `${SITE_ORIGIN}/ja/about`,
  },
};

export default function AboutJa() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "MBTI-World Story",
    description: "MBTI WORLD ANIMATION のサービス紹介",
    mainEntityOfPage: `${SITE_ORIGIN}/ja/about`,
  };

  return (
    <div className="space-y-12 animate-in fade-in pb-20">
      <JsonLd data={jsonLd} />
      <div className="space-y-3 text-center">
        <h1 className="text-4xl font-black font-serif text-[#16324f]">MBTI-World Story</h1>
        <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em]">私たちがこのテストを作った理由</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-10">
        <section className="bg-white p-10 sm:p-14 rounded-[3rem] shadow-sm border border-gray-50 space-y-6">
          <h2 className="text-2xl font-black text-[#16324f] font-serif text-center">物語で自分を知る</h2>
          <p className="text-gray-600 leading-relaxed">
            MBTI WORLD ANIMATION は、アニメの名シーンに自分を重ねながら性格傾向を探るエンタメ型テストです。
            単なるラベル付けではなく、「なぜその選択をしたのか」を振り返れる設計を重視しています。
          </p>
          <p className="text-gray-600 leading-relaxed">
            どのタイプにも強みがあります。私たちは比較や評価よりも、あなた自身の傾向を理解しやすい形で届けることを目指しています。
          </p>
        </section>

        <section className="bg-white p-10 sm:p-14 rounded-[3rem] shadow-sm border border-gray-50 space-y-6">
          <h2 className="text-2xl font-black text-[#16324f] font-serif text-center">運営方針</h2>
          <ul className="space-y-3 text-sm text-gray-600 leading-relaxed list-disc list-inside">
            <li>わかりやすい質問と読みやすい結果表示</li>
            <li>偏見を助長しない中立的な表現</li>
            <li>ユーザーのフィードバックを反映した継続改善</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

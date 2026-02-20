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

        <section className="bg-white p-10 sm:p-14 rounded-[3rem] shadow-sm border border-gray-50 space-y-8">
          <h2 className="text-2xl font-black text-[#16324f] font-serif text-center">MBTI理論とサービスでの扱い</h2>
          <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
            <p>
              MBTIはC. G. Jungの類型論を背景にした性格フレームで、4軸（E/I, S/N, T/F, J/P）の組み合わせで
              16タイプを示します。本サービスでは、診断ではなく自己理解のための参考情報として扱います。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-5 space-y-3">
                <h3 className="font-bold text-[#16324f]">4つの選好軸</h3>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                  <li>外向(E) / 内向(I): エネルギーの向かう先</li>
                  <li>感覚(S) / 直観(N): 情報の受け取り方</li>
                  <li>思考(T) / 感情(F): 判断時の優先基準</li>
                  <li>判断(J) / 知覚(P): 計画性と柔軟性</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-5 space-y-3">
                <h3 className="font-bold text-[#16324f]">限界と読み取り方</h3>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                  <li>タイプは固定的診断ではなく、相対的傾向の要約です。</li>
                  <li>再検査一致率や二分法分類には学術的な限界が指摘されています。</li>
                  <li>結果は自己理解の補助情報であり、臨床判断を代替しません。</li>
                  <li>必要に応じてBig Fiveなどの検証モデルも併用推奨です。</li>
                </ul>
              </div>
            </div>
            <p>
              また本サービスは、抽象質問よりも場面理解しやすいアニメ内ナラティブを活用しています。
              キャラクター一致は、結果の理解を助ける補助的な解釈導線です。
            </p>
          </div>
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

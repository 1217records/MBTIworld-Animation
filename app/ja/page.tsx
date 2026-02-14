import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import AdExperiment from "@/components/AdExperiment";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import { localizedAlternates } from "@/lib/seo";

export const runtime = "edge";

export const metadata: Metadata = {
  title: `${SITE_NAME} | JA`,
  description: "人気アニメの世界観で楽しむストーリー型MBTIテスト。",
  alternates: localizedAlternates("/", "ja"),
  openGraph: {
    title: `${SITE_NAME} | JA`,
    description: "人気アニメの世界観で楽しむストーリー型MBTIテスト。",
    type: "website",
    url: `${SITE_ORIGIN}/ja`,
    images: [
      {
        url: `${SITE_ORIGIN}/og/home?v=2`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | JA`,
    description: "人気アニメの世界観で楽しむストーリー型MBTIテスト。",
    images: [`${SITE_ORIGIN}/og/home?v=2`],
  },
};

export default function HomeJa() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      applicationCategory: "Entertainment",
      operatingSystem: "Web",
      description: `${SITE_NAME}のストーリー型MBTIテスト`,
      url: `${SITE_ORIGIN}/ja`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "このサイトでは何ができますか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "アニメのシナリオに答えながら、MBTI傾向とキャラクター相性を確認できます。",
          },
        },
        {
          "@type": "Question",
          name: "テスト時間はどれくらいですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "各テーマ16問で、目安は2〜3分です。",
          },
        },
        {
          "@type": "Question",
          name: "結果はどう活用すればいいですか？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "固定的な診断ではなく、自己理解のヒントとして使ってください。",
          },
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center gap-12">
      <JsonLd data={jsonLd} />
      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#16324f]/10 text-[#16324f] text-xs font-bold tracking-widest uppercase mb-2">
          ストーリー型 性格テスト
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0b1220] leading-tight">
          <span className="block font-slab">MBTI WORLD</span>
          <span className="block mt-0.5 text-base sm:text-lg md:text-xl font-extrabold tracking-[0.22em] text-[#16324f]/70 uppercase font-sans">
            Animation Edition
          </span>
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto leading-relaxed text-sm sm:text-base">
          もしあなたがアニメの名シーンに入ったら、どう選びますか？
          <br />
          16問のシナリオで、あなたに近いキャラクターを見つけましょう。
        </p>
      </div>

      <section className="w-full max-w-3xl text-left space-y-10">
        <AdExperiment
          experimentKey="home_primary_ja"
          className="bg-white rounded-[2rem] p-4 sm:p-6 border border-gray-100 shadow-sm"
          format="horizontal"
        />

        <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-4">
          <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">テストの流れ</h2>
          <p className="text-gray-600 leading-relaxed">
            各テーマは16問で構成され、選択はMBTIの4軸（E/I, S/N, T/F, J/P）に対応します。結果は物語文脈で直感的に解釈できる形で表示されます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-500">
            <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
              <p className="font-bold text-[#16324f]">質問数</p>
              <p>各テーマ16問</p>
            </div>
            <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
              <p className="font-bold text-[#16324f]">所要時間</p>
              <p>約2〜3分</p>
            </div>
            <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
              <p className="font-bold text-[#16324f]">結果</p>
              <p>タイプ + キャラクター</p>
            </div>
          </div>
          <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4 text-sm text-gray-500">
            <p className="font-bold text-[#16324f]">設計方針</p>
            <p>4軸をバランス良く反映し、結果の一貫性を高めています。</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 w-full">
          <Link
            href="/ja/select"
            className="w-full max-w-sm px-12 py-4 rounded-full bg-[#16324f] text-white font-bold text-lg shadow-xl shadow-[#16324f]/25 hover:scale-105 transition-transform active:scale-95 text-center"
          >
            テストを始める
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-bold text-[#16324f]">
            <Link
              href="/ja/about"
              className="hover:text-[#0f2338] underline underline-offset-4 decoration-transparent hover:decoration-[#16324f]/60 transition-colors"
            >
              サービス紹介
            </Link>
            <span className="text-[#16324f]/40" aria-hidden="true">·</span>
            <Link
              href="/ja/privacy"
              className="hover:text-[#0f2338] underline underline-offset-4 decoration-transparent hover:decoration-[#16324f]/60 transition-colors"
            >
              プライバシー
            </Link>
          </div>
        </div>

        <div className="h-6 sm:h-8" />
        <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
          <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">このテストの特徴</h2>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            MBTI WORLD ANIMATIONは、場面に没入したときの選択を重視するストーリー優先の性格テストです。
            一般的な抽象質問ではなく、意味のあるシーンの中で自然な判断を引き出します。
          </p>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            結果はタイプ名だけでなく、強み・注意点・関係性の傾向まで物語的に読み解きます。
            診断の断定ではなく、自己理解のヒントとして活用してください。
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-gray-500">
            <span className="px-3 py-2 rounded-full bg-[#fdfcf9] border border-gray-100 font-bold">#ストーリー型</span>
            <span className="px-3 py-2 rounded-full bg-[#fdfcf9] border border-gray-100 font-bold">#MBTI解釈</span>
            <span className="px-3 py-2 rounded-full bg-[#fdfcf9] border border-gray-100 font-bold">#キャラ相性</span>
            <span className="px-3 py-2 rounded-full bg-[#fdfcf9] border border-gray-100 font-bold">#自己理解</span>
          </div>
        </section>

        <div className="h-6 sm:h-8" />
        <div className="bg-white/80 rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
          <h2 className="text-2xl font-black font-serif text-[#16324f]">💬 よくある質問</h2>
          <div className="space-y-5 text-sm text-gray-600 leading-relaxed">
            <div>
              <p className="font-bold text-[#16324f]">Q. このサイトでは何ができますか？</p>
              <p>A. アニメのシナリオに答えながら、MBTI傾向とキャラクター相性を確認できます。</p>
            </div>
            <div>
              <p className="font-bold text-[#16324f]">Q. テスト時間はどれくらいですか？</p>
              <p>A. 各テーマ16問で、目安は2〜3分です。</p>
            </div>
            <div>
              <p className="font-bold text-[#16324f]">Q. 結果はどう活用すればいいですか？</p>
              <p>A. 固定的な診断ではなく、自己理解のヒントとして使ってください。</p>
            </div>
            <div>
              <p className="font-bold text-[#16324f]">Q. 結果は保存されますか？</p>
              <p>A. いいえ。結果は現在の画面でのみ確認できます。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

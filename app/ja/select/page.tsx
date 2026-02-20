import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { THEMES_EN } from "@/data-en";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import { localizedAlternates } from "@/lib/seo";

export const runtime = "edge";

export const metadata: Metadata = {
  title: `テストを選ぶ | ${SITE_NAME}`,
  description: "アニメの世界観を選んで、ストーリー型MBTIテストを始めましょう。",
  alternates: localizedAlternates("/select", "ja"),
  openGraph: {
    title: `テストを選ぶ | ${SITE_NAME}`,
    description: "アニメの世界観を選んで、ストーリー型MBTIテストを始めましょう。",
    type: "website",
    url: `${SITE_ORIGIN}/ja/select`,
  },
  twitter: {
    card: "summary_large_image",
    title: `テストを選ぶ | ${SITE_NAME}`,
    description: "アニメの世界観を選んで、ストーリー型MBTIテストを始めましょう。",
  },
};

const THEME_LABELS_JA: Record<string, string> = {
  onepiece: "ワンピース",
  naruto: "NARUTO",
  fma: "鋼の錬金術師",
  aot: "進撃の巨人",
  shinchan: "クレヨンしんちゃん",
  jujutsu: "呪術廻戦",
};

const THEME_DETAILS_JA: Record<string, { headline: string; body: string }> = {
  onepiece: {
    headline: "ワンピース編テスト",
    body: "自由・仲間・冒険の選択を通して、あなたの意思決定スタイルと行動軸を16問で分析します。",
  },
  naruto: {
    headline: "NARUTO編テスト",
    body: "成長・忍道・絆の場面で、プレッシャー下の判断とチーム内での役割傾向を見つけます。",
  },
  fma: {
    headline: "鋼の錬金術師編テスト",
    body: "代償・責任・信念のテーマを通して、論理と価値観のバランスを16問で読み解きます。",
  },
  aot: {
    headline: "進撃の巨人編テスト",
    body: "極限状況での決断、リスク対応、感情コントロールの傾向をシナリオベースで確認します。",
  },
  shinchan: {
    headline: "クレヨンしんちゃん編テスト",
    body: "日常シーンの小さな選択から、共感性・柔軟性・現実感覚のパターンを可視化します。",
  },
  jujutsu: {
    headline: "呪術廻戦編テスト",
    body: "任務・戦闘・関係性の場面で、価値基準と瞬間判断のスタイルを16問で把握します。",
  },
};

const THEME_TAGS_JA: Record<string, string[]> = {
  onepiece: ["冒険", "仲間", "航海"],
  naruto: ["意志", "チームワーク", "成長"],
  shinchan: ["日常", "コメディ", "ゆるさ"],
  fma: ["錬金術", "兄弟", "代償"],
  aot: ["生存", "戦略", "自由"],
  jujutsu: ["任務", "呪い", "成長"],
};

export default function TestSelectJa() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "アニメ MBTI テスト選択",
    applicationCategory: "Entertainment",
    operatingSystem: "Web",
    description: "ストーリー型MBTIテストのテーマ選択ページ",
    url: `${SITE_ORIGIN}/ja/select`,
  };

  return (
    <div className="space-y-10 animate-in fade-in">
      <JsonLd data={jsonLd} />
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold font-serif text-[#16324f]">テストを選ぶ</h1>
        <p className="text-gray-500 text-sm">好きな世界観を選んですぐに始められます。</p>
      </div>

      <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">🧭 選び方ガイド</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
          <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
            <p className="font-bold text-[#16324f]">📚 知っている作品</p>
            <p>作品理解があるほど没入しやすくなります。</p>
          </div>
          <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
            <p className="font-bold text-[#16324f]">⏱️ 2〜3分で完了</p>
            <p>各テーマ16問で気軽に診断できます。</p>
          </div>
          <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
            <p className="font-bold text-[#16324f]">✨ キャラで解釈</p>
            <p>結果をキャラクター文脈でわかりやすく解説します。</p>
          </div>
        </div>
        <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4 text-sm text-gray-500 leading-relaxed">
          <p className="font-bold text-[#16324f]">おすすめ</p>
          <p>迷ったときは、今いちばん気になっている作品から始めてください。</p>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">
          結果は自己理解のためのエンタメコンテンツです。医療的・臨床的診断ではありません。
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Object.values(THEMES_EN).map((theme) => {
          const label = THEME_LABELS_JA[theme.id] ?? theme.label;
          return (
            <Link
              key={theme.id}
              href={`/ja/test/${theme.id}`}
              className="group relative overflow-hidden rounded-3xl p-8 bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col gap-4"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${theme.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-2xl shadow-inner">
                  {theme.emoji}
                </div>
                <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">{label}</h2>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed">
                {label}のシナリオ16問に答えて、あなたに近いキャラクターを見つけましょう。
              </p>

              <div className="flex gap-2 flex-wrap">
                {(THEME_TAGS_JA[theme.id] ?? theme.tags).map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-lg bg-gray-100 text-[10px] font-bold text-gray-400">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className={`mt-4 px-6 py-3 rounded-full bg-gradient-to-r ${theme.gradient} text-white font-bold text-center text-sm shadow-md group-hover:scale-105 transition-transform`}>
                はじめる
              </div>
            </Link>
          );
        })}

        <Link
          href="/ja/contact"
          className="rounded-3xl p-8 bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-3 text-center group hover:bg-gray-100 transition-colors"
        >
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl text-gray-400 group-hover:scale-110 transition-transform">
            +
          </div>
          <span className="text-sm font-bold text-gray-400">新しいテーマを提案</span>
        </Link>
      </div>

      <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">テーマ別の特徴</h2>
        <div className="space-y-6">
          {Object.values(THEMES_EN).map((theme) => {
            const detail = THEME_DETAILS_JA[theme.id] ?? {
              headline: `${THEME_LABELS_JA[theme.id] ?? theme.label}編テスト`,
              body: "名シーンの選択を通して、MBTI傾向をわかりやすく分析します。",
            };
            return (
              <article key={theme.id} className="space-y-2">
                <h3 className="text-lg font-black text-[#16324f]">{detail.headline}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{detail.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">心理学的な設計</h2>
        <div className="space-y-3">
          <h3 className="text-base font-black text-[#16324f]">MBTI理論と構成</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            本テストは、C. G. Jungの心理学的類型論を背景に発展したMBTIの4軸（E/I, S/N, T/F, J/P）を使用します。
            16タイプは固定的診断ではなく、自己理解と対話改善の参考情報として扱います。
          </p>
          <ul className="list-disc list-inside text-xs text-gray-600 space-y-1">
            <li>外向(E) / 内向(I): エネルギーの向かう先</li>
            <li>感覚(S) / 直観(N): 情報把握の重視点</li>
            <li>思考(T) / 感情(F): 判断時の優先基準</li>
            <li>判断(J) / 知覚(P): 計画性と柔軟性の傾向</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-base font-black text-[#16324f]">解釈時の注意点</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            MBTIは広く活用される一方、二分法分類や再検査の一貫性には学術的な議論があります。
            そのため、結果は「傾向の手がかり」として案内し、断定的ラベル化は避けます。
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-base font-black text-[#16324f]">アニメ内ナラティブ活用</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            抽象質問ではなく、作品世界の場面選択で回答してもらうことで没入感を高め、行動傾向を捉えやすくしています。
            キャラクター一致は自己理解を助ける補助解釈です。
          </p>
        </div>
        <h3 className="text-base font-black text-[#16324f]">参考</h3>
        <ul className="list-disc list-inside text-xs text-gray-500 space-y-2">
          <li>MBTIの4軸モデル</li>
          <li>再検査信頼性・二分法分類の限界に関する心理測定研究</li>
          <li>性格心理学の特性モデル</li>
          <li>インタラクティブ・ナラティブ型評価研究</li>
          <li>補完モデル: Big Five（5因子モデル）</li>
        </ul>
      </section>
    </div>
  );
}

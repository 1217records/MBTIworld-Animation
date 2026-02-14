import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { THEMES_EN } from "@/data-en";
import { JA_QUESTIONS } from "@/lib/ja-test-content";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import { localizedAlternates } from "@/lib/seo";
import TestClientJa from "./TestClient";

const THEME_LABELS_JA: Record<string, string> = {
  onepiece: "ワンピース",
  naruto: "NARUTO",
  fma: "鋼の錬金術師",
  aot: "進撃の巨人",
  shinchan: "クレヨンしんちゃん",
  jujutsu: "呪術廻戦",
};

const THEME_DESCRIPTIONS_JA: Record<string, { summary: string; strengths: string[] }> = {
  onepiece: {
    summary:
      "自由・勇気・仲間をめぐる選択を通して、あなたの意思決定スタイルを16問で明確にします。",
    strengths: ["行動力", "リスク判断", "忠誠心", "推進力"],
  },
  naruto: {
    summary:
      "成長と絆の物語を通して、プレッシャー下での判断とチームでの立ち回りを分析します。",
    strengths: ["継続力", "チーム連携", "回復力", "目標志向"],
  },
  fma: {
    summary:
      "代償と責任のテーマから、論理と価値観、対人配慮のバランスを16の場面で読み解きます。",
    strengths: ["倫理観", "論理性", "責任感", "決断力"],
  },
  aot: {
    summary:
      "極限状態での決断を通じて、戦略思考・感情制御・危機対応の傾向を可視化します。",
    strengths: ["戦略性", "勇気", "集中力", "冷静さ"],
  },
  shinchan: {
    summary:
      "日常の小さな選択から、柔軟性・共感性・現実感覚のパターンを明らかにします。",
    strengths: ["柔軟性", "共感力", "現実感覚", "遊び心"],
  },
  jujutsu: {
    summary:
      "任務と戦闘の場面を通して、価値判断と瞬発的意思決定のスタイルを16問で把握します。",
    strengths: ["状況判断", "危機管理", "協調性", "集中力"],
  },
};

type PageProps = {
  params: Promise<{ themeId: string }>;
};

export const runtime = "edge";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await params;
  const theme = THEMES_EN[resolved.themeId];
  if (!theme) {
    return {
      title: `${SITE_NAME} | テスト`,
      description: "テストを選択してください",
      alternates: localizedAlternates("/select", "ja"),
    };
  }

  const label = THEME_LABELS_JA[theme.id] ?? theme.label;
  const description = `${label}の世界観で進むストーリー型MBTIテスト。16問でキャラクター相性を確認できます。`;

  return {
    title: `${label} テスト | ${SITE_NAME}`,
    description,
    alternates: localizedAlternates(`/test/${encodeURIComponent(theme.id)}`, "ja"),
    openGraph: {
      title: `${label} テスト | ${SITE_NAME}`,
      description,
      type: "website",
      url: `${SITE_ORIGIN}/ja/test/${encodeURIComponent(theme.id)}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${label} テスト | ${SITE_NAME}`,
      description,
    },
  };
}

export default async function TestPageJa({ params }: PageProps) {
  const resolved = await params;
  const theme = THEMES_EN[resolved.themeId];
  if (!theme) {
    notFound();
  }

  const label = THEME_LABELS_JA[theme.id] ?? theme.label;
  const desc = THEME_DESCRIPTIONS_JA[theme.id] ?? {
    summary: `${label}の名シーン選択を通して、MBTI傾向を16問で分析します。`,
    strengths: ["没入感", "自己理解", "ストーリー型", "キャラ相性"],
  };

  const testUrl = `${SITE_ORIGIN}/ja/test/${encodeURIComponent(theme.id)}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: `${label} MBTIテスト`,
      applicationCategory: "Entertainment",
      operatingSystem: "Web",
      description: `${label}の世界観で進むストーリー型MBTIテスト`,
      url: testUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "Quiz",
      name: `${label} MBTIテスト`,
      inLanguage: "ja-JP",
      about: `${label}のシナリオ型MBTI性格テスト`,
      educationalLevel: "beginner",
      numberOfQuestions: JA_QUESTIONS.length,
      url: testUrl,
    },
  ];

  return (
    <div className="space-y-12 animate-in fade-in pb-16">
      <JsonLd data={jsonLd} />
      <header className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black font-serif text-[#16324f]">{label} MBTIテスト</h1>
        <p className="text-gray-500 text-sm sm:text-base">{label}の世界観であなたの判断パターンを確認しましょう。</p>
      </header>

      <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">テスト概要</h2>
        <p className="text-gray-600 leading-relaxed">
          {desc.summary} 設問はすべてシナリオ選択形式で、結果は物語文脈でわかりやすく解説します。
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-gray-500">
          {desc.strengths.map((strength) => (
            <span key={strength} className="rounded-full bg-[#fdfcf9] border border-gray-100 px-3 py-2 text-center font-bold">
              #{strength}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-[2rem] p-8 sm:p-10 border-2 border-[#16324f]/25 shadow-sm space-y-6">
        <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">質問に回答する</h2>
        <p className="text-gray-600 leading-relaxed">
          下の質問エリアでそのまま回答できます。全問回答するとキャラクター相性結果が表示されます。
        </p>
        <TestClientJa themeId={theme.id} />
      </section>

      <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">心理学的な設計</h2>
        <p className="text-gray-600 leading-relaxed">
          MBTIの4軸（E/I, S/N, T/F, J/P）を均等に反映し、解釈の一貫性を高めるよう設計しています。
        </p>
        <h3 className="text-lg font-black text-[#16324f]">参考</h3>
        <ul className="list-disc list-inside text-sm text-gray-500 space-y-2">
          <li>MBTIの4軸モデル</li>
          <li>類型論ベースの性格フレームワーク</li>
          <li>性格心理学の基礎概念</li>
        </ul>
      </section>
    </div>
  );
}

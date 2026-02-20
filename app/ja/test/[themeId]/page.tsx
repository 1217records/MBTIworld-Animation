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

      <section className="bg-white rounded-[2rem] p-8 sm:p-10 border-2 border-[#16324f]/25 shadow-sm space-y-6">
        <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">質問に回答する</h2>
        <p className="text-gray-600 leading-relaxed">
          下の質問エリアでそのまま回答できます。全問回答するとキャラクター相性結果が表示されます。
        </p>
        <TestClientJa themeId={theme.id} />
      </section>
    </div>
  );
}

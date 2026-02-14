import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { CONTENTS_EN, THEMES_EN } from "@/data-en";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import { localizedAlternates } from "@/lib/seo";
import TestClientEn from "./TestClient";

const THEME_LABELS_EN: Record<string, string> = {
  onepiece: "One Piece",
  naruto: "Naruto",
  fma: "Fullmetal Alchemist",
  aot: "Attack on Titan",
  shinchan: "Crayon Shin-chan",
  jujutsu: "Jujutsu Kaisen",
};

const THEME_DESCRIPTIONS: Record<string, { summary: string; strengths: string[] }> = {
  onepiece: {
    summary:
      "Explore how you choose between freedom, courage, and loyalty through iconic scenes. Your leadership style and risk handling show up across 16 questions.",
    strengths: ["Leadership", "Risk sense", "Loyalty", "Momentum"],
  },
  naruto: {
    summary:
      "Trace growth, perseverance, and bonds to see how you respond under pressure. The questions decode teamwork and emotional control.",
    strengths: ["Perseverance", "Teamwork", "Resilience", "Ambition"],
  },
  fma: {
    summary:
      "Follow the themes of sacrifice and responsibility to see how you balance logic, ethics, and relationships across 16 scenarios.",
    strengths: ["Ethics", "Logic", "Responsibility", "Resolve"],
  },
  aot: {
    summary:
      "In a world of survival and freedom, your decision patterns, strategy, and emotional balance are revealed through 16 intense questions.",
    strengths: ["Strategy", "Courage", "Focus", "Composure"],
  },
  shinchan: {
    summary:
      "Everyday scenes reveal spontaneity, empathy, and realism. Small choices build a clear pattern for your MBTI type.",
    strengths: ["Spontaneity", "Empathy", "Realism", "Playfulness"],
  },
  jujutsu: {
    summary:
      "Through missions, curse encounters, and Domain Expansion decisions, this test reveals your pressure response and value hierarchy across 16 scenarios.",
    strengths: ["Combat judgment", "Risk control", "Team play", "Mental focus"],
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
      title: `${SITE_NAME} | Test`,
      description: "Choose a test",
      alternates: localizedAlternates("/select", "en"),
    };
  }

  const label = THEME_LABELS_EN[theme.id] ?? theme.label;
  const description = `Story-driven MBTI test based on ${label}. Discover your character match in 16 questions.`;

  return {
    title: `${label} Test | ${SITE_NAME}`,
    description,
    alternates: localizedAlternates(`/test/${encodeURIComponent(theme.id)}`, "en"),
    openGraph: {
      title: `${label} Test | ${SITE_NAME}`,
      description,
      type: "website",
      url: `${SITE_ORIGIN}/en/test/${encodeURIComponent(theme.id)}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${label} Test | ${SITE_NAME}`,
      description,
    },
  };
}

export default async function TestPageEn({ params }: PageProps) {
  const resolved = await params;
  const theme = THEMES_EN[resolved.themeId];
  const content = CONTENTS_EN[resolved.themeId];
  if (!theme || !content) {
    notFound();
  }

  const label = THEME_LABELS_EN[theme.id] ?? theme.label;
  const desc = THEME_DESCRIPTIONS[theme.id] ?? {
    summary: `We analyze your choices through ${label} scenes in 16 questions.`,
    strengths: ["Immersion", "Self-reflection", "Story-driven", "Character match"],
  };

  const testUrl = `${SITE_ORIGIN}/en/test/${encodeURIComponent(theme.id)}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: `${label} MBTI Test`,
      applicationCategory: "Entertainment",
      operatingSystem: "Web",
      description: `Story-driven MBTI test based on ${label}`,
      url: testUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "Quiz",
      name: `${label} MBTI Test`,
      inLanguage: "en-US",
      about: `${label} story-based MBTI personality quiz`,
      educationalLevel: "beginner",
      numberOfQuestions: content.questions.length,
      url: testUrl,
    },
  ];

  return (
    <div className="space-y-12 animate-in fade-in pb-16">
      <JsonLd data={jsonLd} />
      <header className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black font-serif text-[#16324f]">{label} MBTI Test</h1>
        <p className="text-gray-500 text-sm sm:text-base">Explore your personality through {label} scenarios.</p>
      </header>

      <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">Test Overview</h2>
        <p className="text-gray-600 leading-relaxed">
          {desc.summary} The test is built around scenario-based choices and the results are explained in story language.
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
        <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">Answer the Questions Below</h2>
        <p className="text-gray-600 leading-relaxed">
          Use the Q&A area below to answer right away.
          Complete the questions to see your character match at the end.
        </p>
        <TestClientEn themeId={theme.id} />
      </section>

      <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">Psychological Basis</h2>
        <p className="text-gray-600 leading-relaxed">
          This test balances the four MBTI axes (E/I, S/N, T/F, J/P) to keep results consistent and explainable.
        </p>
        <h3 className="text-lg font-black text-[#16324f]">References</h3>
        <ul className="list-disc list-inside text-sm text-gray-500 space-y-2">
          <li>MBTI four-axis model</li>
          <li>Typology-based personality frameworks</li>
          <li>Introductory personality psychology concepts</li>
        </ul>
      </section>
    </div>
  );
}

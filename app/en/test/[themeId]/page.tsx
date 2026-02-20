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
  pokemon: "Pokemon Gen 1-2",
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

      <section className="bg-white rounded-[2rem] p-8 sm:p-10 border-2 border-[#16324f]/25 shadow-sm space-y-6">
        <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">Answer the Questions Below</h2>
        <p className="text-gray-600 leading-relaxed">
          Use the Q&A area below to answer right away.
          Complete the questions to see your character match at the end.
        </p>
        <TestClientEn themeId={theme.id} />
      </section>
    </div>
  );
}

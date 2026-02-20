import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { CONTENTS, THEMES } from "@/data";
import { SITE_NAME, SITE_ORIGIN, SITE_TAGLINE } from "@/lib/site";
import { localizedAlternates } from "@/lib/seo";
import TestClient from "./TestClient";

type PageProps = {
  params: Promise<{ themeId: string }>;
};

export const runtime = "edge";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await params;
  const theme = THEMES[resolved.themeId as keyof typeof THEMES];
  if (!theme) {
    return {
      title: `${SITE_NAME} | 테스트`,
      description: `${SITE_TAGLINE}`,
      alternates: localizedAlternates("/select", "ko"),
    };
  }

  const description = `MBTI 유형별 특징과 궁합을 분석하는 ${theme.label} 테스트입니다. ${theme.label} 세계관의 상황을 통해 당신의 성향을 정교하게 탐색해 보세요.`;

  return {
    title: `${theme.label} 테스트 | ${SITE_NAME}`,
    description,
    alternates: localizedAlternates(`/test/${encodeURIComponent(theme.id)}`, "ko"),
    openGraph: {
      title: `${theme.label} 테스트 | ${SITE_NAME}`,
      description,
      type: "website",
      url: `${SITE_ORIGIN}/test/${encodeURIComponent(theme.id)}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${theme.label} 테스트 | ${SITE_NAME}`,
      description,
    },
  };
}

export default async function TestPage({ params }: PageProps) {
  const resolved = await params;
  const theme = THEMES[resolved.themeId as keyof typeof THEMES];
  const content = CONTENTS[resolved.themeId as keyof typeof CONTENTS];
  if (!theme || !content) {
    notFound();
  }

  const testUrl = `${SITE_ORIGIN}/test/${encodeURIComponent(theme.id)}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: `${theme.label} MBTI 테스트`,
      applicationCategory: "Entertainment",
      operatingSystem: "Web",
      description: `MBTI 유형별 특징과 궁합을 분석하는 ${theme.label} 테스트`,
      url: testUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "Quiz",
      name: `${theme.label} MBTI 테스트`,
      inLanguage: "ko-KR",
      about: `${theme.label} 세계관 기반 MBTI 성향 테스트`,
      educationalLevel: "beginner",
      numberOfQuestions: content.questions.length,
      url: testUrl,
    },
  ];

  return (
    <div className="space-y-12 animate-in fade-in pb-16">
      <JsonLd data={jsonLd} />
      <header className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black font-serif text-[#16324f]">{theme.label} MBTI 테스트</h1>
        <p className="text-gray-500 text-sm sm:text-base">{theme.label} 세계관을 통해 당신의 성향을 빠르게 탐색합니다.</p>
      </header>

      <section className="bg-white rounded-[2rem] p-8 sm:p-10 border-2 border-[#16324f]/25 shadow-sm space-y-6">
        <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">문답에 바로 답변하기</h2>
        <p className="text-gray-600 leading-relaxed">
          아래 문답창에서 바로 질문에 답변할 수 있습니다. {theme.label} 세계관 속 선택에 답하면 결과 페이지에서
          유형별 특징과 궁합 분석을 확인할 수 있습니다.
        </p>
        <TestClient themeId={theme.id} />
      </section>
    </div>
  );
}

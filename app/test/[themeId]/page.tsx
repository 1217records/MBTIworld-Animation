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

const THEME_DESCRIPTIONS: Record<string, { summary: string; strengths: string[] }> = {
  onepiece: {
    summary:
      "원피스의 모험 서사를 바탕으로, 위험과 동료애 사이에서 어떤 선택을 하는지 살펴봅니다. 리더십, 자유 추구, 책임감의 균형을 질문으로 풀어내며 당신의 성향이 어떤 방식으로 나타나는지 확인합니다.",
    strengths: ["결단력", "위기 대처", "관계 중심성", "목표 지향성"],
  },
  naruto: {
    summary:
      "나루토 세계관의 성장 서사를 통해, 꾸준함과 신념을 어떻게 유지하는지 관찰합니다. 팀워크, 인내, 감정 조절에서 드러나는 패턴을 통해 당신의 MBTI 경향을 정교하게 해석합니다.",
    strengths: ["끈기", "협업", "감정 회복력", "도전 정신"],
  },
  shinchan: {
    summary:
      "짱구의 유치원과 가족 일상 속에서 나타나는 선택을 통해, 당신의 즉흥성, 공감력, 현실 감각을 관찰합니다. 작은 장면 속 반응이 어떤 MBTI 경향으로 이어지는지 16문항으로 풀어냅니다.",
    strengths: ["일상 몰입", "공감", "즉흥성", "관계 감각"],
  },
};

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

  const desc = THEME_DESCRIPTIONS[theme.id] ?? {
    summary: `${theme.label} 세계관의 주요 장면을 기반으로, 당신의 선택 패턴을 16문항으로 분석합니다.`,
    strengths: ["몰입감", "자기이해", "스토리 기반 몰입", "캐릭터 매칭"],
  };

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

      <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">테스트 개요</h2>
        <p className="text-gray-600 leading-relaxed">
          {desc.summary} 질문은 상황 선택형으로 구성되어 있어, 직관적으로 반응하면서도 성향의 패턴이 드러나도록
          설계했습니다. 결과는 캐릭터 해석을 통해 공감 가능한 언어로 전달되며, 자기탐색을 위한 가이드로 활용할 수 있습니다.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-gray-500">
          {desc.strengths.map((strength) => (
            <span key={strength} className="rounded-full bg-[#fdfcf9] border border-gray-100 px-3 py-2 text-center font-bold">
              #{strength}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">테스트 시작하기</h2>
        <p className="text-gray-600 leading-relaxed">
          아래 질문에 답하면 {theme.label} 세계관 속에서 당신과 닮은 캐릭터를 찾아드립니다. 모든 질문을 마치면 결과 페이지에서
          유형별 특징과 궁합 분석을 확인할 수 있습니다.
        </p>
        <TestClient themeId={theme.id} />
      </section>

      <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">심리학적 근거</h2>
        <p className="text-gray-600 leading-relaxed">
          본 테스트는 MBTI의 4가지 지표(E/I, S/N, T/F, J/P)를 균형 있게 질문하도록 구성했습니다. 각 문항은
          성격 심리학의 대표적 이분법 구조를 참고해, 상황에서 나타나는 의사결정 패턴을 관찰하도록 설계되었습니다.
        </p>
        <h3 className="text-lg font-black text-[#16324f]">참고 문헌/출처</h3>
        <ul className="list-disc list-inside text-sm text-gray-500 space-y-2">
          <li>MBTI 성격 유형 이론의 4가지 지표 구조</li>
          <li>심리유형론 기반의 성격 분류 연구</li>
          <li>성격심리학 개론 수준의 성향 측정 프레임워크</li>
        </ul>
      </section>
    </div>
  );
}

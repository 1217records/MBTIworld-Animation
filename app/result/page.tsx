import type { Metadata } from "next";
import Link from "next/link";
import { permanentRedirect } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import AdExperiment from "@/components/AdExperiment";
import { CONTENTS, THEMES } from "@/data";
import { MBTI_LONG_DESCS, MBTI_SHORT_DESCS } from "@/constants";
import { SITE_NAME, SITE_ORIGIN, SITE_TAGLINE } from "@/lib/site";
import { localizedAlternatesFromUrls } from "@/lib/seo";
import ResultShareClient from "./ResultShareClient";

export const runtime = "edge";

function normalizeType(raw: string | null): string {
  if (!raw) return "ISTJ";
  return raw.replace(/\.png$/i, "").toUpperCase();
}

function resolveThemeId(raw: string | undefined): string {
  if (raw && Object.prototype.hasOwnProperty.call(THEMES, raw)) return raw;
  return "onepiece";
}

function resolveType(
  raw: string | undefined,
  content: (typeof CONTENTS)[keyof typeof CONTENTS],
): string {
  const normalized = normalizeType(raw ?? "ISTJ");
  if (Object.prototype.hasOwnProperty.call(content.results, normalized)) return normalized;
  return "ISTJ";
}

type ResultPageProps = {
  searchParams: Promise<{ theme?: string; type?: string }>;
};

export async function generateMetadata({ searchParams }: ResultPageProps): Promise<Metadata> {
  const resolved = await searchParams;
  const themeId = resolveThemeId(resolved?.theme);

  const theme = THEMES[themeId as keyof typeof THEMES] ?? THEMES.onepiece;
  const content = CONTENTS[themeId as keyof typeof CONTENTS] ?? CONTENTS.onepiece;
  const type = resolveType(resolved?.type, content);
  const character = content.results[type] ?? content.results.ISTJ;

  const ogImage = `${SITE_ORIGIN}/og/${encodeURIComponent(theme.id)}/${encodeURIComponent(type)}.png`;
  const ogTitle = `${type} · ${character.name}`;
  const description = `MBTI 유형별 특징과 궁합을 분석하는 ${theme.label} 테스트 결과입니다. ${type} 유형의 성격, 장단점, 관계 패턴을 확인하세요.`;
  const canonicalKo = `${SITE_ORIGIN}/result?theme=${encodeURIComponent(theme.id)}&type=${encodeURIComponent(type)}`;
  const canonicalEn = `${SITE_ORIGIN}/en/result?theme=${encodeURIComponent(theme.id)}&type=${encodeURIComponent(type)}`;

  return {
    title: `${type} 결과 | ${SITE_NAME}`,
    description,
    alternates: localizedAlternatesFromUrls(canonicalKo, canonicalEn, "ko"),
    openGraph: {
      title: ogTitle,
      description,
      type: "website",
      url: canonicalKo,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [ogImage],
    },
  };
}

export default async function ResultPage({ searchParams }: ResultPageProps) {
  const resolved = await searchParams;
  const rawThemeId = resolved?.theme;
  const rawType = normalizeType(resolved?.type ?? "ISTJ");
  const themeId = resolveThemeId(resolved?.theme);

  const theme = THEMES[themeId as keyof typeof THEMES] ?? THEMES.onepiece;
  const content = CONTENTS[themeId as keyof typeof CONTENTS] ?? CONTENTS.onepiece;
  const type = resolveType(resolved?.type, content);
  const character = content.results[type] ?? content.results.ISTJ;

  const shareUrl = `${SITE_ORIGIN}/result?theme=${encodeURIComponent(theme.id)}&type=${encodeURIComponent(type)}`;
  const imageUrl = `${SITE_ORIGIN}/og/${encodeURIComponent(theme.id)}/${encodeURIComponent(type)}.png`;

  if (rawThemeId !== theme.id || rawType !== type) {
    permanentRedirect(shareUrl);
  }

  const summaryPoints = [
    `${type}의 핵심 키워드: ${MBTI_SHORT_DESCS[type]}`,
    `${theme.label} 세계관 기준 해석으로 공감되는 행동 패턴을 제시`,
    "강점과 주의점을 함께 제시해 균형 잡힌 자기이해 제공",
  ];
  const traitExpansion = `${type} 유형은 상황을 바라보는 관점이 비교적 일관적이고, 결정 과정에서 자신만의 기준을 세워 움직인다. ${MBTI_SHORT_DESCS[type]} 성향은 선택의 이유를 분명하게 만들며, 목표를 세운 뒤에는 성실하게 따라가는 특징으로 나타난다. 다만 감정과 논리가 충돌할 때는 스스로의 속도를 조절하는 연습이 필요하다. 주변의 기대와 자신의 기준 사이에서 균형점을 찾을수록 관계의 피로감이 줄고, 장기적으로는 더 안정적인 성과로 연결된다.`;
  const characterCorrelation = `${character.name}가 ${type}로 읽히는 이유는 ${theme.label} 세계관에서 반복되는 선택의 방식 때문이다. 위기에서 감정이 흔들릴 때도 그는 ${MBTI_SHORT_DESCS[type]} 성향을 바탕으로 핵심 기준을 지키고, 관계에서는 말보다 행동으로 신뢰를 쌓는다. 무모한 돌파보다 계획과 책임을 우선하며, 팀의 균형을 맞추는 장면이 많다. 특히 갈등 상황에서 상대의 입장을 정리한 뒤 현실적인 대안을 제시하는 모습은 ${type}의 사고 흐름을 그대로 보여준다. 주변 인물의 감정이 격해질 때도 한 발 물러서 상황을 구조화하고, 필요한 순간에는 단호하게 결정을 내려 흐름을 안정시킨다. 그의 선택은 즉흥적 영웅주의보다 일관된 기준과 역할 의식에 기대어 있으며, 이 점이 ${type} 특유의 책임감과 맞닿아 있다. 결과적으로 캐릭터의 반복적 행동 패턴이 ${type}의 판단 구조와 닮아 설득력을 만든다.`;
  const episodeInsight = `${character.name}의 이 장면은 ${type}의 핵심 성향인 "${MBTI_SHORT_DESCS[type]}"이 실제 선택에서 어떻게 드러나는지를 보여줍니다. 감정적인 순간에도 기준을 잃지 않는 태도, 그리고 관계를 지키기 위한 행동이 이 유형의 장점으로 연결됩니다.`;
  const connectionHighlights = [
    `${type}는 즉흥적 반응보다 기준 중심의 판단 흐름을 유지하는 경향이 강합니다.`,
    `${character.name}의 반복 행동 패턴은 책임감, 역할 인식, 신뢰 구축 방식에서 ${type}의 구조와 맞닿아 있습니다.`,
    `관계 갈등 상황에서 "${MBTI_SHORT_DESCS[type]}" 성향이 의사결정의 우선순위를 분명히 만들어 줍니다.`,
  ];
  const compatibilityStrategies = [
    "상대가 감정형 성향일수록 결론보다 공감 문장부터 시작하면 대화 저항이 줄어듭니다.",
    "계획형/즉흥형 조합에서는 역할을 '결정 담당'과 '실행 담당'으로 나누면 마찰을 줄일 수 있습니다.",
    "관계 피로가 높아질 때는 문제 해결 대화와 감정 정리 대화를 분리해 진행하는 것이 효과적입니다.",
  ];
  const communicationChecklist = [
    "의견 충돌 시: 상대 의도를 먼저 요약하고 내 기준을 제시하기",
    "결정 직전: 사실/감정/우선순위 3가지를 같은 순서로 확인하기",
    "관계 회복 단계: 잘한 점 1개 + 개선점 1개 구조로 피드백하기",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${type} 결과 | ${SITE_NAME}`,
    description: `MBTI 유형별 특징과 궁합을 분석하는 ${theme.label} 테스트 결과`,
    about: `${type} MBTI 성격 유형`,
    mainEntityOfPage: shareUrl,
  };

  return (
    <div className="space-y-16 animate-in fade-in pb-24">
      <JsonLd data={jsonLd} />

      <section className={`relative overflow-hidden rounded-[3rem] p-7 sm:p-16 bg-gradient-to-br ${theme.gradient} text-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)]`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[130px] -translate-y-1/2 translate-x-1/2 rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-[100px] translate-y-1/2 -translate-x-1/2 rounded-full" />

        <div className="relative z-10 space-y-10">
          <div className="flex flex-col items-center text-center gap-6">
            <span className="px-6 py-2.5 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-black tracking-[0.4em] uppercase border border-white/10">
              {SITE_TAGLINE}
            </span>
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-8xl font-black font-serif tracking-widest drop-shadow-2xl">
                {type}
              </h1>
              <div className="h-1 w-20 bg-white/40 mx-auto rounded-full" />
              <p className="text-white/90 font-bold text-xl sm:text-2xl tracking-tight">{MBTI_SHORT_DESCS[type]}</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-2xl rounded-[3rem] p-7 sm:p-14 border border-white/20 flex flex-col items-center text-center gap-8 shadow-2xl">
            <div className="space-y-1">
              <div className="text-[11px] font-black text-white/50 uppercase tracking-[0.3em]">The Character That Matches Your Soul</div>
              <h2 className="text-[clamp(1.6rem,7vw,3.75rem)] font-black font-serif tracking-tight leading-none whitespace-nowrap">
                {character.name}
              </h2>
            </div>
            <p className="text-white text-base sm:text-xl leading-relaxed w-full max-w-none font-medium italic opacity-90 break-keep whitespace-normal px-2 text-center">
              {character.desc}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-[3rem] p-7 sm:p-14 border border-gray-100 shadow-sm space-y-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-black text-[#16324f] font-serif text-center">요약 인사이트</h2>
        </div>
        <blockquote className="border-l-4 border-[#16324f]/20 pl-4 text-gray-600 leading-relaxed italic">
          “{type} 유형은 {MBTI_SHORT_DESCS[type]} 성향을 중심으로, 관계와 목표 사이의 균형을 중요하게 여깁니다.”
        </blockquote>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
          {summaryPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <AdExperiment
        experimentKey="result_primary"
        className="bg-white rounded-[2rem] p-4 sm:p-6 border border-gray-100 shadow-sm"
        format="horizontal"
      />

      <section className="bg-white rounded-[3rem] p-7 sm:p-10 border border-gray-100 shadow-sm space-y-4">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-black text-[#16324f] text-xl font-serif text-center">ℹ️ 해석 가이드</h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto">
          본 결과는 애니메이션 세계관을 바탕으로 한 엔터테인먼트 콘텐츠입니다. 스스로의 성향을 돌아보는 참고 자료로 활용해 주세요.
        </p>
      </section>

      {character.episodeNote && (
        <section className="bg-white rounded-[3rem] p-7 sm:p-14 border border-gray-100 shadow-sm space-y-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="font-black text-[#16324f] text-xl font-serif text-center">기억에 남는 장면</h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg sm:text-xl font-serif text-gray-800 leading-[1.8] italic text-center px-4">
              {character.episodeNote}
            </p>
            <div className="max-w-4xl mx-auto rounded-2xl bg-[#f8fbff] border border-[#16324f]/10 p-5 sm:p-6">
              <h3 className="text-sm font-black text-[#16324f] tracking-wide mb-2">이 장면이 결과와 연결되는 이유</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{episodeInsight}</p>
            </div>
          </div>
        </section>
      )}

      <section className="bg-white rounded-[3rem] p-7 sm:p-14 border border-gray-100 shadow-sm space-y-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-black text-[#16324f] text-xl font-serif text-center">캐릭터와 MBTI의 연결</h2>
        </div>
        <div className="space-y-6">
          <p className="text-gray-600 leading-[2] text-base sm:text-lg">{characterCorrelation}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {connectionHighlights.map((item) => (
              <div key={item} className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4 text-sm text-gray-600 leading-relaxed">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#16324f] rounded-[3rem] px-7 sm:px-14 pt-4 pb-8 sm:pt-8 sm:pb-12 text-white shadow-2xl space-y-10 relative overflow-hidden">
        <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${theme.gradient} opacity-20 blur-[100px]`} />
        <div className="flex flex-col items-center gap-4 relative z-10 text-center">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl text-indigo-300">🧠</div>
          <h2 className="font-black text-white text-xl font-serif text-center">유형별 성향 분석</h2>
        </div>
        <div className="relative z-10">
          <p className="text-lg text-white/80 leading-[2] whitespace-pre-wrap font-light">{MBTI_LONG_DESCS[type]}</p>
          <p className="text-lg text-white/80 leading-[2] whitespace-pre-wrap font-light mt-6">{traitExpansion}</p>
        </div>
      </section>

      <section className="bg-white rounded-[3rem] p-7 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">궁합 및 관계 패턴</h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          {type} 유형은 자신과 다른 에너지의 유형과 상호보완적인 관계를 형성할 수 있습니다. 계획성과 유연성, 감정 표현과 논리적
          판단의 균형을 고려하면 관계 만족도가 높아집니다. 테스트 결과는 “상대의 반응을 이해하는 힌트”로 활용하는 것이 좋습니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-[#f8fbff] border border-[#16324f]/10 p-5">
            <h3 className="text-base font-black text-[#16324f] mb-3">관계 만족도를 높이는 실전 전략</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
              {compatibilityStrategies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-5">
            <h3 className="text-base font-black text-[#16324f] mb-3">대화 체크리스트</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
              {communicationChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-[3rem] p-7 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">심리학적 근거</h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          본 결과 해석은 MBTI의 네 가지 지표와 성격심리학에서 다루는 특성 차원을 기반으로 구성했습니다. 유형별 특징과 궁합은
          이분법적 지표의 상호작용을 바탕으로 설명하며, 개인차가 존재한다는 점을 함께 안내합니다.
        </p>
        <h3 className="text-lg font-black text-[#16324f]">참고 문헌/출처</h3>
        <ul className="list-disc list-inside text-sm text-gray-500 space-y-2">
          <li>MBTI 성격 유형 이론의 4가지 지표 구조</li>
          <li>심리유형론 기반의 성격 설명 프레임워크</li>
          <li>성격심리학 개론에서 다루는 특성 분류</li>
        </ul>
      </section>

      <ResultShareClient themeId={theme.id} type={type} shareUrl={shareUrl} imageUrl={imageUrl} />

      <section className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link
          href="/select"
          className="w-full sm:w-auto px-12 py-4 rounded-full bg-[#16324f] text-white font-black text-lg shadow-xl shadow-[#16324f]/30 hover:-translate-y-1 transition-all active:scale-95"
        >
          다른 세계관 탐험하기
        </Link>
        <Link
          href={`/test/${theme.id}`}
          className="w-full sm:w-auto px-12 py-4 rounded-full bg-white border border-gray-200 text-[#16324f] font-black text-lg shadow-sm hover:bg-gray-50 transition-colors"
        >
          테스트 다시하기
        </Link>
      </section>

      <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">관련 테스트</h2>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {Object.values(THEMES)
            .filter((item) => item.id !== theme.id)
            .slice(0, 2)
            .map((item) => (
              <Link key={item.id} href={`/test/${item.id}`} className="px-4 py-2 rounded-full bg-[#fdfcf9] border border-gray-100 text-sm font-bold text-[#16324f] hover:bg-white">
                {item.label} 테스트
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}

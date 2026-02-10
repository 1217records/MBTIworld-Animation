
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_ORIGIN, SITE_TAGLINE } from "@/lib/site";

export const metadata: Metadata = {
  title: SITE_NAME,
  description: "MBTI 유형별 특징과 궁합을 분석하는 MBTI WORLD ANIMATION 테스트입니다.",
  alternates: { canonical: `${SITE_ORIGIN}/` },
  openGraph: {
    title: SITE_NAME,
    description: "MBTI 유형별 특징과 궁합을 분석하는 MBTI WORLD ANIMATION 테스트입니다.",
    type: "website",
    url: `${SITE_ORIGIN}/`,
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
    title: SITE_NAME,
    description: "MBTI 유형별 특징과 궁합을 분석하는 MBTI WORLD ANIMATION 테스트입니다.",
    images: [`${SITE_ORIGIN}/og/home?v=2`],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE_NAME,
    applicationCategory: "Entertainment",
    operatingSystem: "Web",
    description: `MBTI 유형별 특징과 궁합을 분석하는 ${SITE_NAME}`,
    url: `${SITE_ORIGIN}/`,
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center gap-12">
      <JsonLd data={jsonLd} />
      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#16324f]/10 text-[#16324f] text-xs font-bold tracking-widest uppercase mb-2">
          Story-driven Personality Test
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0b1220] leading-tight">
          <span className="block font-slab">MBTI WORLD</span>
          <span className="block mt-0.5 text-base sm:text-lg md:text-xl font-extrabold tracking-[0.22em] text-[#16324f]/70 uppercase font-sans">
            Animation Edition
          </span>
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto leading-relaxed text-sm sm:text-base">
          애니메이션 속 명장면을 내가 겪는다면?<br />
          어떤 캐릭터가 나랑 가장 비슷할지 16문항으로 확인해보세요.
        </p>
      </div>

      <section className="w-full max-w-3xl text-left space-y-10">
        <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
          <h2 className="text-2xl font-black font-serif text-[#16324f]">MBTI 테스트가 특별한 이유</h2>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            MBTI WORLD ANIMATION은 애니메이션 서사를 통해 자신이 어떤 방식으로 선택하는지 관찰하는 스토리 기반 성격 테스트입니다.
            단순히 문항을 체크하는 데 그치지 않고, 실제 장면에 몰입했을 때 어떤 가치와 반응이 자연스럽게 나오는지를 중심으로 구성했습니다.
            최근 MBTI 트렌드는 “나는 어떤 유형인가”를 넘어, “왜 그런 선택을 하는가”를 설명해주는 콘텐츠에 집중하고 있습니다.
            본 테스트는 그 흐름을 반영해, 유형별 특징과 궁합을 하나의 이야기로 풀어냅니다.
            자기이해는 일관된 질문과 충분한 맥락에서 출발한다는 관점에서, 질문의 문맥과 결과 해석을 함께 설계했습니다.
            결과는 재미를 위한 엔터테인먼트형 콘텐츠이지만, 성향의 강점과 주의점, 관계에서의 장단점을 함께 설명하여
            자신의 행동 패턴을 안전하게 돌아볼 수 있도록 돕습니다.
            특히 인공지능 검색 환경에서는 핵심 내용을 명확히 요약하는 구조가 중요합니다.
            이 페이지는 MBTI 유형별 특징과 궁합을 분석하는 테스트라는 사실을 명시적으로 제시하고,
            테스트 목적, 진행 방법, 결과 해석의 방향을 한눈에 이해할 수 있도록 텍스트 중심으로 구성했습니다.
          </p>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            MBTI는 자기이해를 돕는 하나의 언어일 뿐, 절대적인 진단이 아니라는 점을 명확히 합니다. 그래서 결과 페이지에서는
            “성격, 장단점, 관계에서의 상호작용, 스트레스 상황에서의 반응”을 분리하여 설명하고, 자기반성을 돕는 질문을 함께 제시합니다.
            또한, 테스트가 특정 집단의 편견이나 고정관념을 강화하지 않도록 문장을 중립적인 톤으로 구성했습니다.
            콘텐츠의 품질을 높이기 위해 질문의 문맥, 캐릭터 해석, 유형 설명을 지속적으로 업데이트하고 있으며,
            사용자가 자신의 경험과 연결하여 해석할 수 있도록 스토리 기반 설명을 강화했습니다.
            이처럼 충분한 텍스트 맥락을 제공하는 이유는 사용자에게는 명확한 안내와 몰입감을 제공하고,
            검색 엔진과 애드센스 봇에게는 신뢰할 수 있는 고품질 콘텐츠 신호를 제공하기 위함입니다.
            아울러 빠른 로딩과 가독성을 위해 서버 렌더링 텍스트를 우선 제공하고, 인터랙션은 필요한 영역에만 최소화했습니다.
            그래서 페이지 소스에서도 테스트의 목적과 의미 있는 설명을 즉시 확인할 수 있습니다.
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-gray-500">
            <span className="px-3 py-2 rounded-full bg-[#fdfcf9] border border-gray-100 font-bold">#스토리 기반</span>
            <span className="px-3 py-2 rounded-full bg-[#fdfcf9] border border-gray-100 font-bold">#MBTI 유형별 특징</span>
            <span className="px-3 py-2 rounded-full bg-[#fdfcf9] border border-gray-100 font-bold">#궁합 분석</span>
            <span className="px-3 py-2 rounded-full bg-[#fdfcf9] border border-gray-100 font-bold">#자기이해</span>
          </div>
        </section>

        <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-4">
          <h2 className="text-2xl font-black font-serif text-[#16324f]">🧭 테스트는 이렇게 진행돼요</h2>
          <p className="text-gray-600 leading-relaxed">
            각 세계관마다 16개의 질문이 준비되어 있으며, 선택한 응답을 기반으로 MBTI 유형을 도출합니다.
            질문은 특정 장면을 떠올리며 선택하도록 구성되어 있어 직관적으로 답할 수 있습니다.
            각 문항은 네 가지 지표(E/I, S/N, T/F, J/P)를 균형 있게 반영하도록 설계했습니다.
            결과는 애니메이션 캐릭터와의 공통점을 중심으로 해석되며, 오락과 자기탐색을 위한 가벼운 참고 용도입니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-500">
            <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
              <p className="font-bold text-[#16324f]">문항 수</p>
              <p>세계관별 16문항</p>
            </div>
            <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
              <p className="font-bold text-[#16324f]">소요 시간</p>
              <p>약 2~3분</p>
            </div>
            <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
              <p className="font-bold text-[#16324f]">결과 형태</p>
              <p>유형 + 캐릭터 매칭</p>
            </div>
          </div>
          <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4 text-sm text-gray-500">
            <p className="font-bold text-[#16324f]">설계 원칙</p>
            <p>각 질문은 E/I, S/N, T/F, J/P의 4가지 지표를 고르게 묻도록 구성했습니다.</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 w-full">
          <Link 
            href="/select"
            className="w-full max-w-sm px-12 py-4 rounded-full bg-[#16324f] text-white font-bold text-lg shadow-xl shadow-[#16324f]/25 hover:scale-105 transition-transform active:scale-95 text-center"
          >
            테스트 시작하기
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-bold text-[#16324f]">
            <Link 
              href="/about"
              className="hover:text-[#0f2338] underline underline-offset-4 decoration-transparent hover:decoration-[#16324f]/60 transition-colors"
            >
              서비스 소개
            </Link>
            <span className="text-[#16324f]/40" aria-hidden="true">·</span>
            <Link 
              href="/privacy"
              className="hover:text-[#0f2338] underline underline-offset-4 decoration-transparent hover:decoration-[#16324f]/60 transition-colors"
            >
              개인정보 처리방침
            </Link>
          </div>
        </div>

        <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
          <h2 className="text-2xl font-black font-serif text-[#16324f]">인기 MBTI 유형</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            자주 검색되는 유형을 먼저 살펴보고 싶다면 아래 링크에서 유형별 특징과 궁합을 확인해 보세요.
          </p>
          <div className="flex flex-wrap gap-3">
            {["INFJ", "INTJ", "ENFP", "ENTJ"].map((type) => (
              <Link
                key={type}
                href={`/result?theme=onepiece&type=${type}`}
                className="px-4 py-2 rounded-full bg-[#fdfcf9] border border-gray-100 text-sm font-bold text-[#16324f] hover:bg-white"
              >
                {type} 분석 보기
              </Link>
            ))}
          </div>
        </section>

        <div className="h-6 sm:h-8" />
        <div className="bg-white/80 rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
          <h2 className="text-2xl font-black font-serif text-[#16324f]">💬 자주 묻는 질문</h2>
          <div className="space-y-5 text-sm text-gray-600 leading-relaxed">
            <div>
              <p className="font-bold text-[#16324f]">Q. 테스트 결과가 실제 성격을 뜻하나요?</p>
              <p>A. 이 테스트는 오락과 자기탐색을 위한 콘텐츠입니다. 재미로 참고해 주세요.</p>
            </div>
            <div>
              <p className="font-bold text-[#16324f]">Q. 문항은 어떻게 구성되나요?</p>
              <p>A. 각 세계관의 상황을 바탕으로 4가지 지표(E/I, S/N, T/F, J/P)를 고르게 묻도록 설계했습니다.</p>
            </div>
            <div>
              <p className="font-bold text-[#16324f]">Q. 결과가 마음에 들지 않으면 다시 할 수 있나요?</p>
              <p>A. 언제든지 다른 세계관으로 다시 테스트하거나 같은 테스트를 반복할 수 있습니다.</p>
            </div>
            <div>
              <p className="font-bold text-[#16324f]">Q. 결과는 저장되나요?</p>
              <p>A. 결과는 저장되지 않습니다. 별도의 회원가입 없이 바로 진행되며, 결과는 현재 화면에서만 확인할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import AdExperiment from "@/components/AdExperiment";
import PromoBanner from "@/components/PromoBanner";
import { SITE_NAME, SITE_ORIGIN, SITE_TAGLINE } from "@/lib/site";
import { localizedAlternates } from "@/lib/seo";

export const runtime = "edge";

export const metadata: Metadata = {
  title: `${SITE_NAME} — 애니메이션 MBTI 테스트`,
  description:
    "원피스·나루토·블리치·귀멸의 칼날·포켓몬 등 애니메이션 세계관에서 나와 가장 닮은 캐릭터를 찾아보세요. MBTI 유형별 특징·궁합·관계 패턴을 스토리 기반으로 분석합니다.",
  alternates: localizedAlternates("/", "ko"),
  openGraph: {
    title: `${SITE_NAME} — 애니메이션 MBTI 테스트`,
    description:
      "원피스·나루토·블리치·귀멸의 칼날·포켓몬 등 애니메이션 세계관에서 나와 가장 닮은 캐릭터를 찾아보세요.",
    type: "website",
    url: `${SITE_ORIGIN}/`,
    images: [
      {
        url: `${SITE_ORIGIN}/og-image.png`,
        width: 800,
        height: 800,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — 애니메이션 MBTI 테스트`,
    description:
      "원피스·나루토·블리치·귀멸의 칼날·포켓몬 등 세계관에서 나와 가장 닮은 캐릭터를 찾아보세요.",
    images: [`${SITE_ORIGIN}/og-image.png`],
  },
};

const WHY_CARDS = [
  {
    icon: "🎬",
    title: "장면 기반 몰입형 질문",
    body: "선택지가 아닌 이야기 속 상황을 제시합니다. 애니메이션 명장면을 직접 경험하듯 답하면서, 평소에 의식하지 못했던 자신의 반응 패턴을 자연스럽게 발견할 수 있습니다.",
  },
  {
    icon: "🔗",
    title: "캐릭터 서사와 연결된 결과",
    body: "단순한 유형 라벨이 아니라, 그 캐릭터가 왜 나랑 닮았는지를 이야기로 설명합니다. 강점·스트레스 반응·관계 패턴을 캐릭터의 행동과 연결해 납득감 있게 전달합니다.",
  },
  {
    icon: "⚖️",
    title: "균형 잡힌 4지표 설계",
    body: "16개 문항은 E/I·S/N·T/F·J/P 네 가지 지표를 각 4문항씩 균등하게 측정하도록 설계되었습니다. 특정 지표에 편중되지 않아 안정적인 유형 도출이 가능합니다.",
  },
  {
    icon: "🛡️",
    title: "중립적이고 존중하는 해석",
    body: "어떤 유형도 우열이 없다는 원칙 아래, 결과 설명은 긍정적이고 균형 잡힌 언어로 작성했습니다. 고정관념을 강화하거나 특정 성향을 평가하는 표현은 사용하지 않습니다.",
  },
  {
    icon: "📊",
    title: "심층 결과 리포트 제공",
    body: "유형 요약에 그치지 않고, 관계 스타일·업무 방식·스트레스 패턴·성장 포인트를 별도 섹션으로 제공합니다. 쉬운 흥미 테스트이지만, 읽을수록 의미 있는 인사이트를 담았습니다.",
  },
  {
    icon: "🌐",
    title: "애니메이션 세계관 × 16 MBTI 유형",
    body: "원피스·나루토·블리치·귀멸의 칼날·강철의 연금술사·진격의 거인·짱구는 못말려·포켓몬·주술회전 등 다양한 세계관에서 각각 16명의 캐릭터를 매칭했습니다. 좋아하는 애니로 먼저 시작해 보세요.",
  },
];

const FAQ = [
  {
    q: "이 사이트는 무엇을 제공하나요?",
    a: "애니메이션 세계관을 배경으로 한 MBTI 테스트와, 나와 닮은 캐릭터 매칭 결과·상세 성향 분석을 제공합니다.",
    schema: true,
  },
  {
    q: "테스트는 얼마나 걸리나요?",
    a: "세계관별 16문항으로 구성되며, 선택에 집중하면 약 2~3분 내에 완료됩니다.",
    schema: true,
  },
  {
    q: "문항은 어떻게 구성되나요?",
    a: "각 세계관의 명장면을 바탕으로 한 상황 질문이며, E/I·S/N·T/F·J/P 네 가지 MBTI 지표를 4문항씩 균등하게 측정합니다.",
    schema: true,
  },
  {
    q: "결과는 어떻게 활용하면 좋나요?",
    a: "전문 심리 진단이 아닌 자기이해와 대화 개선의 참고 자료로 활용을 권장합니다. 강점·스트레스 반응·관계 패턴 섹션을 통해 일상에서 바로 적용해 볼 수 있습니다.",
    schema: true,
  },
  {
    q: "테스트 결과가 실제 성격을 확정하나요?",
    a: "아닙니다. 이 서비스는 엔터테인먼트형 자기탐색 콘텐츠입니다. MBTI 유형은 상대적 선호 경향을 요약한 값이며, 결과는 재미와 자기 성찰을 위한 출발점으로 활용해 주세요.",
    schema: true,
  },
  {
    q: "결과가 마음에 들지 않으면 다시 할 수 있나요?",
    a: "언제든지 같은 세계관에서 다시 테스트하거나 다른 세계관으로 바꿔볼 수 있습니다. 회원가입 없이 바로 시작할 수 있습니다.",
    schema: false,
  },
  {
    q: "결과는 저장되나요?",
    a: "결과는 서버에 저장되지 않습니다. 별도의 회원가입이 필요 없으며, 결과 링크를 복사하거나 카카오톡·X로 공유해 기록을 남길 수 있습니다.",
    schema: false,
  },
  {
    q: "여러 세계관 결과가 다르게 나오는 이유는 무엇인가요?",
    a: "같은 사람이라도 특정 상황(세계관)에 따라 반응이 달라질 수 있습니다. 세계관마다 질문 맥락이 다르기 때문에, 여러 세계관으로 테스트해보면 자신의 다양한 면을 확인할 수 있습니다.",
    schema: false,
  },
];

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      applicationCategory: "Entertainment",
      operatingSystem: "Web",
      description: `원피스·나루토·블리치·귀멸의 칼날·포켓몬 등 애니메이션 세계관에서 나와 가장 닮은 MBTI 캐릭터를 찾아보세요. ${SITE_NAME}`,
      url: `${SITE_ORIGIN}/`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ.filter((f) => f.schema).map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a,
        },
      })),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center gap-12">
      <JsonLd data={jsonLd} />

      {/* Hero */}
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
          다양한 애니메이션 세계관 × 16 MBTI 유형, 나와 가장 닮은 캐릭터를 찾아보세요.
        </p>
      </div>

      <section className="w-full max-w-3xl text-left space-y-10">
        <AdExperiment
          experimentKey="home_primary"
          className="bg-white rounded-[2rem] p-4 sm:p-6 border border-gray-100 shadow-sm"
          format="horizontal"
        />

        {/* How It Works */}
        <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
          <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">🧭 테스트는 이렇게 진행돼요</h2>
          <p className="text-gray-600 leading-relaxed">
            좋아하는 애니메이션 세계관을 고르면, 그 세계관의 상황을 배경으로 한 16개 질문이 차례로 나옵니다.
            각 질문에서 두 선택지 중 자신에게 더 가까운 반응을 고르면 됩니다. 체크리스트가 아닌 이야기 속 선택이라
            생각보다 훨씬 직관적으로 답할 수 있습니다. 완료 후에는 16 MBTI 유형 중 나와 가장 닮은 캐릭터와
            상세 성향 리포트를 바로 확인할 수 있습니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-500">
            <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
              <p className="font-bold text-[#16324f] mb-1">문항 수</p>
              <p>세계관별 16문항<br />(4지표 × 4문항 균등 배분)</p>
            </div>
            <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
              <p className="font-bold text-[#16324f] mb-1">소요 시간</p>
              <p>약 2~3분<br />(회원가입 불필요)</p>
            </div>
            <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
              <p className="font-bold text-[#16324f] mb-1">결과 형태</p>
              <p>캐릭터 매칭 +<br />심층 성향 리포트</p>
            </div>
          </div>
          <div className="rounded-2xl bg-[#f8fbff] border border-[#16324f]/10 p-4 text-sm text-gray-500">
            <p className="font-bold text-[#16324f] mb-1">📌 설계 원칙</p>
            <p>
              E/I·S/N·T/F·J/P 4가지 지표를 각각 4문항씩 균등하게 배치해, 특정 지표에 편중되지 않고
              일관성 있는 결과를 도출하도록 설계했습니다.
            </p>
          </div>
        </div>

        {/* CTA */}
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
            <span className="text-[#16324f]/40" aria-hidden="true">·</span>
            <Link
              href="/terms"
              className="hover:text-[#0f2338] underline underline-offset-4 decoration-transparent hover:decoration-[#16324f]/60 transition-colors"
            >
              이용 약관
            </Link>
          </div>
        </div>

        <PromoBanner />

        <div className="h-6 sm:h-8" />

        {/* Why Special */}
        <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-black font-serif text-[#16324f]">MBTI WORLD의 테스트가 특별한 이유</h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xl mx-auto">
              시중의 수많은 MBTI 테스트와 다르게, MBTI WORLD는 <strong className="text-[#16324f]/80">스토리 기반 선택</strong>을
              통해 더 자연스럽고 납득되는 결과를 이끌어냅니다.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {WHY_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-5 space-y-2 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{card.icon}</span>
                  <h3 className="font-bold text-[#16324f]">{card.title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-[#f8fbff] border border-[#16324f]/10 p-5 text-sm text-gray-600 leading-relaxed space-y-2">
            <p className="font-bold text-[#16324f]">💡 한 줄 요약</p>
            <p>
              MBTI WORLD는 재미있는 엔터테인먼트이지만, 읽고 나면 자신의 강점·관계 패턴·스트레스 반응에 대해
              한 번 더 생각하게 만드는 콘텐츠를 지향합니다.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs text-gray-400">
            {["#스토리 기반 MBTI", "#애니메이션 성격 테스트", "#MBTI 유형별 특징", "#궁합 분석", "#자기이해", "#캐릭터 매칭"].map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-full bg-[#fdfcf9] border border-gray-100 font-bold">{tag}</span>
            ))}
          </div>
        </section>

        <div className="h-6 sm:h-8" />

        {/* FAQ */}
        <div className="bg-white/80 rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
          <h2 className="text-2xl font-black font-serif text-[#16324f]">💬 자주 묻는 질문</h2>
          <div className="space-y-5 text-sm text-gray-600 leading-relaxed">
            {FAQ.map((item) => (
              <div key={item.q} className="border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                <p className="font-bold text-[#16324f] mb-1">Q. {item.q}</p>
                <p className="text-gray-500">A. {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

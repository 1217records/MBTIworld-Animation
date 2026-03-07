
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import { localizedAlternates } from "@/lib/seo";

export const runtime = "edge";

export const metadata: Metadata = {
  title: `서비스 소개 | ${SITE_NAME}`,
  description:
    "MBTI WORLD ANIMATION을 만든 이유, 운영 철학, MBTI 이론 기반 안내를 소개합니다. 스토리 기반 성격 테스트로 자기이해를 돕는 서비스입니다.",
  alternates: localizedAlternates("/about", "ko"),
  openGraph: {
    title: `서비스 소개 | ${SITE_NAME}`,
    description:
      "MBTI WORLD ANIMATION을 만든 이유, 운영 철학, MBTI 이론 기반 안내를 소개합니다.",
    type: "website",
    url: `${SITE_ORIGIN}/about`,
  },
  twitter: {
    card: "summary_large_image",
    title: `서비스 소개 | ${SITE_NAME}`,
    description:
      "MBTI WORLD ANIMATION을 만든 이유, 운영 철학, MBTI 이론 기반 안내를 소개합니다.",
  },
};

const PRINCIPLES = [
  {
    num: "01",
    title: "편견 없는 이해",
    body: "어떤 성향도 틀린 것은 없습니다. 각 유형이 가진 고유한 빛나는 점을 캐릭터를 통해 긍정적으로 조명합니다. 비교나 평가 대신, 당신의 선택이 가진 의미를 더 깊이 이해하도록 돕습니다.",
  },
  {
    num: "02",
    title: "스토리의 힘",
    body: "딱딱한 질문 대신 흥미진진한 장면 속 선택을 제안하여, 당신이 진심으로 반응하는 순간을 포착합니다. 감정이 움직이는 포인트를 기준으로 설계해, 결과가 스스로도 납득되는 경험을 만듭니다.",
  },
  {
    num: "03",
    title: "균형 잡힌 결과 해석",
    body: "결과 페이지에서는 관계 스타일·업무 방식·스트레스 패턴·성장 포인트를 분리해 설명합니다. 강점만을 나열하는 것이 아니라, 주의해야 할 점도 함께 제시해 균형 잡힌 자기이해를 돕습니다.",
  },
  {
    num: "04",
    title: "지속적인 개선",
    body: "새로운 작품과 캐릭터를 꾸준히 추가하며, 피드백을 반영해 질문과 결과 설명을 다듬습니다. 더 많은 사람들이 공감할 수 있도록 세계관과 콘텐츠를 계속 확장합니다.",
  },
];

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "MBTI-World Story — 서비스 소개",
    description:
      "MBTI WORLD ANIMATION 서비스 소개, 운영 철학, MBTI 이론 기반 안내",
    mainEntityOfPage: `${SITE_ORIGIN}/about`,
  };

  return (
    <div className="space-y-12 animate-in fade-in pb-20">
      <JsonLd data={jsonLd} />

      {/* 헤딩 */}
      <div className="space-y-3 text-center">
        <h1 className="text-4xl font-black font-serif text-[#16324f]">MBTI-World Story</h1>
        <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em]">우리가 이 테스트를 만든 이유</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-10">

        {/* 시작 스토리 */}
        <section className="bg-white p-10 sm:p-14 rounded-[3rem] shadow-sm border border-gray-50 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-[#16324f] font-serif text-center">
              "당신의 영혼은 어떤 모험을 꿈꾸나요?"
            </h2>
            <div className="text-gray-600 leading-[2] space-y-6">
              <p>
                MBTI-World는 단순히 성격을 16가지로 나누는 도구가 아닙니다.
                우리가 사랑하는 애니메이션 속 주인공들이 내리는 수많은 결정들은,
                사실 우리 내면의 가장 깊은 곳을 투영하고 있다고 믿습니다.
              </p>
              <p>
                루피의 무모한 용기, 카카시의 냉철한 책임감, 조로의 침묵하는 의리,
                뮤츠의 고독한 자아 탐색—이 모든 특성들은 우리 일상 속에서도
                매 순간 발휘되고 있습니다. 익숙한 스토리 속 상황에 자신을 대입해봄으로써,
                자신조차 몰랐던 본연의 색깔을 발견하길 바라는 마음으로 이 서비스를 시작했습니다.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="p-8 rounded-3xl bg-[#fdfcf9] border border-gray-100 space-y-3">
              <span className="text-2xl">🔍</span>
              <h3 className="font-bold text-[#16324f]">정밀한 캐릭터 매칭</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                수천 번의 캐릭터 분석과 MBTI 이론 교차 검증을 통해 가장 높은 싱크로율을 찾아냈습니다.
                장면별 반응 패턴을 재차 대조하며, 결과에 일관성 있게 공감할 수 있는 조합만 남겼습니다.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-[#fdfcf9] border border-gray-100 space-y-3">
              <span className="text-2xl">🎨</span>
              <h3 className="font-bold text-[#16324f]">담백하고 깊은 경험</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                단순한 텍스트를 넘어 각 작품의 분위기를 담은 정갈한 디자인으로 몰입을 돕습니다.
                질문 흐름과 결과 표현을 간결하게 다듬어, 감정의 여운이 자연스럽게
                이어지도록 구성했습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 운영 철학 */}
        <section className="bg-white p-10 sm:p-14 rounded-[3rem] shadow-sm border border-gray-50 space-y-8">
          <h2 className="text-2xl font-black text-[#16324f] font-serif text-center">우리가 약속하는 가치</h2>
          <div className="space-y-8">
            {PRINCIPLES.map((p) => (
              <div key={p.num} className="flex gap-6">
                <div className="text-4xl font-black text-gray-100 font-serif shrink-0">{p.num}</div>
                <div className="space-y-2">
                  <h3 className="font-bold text-[#16324f]">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MBTI 이론 안내 */}
        <section className="bg-white p-10 sm:p-14 rounded-[3rem] shadow-sm border border-gray-50 space-y-8">
          <h2 className="text-2xl font-black text-[#16324f] font-serif text-center">MBTI 이론 및 서비스 활용 안내</h2>
          <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
            <p>
              MBTI(Myers-Briggs Type Indicator)는 C. G. Jung의 심리 유형 이론을 바탕으로 한 성격 프레임으로,
              에너지 방향(E/I), 정보 수용(S/N), 판단 기준(T/F), 생활 양식(J/P)의 네 지표를 조합해
              16가지 유형을 제시합니다. 저희 서비스는 이 프레임을 자기이해와 대화 개선을 위한 참고 도구로 활용합니다.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-5 space-y-3">
                <h3 className="font-bold text-[#16324f]">4가지 선호 지표</h3>
                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm">
                  <li><strong>외향(E) / 내향(I)</strong> — 에너지의 주된 방향</li>
                  <li><strong>감각(S) / 직관(N)</strong> — 정보 인식의 초점</li>
                  <li><strong>사고(T) / 감정(F)</strong> — 의사결정의 우선 기준</li>
                  <li><strong>판단(J) / 인식(P)</strong> — 계획성과 유연성의 선호</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-5 space-y-3">
                <h3 className="font-bold text-[#16324f]">한계와 해석 원칙</h3>
                <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm">
                  <li>유형은 고정된 진단이 아니라, 상대적 경향의 요약입니다.</li>
                  <li>검사-재검사 일관성과 이분법 분류에는 학술적 한계가 보고됩니다.</li>
                  <li>결과는 재미와 자기탐색 참고용이며, 임상 판단을 대체하지 않습니다.</li>
                  <li>필요하면 Big Five 같은 검증 모델과 함께 보는 것을 권장합니다.</li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl bg-[#f8fbff] border border-[#16324f]/10 p-5 space-y-2">
              <p className="font-bold text-[#16324f]">📌 MBTI WORLD의 접근 방식</p>
              <p>
                저희는 애니메이션 내러티브를 활용해 추상적인 문항 대신 장면 기반 선택을 제시합니다.
                이를 통해 사용자 몰입을 높이고, 결과를 캐릭터 서사와 연결해 이해하기 쉽게 전달합니다.
                어느 유형도 우열이 없다는 전제 하에, 모든 결과 해석은 긍정적이고 중립적인 언어로 작성합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 운영 원칙 */}
        <section className="bg-white p-10 sm:p-14 rounded-[3rem] shadow-sm border border-gray-50 space-y-8">
          <h2 className="text-2xl font-black text-[#16324f] font-serif text-center">운영 원칙</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#fdfcf9] border border-gray-100 space-y-3">
              <p className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase">Clarity</p>
              <h3 className="font-bold text-[#16324f]">명확한 안내</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                질문은 간결하게, 결과는 이해하기 쉽게 구성합니다. 처음 시작하는 사람도
                흐름을 놓치지 않도록 필요한 정보만 핵심적으로 전달합니다.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#fdfcf9] border border-gray-100 space-y-3">
              <p className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase">Respect</p>
              <h3 className="font-bold text-[#16324f]">존중의 톤</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                어떤 성향도 평가하지 않습니다. 결과 해석은 따뜻하고 긍정적인 언어를 지향하며,
                당신의 강점과 가능성을 먼저 비추는 표현을 선택합니다.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#fdfcf9] border border-gray-100 space-y-3">
              <p className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase">Growth</p>
              <h3 className="font-bold text-[#16324f]">지속적인 개선</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                새로운 작품과 캐릭터를 꾸준히 추가합니다. 피드백을 반영해 질문과
                결과 설명을 다듬고, 경험을 계속 업데이트합니다.
              </p>
            </div>
          </div>
        </section>

        {/* 콘텐츠 품질 원칙 */}
        <section className="bg-white p-10 sm:p-14 rounded-[3rem] shadow-sm border border-gray-50 space-y-6">
          <h2 className="text-2xl font-black text-[#16324f] font-serif text-center">콘텐츠 품질 원칙</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            MBTI WORLD ANIMATION은 사용자에게 유익하고 관련성 높은 정보를 제공하기 위해
            아래 원칙을 준수합니다. 검색 엔진과 사용자 모두에게 신뢰할 수 있는 콘텐츠를 제공하는 것이 목표입니다.
          </p>
          <ul className="space-y-3 text-sm text-gray-500 leading-relaxed">
            <li className="flex gap-3">
              <span className="text-[#16324f] font-bold shrink-0">✓</span>
              <span>중복되거나 불필요한 페이지를 만들지 않으며, 독창적이고 유용한 콘텐츠 제공에 집중합니다.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#16324f] font-bold shrink-0">✓</span>
              <span>페이지의 목적과 실제 제공 정보가 일치하도록 구성하고, 탐색이 쉬운 구조로 안내합니다.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#16324f] font-bold shrink-0">✓</span>
              <span>키워드만 강조하거나 내용이 없는 페이지, 도어웨이 페이지 방식은 지양합니다.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#16324f] font-bold shrink-0">✓</span>
              <span>광고는 콘텐츠보다 과도하게 눈에 띄지 않도록 배치와 비율의 균형을 유지합니다.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#16324f] font-bold shrink-0">✓</span>
              <span>서버 사이드 렌더링으로 빠른 로딩과 가독성을 우선하며, 인터랙션은 필요한 영역에만 최소화합니다.</span>
            </li>
          </ul>
        </section>

        {/* 문의 */}
        <section className="bg-white p-10 sm:p-14 rounded-[3rem] shadow-sm border border-gray-50 space-y-4">
          <h2 className="text-2xl font-black text-[#16324f] font-serif">문의</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            새로운 테스트 제안, 콜라보 제안, 오류 제보, 개선 의견이 있다면 아래 메일로 연락해 주세요.
            가능한 한 빠르게 확인하고, 좋은 아이디어는 서비스에 적극 반영하겠습니다.
          </p>
          <p className="text-sm font-bold text-[#16324f]">1217records.kor@gmail.com</p>
        </section>

      </div>
    </div>
  );
}

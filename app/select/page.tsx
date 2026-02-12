
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { THEMES } from "@/data";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import { localizedAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: `테스트 선택 | ${SITE_NAME}`,
  description: "MBTI 유형별 특징과 궁합을 분석하는 애니메이션 MBTI 테스트를 선택하세요.",
  alternates: localizedAlternates("/select", "ko"),
  openGraph: {
    title: `테스트 선택 | ${SITE_NAME}`,
    description: "MBTI 유형별 특징과 궁합을 분석하는 애니메이션 MBTI 테스트를 선택하세요.",
    type: "website",
    url: `${SITE_ORIGIN}/select`,
  },
  twitter: {
    card: "summary_large_image",
    title: `테스트 선택 | ${SITE_NAME}`,
    description: "MBTI 유형별 특징과 궁합을 분석하는 애니메이션 MBTI 테스트를 선택하세요.",
  },
};

const THEME_DETAILS: Record<string, { headline: string; body: string }> = {
  onepiece: {
    headline: "원피스 세계관 테스트",
    body:
      "자유와 모험, 동료애가 교차하는 원피스 세계관을 통해 당신의 결단력과 가치 판단을 살펴봅니다. 리더십, 도전정신, 위기 대처 방식이 어떻게 드러나는지 16문항으로 파악하고, 유형별 특징과 궁합을 함께 분석합니다.",
  },
  naruto: {
    headline: "나루토 세계관 테스트",
    body:
      "성장과 노력, 유대의 메시지가 강한 나루토 세계관에서 당신의 인내심과 관계 중심성을 탐색합니다. 감정 조절, 팀워크, 목표지향성의 패턴을 질문으로 풀어내어 MBTI 유형별 특징과 궁합을 분석합니다.",
  },
  fma: {
    headline: "강철의 연금술사 세계관 테스트",
    body:
      "연금술과 형제의 서사를 따라, 당신이 책임과 희생 사이에서 어떤 선택을 하는지 살펴봅니다. 신념, 논리, 관계의 균형이 어떻게 드러나는지 16문항으로 분석하고, 유형별 특징과 궁합을 함께 해석합니다.",
  },
  aot: {
    headline: "진격의 거인 세계관 테스트",
    body:
      "벽 안의 생존과 자유의 갈림길에서 당신의 결단 방식과 가치 판단을 확인합니다. 위험 대응, 전략, 감정 조절의 패턴을 질문으로 풀어내어 MBTI 유형별 특징과 궁합을 분석합니다.",
  },
  shinchan: {
    headline: "짱구는 못말려 세계관 테스트",
    body:
      "유치원 친구들과 가족 사이의 일상 속에서 당신의 즉흥성, 공감력, 현실 감각을 살펴봅니다. 작은 선택들이 어떤 성향을 보여주는지 16문항으로 확인하고, 캐릭터 매칭과 유형별 특징을 함께 해석합니다.",
  },
};

export default function TestSelect() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "애니메이션 MBTI 테스트 선택",
    applicationCategory: "Entertainment",
    operatingSystem: "Web",
    description: "MBTI 유형별 특징과 궁합을 분석하는 애니메이션 MBTI 테스트를 선택하는 페이지",
    url: `${SITE_ORIGIN}/select`,
  };

  return (
    <div className="space-y-10 animate-in fade-in">
      <JsonLd data={jsonLd} />
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold font-serif text-[#16324f]">테스트 선택</h1>
        <p className="text-gray-500 text-sm">원하는 애니메이션 세계관을 선택해 바로 시작하세요.</p>
      </div>

      <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">🧭 선택 가이드</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
          <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
            <p className="font-bold text-[#16324f]">📚 익숙한 세계관</p>
            <p>스토리를 잘 아는 작품을 고르면 몰입도가 높습니다.</p>
          </div>
          <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
            <p className="font-bold text-[#16324f]">⏱️ 가벼운 진행</p>
            <p>각 테스트는 2~3분 내 완료됩니다.</p>
          </div>
          <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
            <p className="font-bold text-[#16324f]">✨ 결과 해석</p>
            <p>캐릭터 서사를 기반으로 공통점을 설명합니다.</p>
          </div>
        </div>
        <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4 text-sm text-gray-500 leading-relaxed">
          <p className="font-bold text-[#16324f]">추천 선택법</p>
          <p>가장 좋아하는 작품이 없다면, 현재 관심 있는 세계관을 골라 바로 시작해 보세요.</p>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">
          결과는 재미와 자기탐색을 위한 참고용이며, 정답을 맞히기보다는 자신의 반응과 선택을 가볍게 돌아보는 데 의미가 있습니다.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Object.values(THEMES).map((theme) => (
          <Link 
            key={theme.id}
            href={`/test/${theme.id}`}
            className="group relative overflow-hidden rounded-3xl p-8 bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col gap-4"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${theme.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-2xl shadow-inner">
                {theme.emoji}
              </div>
              <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">{theme.label}</h2>
            </div>
            
            <p className="text-gray-500 text-sm leading-relaxed">
              {theme.label}의 세계관 속 상황들을 통해 당신의 성향을 16문항으로 정밀 분석합니다.
            </p>

            <div className="flex gap-2 flex-wrap">
              {theme.tags.map(tag => (
                <span key={tag} className="px-2.5 py-1 rounded-lg bg-gray-100 text-[10px] font-bold text-gray-400">
                  #{tag}
                </span>
              ))}
            </div>

            <div className={`mt-4 px-6 py-3 rounded-full bg-gradient-to-r ${theme.gradient} text-white font-bold text-center text-sm shadow-md group-hover:scale-105 transition-transform`}>
              시작하기
            </div>
          </Link>
        ))}
        
        <Link 
          href="/contact"
          className="rounded-3xl p-8 bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-3 text-center group hover:bg-gray-100 transition-colors"
        >
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl text-gray-400 group-hover:scale-110 transition-transform">
            +
          </div>
          <span className="text-sm font-bold text-gray-400">새로운 테마 제안하기</span>
        </Link>
      </div>

      <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">테스트별 특징</h2>
        <div className="space-y-6">
          {Object.values(THEMES).map((theme) => {
            const detail = THEME_DETAILS[theme.id] ?? {
              headline: `${theme.label} 세계관 테스트`,
              body: `${theme.label}의 장면을 통해 MBTI 유형별 특징과 궁합을 분석합니다.`,
            };
            return (
              <article key={theme.id} className="space-y-2">
                <h3 className="text-lg font-black text-[#16324f]">{detail.headline}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{detail.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">심리학적 근거</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          각 테스트는 MBTI의 네 가지 지표(E/I, S/N, T/F, J/P)를 균형 있게 묻도록 설계되었습니다. 질문은 성격심리학의
          이분법적 성향 분류를 참고하여, 상황 속 선택이 성향으로 이어지는 과정을 관찰합니다.
        </p>
        <h3 className="text-base font-black text-[#16324f]">참고 문헌/출처</h3>
        <ul className="list-disc list-inside text-xs text-gray-500 space-y-2">
          <li>MBTI 성격 유형 이론의 4가지 지표 구조</li>
          <li>심리유형론 기반의 성향 분류 프레임워크</li>
          <li>성격심리학 개론 수준의 기초 개념</li>
        </ul>
      </section>
    </div>
  );
}

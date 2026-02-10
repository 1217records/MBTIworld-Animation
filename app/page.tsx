
import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_ORIGIN = 'https://mbti-world-animation.pages.dev';

export const metadata: Metadata = {
  title: "MBTI WORLD",
  description: "내 MBTI는 어떤 캐릭터와 같을까?",
  openGraph: {
    title: "MBTI WORLD",
    description: "내 MBTI는 어떤 캐릭터와 같을까?",
    type: "website",
    url: `${SITE_ORIGIN}/`,
    images: [
      {
        url: `${SITE_ORIGIN}/og/home?v=2`,
        width: 1200,
        height: 630,
        alt: "MBTI WORLD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MBTI WORLD",
    description: "내 MBTI는 어떤 캐릭터와 같을까?",
    images: [`${SITE_ORIGIN}/og/home?v=2`],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center gap-12">
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

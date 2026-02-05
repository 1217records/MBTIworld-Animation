
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center gap-8">
      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#16324f]/10 text-[#16324f] text-xs font-bold tracking-widest uppercase mb-2">
          Story-driven Personality Test
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-serif text-[#0b1220] leading-tight">
          애니메이션<br />MBTI 월드
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto leading-relaxed text-sm sm:text-base">
          원피스, 나루토 등 애니메이션 속 명장면을 내가 겪는다면?<br />
          어떤 캐릭터가 나랑 가장 비슷할지 16문항으로 확인해보세요.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none justify-center">
        <Link 
          href="/select"
          className="px-10 py-4 rounded-full bg-[#16324f] text-white font-bold text-lg shadow-xl shadow-[#16324f]/20 hover:scale-105 transition-transform active:scale-95"
        >
          테스트 시작하기
        </Link>
        <Link 
          href="/about"
          className="px-10 py-4 rounded-full bg-white border border-gray-200 text-[#16324f] font-bold text-lg shadow-sm hover:bg-gray-50 transition-colors"
        >
          서비스 소개
        </Link>
      </div>
    </div>
  );
}

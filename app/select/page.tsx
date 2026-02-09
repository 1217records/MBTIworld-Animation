
import Link from 'next/link';
import { THEMES } from '@/data';

export const metadata = {
  title: "테스트 선택 | 애니메이션 MBTI 월드",
  description: "좋아하는 애니메이션을 선택하고 당신과 닮은 캐릭터를 찾아보세요.",
};

export default function TestSelect() {
  return (
    <div className="space-y-10 animate-in fade-in">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold font-serif text-[#16324f]">테스트 선택</h1>
        <p className="text-gray-500 text-sm">원하는 애니메이션 세계관을 선택해 바로 시작하세요.</p>
      </div>

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
              <h2 className="text-2xl font-black font-serif text-[#16324f]">{theme.label}</h2>
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
        <h2 className="text-2xl font-black font-serif text-[#16324f]">🧭 선택 가이드</h2>
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
    </div>
  );
}

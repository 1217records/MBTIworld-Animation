
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { THEMES, CONTENTS } from '../data';
import { MBTI_SHORT_DESCS, MBTI_LONG_DESCS } from '../constants';

const Result: React.FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const themeId = params.get('theme') || 'onepiece';
  const type = params.get('type') || 'ISTJ';

  const theme = THEMES[themeId] || THEMES.onepiece;
  const content = CONTENTS[themeId] || CONTENTS.onepiece;
  const character = content.results[type] || content.results.ISTJ;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('결과 링크가 복사되었습니다!');
  };

  return (
    <div className="space-y-16 animate-in fade-in duration-1000 pb-24">
      {/* Visual Hero Card */}
      <section className={`relative overflow-hidden rounded-[3rem] p-10 sm:p-20 bg-gradient-to-br ${theme.gradient} text-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)]`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[130px] -translate-y-1/2 translate-x-1/2 rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-[100px] translate-y-1/2 -translate-x-1/2 rounded-full" />
        
        <div className="relative z-10 space-y-14">
          <div className="flex flex-col items-center text-center gap-6">
            <span className="px-6 py-2.5 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-black tracking-[0.4em] uppercase border border-white/10">
              Personalized Report
            </span>
            <div className="space-y-4">
              <h2 className="text-8xl sm:text-9xl font-black font-serif tracking-widest drop-shadow-2xl">
                {type}
              </h2>
              <div className="h-1 w-20 bg-white/40 mx-auto rounded-full" />
              <p className="text-white/90 font-bold text-xl sm:text-2xl tracking-tight">
                {MBTI_SHORT_DESCS[type]}
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-2xl rounded-[3rem] p-10 sm:p-14 border border-white/20 flex flex-col items-center text-center gap-8 shadow-2xl">
            <div className="space-y-1">
              <div className="text-[11px] font-black text-white/50 uppercase tracking-[0.3em]">The Character That Matches Your Soul</div>
              <h1 className="text-5xl sm:text-7xl font-black font-serif tracking-tight leading-tight">{character.name}</h1>
            </div>
            <p className="text-white text-lg sm:text-xl leading-relaxed max-w-xl font-medium italic opacity-90">
              "{character.desc}"
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Sections */}
      <div className="max-w-3xl mx-auto space-y-12">
        {/* Iconic Scene */}
        {character.episodeNote && (
          <section className="bg-white rounded-[3rem] p-10 sm:p-14 border border-gray-100 shadow-sm space-y-10">
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="text-3xl">🎬</span>
              <h3 className="font-black text-[#16324f] text-2xl font-serif">당신을 투영하는 결정적 명장면</h3>
            </div>
            
            <div className="relative pt-4">
              <div className="absolute -top-10 left-0 text-[180px] text-gray-50/70 font-serif select-none leading-none -z-0">“</div>
              <p className="relative z-10 text-2xl sm:text-3xl font-serif text-gray-800 leading-[1.7] italic text-center px-6">
                {character.episodeNote}
              </p>
            </div>
            <p className="text-center text-xs font-bold text-gray-300 tracking-[0.2em] uppercase pt-4">Visualizing your internal values</p>
          </section>
        )}

        {/* Deep Dive Character Analysis */}
        <section className="bg-white rounded-[3rem] p-10 sm:p-14 border border-gray-100 shadow-sm space-y-8">
          <div className="flex items-center justify-center gap-4 pb-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-2xl text-amber-500">📜</div>
            <h3 className="font-black text-[#16324f] text-2xl font-serif">캐릭터와 당신의 평행이론</h3>
          </div>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-gray-600 leading-[2] whitespace-pre-wrap font-medium">
              {character.longDesc}
            </p>
          </div>
        </section>

        {/* Psychological Analysis */}
        <section className="bg-[#16324f] rounded-[3rem] p-10 sm:p-16 text-white shadow-2xl space-y-10 relative overflow-hidden">
          <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${theme.gradient} opacity-20 blur-[100px]`} />
          
          <div className="flex flex-col items-center gap-4 relative z-10 text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-2xl text-indigo-300">🧠</div>
            <h3 className="font-black text-white text-2xl font-serif">심리학으로 분석한 당신의 본질</h3>
          </div>
          
          <div className="relative z-10">
            <p className="text-lg text-white/80 leading-[2] whitespace-pre-wrap font-light">
              {MBTI_LONG_DESCS[type]}
            </p>
          </div>

          <div className="pt-10 border-t border-white/10 flex flex-wrap justify-center gap-4 relative z-10">
             {type.split('').map((char, i) => (
               <span key={i} className="px-6 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold tracking-[0.2em]">#{char}</span>
             ))}
             <span className="px-6 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-sm font-bold tracking-[0.2em]">#{MBTI_SHORT_DESCS[type].split(' ').pop()}</span>
          </div>
        </section>
      </div>

      {/* Share & Call to Action */}
      <section className="bg-white rounded-[4rem] p-12 sm:p-20 border border-gray-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] space-y-12 text-center">
        <div className="space-y-3">
          <h3 className="text-4xl font-black font-serif text-[#16324f]">이 여정을 공유할까요?</h3>
          <p className="text-gray-400 font-medium text-lg">당신과 닮은 캐릭터를 친구들에게 보여주세요.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button 
            onClick={handleCopyLink}
            className="w-full sm:w-auto px-16 py-5 rounded-full bg-[#16324f] text-white font-black text-xl shadow-2xl shadow-[#16324f]/30 hover:-translate-y-1 transition-all active:scale-95"
          >
            링크 복사하기
          </button>
          <button 
            className="w-full sm:w-auto px-16 py-5 rounded-full bg-[#fee500] text-[#3c1e1e] font-black text-xl shadow-2xl shadow-yellow-200/50 hover:-translate-y-1 transition-all active:scale-95"
            onClick={() => alert('카카오 서비스 준비 중입니다.')}
          >
            카카오톡 공유
          </button>
        </div>

        <div className="flex flex-col gap-6 pt-10">
          <Link to="/select" className="text-lg font-black text-gray-300 hover:text-[#16324f] transition-all hover:tracking-widest underline underline-offset-8">
            다른 세계관 탐험하기
          </Link>
          <Link to={`/test/${themeId}`} className="text-base font-bold text-gray-300 hover:text-gray-500 transition-all">
            테스트 다시하기
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Result;


import React from 'react';

const About: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20">
      <div className="space-y-3 text-center">
        <h1 className="text-4xl font-black font-serif text-[#16324f]">MBTI-World Story</h1>
        <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em]">우리가 이 테스트를 만든 이유</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-10">
        <section className="bg-white p-10 sm:p-14 rounded-[3rem] shadow-sm border border-gray-50 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-[#16324f] font-serif">
              "당신의 영혼은 어떤 모험을 꿈꾸나요?"
            </h2>
            <div className="text-gray-600 leading-[2] space-y-6">
              <p>
                MBTI-World는 단순히 성격을 16가지로 나누는 도구가 아닙니다. 
                우리는 우리가 사랑하는 애니메이션 속 주인공들이 내리는 수많은 결정들이, 
                사실은 우리 내면의 가장 깊은 곳을 투영하고 있다고 믿습니다.
              </p>
              <p>
                루피의 무모한 용기, 카카시의 냉철한 책임감, 조로의 침묵하는 의리. 
                이 모든 특성들은 사실 우리 일상 속에서도 매 순간 발휘되고 있습니다. 
                우리는 여러분이 익숙한 스토리 속 상황에 자신을 대입해봄으로써, 
                자신조차 몰랐던 본연의 색깔을 발견하길 바라는 마음으로 이 서비스를 시작했습니다.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
            <div className="p-8 rounded-3xl bg-[#fdfcf9] border border-gray-100 space-y-3">
              <span className="text-2xl">🔍</span>
              <h3 className="font-bold text-[#16324f]">정밀한 매칭</h3>
              <p className="text-sm text-gray-500 leading-relaxed">수천 번의 캐릭터 분석과 MBTI 이론 교차 검증을 통해 가장 높은 싱크로율을 찾아냈습니다.</p>
            </div>
            <div className="p-8 rounded-3xl bg-[#fdfcf9] border border-gray-100 space-y-3">
              <span className="text-2xl">🎨</span>
              <h3 className="font-bold text-[#16324f]">예술적 경험</h3>
              <p className="text-sm text-gray-500 leading-relaxed">단순한 텍스트를 넘어, 각 작품의 분위기를 담은 시각적 디자인으로 몰입을 돕습니다.</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-10 sm:p-14 rounded-[3rem] shadow-sm border border-gray-50 space-y-8">
          <h2 className="text-2xl font-black text-[#16324f] font-serif">MBTI-World가 약속하는 가치</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="text-4xl font-black text-gray-100 font-serif">01</div>
              <div className="space-y-2">
                <h4 className="font-bold text-[#16324f]">편견 없는 이해</h4>
                <p className="text-sm text-gray-500 leading-relaxed">어떤 성향도 틀린 것은 없습니다. 각 유형이 가진 고유한 빛나는 점을 캐릭터를 통해 긍정적으로 조명합니다.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-4xl font-black text-gray-100 font-serif">02</div>
              <div className="space-y-2">
                <h4 className="font-bold text-[#16324f]">스토리의 힘</h4>
                <p className="text-sm text-gray-500 leading-relaxed">딱딱한 질문 대신 흥미진진한 장면 속 선택을 제안하여, 당신이 진심으로 반응하는 순간을 포착합니다.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-4xl font-black text-gray-100 font-serif">03</div>
              <div className="space-y-2">
                <h4 className="font-bold text-[#16324f]">지속적인 확장</h4>
                <p className="text-sm text-gray-500 leading-relaxed">원피스, 나루토를 시작으로 전 세계 모든 팬들이 자신의 최애 작품으로 자신을 알아갈 수 있도록 테마를 늘려갑니다.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center space-y-6 pt-10">
          <p className="text-gray-400 text-sm font-medium italic">
            "당신의 다음 항해는 어디인가요? 우리는 당신의 모든 선택을 응원합니다."
          </p>
          <div className="inline-block px-10 py-4 rounded-full bg-[#16324f] text-white font-bold text-sm shadow-xl shadow-[#16324f]/20">
            문의: gw0592@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

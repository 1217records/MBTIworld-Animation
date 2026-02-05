
"use client";

import React, { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center gap-6">
        <div className="w-20 h-20 rounded-full bg-green-50 text-green-500 flex items-center justify-center text-3xl">✓</div>
        <h2 className="text-2xl font-bold font-serif text-[#16324f]">제안이 전송되었습니다!</h2>
        <p className="text-gray-500 text-sm">소중한 의견 감사드립니다. 검토 후 반영하도록 하겠습니다.</p>
        <button onClick={() => window.history.back()} className="px-6 py-2 rounded-full bg-[#16324f] text-white font-bold text-sm">돌아가기</button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto space-y-8 animate-in fade-in">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold font-serif text-[#16324f]">새 테스트 제안</h1>
        <p className="text-gray-500 text-sm">어떤 애니메이션 테스트를 보고 싶으신가요? 제안해 주세요!</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-xl space-y-6">
        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">닉네임</label>
            <input required type="text" placeholder="호칭을 알려주세요" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#16324f]/20 outline-none transition-all" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">이메일</label>
            <input required type="email" placeholder="답변을 받으실 주소" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#16324f]/20 outline-none transition-all" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">제안 내용</label>
            <textarea required rows={4} placeholder="예: 진격의 거인 인물들로 MBTI 테스트 만들어주세요!" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#16324f]/20 outline-none transition-all resize-none" />
          </div>
        </div>
        <button type="submit" className="w-full py-4 rounded-2xl bg-[#16324f] text-white font-bold text-lg shadow-lg hover:brightness-110 transition-all active:scale-95">
          제안 보내기
        </button>
      </form>
    </div>
  );
}

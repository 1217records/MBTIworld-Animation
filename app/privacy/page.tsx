
export const metadata = {
  title: "개인정보 처리방침 | 애니메이션 MBTI 월드",
};

export default function Privacy() {
  return (
    <div className="space-y-8 animate-in fade-in">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold font-serif text-[#16324f]">개인정보 처리방침</h1>
        <p className="text-gray-400 text-sm">최종 업데이트: 2026년 1월 30일</p>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-8 text-sm text-gray-600 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">1. 수집 항목</h2>
          <p>MBTI-world는 문의 기능 제공을 위해 최소한의 정보를 수집합니다.</p>
          <ul className="list-disc list-inside pl-4">
            <li>문의 폼: 이름(닉네임), 이메일, 문의 내용</li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">2. 이용 목적</h2>
          <p>수집된 정보는 오직 답변 제공 및 서비스 품질 개선의 목적으로만 사용됩니다.</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">3. 보관 및 파기</h2>
          <p>개인정보는 이용 목적 달성 후 지체 없이 파기합니다. 별도의 서버에 영구 저장하지 않습니다.</p>
        </section>
        <div className="pt-8 border-t border-gray-100 text-[10px] text-gray-400 italic">
          본 방침은 관련 법령 및 가이드라인의 변경에 따라 수정될 수 있습니다.
        </div>
      </div>
    </div>
  );
}

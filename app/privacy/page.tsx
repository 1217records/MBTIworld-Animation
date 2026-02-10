
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: `개인정보 처리방침 | ${SITE_NAME}`,
  description: "MBTI WORLD ANIMATION의 개인정보 처리방침과 데이터 처리 원칙을 안내합니다.",
  alternates: { canonical: `${SITE_ORIGIN}/privacy` },
  openGraph: {
    title: `개인정보 처리방침 | ${SITE_NAME}`,
    description: "MBTI WORLD ANIMATION의 개인정보 처리방침과 데이터 처리 원칙을 안내합니다.",
    type: "website",
    url: `${SITE_ORIGIN}/privacy`,
  },
  twitter: {
    card: "summary_large_image",
    title: `개인정보 처리방침 | ${SITE_NAME}`,
    description: "MBTI WORLD ANIMATION의 개인정보 처리방침과 데이터 처리 원칙을 안내합니다.",
  },
};

export default function Privacy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "개인정보 처리방침",
    description: "MBTI WORLD ANIMATION의 개인정보 처리방침",
    mainEntityOfPage: `${SITE_ORIGIN}/privacy`,
  };

  return (
    <div className="space-y-8 animate-in fade-in">
      <JsonLd data={jsonLd} />
      <div className="space-y-2">
        <h1 className="text-3xl font-bold font-serif text-[#16324f]">개인정보 처리방침</h1>
        <p className="text-gray-400 text-sm">최종 업데이트: 2026년 2월 5일</p>
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
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">4. 제3자 제공</h2>
          <p>원칙적으로 개인정보를 제3자에게 제공하지 않습니다. 다만, 법령에 근거한 요청이 있는 경우 예외적으로 제공될 수 있습니다.</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">5. 처리 위탁</h2>
          <p>문의 폼 전송을 위해 외부 이메일 전송 서비스(Formspree)를 이용할 수 있습니다. 해당 서비스는 문의 처리 목적 범위 내에서만 정보를 처리합니다.</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">6. 이용자의 권리</h2>
          <p>이용자는 자신의 개인정보에 대해 열람, 정정, 삭제를 요청할 수 있습니다. 관련 요청은 아래 문의 메일로 접수해 주세요.</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">7. 문의</h2>
          <p>개인정보 관련 문의는 아래 메일로 연락해 주세요.</p>
          <p className="font-bold text-[#16324f]">mbtiworld.kr@gmail.com</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">8. 콘텐츠 품질 및 사용자 경험 원칙</h2>
          <p>서비스 운영 시 사용자에게 유익하고 관련성 높은 정보를 제공하기 위해 다음 원칙을 준수합니다.</p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>중복되거나 불필요한 페이지를 다수 제작하지 않으며, 독창적이고 유용한 콘텐츠 제공에 집중합니다.</li>
            <li>페이지의 목적과 실제 제공 정보가 일치하도록 구성하고, 탐색이 쉬운 구조로 안내합니다.</li>
            <li>도어웨이·내용이 거의 없는 페이지, 키워드만 강조한 페이지 등은 지양합니다.</li>
            <li>광고는 콘텐츠보다 과도하게 눈에 띄지 않도록 균형을 유지합니다.</li>
          </ul>
        </section>
        <div className="pt-8 border-t border-gray-100 text-[10px] text-gray-400 italic">
          본 방침은 관련 법령 및 가이드라인의 변경에 따라 수정될 수 있습니다.
        </div>
      </div>
    </div>
  );
}

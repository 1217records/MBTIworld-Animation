import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import { localizedAlternates } from "@/lib/seo";

export const runtime = "edge";

export const metadata: Metadata = {
  title: `이용 약관 | ${SITE_NAME}`,
  description: "MBTI WORLD ANIMATION의 서비스 이용 약관을 안내합니다.",
  alternates: localizedAlternates("/terms", "ko"),
  openGraph: {
    title: `이용 약관 | ${SITE_NAME}`,
    description: "MBTI WORLD ANIMATION의 서비스 이용 약관을 안내합니다.",
    type: "website",
    url: `${SITE_ORIGIN}/terms`,
  },
  twitter: {
    card: "summary_large_image",
    title: `이용 약관 | ${SITE_NAME}`,
    description: "MBTI WORLD ANIMATION의 서비스 이용 약관을 안내합니다.",
  },
};

export default function TermsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "이용 약관",
    description: "MBTI WORLD ANIMATION 서비스 이용 약관",
    mainEntityOfPage: `${SITE_ORIGIN}/terms`,
  };

  return (
    <div className="space-y-8 animate-in fade-in">
      <JsonLd data={jsonLd} />
      <div className="space-y-2">
        <h1 className="text-3xl font-bold font-serif text-[#16324f]">이용 약관</h1>
        <p className="text-gray-400 text-sm">최종 업데이트: 2026년 2월 10일</p>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-8 text-sm text-gray-600 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">1. 서비스 목적</h2>
          <p>MBTI WORLD ANIMATION은 애니메이션 세계관을 바탕으로 한 엔터테인먼트형 성격 테스트를 제공합니다. 서비스는 자기이해와 즐거움을 돕기 위한 콘텐츠로 구성되며, 특정 심리 치료나 임상적 판단을 위한 목적이 아닙니다.</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">2. 콘텐츠 이용</h2>
          <p>서비스 내 제공되는 모든 콘텐츠는 개인적인 용도로 이용할 수 있으며, 상업적 재배포는 금지됩니다. 스크린샷이나 결과 공유는 가능하되, 출처 표기 없이 원문을 변형하거나 대량으로 배포하는 행위는 제한됩니다.</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">3. 결과 해석</h2>
          <p>테스트 결과는 자기이해를 돕기 위한 참고용이며, 전문 심리 진단을 대체하지 않습니다. 결과에 대한 최종 판단과 활용은 이용자 본인의 책임 하에 이루어집니다.</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">4. 책임 제한</h2>
          <p>서비스 이용 과정에서 발생하는 직접·간접 손해에 대해 법률이 허용하는 범위 내에서 책임을 제한합니다. 불가항력적 사유나 외부 요인으로 인한 서비스 중단·지연에 대해서도 동일하게 적용됩니다.</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">5. 문의</h2>
          <p>이용 약관 관련 문의는 아래 메일로 연락해 주세요. 접수된 문의는 순차적으로 확인하며, 가능한 빠르게 답변드리겠습니다.</p>
          <p className="font-bold text-[#16324f]">1217records.kor@gmail.com</p>
        </section>
      </div>
    </div>
  );
}

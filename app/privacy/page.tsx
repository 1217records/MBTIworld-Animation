
import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import { localizedAlternates } from "@/lib/seo";

export const runtime = "edge";

export const metadata: Metadata = {
  title: `개인정보 처리방침 | ${SITE_NAME}`,
  description:
    "MBTI WORLD ANIMATION의 개인정보 수집 항목, 이용 목적, 보관 및 파기 원칙, 이용자 권리를 안내합니다. 서비스 이용 시 최소한의 정보만 수집합니다.",
  alternates: localizedAlternates("/privacy", "ko"),
  openGraph: {
    title: `개인정보 처리방침 | ${SITE_NAME}`,
    description:
      "MBTI WORLD ANIMATION의 개인정보 처리방침과 데이터 처리 원칙을 안내합니다.",
    type: "website",
    url: `${SITE_ORIGIN}/privacy`,
  },
  twitter: {
    card: "summary_large_image",
    title: `개인정보 처리방침 | ${SITE_NAME}`,
    description:
      "MBTI WORLD ANIMATION의 개인정보 처리방침과 데이터 처리 원칙을 안내합니다.",
  },
};

export default function Privacy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "개인정보 처리방침",
    description: "MBTI WORLD ANIMATION의 개인정보 처리방침 — 수집 항목, 이용 목적, 이용자 권리 안내",
    mainEntityOfPage: `${SITE_ORIGIN}/privacy`,
  };

  return (
    <div className="space-y-8 animate-in fade-in">
      <JsonLd data={jsonLd} />

      <div className="space-y-2">
        <h1 className="text-3xl font-bold font-serif text-[#16324f]">개인정보 처리방침</h1>
        <p className="text-gray-400 text-sm">최종 업데이트: 2026년 2월 5일</p>
      </div>

      {/* 핵심 요약 */}
      <div className="bg-[#f8fbff] rounded-2xl p-5 border border-[#16324f]/10 text-sm text-gray-600 leading-relaxed space-y-2">
        <p className="font-bold text-[#16324f]">📌 핵심 요약</p>
        <ul className="space-y-1 list-disc list-inside">
          <li>MBTI WORLD ANIMATION은 테스트 이용 시 <strong>별도의 개인정보를 수집하지 않습니다.</strong></li>
          <li>문의 시에만 이름(닉네임)·이메일·문의 내용을 최소한으로 수집합니다.</li>
          <li>수집된 정보는 문의 응대 목적에만 사용되며, 완료 후 삭제됩니다.</li>
          <li>제3자에게 원칙적으로 제공하지 않습니다.</li>
        </ul>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-8 text-sm text-gray-600 leading-relaxed">

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#16324f]">1. 수집 항목</h2>
          <p>
            MBTI-world는 서비스 이용(테스트·결과 조회) 과정에서 별도의 개인정보를 수집하지 않습니다.
            단, 문의 기능 이용 시 아래 최소한의 정보를 수집합니다.
          </p>
          <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4 space-y-2">
            <p className="font-bold text-[#16324f]">문의 폼 수집 항목</p>
            <ul className="list-disc list-inside space-y-1">
              <li>이름 또는 닉네임</li>
              <li>이메일 주소</li>
              <li>문의 내용</li>
            </ul>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#16324f]">2. 이용 목적</h2>
          <p>수집된 정보는 다음 목적으로만 사용되며, 해당 목적 이외의 용도로 활용하지 않습니다.</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>문의에 대한 답변 제공</li>
            <li>오류 확인 및 서비스 품질 개선</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#16324f]">3. 보관 및 파기</h2>
          <p>
            개인정보는 수집 목적 달성 후 지체 없이 파기합니다.
            별도의 서버에 영구 저장하지 않으며, 문의 처리가 완료된 후 일정 기간 내에 안전하게 삭제됩니다.
            법령에 따른 보존 의무가 있는 경우 해당 기간 동안만 보관합니다.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#16324f]">4. 제3자 제공</h2>
          <p>
            원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다.
            다만, 법령에 근거한 요청이 있는 경우에는 예외적으로 제공될 수 있으며,
            이 경우에도 제공 범위는 법령이 요구하는 최소한으로 제한됩니다.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#16324f]">5. 처리 위탁</h2>
          <p>
            문의 폼 전송을 위해 외부 이메일 전송 서비스(Formspree)를 이용할 수 있습니다.
            해당 서비스는 문의 처리 목적 범위 내에서만 정보를 처리하며,
            서비스 운영 목적 외의 활용을 엄격히 금지합니다.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#16324f]">6. 쿠키 및 분석 도구</h2>
          <p>
            서비스 개선을 위해 Google Analytics 등 익명 집계 도구를 사용할 수 있습니다.
            이 도구는 개인을 특정하지 않는 방문 통계 데이터만 수집하며,
            브라우저 설정에서 쿠키 사용을 거부할 수 있습니다.
            또한, 광고 최적화를 위해 Google AdSense의 쿠키가 사용될 수 있으며,
            맞춤 광고가 표시될 수 있습니다.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#16324f]">7. 이용자의 권리</h2>
          <p>이용자는 자신의 개인정보에 대해 다음 권리를 행사할 수 있습니다.</p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>개인정보 열람 요청</li>
            <li>개인정보 정정 요청</li>
            <li>개인정보 삭제 요청</li>
            <li>처리 정지 요청</li>
          </ul>
          <p>관련 요청은 아래 문의 메일로 접수해 주세요. 확인 후 가능한 범위 내에서 신속히 처리합니다.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#16324f]">8. 콘텐츠 품질 및 광고 운영 원칙</h2>
          <p>서비스 운영 시 사용자에게 유익하고 관련성 높은 정보를 제공하기 위해 다음 원칙을 준수합니다.</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li>중복되거나 불필요한 페이지를 다수 제작하지 않으며, 독창적이고 유용한 콘텐츠 제공에 집중합니다.</li>
            <li>페이지의 목적과 실제 제공 정보가 일치하도록 구성하고, 탐색이 쉬운 구조로 안내합니다.</li>
            <li>도어웨이·내용이 거의 없는 페이지, 키워드만 강조한 페이지 등은 지양합니다.</li>
            <li>광고는 콘텐츠보다 과도하게 눈에 띄지 않도록 배치하며, 페이지 이용을 방해하지 않는 범위에서 운영합니다.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#16324f]">9. 문의</h2>
          <p>개인정보 관련 문의 및 권리 행사 요청은 아래 메일로 연락해 주세요. 접수된 문의는 순차적으로 처리됩니다.</p>
          <p className="font-bold text-[#16324f]">1217records.kor@gmail.com</p>
        </section>

        <div className="pt-8 border-t border-gray-100 text-[10px] text-gray-400 italic">
          본 방침은 관련 법령 및 가이드라인의 변경에 따라 수정될 수 있습니다.
          변경 사항이 있을 경우 이 페이지에서 사전에 안내합니다.
        </div>
      </div>
    </div>
  );
}

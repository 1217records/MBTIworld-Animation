import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import { localizedAlternates } from "@/lib/seo";

export const runtime = "edge";

export const metadata: Metadata = {
  title: `이용 약관 | ${SITE_NAME}`,
  description:
    "MBTI WORLD ANIMATION의 서비스 이용 약관을 안내합니다. 서비스 목적, 콘텐츠 이용 범위, 결과 해석 기준, 책임 제한 조항을 확인하세요.",
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
    description:
      "MBTI WORLD ANIMATION 서비스 이용 약관 — 서비스 목적, 콘텐츠 이용, 결과 해석, 책임 제한",
    mainEntityOfPage: `${SITE_ORIGIN}/terms`,
  };

  return (
    <div className="space-y-8 animate-in fade-in">
      <JsonLd data={jsonLd} />

      <div className="space-y-2">
        <h1 className="text-3xl font-bold font-serif text-[#16324f]">이용 약관</h1>
        <p className="text-gray-400 text-sm">최종 업데이트: 2026년 2월 10일</p>
      </div>

      {/* 핵심 요약 */}
      <div className="bg-[#f8fbff] rounded-2xl p-5 border border-[#16324f]/10 text-sm text-gray-600 leading-relaxed space-y-2">
        <p className="font-bold text-[#16324f]">📌 핵심 요약</p>
        <ul className="space-y-1 list-disc list-inside">
          <li>본 서비스는 <strong>엔터테인먼트형 자기이해 콘텐츠</strong>로, 전문 심리 진단을 대체하지 않습니다.</li>
          <li>테스트 결과는 개인적인 참고 용도로만 이용할 수 있으며, 상업적 재배포는 금지됩니다.</li>
          <li>회원가입 없이 이용 가능하며, 결과는 서버에 저장되지 않습니다.</li>
        </ul>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-8 text-sm text-gray-600 leading-relaxed">

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#16324f]">1. 서비스 목적</h2>
          <p>
            MBTI WORLD ANIMATION은 원피스·나루토·포켓몬 등 애니메이션 세계관을 배경으로 한
            엔터테인먼트형 성격 테스트를 제공합니다.
            서비스는 자기이해와 즐거움을 돕기 위한 콘텐츠로 구성되며,
            특정 심리 치료·임상적 판단·진로 상담 등의 목적으로 제작된 서비스가 아닙니다.
          </p>
          <p>
            테스트 결과는 MBTI 이론의 네 지표(E/I·S/N·T/F·J/P)를 기반으로 도출되지만,
            전문 심리검사의 정확도와 동일하다고 보장하지 않습니다.
            결과를 대화·자기탐색의 참고 자료로 활용하는 것을 권장합니다.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#16324f]">2. 콘텐츠 이용</h2>
          <p>서비스 내 제공되는 모든 콘텐츠(테스트 문항, 결과 설명, 디자인 등)에 대한 이용 원칙은 다음과 같습니다.</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li>개인적인 감상, 자기이해 목적의 이용은 자유롭게 허용됩니다.</li>
            <li>결과 이미지·링크의 SNS 공유는 허용되며, 출처를 자연스럽게 포함하는 방식을 권장합니다.</li>
            <li>콘텐츠의 상업적 재배포·무단 편집·대량 복제는 금지됩니다.</li>
            <li>원문을 변형하거나 출처 없이 타 플랫폼에 전체 내용을 게시하는 행위는 제한됩니다.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#16324f]">3. 결과 해석</h2>
          <p>
            테스트 결과는 자기이해를 돕기 위한 참고용 콘텐츠이며, 전문 심리 진단을 대체하지 않습니다.
            같은 사람도 응답 시점·상황에 따라 결과가 달라질 수 있으므로,
            결과를 절대적인 성격 유형으로 단정 짓지 않도록 주의해 주세요.
          </p>
          <p>
            결과에 대한 최종 판단과 활용은 이용자 본인의 책임 하에 이루어지며,
            MBTI WORLD ANIMATION은 결과 해석으로 인해 발생하는 개인적·사회적 문제에 대해 책임지지 않습니다.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#16324f]">4. 지식재산권</h2>
          <p>
            서비스에 사용된 문구, 디자인, 캐릭터 설명 등은 MBTI WORLD 또는 해당 저작권자에게 귀속됩니다.
            다만, 서비스에 등장하는 애니메이션 캐릭터명·작품명은 각 저작권자 소유이며,
            본 서비스는 비영리·오마주 성격의 팬 콘텐츠로서 이를 참고 및 활용합니다.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#16324f]">5. 책임 제한</h2>
          <p>
            서비스 이용 과정에서 발생하는 직접·간접 손해에 대해 법률이 허용하는 범위 내에서 책임을 제한합니다.
            아래 경우에도 동일하게 적용됩니다.
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2">
            <li>불가항력적 사유(서버 장애, 자연재해 등)로 인한 서비스 중단 또는 지연</li>
            <li>이용자의 장치·네트워크 환경으로 인한 오류</li>
            <li>결과 해석을 잘못 적용해 발생한 개인적 판단 오류</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#16324f]">6. 서비스 변경 및 종료</h2>
          <p>
            MBTI WORLD ANIMATION은 서비스 개선을 위해 세계관, 문항, 결과 설명 등을 예고 없이 변경할 수 있습니다.
            서비스 일부 또는 전체를 종료할 경우, 사전에 이 페이지 또는 서비스 내 공지를 통해 안내합니다.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#16324f]">7. 준거법 및 관할</h2>
          <p>
            본 약관은 대한민국 법령에 따라 해석되며, 분쟁 발생 시 관할 법원은 대한민국 법원으로 합니다.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-lg font-bold text-[#16324f]">8. 문의</h2>
          <p>
            이용 약관 관련 문의는 아래 메일로 연락해 주세요.
            접수된 문의는 순차적으로 확인하며, 가능한 빠르게 답변드리겠습니다.
          </p>
          <p className="font-bold text-[#16324f]">1217records.kor@gmail.com</p>
        </section>

        <div className="pt-8 border-t border-gray-100 text-[10px] text-gray-400 italic">
          본 약관은 관련 법령 및 서비스 운영 방침의 변경에 따라 수정될 수 있습니다.
          변경 시 이 페이지에서 사전에 안내합니다.
        </div>
      </div>
    </div>
  );
}

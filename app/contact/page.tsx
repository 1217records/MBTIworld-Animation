import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import { localizedAlternates } from "@/lib/seo";
import ContactClient from "./ContactClient";

export const runtime = "edge";

export const metadata: Metadata = {
  title: `새 테스트 제안 | ${SITE_NAME}`,
  description: "MBTI 유형별 특징과 궁합을 분석하는 애니메이션 테스트에 대한 새로운 테마를 제안해 주세요.",
  alternates: localizedAlternates("/contact", "ko"),
  openGraph: {
    title: `새 테스트 제안 | ${SITE_NAME}`,
    description: "MBTI 유형별 특징과 궁합을 분석하는 애니메이션 테스트에 대한 새로운 테마를 제안해 주세요.",
    type: "website",
    url: `${SITE_ORIGIN}/contact`,
  },
  twitter: {
    card: "summary_large_image",
    title: `새 테스트 제안 | ${SITE_NAME}`,
    description: "MBTI 유형별 특징과 궁합을 분석하는 애니메이션 테스트에 대한 새로운 테마를 제안해 주세요.",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "새 테스트 제안",
    description: "MBTI 유형별 특징과 궁합을 분석하는 애니메이션 테스트에 대한 테마 제안 페이지",
    mainEntityOfPage: `${SITE_ORIGIN}/contact`,
  };

  return (
    <div className="max-w-xl mx-auto space-y-8 animate-in fade-in">
      <JsonLd data={jsonLd} />
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold font-serif text-[#16324f]">새 테스트 제안</h1>
        <p className="text-gray-500 text-sm">어떤 애니메이션 테스트를 보고 싶으신가요? 제안해 주세요!</p>
        <p className="text-gray-400 text-xs">문의 메일: mbtiworld.kr@gmail.com</p>
      </div>
      <ContactClient />
    </div>
  );
}

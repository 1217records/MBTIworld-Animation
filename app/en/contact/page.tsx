import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import { localizedAlternates } from "@/lib/seo";
import ContactClientEn from "./ContactClient";

export const runtime = "edge";

export const metadata: Metadata = {
  title: `Suggest a Test | ${SITE_NAME}`,
  description: "Suggest a new anime world for MBTI WORLD ANIMATION.",
  alternates: localizedAlternates("/contact", "en"),
  openGraph: {
    title: `Suggest a Test | ${SITE_NAME}`,
    description: "Suggest a new anime world for MBTI WORLD ANIMATION.",
    type: "website",
    url: `${SITE_ORIGIN}/en/contact`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Suggest a Test | ${SITE_NAME}`,
    description: "Suggest a new anime world for MBTI WORLD ANIMATION.",
  },
};

export default function ContactPageEn() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Suggest a New Test",
    description: "Suggest a new anime MBTI test theme",
    mainEntityOfPage: `${SITE_ORIGIN}/en/contact`,
  };

  return (
    <div className="max-w-xl mx-auto space-y-8 animate-in fade-in">
      <JsonLd data={jsonLd} />
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold font-serif text-[#16324f]">Suggest a New Test</h1>
        <p className="text-gray-500 text-sm">What anime world do you want next? Tell us!</p>
        <p className="text-gray-400 text-xs">Contact: mbtiworld.kr@gmail.com</p>
      </div>
      <ContactClientEn />
    </div>
  );
}

import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import { localizedAlternates } from "@/lib/seo";

export const runtime = "edge";

export const metadata: Metadata = {
  title: `Terms | ${SITE_NAME}`,
  description: "Service terms for MBTI WORLD ANIMATION.",
  alternates: localizedAlternates("/terms", "en"),
  openGraph: {
    title: `Terms | ${SITE_NAME}`,
    description: "Service terms for MBTI WORLD ANIMATION.",
    type: "website",
    url: `${SITE_ORIGIN}/en/terms`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Terms | ${SITE_NAME}`,
    description: "Service terms for MBTI WORLD ANIMATION.",
  },
};

export default function TermsPageEn() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Terms",
    description: "MBTI WORLD ANIMATION service terms",
    mainEntityOfPage: `${SITE_ORIGIN}/en/terms`,
  };

  return (
    <div className="space-y-8 animate-in fade-in">
      <JsonLd data={jsonLd} />
      <div className="space-y-2">
        <h1 className="text-3xl font-bold font-serif text-[#16324f]">Terms</h1>
        <p className="text-gray-400 text-sm">Last updated: February 10, 2026</p>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-8 text-sm text-gray-600 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">1. Purpose</h2>
          <p>This service provides an entertainment-focused MBTI test inspired by anime worlds.</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">2. Content Use</h2>
          <p>All content is for personal use only. Commercial redistribution is not permitted.</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">3. Interpretation</h2>
          <p>Results are for self-reflection and do not replace professional diagnosis.</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">4. Limitation of Liability</h2>
          <p>We limit liability to the maximum extent permitted by law.</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">5. Contact</h2>
          <p>For questions about these terms, contact us at:</p>
          <p className="font-bold text-[#16324f]">1217records.kor@gmail.com</p>
        </section>
      </div>
    </div>
  );
}

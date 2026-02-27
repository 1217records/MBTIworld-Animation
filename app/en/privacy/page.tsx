import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import { localizedAlternates } from "@/lib/seo";

export const runtime = "edge";

export const metadata: Metadata = {
  title: `Privacy | ${SITE_NAME}`,
  description: "Privacy policy for MBTI WORLD ANIMATION.",
  alternates: localizedAlternates("/privacy", "en"),
  openGraph: {
    title: `Privacy | ${SITE_NAME}`,
    description: "Privacy policy for MBTI WORLD ANIMATION.",
    type: "website",
    url: `${SITE_ORIGIN}/en/privacy`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Privacy | ${SITE_NAME}`,
    description: "Privacy policy for MBTI WORLD ANIMATION.",
  },
};

export default function PrivacyEn() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Privacy Policy",
    description: "MBTI WORLD ANIMATION privacy policy",
    mainEntityOfPage: `${SITE_ORIGIN}/en/privacy`,
  };

  return (
    <div className="space-y-8 animate-in fade-in">
      <JsonLd data={jsonLd} />
      <div className="space-y-2">
        <h1 className="text-3xl font-bold font-serif text-[#16324f]">Privacy Policy</h1>
        <p className="text-gray-400 text-sm">Last updated: February 5, 2026</p>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-8 text-sm text-gray-600 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">1. Data Collected</h2>
          <p>We collect the minimum information necessary for contact requests.</p>
          <ul className="list-disc list-inside pl-4">
            <li>Contact form: name (nickname), email, message</li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">2. Purpose of Use</h2>
          <p>Data is used only to respond to inquiries and improve service quality.</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">3. Retention & Deletion</h2>
          <p>Data is deleted after the purpose is fulfilled and is not stored permanently.</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">4. Third-Party Sharing</h2>
          <p>We do not share personal data with third parties unless required by law.</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">5. Processing by Vendors</h2>
          <p>We may use Formspree to deliver contact emails. Data is used only for inquiry handling.</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">6. User Rights</h2>
          <p>You can request access, correction, or deletion of your data via the contact email.</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">7. Contact</h2>
          <p>For privacy questions, contact:</p>
          <p className="font-bold text-[#16324f]">1217records.kor@gmail.com</p>
        </section>
        <div className="pt-8 border-t border-gray-100 text-[10px] text-gray-400 italic">
          This policy may be updated if laws or guidelines change.
        </div>
      </div>
    </div>
  );
}

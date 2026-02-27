import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import { localizedAlternates } from "@/lib/seo";

export const runtime = "edge";

export const metadata: Metadata = {
  title: `About | ${SITE_NAME}`,
  description: "Learn the philosophy and values behind MBTI WORLD ANIMATION.",
  alternates: localizedAlternates("/about", "en"),
  openGraph: {
    title: `About | ${SITE_NAME}`,
    description: "Learn the philosophy and values behind MBTI WORLD ANIMATION.",
    type: "website",
    url: `${SITE_ORIGIN}/en/about`,
  },
  twitter: {
    card: "summary_large_image",
    title: `About | ${SITE_NAME}`,
    description: "Learn the philosophy and values behind MBTI WORLD ANIMATION.",
  },
};

export default function AboutEn() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "MBTI-World Story",
    description: "About MBTI WORLD ANIMATION",
    mainEntityOfPage: `${SITE_ORIGIN}/en/about`,
  };

  return (
    <div className="space-y-12 animate-in fade-in pb-20">
      <JsonLd data={jsonLd} />
      <div className="space-y-3 text-center">
        <h1 className="text-4xl font-black font-serif text-[#16324f]">MBTI-World Story</h1>
        <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em]">Why we built this test</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-10">
        <section className="bg-white p-10 sm:p-14 rounded-[3rem] shadow-sm border border-gray-50 space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-[#16324f] font-serif text-center">
              “What kind of adventure does your soul dream of?”
            </h2>
            <div className="text-gray-600 leading-[2] space-y-6">
              <p>
                MBTI-World is more than a 16-type label. We believe that the choices of beloved characters reflect
                the deepest patterns inside us.
              </p>
              <p>
                By placing you inside familiar stories, we help you discover strengths you may not have noticed before.
                That is the heart of this experience.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
            <div className="p-8 rounded-3xl bg-[#fdfcf9] border border-gray-100 space-y-3">
              <span className="text-2xl">🔍</span>
              <h3 className="font-bold text-[#16324f]">Precise Matching</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                We cross-check character analysis with MBTI theory to deliver a believable match.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-[#fdfcf9] border border-gray-100 space-y-3">
              <span className="text-2xl">🎨</span>
              <h3 className="font-bold text-[#16324f]">Calm Experience</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Clean visuals and clear flows keep the focus on immersion and reflection.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white p-10 sm:p-14 rounded-[3rem] shadow-sm border border-gray-50 space-y-8">
          <h2 className="text-2xl font-black text-[#16324f] font-serif text-center">Our Values</h2>
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="text-4xl font-black text-gray-100 font-serif">01</div>
              <div className="space-y-2">
                <h4 className="font-bold text-[#16324f]">Bias-Free Understanding</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  No type is wrong. We highlight each type’s unique strengths through characters.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-4xl font-black text-gray-100 font-serif">02</div>
              <div className="space-y-2">
                <h4 className="font-bold text-[#16324f]">Power of Story</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We capture genuine reactions through narrative moments instead of cold questionnaires.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-10 sm:p-14 rounded-[3rem] shadow-sm border border-gray-50 space-y-8">
          <h2 className="text-2xl font-black text-[#16324f] font-serif text-center">MBTI Theory and How We Use It</h2>
          <div className="space-y-6 text-sm text-gray-600 leading-relaxed">
            <p>
              MBTI is a personality framework derived from C. G. Jung’s type theory. It combines four preference axes
              (E/I, S/N, T/F, J/P) into 16 types. In this service, MBTI is used as a self-reflection aid, not as a clinical tool.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-5 space-y-3">
                <h3 className="font-bold text-[#16324f]">Four Preference Axes</h3>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                  <li>Extraversion (E) / Introversion (I): energy direction</li>
                  <li>Sensing (S) / Intuition (N): information focus</li>
                  <li>Thinking (T) / Feeling (F): decision priority</li>
                  <li>Judging (J) / Perceiving (P): planning flexibility</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-5 space-y-3">
                <h3 className="font-bold text-[#16324f]">Limits and Reading Rules</h3>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm">
                  <li>A type is a tendency summary, not a fixed identity.</li>
                  <li>Research notes limits in retest consistency and forced dichotomies.</li>
                  <li>Results are for reflection and communication support, not diagnosis.</li>
                  <li>Big Five can be used as a complementary validated model.</li>
                </ul>
              </div>
            </div>
            <p>
              We also use anime narrative scenes to reduce abstract wording and improve engagement.
              Character matching is provided as a practical storytelling bridge for self-understanding.
            </p>
          </div>
        </section>

        <section className="bg-white p-10 sm:p-14 rounded-[3rem] shadow-sm border border-gray-50 space-y-8">
          <h2 className="text-2xl font-black text-[#16324f] font-serif text-center">Operating Principles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#fdfcf9] border border-gray-100 space-y-3">
              <p className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase">Clarity</p>
              <h3 className="font-bold text-[#16324f]">Clear Guidance</h3>
              <p className="text-sm text-gray-500 leading-relaxed">Short questions, clear results, easy flow.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#fdfcf9] border border-gray-100 space-y-3">
              <p className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase">Respect</p>
              <h3 className="font-bold text-[#16324f]">Respectful Tone</h3>
              <p className="text-sm text-gray-500 leading-relaxed">No judgment. We keep the language warm.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#fdfcf9] border border-gray-100 space-y-3">
              <p className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase">Growth</p>
              <h3 className="font-bold text-[#16324f]">Continuous Improvement</h3>
              <p className="text-sm text-gray-500 leading-relaxed">We keep adding new worlds and refining results.</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-10 sm:p-14 rounded-[3rem] shadow-sm border border-gray-50 space-y-6">
          <h2 className="text-2xl font-black text-[#16324f] font-serif">Contact</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            If you have suggestions, collaborations, or bug reports, email us below.
          </p>
          <p className="text-sm font-bold text-[#16324f]">1217records.kor@gmail.com</p>
        </section>
      </div>
    </div>
  );
}

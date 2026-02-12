import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import AdExperiment from "@/components/AdExperiment";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import { localizedAlternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: `${SITE_NAME} | EN`,
  description: "A story-driven MBTI test inspired by iconic anime worlds.",
  alternates: localizedAlternates("/", "en"),
  openGraph: {
    title: `${SITE_NAME} | EN`,
    description: "A story-driven MBTI test inspired by iconic anime worlds.",
    type: "website",
    url: `${SITE_ORIGIN}/en`,
    images: [
      {
        url: `${SITE_ORIGIN}/og/home?v=2`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | EN`,
    description: "A story-driven MBTI test inspired by iconic anime worlds.",
    images: [`${SITE_ORIGIN}/og/home?v=2`],
  },
};

export default function HomeEn() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      applicationCategory: "Entertainment",
      operatingSystem: "Web",
      description: `Story-driven MBTI test by ${SITE_NAME}`,
      url: `${SITE_ORIGIN}/en`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does this result diagnose my personality?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. This is entertainment and self-reflection content, not a clinical diagnosis.",
          },
        },
        {
          "@type": "Question",
          name: "How long does the test take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Each world has 16 questions and typically takes around 2 to 3 minutes.",
          },
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center gap-12">
      <JsonLd data={jsonLd} />
      <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
        <div className="inline-block px-4 py-1.5 rounded-full bg-[#16324f]/10 text-[#16324f] text-xs font-bold tracking-widest uppercase mb-2">
          Story-driven Personality Test
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#0b1220] leading-tight">
          <span className="block font-slab">MBTI WORLD</span>
          <span className="block mt-0.5 text-base sm:text-lg md:text-xl font-extrabold tracking-[0.22em] text-[#16324f]/70 uppercase font-sans">
            Animation Edition
          </span>
        </h1>
        <p className="text-gray-500 max-w-lg mx-auto leading-relaxed text-sm sm:text-base">
          What would you do if you were in a legendary anime scene?
          <br />
          Answer 16 story-based questions and meet your character match.
        </p>
      </div>

      <section className="w-full max-w-3xl rounded-2xl bg-white border border-gray-100 p-6 sm:p-8 text-left shadow-sm">
        <h2 className="text-xl font-black font-serif text-[#16324f]">Quick Summary Q&A</h2>
        <div className="mt-4 space-y-3 text-sm text-gray-600 leading-relaxed">
          <p><strong>Q.</strong> What does this site offer?<br /><strong>A.</strong> Story-driven MBTI tests with character-based result interpretation.</p>
          <p><strong>Q.</strong> How long is one test?<br /><strong>A.</strong> 16 questions per world, usually finished in 2 to 3 minutes.</p>
          <p><strong>Q.</strong> How should I use the result?<br /><strong>A.</strong> Use it as a reflection guide, not as an absolute diagnosis.</p>
        </div>
      </section>

      <section className="w-full max-w-3xl text-left space-y-10">
        <AdExperiment
          experimentKey="home_primary_en"
          className="bg-white rounded-[2rem] p-4 sm:p-6 border border-gray-100 shadow-sm"
          format="horizontal"
        />

        <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
          <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">Why This Test Feels Different</h2>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            MBTI WORLD ANIMATION is a story-first personality test that focuses on how you actually choose when you are immersed in a scene.
            Instead of ticking generic boxes, we place you inside meaningful moments and observe what feels most natural to you.
            The result is not just a type label, but a narrative that connects strengths, blind spots, and relationship patterns.
          </p>
          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
            We emphasize clarity, context, and balance. Your results explain both strengths and cautions, and are meant for self-reflection rather than diagnosis.
            The goal is simple: make the journey fun, and the reflection meaningful.
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-gray-500">
            <span className="px-3 py-2 rounded-full bg-[#fdfcf9] border border-gray-100 font-bold">#Story-based</span>
            <span className="px-3 py-2 rounded-full bg-[#fdfcf9] border border-gray-100 font-bold">#MBTI Insights</span>
            <span className="px-3 py-2 rounded-full bg-[#fdfcf9] border border-gray-100 font-bold">#Character Match</span>
            <span className="px-3 py-2 rounded-full bg-[#fdfcf9] border border-gray-100 font-bold">#Self-Reflection</span>
          </div>
        </section>

        <div className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-4">
          <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">How the Test Works</h2>
          <p className="text-gray-600 leading-relaxed">
            Each world includes 16 questions. Your choices map to the four MBTI dimensions (E/I, S/N, T/F, J/P).
            We interpret the result through story context to make it intuitive and memorable.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-500">
            <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
              <p className="font-bold text-[#16324f]">Questions</p>
              <p>16 per world</p>
            </div>
            <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
              <p className="font-bold text-[#16324f]">Time</p>
              <p>2–3 minutes</p>
            </div>
            <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
              <p className="font-bold text-[#16324f]">Output</p>
              <p>Type + Character</p>
            </div>
          </div>
          <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4 text-sm text-gray-500">
            <p className="font-bold text-[#16324f]">Design Principle</p>
            <p>Each question balances the four MBTI axes to keep results consistent.</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 w-full">
          <Link
            href="/en/select"
            className="w-full max-w-sm px-12 py-4 rounded-full bg-[#16324f] text-white font-bold text-lg shadow-xl shadow-[#16324f]/25 hover:scale-105 transition-transform active:scale-95 text-center"
          >
            Start the Test
          </Link>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm font-bold text-[#16324f]">
            <Link
              href="/en/about"
              className="hover:text-[#0f2338] underline underline-offset-4 decoration-transparent hover:decoration-[#16324f]/60 transition-colors"
            >
              About
            </Link>
            <span className="text-[#16324f]/40" aria-hidden="true">·</span>
            <Link
              href="/en/privacy"
              className="hover:text-[#0f2338] underline underline-offset-4 decoration-transparent hover:decoration-[#16324f]/60 transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

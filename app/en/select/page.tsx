import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { THEMES } from "@/data";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";

export const metadata: Metadata = {
  title: `Choose a Test | ${SITE_NAME}`,
  description: "Pick an anime world and start your MBTI story test.",
  alternates: { canonical: `${SITE_ORIGIN}/en/select` },
  openGraph: {
    title: `Choose a Test | ${SITE_NAME}`,
    description: "Pick an anime world and start your MBTI story test.",
    type: "website",
    url: `${SITE_ORIGIN}/en/select`,
  },
  twitter: {
    card: "summary_large_image",
    title: `Choose a Test | ${SITE_NAME}`,
    description: "Pick an anime world and start your MBTI story test.",
  },
};

const THEME_LABELS_EN: Record<string, string> = {
  onepiece: "One Piece",
  naruto: "Naruto",
  fma: "Fullmetal Alchemist",
  aot: "Attack on Titan",
  shinchan: "Crayon Shin-chan",
};

const THEME_DETAILS: Record<string, { headline: string; body: string }> = {
  onepiece: {
    headline: "One Piece World Test",
    body:
      "Explore the balance between freedom, courage, and loyalty. Your leadership style, risk handling, and core values show up across 16 questions and lead to a character match.",
  },
  naruto: {
    headline: "Naruto World Test",
    body:
      "Track your perseverance and relationship focus through growth-driven stories. The questions decode teamwork, emotional control, and goal orientation.",
  },
  fma: {
    headline: "Fullmetal Alchemist World Test",
    body:
      "Follow the themes of sacrifice and responsibility. We examine how you weigh logic, values, and relationships through 16 scenario-based choices.",
  },
  aot: {
    headline: "Attack on Titan World Test",
    body:
      "In a world of survival and freedom, your decision-making patterns, risk response, and emotional balance become clear through 16 intense questions.",
  },
  shinchan: {
    headline: "Crayon Shin-chan World Test",
    body:
      "Everyday moments reveal your spontaneity, empathy, and realism. Small choices build a clear pattern that leads to your MBTI type and character match.",
  },
};

export default function TestSelectEn() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Anime MBTI Test Selection",
    applicationCategory: "Entertainment",
    operatingSystem: "Web",
    description: "Choose an anime world for the MBTI story test",
    url: `${SITE_ORIGIN}/en/select`,
  };

  return (
    <div className="space-y-10 animate-in fade-in">
      <JsonLd data={jsonLd} />
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold font-serif text-[#16324f]">Choose a Test</h1>
        <p className="text-gray-500 text-sm">Pick a world and start instantly.</p>
      </div>

      <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">🧭 Selection Guide</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600">
          <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
            <p className="font-bold text-[#16324f]">📚 Familiar World</p>
            <p>Choosing a story you know boosts immersion.</p>
          </div>
          <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
            <p className="font-bold text-[#16324f]">⏱️ Quick Run</p>
            <p>Each test takes about 2–3 minutes.</p>
          </div>
          <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4">
            <p className="font-bold text-[#16324f]">✨ Story Results</p>
            <p>We explain your type through character scenes.</p>
          </div>
        </div>
        <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4 text-sm text-gray-500 leading-relaxed">
          <p className="font-bold text-[#16324f]">Quick Tip</p>
          <p>If you are unsure, start with a world you are currently interested in.</p>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">
          Results are for fun and self-reflection, not a clinical diagnosis.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Object.values(THEMES).map((theme) => {
          const label = THEME_LABELS_EN[theme.id] ?? theme.label;
          return (
            <Link
              key={theme.id}
              href={`/en/test/${theme.id}`}
              className="group relative overflow-hidden rounded-3xl p-8 bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col gap-4"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${theme.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-2xl shadow-inner">
                  {theme.emoji}
                </div>
                <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">{label}</h2>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed">
                Explore {label} scenarios in 16 questions and find your character match.
              </p>

              <div className="flex gap-2 flex-wrap">
                {theme.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-lg bg-gray-100 text-[10px] font-bold text-gray-400">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className={`mt-4 px-6 py-3 rounded-full bg-gradient-to-r ${theme.gradient} text-white font-bold text-center text-sm shadow-md group-hover:scale-105 transition-transform`}>
                Start
              </div>
            </Link>
          );
        })}

        <Link
          href="/en/contact"
          className="rounded-3xl p-8 bg-gray-50 border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-3 text-center group hover:bg-gray-100 transition-colors"
        >
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl text-gray-400 group-hover:scale-110 transition-transform">
            +
          </div>
          <span className="text-sm font-bold text-gray-400">Suggest a New Theme</span>
        </Link>
      </div>

      <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">Theme Highlights</h2>
        <div className="space-y-6">
          {Object.values(THEMES).map((theme) => {
            const detail = THEME_DETAILS[theme.id] ?? {
              headline: `${THEME_LABELS_EN[theme.id] ?? theme.label} World Test`,
              body: "We analyze your MBTI patterns through iconic scenes.",
            };
            return (
              <article key={theme.id} className="space-y-2">
                <h3 className="text-lg font-black text-[#16324f]">{detail.headline}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{detail.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">Psychological Basis</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          Each test balances the four MBTI axes (E/I, S/N, T/F, J/P). We translate scenario choices into patterns that can be reflected on later.
        </p>
        <h3 className="text-base font-black text-[#16324f]">References</h3>
        <ul className="list-disc list-inside text-xs text-gray-500 space-y-2">
          <li>MBTI four-axis model</li>
          <li>Typology-based personality frameworks</li>
          <li>Introductory personality psychology concepts</li>
        </ul>
      </section>
    </div>
  );
}

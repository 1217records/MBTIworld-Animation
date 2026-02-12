import type { Metadata } from "next";
import Link from "next/link";
import { permanentRedirect } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import AdExperiment from "@/components/AdExperiment";
import { CONTENTS, THEMES } from "@/data";
import { CONTENTS_EN, THEMES_EN } from "@/data-en";
import { SITE_NAME, SITE_ORIGIN, SITE_TAGLINE } from "@/lib/site";
import { localizedAlternatesFromUrls } from "@/lib/seo";
import ResultShareClientEn from "./ResultShareClient";

export const runtime = "edge";

function normalizeType(raw: string | null): string {
  if (!raw) return "ISTJ";
  return raw.replace(/\.png$/i, "").toUpperCase();
}

function resolveThemeId(raw: string | undefined): string {
  if (raw && (Object.prototype.hasOwnProperty.call(THEMES_EN, raw) || Object.prototype.hasOwnProperty.call(THEMES, raw))) {
    return raw;
  }
  return "onepiece";
}

function resolveType(
  raw: string | undefined,
  content:
    | (typeof CONTENTS_EN)[keyof typeof CONTENTS_EN]
    | (typeof CONTENTS)[keyof typeof CONTENTS],
): string {
  const normalized = normalizeType(raw ?? "ISTJ");
  if (Object.prototype.hasOwnProperty.call(content.results, normalized)) return normalized;
  return "ISTJ";
}

type ResultPageProps = {
  searchParams: Promise<{ theme?: string; type?: string }>;
};

const THEME_LABELS_EN: Record<string, string> = {
  onepiece: "One Piece",
  naruto: "Naruto",
  fma: "Fullmetal Alchemist",
  aot: "Attack on Titan",
  shinchan: "Crayon Shin-chan",
  jujutsu: "Jujutsu Kaisen",
};

const MBTI_SHORT_DESCS_EN: Record<string, string> = {
  ISTJ: "reliability, duty, and consistency",
  ISFJ: "care, support, and steady devotion",
  INFJ: "insight, meaning, and inner alignment",
  INTJ: "strategy, systems, and long-term vision",
  ISTP: "practical problem solving under pressure",
  ISFP: "sensitivity, freedom, and balance",
  INFP: "values, empathy, and authenticity",
  INTP: "analysis, curiosity, and logic",
  ESTP: "action, adaptability, and bold moves",
  ESFP: "energy, warmth, and social flow",
  ENFP: "ideas, passion, and possibility",
  ENTP: "experimentation, debate, and innovation",
  ESTJ: "structure, leadership, and execution",
  ESFJ: "harmony, care, and community",
  ENFJ: "motivation, guidance, and growth",
  ENTJ: "decisive leadership and achievement",
};

const MBTI_LONG_DESCS_EN: Record<string, string> = Object.fromEntries(
  Object.entries(MBTI_SHORT_DESCS_EN).map(([type, desc]) => [
    type,
    `${type} types are often associated with ${desc}. They tend to make choices through a consistent internal framework and shine when their strengths are clearly defined. Use this as a reflection guide rather than a rigid label.`,
  ])
);

export async function generateMetadata({ searchParams }: ResultPageProps): Promise<Metadata> {
  const resolved = await searchParams;
  const themeId = resolveThemeId(resolved?.theme);

  const theme = THEMES_EN[themeId] || THEMES[themeId as keyof typeof THEMES] || THEMES.onepiece;
  const content = CONTENTS_EN[themeId] || CONTENTS[themeId as keyof typeof CONTENTS] || CONTENTS.onepiece;
  const type = resolveType(resolved?.type, content);
  const character = content.results[type] || content.results.ISTJ;
  const label = THEME_LABELS_EN[theme.id] ?? theme.label;

  const ogImage = `${SITE_ORIGIN}/og/${encodeURIComponent(theme.id)}/${encodeURIComponent(type)}.png`;
  const ogTitle = `${type} · ${character.name}`;
  const description = `Your ${label} MBTI result. Explore strengths, patterns, and character match.`;
  const canonicalKo = `${SITE_ORIGIN}/result?theme=${encodeURIComponent(theme.id)}&type=${encodeURIComponent(type)}`;
  const canonicalEn = `${SITE_ORIGIN}/en/result?theme=${encodeURIComponent(theme.id)}&type=${encodeURIComponent(type)}`;

  return {
    title: `${type} Result | ${SITE_NAME}`,
    description,
    alternates: localizedAlternatesFromUrls(canonicalKo, canonicalEn, "en"),
    openGraph: {
      title: ogTitle,
      description,
      type: "website",
      url: canonicalEn,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [ogImage],
    },
  };
}

export default async function ResultPageEn({ searchParams }: ResultPageProps) {
  const resolved = await searchParams;
  const rawThemeId = resolved?.theme;
  const rawType = normalizeType(resolved?.type ?? "ISTJ");
  const themeId = resolveThemeId(resolved?.theme);

  const theme = THEMES_EN[themeId] || THEMES[themeId as keyof typeof THEMES] || THEMES.onepiece;
  const content = CONTENTS_EN[themeId] || CONTENTS[themeId as keyof typeof CONTENTS] || CONTENTS.onepiece;
  const type = resolveType(resolved?.type, content);
  const character = content.results[type] || content.results.ISTJ;
  const label = THEME_LABELS_EN[theme.id] ?? theme.label;

  const shareUrl = `${SITE_ORIGIN}/en/result?theme=${encodeURIComponent(theme.id)}&type=${encodeURIComponent(type)}`;
  const imageUrl = `${SITE_ORIGIN}/og/${encodeURIComponent(theme.id)}/${encodeURIComponent(type)}.png`;

  if (rawThemeId !== theme.id || rawType !== type) {
    permanentRedirect(shareUrl);
  }

  const shortDesc = MBTI_SHORT_DESCS_EN[type] || MBTI_SHORT_DESCS_EN.ISTJ;

  const summaryPoints = [
    `Core traits: ${shortDesc}`,
    `Interpreted through the ${label} world narrative`,
    "Balanced view of strengths and cautions",
  ];

  const traitExpansion = `${type} types tend to act from a consistent internal standard. The focus on ${shortDesc} shapes how decisions are made and how relationships are managed. When pressure rises, clarity and pacing matter most. Learning to balance personal standards with external expectations leads to more stable outcomes.`;
  const characterCorrelation = `${character.name} feels like a ${type} because their repeated choices in the ${label} world show the same decision pattern. Even under stress, they return to a clear internal standard, build trust through actions, and prioritize responsibility over impulsive heroism. This consistent behavior mirrors the ${type} decision flow and makes the match feel believable.`;
  const episodeInsight = `${character.name}'s defining scene reflects how ${type} tendencies appear in real choices. The same ${shortDesc} pattern shows up when pressure rises: keeping a personal standard, protecting key relationships, and acting with consistency instead of impulse.`;
  const connectionHighlights = [
    `${type} tends to keep a standard-driven decision flow even when emotions escalate.`,
    `${character.name}'s repeated behavior aligns with ${type} through responsibility, role clarity, and trust-building actions.`,
    `${shortDesc} often appears as a clear priority order in conflict-heavy situations.`,
  ];
  const compatibilityStrategies = [
    "With emotion-led partners, start with acknowledgment before jumping to solutions.",
    "For planner vs improviser pairs, split roles into decision ownership and execution ownership.",
    "When tension rises, separate problem-solving talk from emotional processing time.",
  ];
  const communicationChecklist = [
    "In conflict: summarize their intent first, then present your criteria.",
    "Before final decisions: align facts, emotions, and priorities in that order.",
    "For repair: use one strength + one improvement point feedback.",
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${type} Result | ${SITE_NAME}`,
    description: `Story-driven MBTI result based on ${label}`,
    about: `${type} MBTI type`,
    mainEntityOfPage: shareUrl,
  };

  return (
    <div className="space-y-16 animate-in fade-in pb-24">
      <JsonLd data={jsonLd} />

      <section className={`relative overflow-hidden rounded-[3rem] p-7 sm:p-16 bg-gradient-to-br ${theme.gradient} text-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)]`}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[130px] -translate-y-1/2 translate-x-1/2 rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-[100px] translate-y-1/2 -translate-x-1/2 rounded-full" />

        <div className="relative z-10 space-y-10">
          <div className="flex flex-col items-center text-center gap-6">
            <span className="px-6 py-2.5 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-black tracking-[0.4em] uppercase border border-white/10">
              {SITE_TAGLINE}
            </span>
            <div className="space-y-4">
              <h1 className="text-6xl sm:text-8xl font-black font-serif tracking-widest drop-shadow-2xl">{type}</h1>
              <div className="h-1 w-20 bg-white/40 mx-auto rounded-full" />
              <p className="text-white/90 font-bold text-xl sm:text-2xl tracking-tight">{shortDesc}</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-2xl rounded-[3rem] p-7 sm:p-14 border border-white/20 flex flex-col items-center text-center gap-8 shadow-2xl">
            <div className="space-y-1">
              <div className="text-[11px] font-black text-white/50 uppercase tracking-[0.3em]">The Character That Matches Your Soul</div>
              <h2 className="text-[clamp(1.6rem,7vw,3.75rem)] font-black font-serif tracking-tight leading-none whitespace-nowrap">
                {character.name}
              </h2>
            </div>
            <p className="text-white text-base sm:text-xl leading-relaxed w-full max-w-none font-medium italic opacity-90 break-keep whitespace-normal px-2 text-center">
              {character.desc}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-[3rem] p-7 sm:p-14 border border-gray-100 shadow-sm space-y-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-black text-[#16324f] font-serif text-center">Summary Insights</h2>
        </div>
        <blockquote className="border-l-4 border-[#16324f]/20 pl-4 text-gray-600 leading-relaxed italic">
          “{type} types prioritize {shortDesc} while balancing goals and relationships.”
        </blockquote>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
          {summaryPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <AdExperiment
        experimentKey="result_primary_en"
        className="bg-white rounded-[2rem] p-4 sm:p-6 border border-gray-100 shadow-sm"
        format="horizontal"
      />

      <section className="bg-white rounded-[3rem] p-7 sm:p-10 border border-gray-100 shadow-sm space-y-4">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-black text-[#16324f] text-xl font-serif text-center">ℹ️ Interpretation Guide</h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto">
          This result is entertainment content inspired by anime stories. Use it as a self-reflection guide, not a clinical diagnosis.
        </p>
      </section>

      {character.episodeNote && (
        <section className="bg-white rounded-[3rem] p-7 sm:p-14 border border-gray-100 shadow-sm space-y-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="font-black text-[#16324f] text-xl font-serif text-center">Memorable Scene</h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg sm:text-xl font-serif text-gray-800 leading-[1.8] italic text-center px-4">
              {character.episodeNote}
            </p>
            <div className="max-w-4xl mx-auto rounded-2xl bg-[#f8fbff] border border-[#16324f]/10 p-5 sm:p-6">
              <h3 className="text-sm font-black text-[#16324f] tracking-wide mb-2">Why this scene matches your result</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{episodeInsight}</p>
            </div>
          </div>
        </section>
      )}

      <section className="bg-white rounded-[3rem] p-7 sm:p-14 border border-gray-100 shadow-sm space-y-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-black text-[#16324f] text-xl font-serif text-center">Character & MBTI Connection</h2>
        </div>
        <div className="space-y-6">
          <p className="text-gray-600 leading-[2] text-base sm:text-lg">{characterCorrelation}</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {connectionHighlights.map((item) => (
              <div key={item} className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-4 text-sm text-gray-600 leading-relaxed">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#16324f] rounded-[3rem] px-7 sm:px-14 pt-4 pb-8 sm:pt-8 sm:pb-12 text-white shadow-2xl space-y-10 relative overflow-hidden">
        <div className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl ${theme.gradient} opacity-20 blur-[100px]`} />
        <div className="flex flex-col items-center gap-4 relative z-10 text-center">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-xl text-indigo-300">🧠</div>
          <h2 className="font-black text-white text-xl font-serif text-center">Type Trait Analysis</h2>
        </div>
        <div className="relative z-10">
          <p className="text-lg text-white/80 leading-[2] whitespace-pre-wrap font-light">{MBTI_LONG_DESCS_EN[type] || MBTI_LONG_DESCS_EN.ISTJ}</p>
          <p className="text-lg text-white/80 leading-[2] whitespace-pre-wrap font-light mt-6">{traitExpansion}</p>
        </div>
      </section>

      <section className="bg-white rounded-[3rem] p-7 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">Compatibility & Relationship Patterns</h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          {type} types can form complementary relationships with people who bring different energy. Balance planning with flexibility, and logic with empathy.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-[#f8fbff] border border-[#16324f]/10 p-5">
            <h3 className="text-base font-black text-[#16324f] mb-3">Practical Strategies</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
              {compatibilityStrategies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-5">
            <h3 className="text-base font-black text-[#16324f] mb-3">Communication Checklist</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
              {communicationChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-[3rem] p-7 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">Psychological Basis</h2>
        </div>
        <p className="text-gray-600 leading-relaxed">
          This interpretation uses MBTI’s four axes and common personality frameworks. Individual differences always apply.
        </p>
        <h3 className="text-lg font-black text-[#16324f]">References</h3>
        <ul className="list-disc list-inside text-sm text-gray-500 space-y-2">
          <li>MBTI four-axis model</li>
          <li>Typology-based personality frameworks</li>
          <li>Introductory personality psychology concepts</li>
        </ul>
      </section>

      <ResultShareClientEn themeId={theme.id} type={type} shareUrl={shareUrl} imageUrl={imageUrl} />

      <section className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link
          href="/en/select"
          className="w-full sm:w-auto px-12 py-4 rounded-full bg-[#16324f] text-white font-black text-lg shadow-xl shadow-[#16324f]/30 hover:-translate-y-1 transition-all active:scale-95"
        >
          Explore Another World
        </Link>
        <Link
          href={`/en/test/${theme.id}`}
          className="w-full sm:w-auto px-12 py-4 rounded-full bg-white border border-gray-200 text-[#16324f] font-black text-lg shadow-sm hover:bg-gray-50 transition-colors"
        >
          Retake This Test
        </Link>
      </section>

      <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">Related Tests</h2>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {Object.values(THEMES)
            .filter((item) => item.id !== theme.id)
            .slice(0, 2)
            .map((item) => (
              <Link
                key={item.id}
                href={`/en/test/${item.id}`}
                className="px-4 py-2 rounded-full bg-[#fdfcf9] border border-gray-100 text-sm font-bold text-[#16324f] hover:bg-white"
              >
                {(THEME_LABELS_EN[item.id] ?? item.label)} Test
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}

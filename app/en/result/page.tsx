import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { permanentRedirect } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import AdExperiment from "@/components/AdExperiment";
import { CONTENTS_EN, THEMES_EN } from "@/data-en";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import { localizedAlternatesFromUrls } from "@/lib/seo";
import ResultShareClientEn from "./ResultShareClient";

export const runtime = "edge";
const EN_TAGLINE = "Which anime character matches your MBTI?";

function normalizeType(raw: string | null): string {
  if (!raw) return "ISTJ";
  return raw.replace(/\.png$/i, "").toUpperCase();
}

function resolveThemeId(raw: string | undefined): string {
  if (raw && Object.prototype.hasOwnProperty.call(THEMES_EN, raw)) {
    return raw;
  }
  return "onepiece";
}

function resolveType(
  raw: string | undefined,
  content: (typeof CONTENTS_EN)[keyof typeof CONTENTS_EN],
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
  pokemon: "Pokemon Gen 1-2",
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

  const theme = THEMES_EN[themeId] || THEMES_EN.onepiece;
  const content = CONTENTS_EN[themeId] || CONTENTS_EN.onepiece;
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

  const theme = THEMES_EN[themeId] || THEMES_EN.onepiece;
  const content = CONTENTS_EN[themeId] || CONTENTS_EN.onepiece;
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
  const profileDetailBlocks = [
    {
      title: "Decision Style",
      body: `${type} usually makes decisions through a stable internal framework centered on ${shortDesc}.`,
    },
    {
      title: "Relationship Pattern",
      body: "They build trust through consistency and clearer priority-setting than reactive responses.",
    },
    {
      title: "Stress Pattern",
      body: "Under pressure, rigid standards or over-analysis can increase. Pacing and clarity become critical.",
    },
    {
      title: "Growth Focus",
      body: "Balancing logic and emotional context improves both collaboration quality and long-term outcomes.",
    },
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

      <section className="relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl w-full max-w-md mx-auto flex flex-col group border border-gray-100">
        {/* Character Image Background (Top Half) */}
        <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden bg-gray-50">
          <Image
            src={`/characters/${themeId}/${type}.png`}
            alt={`${character.name} illustration`}
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 400px"
            priority
          />
        </div>

        {/* Content Block Area (Bottom Half) */}
        <div className={`w-full py-5 sm:py-6 px-4 flex flex-col items-center justify-center text-center gap-1.5 z-10 bg-gradient-to-br ${theme.gradient} shrink-0`}>
          <h1 className="text-4xl sm:text-5xl font-black font-serif tracking-widest text-[#fff580] drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] leading-none">
            {type}
          </h1>
          <h2 className="text-xl sm:text-2xl font-black font-serif tracking-tight text-white drop-shadow-md leading-none">
            {character.name}
          </h2>
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
          <p className="text-white/60 text-xs tracking-widest uppercase font-bold">{shortDesc}</p>
        </div>
        <div className="relative z-10 space-y-6">
          <p className="text-lg text-white/80 leading-[2] font-light">{MBTI_LONG_DESCS_EN[type] || MBTI_LONG_DESCS_EN.ISTJ}</p>
          <p className="text-lg text-white/80 leading-[2] font-light">{traitExpansion}</p>

          {/* Core Motivation & Caution Pattern */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/10 border border-white/20 p-5 space-y-2">
              <p className="text-[11px] font-black tracking-[0.2em] uppercase text-white/60">🔥 Core Motivation</p>
              <p className="text-sm leading-relaxed text-white/90">
                {type} types feel most energized when they can fully express <strong className="text-white">{shortDesc}</strong>.
                Satisfaction runs highest when their choices align with their values and contribute meaningfully to goals or relationships.
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 border border-white/20 p-5 space-y-2">
              <p className="text-[11px] font-black tracking-[0.2em] uppercase text-white/60">⚡ Watch-Out Pattern</p>
              <p className="text-sm leading-relaxed text-white/90">
                Stress tends to rise when their judgment is ignored or expectations clash with reality.
                Recognizing this reaction pattern helps them stay more flexible when conflict arises.
              </p>
            </div>
          </div>

          {/* 4 Profile Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profileDetailBlocks.map((block) => (
              <article key={block.title} className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md p-4 sm:p-5 space-y-2">
                <p className="text-[11px] font-black tracking-[0.2em] uppercase text-white/60">{block.title}</p>
                <p className="text-sm sm:text-[15px] leading-[1.8] text-white/90">{block.body}</p>
              </article>
            ))}
          </div>

          {/* When This Type Shines */}
          <div className="rounded-2xl bg-white/10 border border-white/20 p-5 space-y-3">
            <p className="text-[11px] font-black tracking-[0.2em] uppercase text-white/60">✨ When This Type Shines</p>
            <ul className="space-y-2 text-sm text-white/85 leading-relaxed">
              <li className="flex gap-2"><span className="shrink-0">→</span><span>When given a role that clearly calls on their core strengths</span></li>
              <li className="flex gap-2"><span className="shrink-0">→</span><span>When working toward a shared goal with a trusted partner</span></li>
              <li className="flex gap-2"><span className="shrink-0">→</span><span>When their judgment leads to tangible, positive outcomes</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-[3rem] p-7 sm:p-10 border border-gray-100 shadow-sm space-y-7">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">Compatibility &amp; Relationship Patterns</h2>
          <p className="text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
            Compatibility isn&apos;t about a perfect match. The strongest synergy happens when different personalities connect as <strong className="text-[#16324f]/80">complementary roles</strong>.
          </p>
        </div>

        {/* Snapshot */}
        <div className="rounded-2xl bg-[#f8fbff] border border-[#16324f]/10 p-5 space-y-2">
          <p className="text-xs font-black tracking-[0.18em] uppercase text-[#16324f]/70">Compatibility Snapshot</p>
          <p className="text-gray-700 leading-relaxed">{compatibilityStrategies[0]}</p>
          <p className="text-sm text-gray-500 leading-relaxed mt-2">
            {type} types can form complementary relationships with people who bring different energy.
            Rather than viewing differences as friction, treating them as role-division hints leads to stronger, more satisfying bonds.
          </p>
        </div>

        {/* Talking with this type */}
        <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-5 space-y-3">
          <p className="text-xs font-black tracking-[0.18em] uppercase text-[#16324f]/70">💬 Talking with This Type</p>
          <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#16324f] font-bold shrink-0">✓</span><span>Share context and background before jumping to conclusions — it makes the conversation flow much more smoothly.</span></li>
            <li className="flex gap-2"><span className="text-[#16324f] font-bold shrink-0">✓</span><span>In conflict, separate factual judgment from emotional reaction — it reduces misunderstanding significantly.</span></li>
            <li className="flex gap-2"><span className="text-[#16324f] font-bold shrink-0">✓</span><span>When giving feedback, focus on <em>behavior</em>, not on judging the person — it will land far better.</span></li>
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-[#f8fbff] border border-[#16324f]/10 p-5 space-y-3">
            <h3 className="text-base font-black text-[#16324f]">Practical Strategies</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
              {compatibilityStrategies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-5 space-y-3">
            <h3 className="text-base font-black text-[#16324f]">Communication Checklist</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
              {communicationChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl bg-[#f8fbff] border border-[#16324f]/10 p-5">
          <p className="text-xs font-black tracking-[0.18em] uppercase text-[#16324f]/70 mb-2">📌 Relationship Principle</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            No type combination is inherently good or bad. What matters is recognizing that different types may have
            different judgment criteria and energy management styles — and choosing to learn from those differences.
            The compatibility insights here are a practical guide to understanding how different personalities can work together, not a definitive match score.
          </p>
        </div>
      </section>

      <section className="bg-white rounded-[3rem] p-7 sm:p-10 border border-gray-100 shadow-sm space-y-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">Psychological Basis</h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-lg mx-auto">
            MBTI is a lens for self-understanding, not a verdict. Treat your result as a starting point for exploration, not a final label.
          </p>
        </div>

        {/* MBTI 4-Axis Quick Guide */}
        <div className="rounded-2xl bg-[#f8fbff] border border-[#16324f]/10 p-5 space-y-4">
          <p className="text-xs font-black tracking-[0.18em] uppercase text-[#16324f]/70">MBTI&apos;s 4 Preference Dimensions</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {[
              { label: "Energy Direction", pair: "Extraversion (E) / Introversion (I)", desc: "Do you recharge with people, or through solitude?" },
              { label: "Information Intake", pair: "Sensing (S) / Intuition (N)", desc: "Do you focus on concrete facts, or patterns and possibilities?" },
              { label: "Decision Making", pair: "Thinking (T) / Feeling (F)", desc: "Do you prioritize logic and objectivity, or values and relationships?" },
              { label: "Lifestyle", pair: "Judging (J) / Perceiving (P)", desc: "Do you prefer structure and decisions, or flexibility and openness?" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-white border border-gray-100 p-3 space-y-1">
                <p className="text-[10px] font-black text-[#16324f]/60 tracking-widest uppercase">{item.label}</p>
                <p className="font-bold text-[#16324f] text-sm">{item.pair}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-black text-[#16324f]">How This Result Is Interpreted</h3>
          <p className="text-gray-600 leading-relaxed">
            This result interprets your response patterns through MBTI&apos;s four axes (E/I, S/N, T/F, J/P).
            A 4-letter type is a <strong>summary of relative preference patterns</strong>, not a permanent identity.
            The same person may get different results in different contexts — which is completely natural.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-black text-[#16324f]">Scientific Limits and Scope</h3>
          <p className="text-gray-600 leading-relaxed">
            MBTI is widely used in education and workplace settings, but psychometric studies have noted limitations
            around dichotomous scoring and retest consistency. Use this result for <strong>self-reflection and communication improvement</strong>,
            not clinical diagnosis. For a more precise picture, consider cross-referencing with validated models like the Big Five.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-black text-[#16324f]">Recommended Ways to Read Your Type</h3>
          <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#16324f] font-bold shrink-0">✓</span><span>Read your type as a current tendency, not a fixed label</span></li>
            <li className="flex gap-2"><span className="text-[#16324f] font-bold shrink-0">✓</span><span>Pair character matching with real behavior context, not just story similarities</span></li>
            <li className="flex gap-2"><span className="text-[#16324f] font-bold shrink-0">✓</span><span>Notice strengths first, then reframe cautions as growth opportunities</span></li>
            <li className="flex gap-2"><span className="text-[#16324f] font-bold shrink-0">✓</span><span>Cross-reference with validated trait models like Big Five when needed</span></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-black text-[#16324f]">References</h3>
          <ul className="space-y-1.5 text-sm text-gray-500 leading-relaxed">
            <li className="flex gap-2"><span className="shrink-0">—</span><span>Myers, I. B. &amp; Myers, P. B. (1980). <em>Gifts Differing: Understanding Personality Type.</em></span></li>
            <li className="flex gap-2"><span className="shrink-0">—</span><span>Jung, C. G. (1921). <em>Psychologische Typen.</em> (Original theory of psychological types)</span></li>
            <li className="flex gap-2"><span className="shrink-0">—</span><span>Psychometric studies on MBTI retest reliability and dichotomy limits (Boyle, 1995 et al.)</span></li>
            <li className="flex gap-2"><span className="shrink-0">—</span><span>McCrae &amp; Costa (1989). Comparative study of Big Five and MBTI correlations</span></li>
            <li className="flex gap-2"><span className="shrink-0">—</span><span>Interactive narrative-based personality assessment research (Liu et al., 2016)</span></li>
          </ul>
        </div>
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
          {Object.values(THEMES_EN)
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

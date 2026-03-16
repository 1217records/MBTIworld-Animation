import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { permanentRedirect } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import AdExperiment from "@/components/AdExperiment";
import { CONTENTS_EN, THEMES_EN } from "@/data-en";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import { localizedAlternatesFromUrls } from "@/lib/seo";
import ResultShareClientJa from "./ResultShareClient";

export const runtime = "edge";
const JA_TAGLINE = "あなたのMBTIはどのキャラクターに近い？";

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

const THEME_LABELS_JA: Record<string, string> = {
  onepiece: "ワンピース",
  naruto: "NARUTO",
  fma: "鋼の錬金術師",
  aot: "進撃の巨人",
  shinchan: "クレヨンしんちゃん",
  jujutsu: "呪術廻戦",
  bleach: "BLEACH",
  kimetsu: "鬼滅の刃",
  pokemon: "ポケモン 第1・2世代",
};

const MBTI_SHORT_DESCS_JA: Record<string, string> = {
  ISTJ: "信頼性・責任感・一貫性",
  ISFJ: "配慮・支援・献身",
  INFJ: "洞察・意味づけ・内面的整合性",
  INTJ: "戦略性・体系化・長期視点",
  ISTP: "実践的問題解決・冷静な対応",
  ISFP: "感受性・自由さ・調和感覚",
  INFP: "価値観・共感性・誠実さ",
  INTP: "分析力・探究心・論理性",
  ESTP: "行動力・適応力・突破力",
  ESFP: "活力・温かさ・社交性",
  ENFP: "発想力・情熱・可能性志向",
  ENTP: "実験精神・議論力・革新性",
  ESTJ: "構造化・統率力・実行力",
  ESFJ: "協調性・面倒見・共同体志向",
  ENFJ: "鼓舞力・支援力・成長志向",
  ENTJ: "決断力・指揮力・達成志向",
};

const MBTI_LONG_DESCS_JA: Record<string, string> = Object.fromEntries(
  Object.entries(MBTI_SHORT_DESCS_JA).map(([type, desc]) => [
    type,
    `${type}タイプは、${desc}の傾向と結びつけて理解されます。判断の軸が比較的一貫しており、強みを意識して活かせると安定した成果につながりやすいタイプです。固定的なラベルではなく、自己理解のヒントとして活用してください。`,
  ])
);

const CHARACTER_DESC_JA: Record<string, string> = {
  ISTJ: "責任を背負い、約束を守りながら着実に前へ進む安定型。",
  ISFJ: "周囲を丁寧に支え、関係性を守ることに強い温かいサポーター。",
  INFJ: "全体の意味を捉え、静かな信念で方向性を示す洞察型。",
  INTJ: "長期戦略を描き、最適解に向けて構造的に進める設計者タイプ。",
  ISTP: "状況を素早く把握し、実践的な一手で問題を解決する職人型。",
  ISFP: "感受性と自由さを活かし、自然体で周囲に良い影響を与えるタイプ。",
  INFP: "価値観に忠実で、共感を軸に人と向き合う理想追求型。",
  INTP: "論理と好奇心で本質を掘り下げ、独自の視点を生み出す分析型。",
  ESTP: "瞬発力と現場対応に優れ、停滞した流れを動かすアクション型。",
  ESFP: "場の空気を明るくし、人を巻き込みながら前進するムードメーカー。",
  ENFP: "新しい可能性を見つけ、情熱で周囲を動かすアイデア実行型。",
  ENTP: "仮説検証を繰り返し、変化を起こす議論と発想のイノベーター。",
  ESTJ: "秩序と実行を重視し、チームを現実的に前進させる統率者。",
  ESFJ: "相手の状態をよく見て、協調を保ちながら支える関係調整型。",
  ENFJ: "人の成長を促し、方向性と熱量を同時に作るリーダータイプ。",
  ENTJ: "目的達成に向けて意思決定し、全体を牽引する指揮官タイプ。",
};

const EPISODE_NOTE_JA: Record<string, string> = {
  ISTJ: "混乱した状況でも手順と責任を守り、チームを安定させる判断が象徴的です。",
  ISFJ: "周囲の状態を丁寧に見ながら、必要な場面で自己犠牲をいとわない姿勢が表れます。",
  INFJ: "全体の意味と未来を見据え、静かな決意で方向を示す場面が印象的です。",
  INTJ: "長期設計にもとづく判断で、短期的な混乱を越えて成果へ導く流れが見えます。",
  ISTP: "危機局面で状況を瞬時に見極め、最短で有効な一手を打つ特性が表れます。",
  ISFP: "感受性を保ちながら自分の価値を守り、行動で思いを示す姿が特徴的です。",
  INFP: "信念と共感を軸に、対立の中でも人間的な意味を守ろうとする傾向が見えます。",
  INTP: "分析と仮説検証を積み重ね、複雑な状況を論理的に整理する力が際立ちます。",
  ESTP: "迷いを最小化し、即断即決で流れを変えるアクション志向が表れます。",
  ESFP: "場の空気を読みながら人を動かし、関係性の中で突破口を作る点が印象的です。",
  ENFP: "可能性を信じて行動を起こし、周囲の意欲を引き上げる推進力が出ています。",
  ENTP: "既存の枠を疑い、発想転換で新しい選択肢を生む柔軟さが強く表れます。",
  ESTJ: "役割を明確にし、現実的な基準でチームを前に進める統率力が見えます。",
  ESFJ: "関係の調整と相手配慮を両立し、共同体の安定を支える姿勢が際立ちます。",
  ENFJ: "人の潜在力を引き出し、共通目標へ導く支援型リーダーシップが表れます。",
  ENTJ: "最終目標から逆算して意思決定し、全体を牽引する実行力が強く出ています。",
};

export async function generateMetadata({ searchParams }: ResultPageProps): Promise<Metadata> {
  const resolved = await searchParams;
  const themeId = resolveThemeId(resolved?.theme);

  const theme = THEMES_EN[themeId] || THEMES_EN.onepiece;
  const content = CONTENTS_EN[themeId] || CONTENTS_EN.onepiece;
  const type = resolveType(resolved?.type, content);
  const character = content.results[type] || content.results.ISTJ;
  const label = THEME_LABELS_JA[theme.id] ?? theme.label;

  const ogImage = `${SITE_ORIGIN}/og/${encodeURIComponent(theme.id)}/${encodeURIComponent(type)}.png`;
  const ogTitle = `${type} · ${character.name}`;
  const description = `${label}の世界観で見るMBTI結果。強み・傾向・キャラクター相性を確認できます。`;
  const canonicalKo = `${SITE_ORIGIN}/result?theme=${encodeURIComponent(theme.id)}&type=${encodeURIComponent(type)}`;
  const canonicalEn = `${SITE_ORIGIN}/en/result?theme=${encodeURIComponent(theme.id)}&type=${encodeURIComponent(type)}`;
  const canonicalJa = `${SITE_ORIGIN}/ja/result?theme=${encodeURIComponent(theme.id)}&type=${encodeURIComponent(type)}`;

  return {
    title: `${type} 結果 | ${SITE_NAME}`,
    description,
    alternates: localizedAlternatesFromUrls(canonicalKo, canonicalEn, "ja", canonicalJa),
    openGraph: {
      title: ogTitle,
      description,
      type: "website",
      url: canonicalJa,
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

export default async function ResultPageJa({ searchParams }: ResultPageProps) {
  const resolved = await searchParams;
  const rawThemeId = resolved?.theme;
  const rawType = normalizeType(resolved?.type ?? "ISTJ");
  const themeId = resolveThemeId(resolved?.theme);

  const theme = THEMES_EN[themeId] || THEMES_EN.onepiece;
  const content = CONTENTS_EN[themeId] || CONTENTS_EN.onepiece;
  const type = resolveType(resolved?.type, content);
  const character = content.results[type] || content.results.ISTJ;
  const label = THEME_LABELS_JA[theme.id] ?? theme.label;

  const shareUrl = `${SITE_ORIGIN}/ja/result?theme=${encodeURIComponent(theme.id)}&type=${encodeURIComponent(type)}`;
  const imageUrl = `${SITE_ORIGIN}/og/${encodeURIComponent(theme.id)}/${encodeURIComponent(type)}.png`;

  if (rawThemeId !== theme.id || rawType !== type) {
    permanentRedirect(shareUrl);
  }

  const shortDesc = MBTI_SHORT_DESCS_JA[type] || MBTI_SHORT_DESCS_JA.ISTJ;

  const summaryPoints = [
    `コア特性: ${shortDesc}`,
    `${label}の物語文脈で結果を解釈`,
    "強みと注意点をバランスよく提示",
  ];

  const traitExpansion = `${type}タイプは、内側の基準を保ちながら判断する傾向があります。${shortDesc}を軸に、意思決定や対人スタイルが形づくられます。プレッシャー下では、優先順位の明確化とペース管理が安定性につながります。`;
  const characterCorrelation = `${label}の物語内で見られる${character.name}の行動パターンは、${type}の判断傾向と整合しています。感情が揺れる場面でも判断基準を保ち、行動で信頼を作る点が共通しています。`;
  const episodeInsight = `${character.name}の象徴的なシーンには、${type}らしい意思決定の流れが表れます。${shortDesc}の特性は、緊張局面でこそ再現されやすいポイントです。`;
  const connectionHighlights = [
    `${type}は感情が高まる局面でも、基準に基づく判断を維持しやすい傾向があります。`,
    `${character.name}の行動は、責任感・役割意識・信頼形成の面で${type}に近い流れを示します。`,
    `${shortDesc}は、衝突や高負荷の場面で優先順位として現れやすい特徴です。`,
  ];
  const compatibilityStrategies = [
    "感情重視タイプとは、解決策より先に感情の受け止めを言語化する。",
    "計画派と即興派は、意思決定担当と実行担当を分けると噛み合いやすい。",
    "緊張が高いときは、問題解決の話と感情整理の時間を分離する。",
  ];
  const communicationChecklist = [
    "対立時: 先に相手意図を要約し、その後に自分の判断基準を共有する。",
    "最終判断前: 事実・感情・優先順位の順で認識合わせを行う。",
    "振り返り: 強み1点 + 改善1点のセットでフィードバックする。",
  ];
  const profileDetailBlocks = [
    {
      title: "判断スタイル",
      body: `${type}は「${shortDesc}」を軸に、比較的一貫した基準で意思決定する傾向があります。`,
    },
    {
      title: "対人パターン",
      body: "反応の速さよりも、信頼と優先順位の明確化を通じて関係を安定させる傾向があります。",
    },
    {
      title: "ストレス時",
      body: "負荷が高い場面では視野が狭くなりやすく、ペース調整と整理の時間が重要になります。",
    },
    {
      title: "成長ポイント",
      body: "論理や成果だけでなく、感情文脈を併せて扱うことで協働の質と再現性が高まります。",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${type} 結果 | ${SITE_NAME}`,
    description: `${label}の世界観に基づくストーリー型MBTI結果`,
    about: `${type} MBTIタイプ`,
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
          <h2 className="text-2xl font-black text-[#16324f] font-serif text-center">要約インサイト</h2>
        </div>
        <blockquote className="border-l-4 border-[#16324f]/20 pl-4 text-gray-600 leading-relaxed italic">
          「{type}タイプは、{shortDesc}を軸に目標と関係性のバランスを取る傾向があります。」
        </blockquote>
        <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
          {summaryPoints.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>

      <AdExperiment
        experimentKey="result_primary_ja"
        className="bg-white rounded-[2rem] p-4 sm:p-6 border border-gray-100 shadow-sm"
        format="horizontal"
      />

      <section className="bg-white rounded-[3rem] p-7 sm:p-10 border border-gray-100 shadow-sm space-y-4">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-black text-[#16324f] text-xl font-serif text-center">ℹ️ 解釈ガイド</h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed max-w-3xl mx-auto">
          この結果はアニメ作品をモチーフにしたエンタメ型の自己理解コンテンツです。医療的・臨床的診断ではありません。
        </p>
      </section>

      {Boolean(EPISODE_NOTE_JA[type]) && (
        <section className="bg-white rounded-[3rem] p-7 sm:p-14 border border-gray-100 shadow-sm space-y-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <h2 className="font-black text-[#16324f] text-xl font-serif text-center">印象的なシーン</h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg sm:text-xl font-serif text-gray-800 leading-[1.8] italic text-center px-4">
              {EPISODE_NOTE_JA[type]}
            </p>
            <div className="max-w-4xl mx-auto rounded-2xl bg-[#f8fbff] border border-[#16324f]/10 p-5 sm:p-6">
              <h3 className="text-sm font-black text-[#16324f] tracking-wide mb-2">このシーンが結果と一致する理由</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{episodeInsight}</p>
            </div>
          </div>
        </section>
      )}

      <section className="bg-white rounded-[3rem] p-7 sm:p-14 border border-gray-100 shadow-sm space-y-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="font-black text-[#16324f] text-xl font-serif text-center">キャラクターとMBTIの接点</h2>
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
          <h2 className="font-black text-white text-xl font-serif text-center">タイプ特性の解説</h2>
          <p className="text-white/60 text-xs tracking-widest uppercase font-bold">{shortDesc}</p>
        </div>
        <div className="relative z-10 space-y-6">
          <p className="text-lg text-white/80 leading-[2] font-light">{MBTI_LONG_DESCS_JA[type] || MBTI_LONG_DESCS_JA.ISTJ}</p>
          <p className="text-lg text-white/80 leading-[2] font-light">{traitExpansion}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/10 border border-white/20 p-5 space-y-2">
              <p className="text-[11px] font-black tracking-[0.2em] uppercase text-white/60">🔥 核心の動機</p>
              <p className="text-sm leading-relaxed text-white/90">
                {type}タイプが最もエネルギーを得るのは、<strong className="text-white">{shortDesc}</strong>を十分に発揮できるときです。
                自分の基準で選択し、その結果が目標や関係にポジティブにつながるとき、満足感が高まります。
              </p>
            </div>
            <div className="rounded-2xl bg-white/10 border border-white/20 p-5 space-y-2">
              <p className="text-[11px] font-black tracking-[0.2em] uppercase text-white/60">⚡ 注意パターン</p>
              <p className="text-sm leading-relaxed text-white/90">
                自分の判断が無視されたり、期待と現実が大きくずれたりするとストレスが高まります。
                このパターンを知っておくと、葛藤の場面でもより柔軟に対処できます。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profileDetailBlocks.map((block) => (
              <article key={block.title} className="rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md p-4 sm:p-5 space-y-2">
                <p className="text-[11px] font-black tracking-[0.2em] uppercase text-white/60">{block.title}</p>
                <p className="text-sm sm:text-[15px] leading-[1.8] text-white/90">{block.body}</p>
              </article>
            ))}
          </div>

          <div className="rounded-2xl bg-white/10 border border-white/20 p-5 space-y-3">
            <p className="text-[11px] font-black tracking-[0.2em] uppercase text-white/60">✨ このタイプが輝く瞬間</p>
            <ul className="space-y-2 text-sm text-white/85 leading-relaxed">
              <li className="flex gap-2"><span className="shrink-0">→</span><span>自分の強みが明確に求められる役割を任されたとき</span></li>
              <li className="flex gap-2"><span className="shrink-0">→</span><span>信頼できるパートナーと共通の目標に向かって進むとき</span></li>
              <li className="flex gap-2"><span className="shrink-0">→</span><span>自分の判断が実際の結果につながる経験をするとき</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-[3rem] p-7 sm:p-10 border border-gray-100 shadow-sm space-y-7">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">相性と関係性パターン</h2>
          <p className="text-sm text-gray-400 max-w-lg mx-auto leading-relaxed">
            相性は決定的なマッチではありません。異なる個性が「<strong className="text-[#16324f]/80">役割分担</strong>」として結びつくときにこそ、最大のシナジーが生まれます。
          </p>
        </div>

        <div className="rounded-2xl bg-[#f8fbff] border border-[#16324f]/10 p-5 space-y-2">
          <p className="text-xs font-black tracking-[0.18em] uppercase text-[#16324f]/70">Compatibility Snapshot</p>
          <p className="text-gray-700 leading-relaxed">{compatibilityStrategies[0]}</p>
          <p className="text-sm text-gray-500 leading-relaxed mt-2">
            {type}タイプは、異なる強みを持つ相手と補完関係を作りやすい傾向があります。
            違いを摩擦ではなく、役割分担のヒントとして活用するアプローチが有効です。
          </p>
        </div>

        <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-5 space-y-3">
          <p className="text-xs font-black tracking-[0.18em] uppercase text-[#16324f]/70">💬 このタイプと話すとき</p>
          <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#16324f] font-bold shrink-0">✓</span><span>結論より先に背景や経緯を十分共有すると、会話がスムーズに進みます。</span></li>
            <li className="flex gap-2"><span className="text-[#16324f] font-bold shrink-0">✓</span><span>葛藤の場面では、事実判断と感情反応を分けて話すと誤解を大きく減らせます。</span></li>
            <li className="flex gap-2"><span className="text-[#16324f] font-bold shrink-0">✓</span><span>フィードバックを伝える際は「行動」を基準に、「人」を評価しない言葉を選びましょう。</span></li>
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-[#f8fbff] border border-[#16324f]/10 p-5 space-y-3">
            <h3 className="text-base font-black text-[#16324f]">実践ポイント</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
              {compatibilityStrategies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-[#fdfcf9] border border-gray-100 p-5 space-y-3">
            <h3 className="text-base font-black text-[#16324f]">コミュニケーションチェック</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
              {communicationChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl bg-[#f8fbff] border border-[#16324f]/10 p-5">
          <p className="text-xs font-black tracking-[0.18em] uppercase text-[#16324f]/70 mb-2">📌 関係の原則</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            どのタイプの組み合わせにも良い悪いはありません。大切なのは、お互いの判断基準やエネルギー管理の方法が
            違うことを認識し、その違いから学ぼうとする姿勢です。このページの相性解釈は決定的なマッチではなく、
            異なる個性がどう互いを補い合えるかをガイドする実践ガイドです。
          </p>
        </div>
      </section>

      <section className="bg-white rounded-[3rem] p-7 sm:p-10 border border-gray-100 shadow-sm space-y-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">心理学的な根拠</h2>
          <p className="text-sm text-gray-400 leading-relaxed max-w-lg mx-auto">
            MBTIは自己理解を深める一つの言語です。絶対的な診断ではなく、探索の出発点として活用してください。
          </p>
        </div>

        <div className="rounded-2xl bg-[#f8fbff] border border-[#16324f]/10 p-5 space-y-4">
          <p className="text-xs font-black tracking-[0.18em] uppercase text-[#16324f]/70">MBTI 4つの選好指標</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {[
              { label: "エネルギーの方向", pair: "外向(E) / 内向(I)", desc: "人や活動でエネルギーを得るか、一人の時間で回復するか" },
              { label: "情報の認識", pair: "感覚(S) / 直観(N)", desc: "具体的な事実を重視するか、パターンや可能性を重視するか" },
              { label: "判断基準", pair: "思考(T) / 感情(F)", desc: "論理と客観性を優先するか、感情と関係性を優先するか" },
              { label: "生活スタイル", pair: "判断(J) / 認知(P)", desc: "計画と決断を好むか、柔軟性と開放性を好むか" },
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
          <h3 className="text-lg font-black text-[#16324f]">結果解釈の基本原理</h3>
          <p className="text-gray-600 leading-relaxed">
            この結果はMBTIの4軸（E/I, S/N, T/F, J/P）に基づいて回答傾向を要約しています。4文字タイプは
            固定的な人格診断ではなく、<strong>相対的に優勢な志向を示す参考指標</strong>として扱います。
            同じ人でも状況や時期によって結果が変わることは自然な現象です。
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-black text-[#16324f]">科学的な限界と活用範囲</h3>
          <p className="text-gray-600 leading-relaxed">
            MBTIは実務・教育場面で広く活用されていますが、二分法分類や再検査一致率には心理測定上の限界が報告されています。
            そのため、結果は診断目的ではなく、<strong>自己理解とコミュニケーション改善の指針</strong>として活用することをおすすめします。
            より精密な自己理解が必要な場合は、Big Fiveなど検証性の高いモデルも併用することをおすすめします。
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-black text-[#16324f]">推奨される読み取り方</h3>
          <ul className="space-y-2 text-sm text-gray-600 leading-relaxed">
            <li className="flex gap-2"><span className="text-[#16324f] font-bold shrink-0">✓</span><span>タイプを固定ラベルではなく、現在の傾向として理解する</span></li>
            <li className="flex gap-2"><span className="text-[#16324f] font-bold shrink-0">✓</span><span>キャラクター一致だけでなく、実際の行動文脈と合わせて確認する</span></li>
            <li className="flex gap-2"><span className="text-[#16324f] font-bold shrink-0">✓</span><span>強みをまず認識し、注意点を「成長可能性」として再解釈する</span></li>
            <li className="flex gap-2"><span className="text-[#16324f] font-bold shrink-0">✓</span><span>必要に応じてBig Fiveなど検証済みモデルも併用する</span></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-black text-[#16324f]">参考文献</h3>
          <ul className="space-y-1.5 text-sm text-gray-500 leading-relaxed">
            <li className="flex gap-2"><span className="shrink-0">—</span><span>Myers, I. B. &amp; Myers, P. B. (1980). <em>Gifts Differing: Understanding Personality Type.</em></span></li>
            <li className="flex gap-2"><span className="shrink-0">—</span><span>Jung, C. G. (1921). <em>Psychologische Typen.</em> (心理型論の原典)</span></li>
            <li className="flex gap-2"><span className="shrink-0">—</span><span>MBTIの再検査信頼性・二分法分類の限界に関する心理測定研究 (Boyle, 1995 他)</span></li>
            <li className="flex gap-2"><span className="shrink-0">—</span><span>McCrae &amp; Costa (1989). Big FiveとMBTIの相関関係比較研究</span></li>
            <li className="flex gap-2"><span className="shrink-0">—</span><span>インタラクティブ・ナラティブ型評価研究 (Liu et al., 2016)</span></li>
          </ul>
        </div>
      </section>


      <ResultShareClientJa themeId={theme.id} type={type} shareUrl={shareUrl} imageUrl={imageUrl} />

      <section className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <Link
          href="/ja/select"
          className="w-full sm:w-auto px-12 py-4 rounded-full bg-[#16324f] text-white font-black text-lg shadow-xl shadow-[#16324f]/30 hover:-translate-y-1 transition-all active:scale-95"
        >
          別の世界観を試す
        </Link>
        <Link
          href={`/ja/test/${theme.id}`}
          className="w-full sm:w-auto px-12 py-4 rounded-full bg-white border border-gray-200 text-[#16324f] font-black text-lg shadow-sm hover:bg-gray-50 transition-colors"
        >
          このテストをもう一度
        </Link>
      </section>

      <section className="bg-white rounded-[2rem] p-8 sm:p-10 border border-gray-100 shadow-sm space-y-6">
        <div className="flex flex-col items-center gap-3 text-center">
          <h2 className="text-2xl font-black font-serif text-[#16324f] text-center">関連テスト</h2>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {Object.values(THEMES_EN)
            .filter((item) => item.id !== theme.id)
            .slice(0, 2)
            .map((item) => (
              <Link
                key={item.id}
                href={`/ja/test/${item.id}`}
                className="px-4 py-2 rounded-full bg-[#fdfcf9] border border-gray-100 text-sm font-bold text-[#16324f] hover:bg-white"
              >
                {(THEME_LABELS_JA[item.id] ?? item.label)} テスト
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}

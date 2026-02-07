import type { Metadata } from 'next';
import { THEMES, CONTENTS } from '@/data';
import ResultClient from './ResultClient';

const SITE_ORIGIN = 'https://mbti-world-animation.pages.dev';

function normalizeType(raw: string | null): string {
  if (!raw) return 'ISTJ';
  return raw.replace(/\.png$/i, '').toUpperCase();
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { theme?: string; type?: string };
}): Promise<Metadata> {
  const themeId = searchParams.theme || 'onepiece';
  const type = normalizeType(searchParams.type || 'ISTJ');

  const theme = THEMES[themeId] || THEMES.onepiece;
  const content = CONTENTS[themeId] || CONTENTS.onepiece;
  const character = content.results[type] || content.results.ISTJ;

  const ogImage = `${SITE_ORIGIN}/og/${encodeURIComponent(theme.id)}/${encodeURIComponent(type)}`;
  const ogTitle = `${type} · ${character.name}`;

  return {
    title: 'MBTI WORLD ANIMATION',
    description: '내 MBTI는 어떤 캐릭터와 같을까?',
    openGraph: {
      title: ogTitle,
      description: '내 MBTI는 어떤 캐릭터와 같을까?',
      type: 'website',
      url: `${SITE_ORIGIN}/result?theme=${encodeURIComponent(theme.id)}&type=${encodeURIComponent(type)}`,
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
      card: 'summary_large_image',
      title: ogTitle,
      description: '내 MBTI는 어떤 캐릭터와 같을까?',
      images: [ogImage],
    },
  };
}

export default function ResultPage() {
  return <ResultClient />;
}

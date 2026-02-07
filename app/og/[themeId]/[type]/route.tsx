import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';
import { THEMES, CONTENTS } from '@/data';
import { MBTI_SHORT_DESCS } from '@/constants';

export const runtime = 'edge';

function extractGradientColors(gradient: string): { from: string; to: string } {
  const match = gradient.match(/#([0-9a-fA-F]{6})/g) || [];
  if (match.length >= 2) {
    return { from: match[0], to: match[1] };
  }
  return { from: '#1f4d8f', to: '#63b0f4' };
}

function normalizeType(raw: string): string {
  return raw.replace(/\.png$/i, '').toUpperCase();
}

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ themeId: string; type: string }> }
) {
  const params = await context.params;
  const themeId = params?.themeId || 'onepiece';
  const type = normalizeType(params?.type || 'ISTJ');

  const theme = THEMES[themeId] || THEMES.onepiece;
  const content = CONTENTS[themeId] || CONTENTS.onepiece;
  const character = content.results[type] || content.results.ISTJ;
  const shortDesc = MBTI_SHORT_DESCS[type] || MBTI_SHORT_DESCS.ISTJ;

  const { from, to } = extractGradientColors(theme.gradient);

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: `linear-gradient(135deg, ${from}, ${to})`,
          color: '#ffffff',
          position: 'relative',
          padding: '70px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-140px',
            right: '-140px',
            width: '360px',
            height: '360px',
            borderRadius: '999px',
            background: 'rgba(255,255,255,0.12)',
            filter: 'blur(10px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-120px',
            left: '-120px',
            width: '300px',
            height: '300px',
            borderRadius: '999px',
            background: 'rgba(0,0,0,0.15)',
            filter: 'blur(10px)',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '22px',
          }}
        >
          <div
            style={{
              fontSize: 18,
              letterSpacing: '0.45em',
              textTransform: 'uppercase',
              padding: '10px 22px',
              borderRadius: 999,
              background: 'rgba(255,255,255,0.18)',
              border: '1px solid rgba(255,255,255,0.2)',
              fontWeight: 700,
            }}
          >
            MBTI WORLD ANIMATION
          </div>
          <div
            style={{
              fontSize: 110,
              fontWeight: 800,
              letterSpacing: '0.2em',
              textShadow: '0 12px 35px rgba(0,0,0,0.35)',
            }}
          >
            {type}
          </div>
          <div
            style={{
              height: 6,
              width: 120,
              borderRadius: 999,
              background: 'rgba(255,255,255,0.4)',
            }}
          />
          <div
            style={{
              fontSize: 32,
              fontWeight: 700,
              opacity: 0.9,
            }}
          >
            {shortDesc}
          </div>
        </div>

        <div
          style={{
            marginTop: 48,
            width: '100%',
            maxWidth: 900,
            background: 'rgba(255,255,255,0.15)',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: 48,
            padding: '40px 48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 16,
            boxShadow: '0 30px 80px rgba(0,0,0,0.25)',
          }}
        >
          <div
            style={{
              fontSize: 16,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              opacity: 0.7,
              fontWeight: 700,
            }}
          >
            The Character That Matches Your Soul
          </div>
          <div
            style={{
              fontSize: 58,
              fontWeight: 800,
              lineHeight: 1.05,
            }}
          >
            {character.name}
          </div>
          <div
            style={{
              fontSize: 28,
              fontStyle: 'italic',
              opacity: 0.9,
            }}
          >
            {`"${character.desc}"`}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

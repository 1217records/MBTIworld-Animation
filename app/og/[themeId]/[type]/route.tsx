import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';
import { THEMES, CONTENTS } from '@/data';
import { MBTI_SHORT_DESCS } from '@/constants';

export const runtime = 'edge';

function extractGradientColors(gradient: string): { from: string; to: string } {
  const match = gradient.match(/#([0-9a-fA-F]{6})/g) || [];
  if (match.length >= 2) {
    return {
      from: match[0] ?? '#1f4d8f',
      to: match[match.length - 1] ?? '#63b0f4',
    };
  }
  return { from: '#1f4d8f', to: '#63b0f4' };
}

function normalizeType(raw: string): string {
  return raw.replace(/\.png$/i, '').toUpperCase();
}

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ themeId: string; type: string }> }
) {
  const params = await context.params;
  const themeId = params?.themeId || 'onepiece';
  const type = normalizeType(params?.type || 'ISTJ');

  const theme = THEMES[themeId] || THEMES.onepiece;
  const content = CONTENTS[themeId] || CONTENTS.onepiece;
  const character = content.results[type] || content.results.ISTJ;

  const origin = request.nextUrl.origin;
  const { from, to } = extractGradientColors(theme.gradient);

  return new ImageResponse(
    (
      <div
        style={{
          width: '800px',
          height: '800px',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#111827',
          color: '#ffffff',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top half: Character Image */}
        <div
          style={{
            display: 'flex',
            height: '560px',
            width: '100%',
            position: 'relative',
            backgroundColor: '#ffffff',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={`${origin}/characters/${themeId}/${type}.png`}
            alt="Character illustration"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'contain',
            }}
          />
        </div>

        {/* Bottom half: Text Area */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '240px',
            width: '100%',
            background: `linear-gradient(135deg, ${from}, ${to})`,
            gap: '12px',
          }}
        >
          <div
            style={{
              fontSize: 90,
              fontWeight: 900,
              letterSpacing: '0.15em',
              color: '#fff580',
              textShadow: '0 4px 15px rgba(0,0,0,0.25)',
              lineHeight: 1,
            }}
          >
            {type}
          </div>

          <div
            style={{
              fontSize: 48,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              textShadow: '0 2px 10px rgba(0,0,0,0.25)',
              textAlign: 'center',
              lineHeight: 1.1,
            }}
          >
            {character.name}
          </div>
        </div>
      </div>
    ),
    {
      width: 800,
      height: 800,
    }
  );
}

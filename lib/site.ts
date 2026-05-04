const PRODUCTION_URL = "https://mbtiworld-animation.pages.dev";

function normalizeSiteOrigin(value: string): string {
  const trimmed = value.trim().replace(/\/+$/, "");
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

function resolveRawSiteOrigin(): string {
  // Only use explicit overrides — never auto-detect from hosting platform env vars
  // because platforms like Cloudflare Pages set per-commit preview URLs
  const explicit = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  if (explicit) return explicit;

  return PRODUCTION_URL;
}

export const SITE_ORIGIN = normalizeSiteOrigin(resolveRawSiteOrigin());
export const SITE_NAME = "MBTI WORLD ANIMATION";
export const SITE_TAGLINE = "내 MBTI는 어떤 캐릭터와 같을까?";


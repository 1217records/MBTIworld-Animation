function normalizeSiteOrigin(value: string): string {
  const trimmed = value.trim().replace(/\/+$/, "");
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

function resolveRawSiteOrigin(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  if (explicit) return explicit;

  const vercelProd = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProd) return vercelProd;

  const vercel = process.env.VERCEL_URL;
  if (vercel && !vercel.includes("-git-")) return vercel;

  const cloudflare = process.env.CF_PAGES_URL;
  if (cloudflare) return cloudflare;

  const netlify = process.env.URL;
  if (netlify) return netlify;

  return "https://mbtiworld-animation.pages.dev";
}

export const SITE_ORIGIN = normalizeSiteOrigin(resolveRawSiteOrigin());
export const SITE_NAME = "MBTI WORLD ANIMATION";
export const SITE_TAGLINE = "내 MBTI는 어떤 캐릭터와 같을까?";

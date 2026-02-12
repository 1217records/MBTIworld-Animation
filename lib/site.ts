function normalizeSiteOrigin(value: string): string {
  const trimmed = value.trim().replace(/\/+$/, "");
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

const RAW_SITE_ORIGIN =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://mbti-world-animation.pages.dev";

export const SITE_ORIGIN = normalizeSiteOrigin(RAW_SITE_ORIGIN);
export const SITE_NAME = "MBTI WORLD ANIMATION";
export const SITE_TAGLINE = "내 MBTI는 어떤 캐릭터와 같을까?";

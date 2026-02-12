import { SITE_ORIGIN } from "@/lib/site";

type LocaleCode = "ko" | "en";

function normalizePath(path: string): string {
  if (!path) return "/";
  const trimmed = path.trim();
  if (trimmed === "/") return "/";
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

export function localizedAlternates(path: string, canonicalLocale: LocaleCode = "ko") {
  const koPath = normalizePath(path);
  const enPath = koPath === "/" ? "/en" : `/en${koPath}`;
  const koUrl = `${SITE_ORIGIN}${koPath}`;
  const enUrl = `${SITE_ORIGIN}${enPath}`;

  return {
    canonical: canonicalLocale === "ko" ? koUrl : enUrl,
    languages: {
      "ko-KR": koUrl,
      "en-US": enUrl,
      "x-default": koUrl,
    },
  };
}

export function localizedAlternatesFromUrls(
  koUrl: string,
  enUrl: string,
  canonicalLocale: LocaleCode = "ko",
) {
  return {
    canonical: canonicalLocale === "ko" ? koUrl : enUrl,
    languages: {
      "ko-KR": koUrl,
      "en-US": enUrl,
      "x-default": koUrl,
    },
  };
}

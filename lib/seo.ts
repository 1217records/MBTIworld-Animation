import { SITE_ORIGIN } from "@/lib/site";
import { type LocaleCode } from "@/lib/i18n-config";

function normalizePath(path: string): string {
  if (!path) return "/";
  const trimmed = path.trim();
  if (trimmed === "/") return "/";
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

function toJaUrlFromEn(enUrl: string): string {
  const url = new URL(enUrl);
  if (url.pathname === "/en") {
    url.pathname = "/ja";
  } else if (url.pathname.startsWith("/en/")) {
    url.pathname = `/ja/${url.pathname.slice(4)}`;
  }
  return url.toString();
}

export function localizedAlternates(path: string, canonicalLocale: LocaleCode = "ko") {
  const koPath = normalizePath(path);
  const enPath = koPath === "/" ? "/en" : `/en${koPath}`;
  const jaPath = koPath === "/" ? "/ja" : `/ja${koPath}`;

  const koUrl = `${SITE_ORIGIN}${koPath}`;
  const enUrl = `${SITE_ORIGIN}${enPath}`;
  const jaUrl = `${SITE_ORIGIN}${jaPath}`;

  return {
    canonical: canonicalLocale === "ko" ? koUrl : canonicalLocale === "ja" ? jaUrl : enUrl,
    languages: {
      "ko-KR": koUrl,
      "en-US": enUrl,
      "ja-JP": jaUrl,
      "x-default": koUrl,
    },
  };
}

export function localizedAlternatesFromUrls(
  koUrl: string,
  enUrl: string,
  canonicalLocale: LocaleCode = "ko",
  jaUrl?: string,
) {
  const resolvedJaUrl = jaUrl ?? toJaUrlFromEn(enUrl);

  return {
    canonical: canonicalLocale === "ko" ? koUrl : canonicalLocale === "ja" ? resolvedJaUrl : enUrl,
    languages: {
      "ko-KR": koUrl,
      "en-US": enUrl,
      "ja-JP": resolvedJaUrl,
      "x-default": koUrl,
    },
  };
}

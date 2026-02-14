export const SUPPORTED_LOCALES = ["ko", "en", "ja"] as const;

export type LocaleCode = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: LocaleCode = "ko";

export function isLocaleCode(value: string): value is LocaleCode {
  return SUPPORTED_LOCALES.includes(value as LocaleCode);
}

export function normalizePath(path: string): string {
  if (!path) return "/";
  const trimmed = path.trim();
  if (!trimmed || trimmed === "/") return "/";
  return trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
}

export function localeFromPath(pathname: string): LocaleCode {
  const normalized = normalizePath(pathname);
  const segment = normalized.split("/")[1] ?? "";
  if (isLocaleCode(segment) && segment !== DEFAULT_LOCALE) return segment;
  return DEFAULT_LOCALE;
}

export function stripLocalePrefix(pathname: string): string {
  const normalized = normalizePath(pathname);
  const segment = normalized.split("/")[1] ?? "";
  if (!isLocaleCode(segment) || segment === DEFAULT_LOCALE) return normalized;
  const stripped = normalized.slice(segment.length + 1);
  return stripped.startsWith("/") ? stripped : `/${stripped}`;
}

export function localizePath(pathname: string, locale: LocaleCode): string {
  const basePath = stripLocalePrefix(pathname);
  if (locale === DEFAULT_LOCALE) return basePath;
  if (basePath === "/") return `/${locale}`;
  return `/${locale}${basePath}`;
}

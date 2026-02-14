"use client";

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n";
import { SUPPORTED_LOCALES, localeFromPath, localizePath } from "@/lib/i18n-config";

const LanguageToggle = () => {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const locale = localeFromPath(pathname);
  const query = searchParams?.toString();
  const { t } = useTranslation();

  useEffect(() => {
    if (i18n.language !== locale) {
      void i18n.changeLanguage(locale);
    }
  }, [locale]);

  return (
    <label className="relative">
      <span className="sr-only">{t("langSwitch")}</span>
      <select
        value={locale}
        onChange={(e) => {
          const nextLocale = e.target.value;
          const hrefPath = localizePath(pathname, nextLocale as (typeof SUPPORTED_LOCALES)[number]);
          const href = query ? `${hrefPath}?${query}` : hrefPath;
          router.push(href);
        }}
        className="min-w-[88px] px-3 py-1.5 rounded-full border border-gray-200 text-xs font-bold text-gray-600 bg-white hover:border-[#16324f]/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16324f]/30"
        aria-label={t("langSwitch")}
      >
        {SUPPORTED_LOCALES.map((targetLocale) => (
          <option key={targetLocale} value={targetLocale}>
            {t(`languageNames.${targetLocale}`)}
          </option>
        ))}
      </select>
    </label>
  );
};

export default LanguageToggle;

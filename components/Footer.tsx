"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "@/lib/i18n";
import { localeFromPath, localizePath } from "@/lib/i18n-config";

const Footer = () => {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  const { t } = useTranslation();

  useEffect(() => {
    if (i18n.language !== locale) {
      void i18n.changeLanguage(locale);
    }
  }, [locale]);

  return (
    <footer className="mt-20 py-16 px-6 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-10 text-center">
        <div className="flex flex-wrap justify-center gap-8">
          <Link href={localizePath("/", locale)} className="text-xs font-bold text-gray-400 hover:text-[#16324f] transition-colors">{t("footer.home")}</Link>
          <Link href={localizePath("/about", locale)} className="text-xs font-bold text-gray-400 hover:text-[#16324f] transition-colors">{t("footer.about")}</Link>
          <Link href={localizePath("/contact", locale)} className="text-xs font-bold text-gray-400 hover:text-[#16324f] transition-colors">{t("footer.contact")}</Link>
          <Link href={localizePath("/terms", locale)} className="text-xs font-bold text-gray-400 hover:text-[#16324f] transition-colors">{t("footer.terms")}</Link>
          <Link href={localizePath("/privacy", locale)} className="text-xs font-bold text-gray-400 hover:text-[#16324f] transition-colors">{t("footer.privacy")}</Link>
        </div>
        <div className="space-y-3">
          <p className="text-sm text-gray-500 leading-relaxed">
            {t("footer.description")}
            <br />
            {t("footer.note")}
          </p>
          <p className="text-xs text-gray-400 leading-relaxed">{t("footer.operatedBy")}</p>
          <p className="text-[11px] text-gray-300 font-bold tracking-[0.2em] uppercase">Your Soul, Reimagined in Anime</p>
          <p className="text-[10px] text-gray-200">© 2026 MBTI-World Archive. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

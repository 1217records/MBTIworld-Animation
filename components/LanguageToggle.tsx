"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const LanguageToggle = () => {
  const pathname = usePathname() || "/";
  const searchParams = useSearchParams();
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");

  const strippedPath = isEnglish ? pathname.replace(/^\/en(\/|$)/, "/") : pathname;
  const targetPath = isEnglish
    ? strippedPath === "" ? "/" : strippedPath
    : strippedPath === "/" ? "/en" : `/en${strippedPath}`;
  const query = searchParams?.toString();
  const href = query ? `${targetPath}?${query}` : targetPath;

  return (
    <Link
      href={href}
      className="px-3 py-1.5 rounded-full border border-gray-200 text-xs font-bold text-gray-500 hover:text-[#16324f] hover:border-[#16324f]/30 transition-colors"
      aria-label={isEnglish ? "Switch to Korean" : "Switch to English"}
    >
      {isEnglish ? "KR" : "EN"}
    </Link>
  );
};

export default LanguageToggle;

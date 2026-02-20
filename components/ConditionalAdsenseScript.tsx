"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

const ADSENSE_CLIENT = "ca-pub-4245569327602514";

function isTestRoute(pathname: string | null) {
  if (!pathname) return false;
  return /^\/test\/[^/]+/.test(pathname) || /^\/(en|ja)\/test\/[^/]+/.test(pathname);
}

export default function ConditionalAdsenseScript() {
  const pathname = usePathname();

  if (isTestRoute(pathname)) return null;

  return (
    <Script
      id="adsense-script"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}

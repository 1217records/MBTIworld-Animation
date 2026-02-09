"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

const CONTENT_ROUTE_MATCHERS = [
  /^\/$/,
  /^\/select(?:\/|$)/,
  /^\/test(?:\/|$)/,
  /^\/result(?:\/|$)/,
];

const isContentRoute = (pathname: string) =>
  CONTENT_ROUTE_MATCHERS.some((matcher) => matcher.test(pathname));

export default function AdSenseScript() {
  const pathname = usePathname();

  if (!pathname || !isContentRoute(pathname)) {
    return null;
  }

  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4245569327602514"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}

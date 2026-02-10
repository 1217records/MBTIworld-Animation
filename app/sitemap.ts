import type { MetadataRoute } from "next";
import { THEMES } from "@/data";
import { SITE_ORIGIN } from "@/lib/site";

const POPULAR_TYPES = ["INFJ", "INTJ", "ENFP", "ENTJ"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base: MetadataRoute.Sitemap = [
    { url: `${SITE_ORIGIN}/`, lastModified: now },
    { url: `${SITE_ORIGIN}/select`, lastModified: now },
    { url: `${SITE_ORIGIN}/about`, lastModified: now },
    { url: `${SITE_ORIGIN}/terms`, lastModified: now },
    { url: `${SITE_ORIGIN}/privacy`, lastModified: now },
    { url: `${SITE_ORIGIN}/contact`, lastModified: now },
  ];

  const themeEntries = Object.values(THEMES).map((theme) => ({
    url: `${SITE_ORIGIN}/test/${encodeURIComponent(theme.id)}`,
    lastModified: now,
  }));

  const resultEntries = Object.values(THEMES).flatMap((theme) =>
    POPULAR_TYPES.map((type) => ({
      url: `${SITE_ORIGIN}/result?theme=${encodeURIComponent(theme.id)}&type=${encodeURIComponent(type)}`,
      lastModified: now,
    })),
  );

  return [...base, ...themeEntries, ...resultEntries];
}

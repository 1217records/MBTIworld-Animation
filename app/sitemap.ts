import type { MetadataRoute } from "next";
import { THEMES } from "@/data";
import { SITE_ORIGIN } from "@/lib/site";
import { COLUMNS } from "@/lib/columns";
import { COLUMNS_EN } from "@/lib/columns-en";
import { COLUMNS_JA } from "@/lib/columns-ja";

const MBTI_TYPES = [
  "ISTJ", "ISFJ", "INFJ", "INTJ",
  "ISTP", "ISFP", "INFP", "INTP",
  "ESTP", "ESFP", "ENFP", "ENTP",
  "ESTJ", "ESFJ", "ENFJ", "ENTJ",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base: MetadataRoute.Sitemap = [
    { url: `${SITE_ORIGIN}/`, lastModified: now },
    { url: `${SITE_ORIGIN}/select`, lastModified: now },
    { url: `${SITE_ORIGIN}/result`, lastModified: now },
    { url: `${SITE_ORIGIN}/about`, lastModified: now },
    { url: `${SITE_ORIGIN}/terms`, lastModified: now },
    { url: `${SITE_ORIGIN}/privacy`, lastModified: now },
    { url: `${SITE_ORIGIN}/contact`, lastModified: now },
    { url: `${SITE_ORIGIN}/columns`, lastModified: now },
    { url: `${SITE_ORIGIN}/en`, lastModified: now },
    { url: `${SITE_ORIGIN}/en/select`, lastModified: now },
    { url: `${SITE_ORIGIN}/en/result`, lastModified: now },
    { url: `${SITE_ORIGIN}/en/about`, lastModified: now },
    { url: `${SITE_ORIGIN}/en/terms`, lastModified: now },
    { url: `${SITE_ORIGIN}/en/privacy`, lastModified: now },
    { url: `${SITE_ORIGIN}/en/contact`, lastModified: now },
    { url: `${SITE_ORIGIN}/en/columns`, lastModified: now },
    { url: `${SITE_ORIGIN}/ja`, lastModified: now },
    { url: `${SITE_ORIGIN}/ja/select`, lastModified: now },
    { url: `${SITE_ORIGIN}/ja/result`, lastModified: now },
    { url: `${SITE_ORIGIN}/ja/about`, lastModified: now },
    { url: `${SITE_ORIGIN}/ja/terms`, lastModified: now },
    { url: `${SITE_ORIGIN}/ja/privacy`, lastModified: now },
    { url: `${SITE_ORIGIN}/ja/contact`, lastModified: now },
    { url: `${SITE_ORIGIN}/ja/columns`, lastModified: now },
  ];

  const themeEntries = Object.values(THEMES).flatMap((theme) => [
    {
      url: `${SITE_ORIGIN}/test/${encodeURIComponent(theme.id)}`,
      lastModified: now,
    },
    {
      url: `${SITE_ORIGIN}/en/test/${encodeURIComponent(theme.id)}`,
      lastModified: now,
    },
    {
      url: `${SITE_ORIGIN}/ja/test/${encodeURIComponent(theme.id)}`,
      lastModified: now,
    },
  ]);

  // Individual column article pages
  const columnEntries: MetadataRoute.Sitemap = [];
  for (const col of Object.values(COLUMNS)) {
    columnEntries.push({
      url: `${SITE_ORIGIN}/columns/${col.id}`,
      lastModified: new Date(col.date),
    });
  }
  for (const col of Object.values(COLUMNS_EN)) {
    columnEntries.push({
      url: `${SITE_ORIGIN}/en/columns/${col.id}`,
      lastModified: new Date(col.date),
    });
  }
  for (const col of Object.values(COLUMNS_JA)) {
    columnEntries.push({
      url: `${SITE_ORIGIN}/ja/columns/${col.id}`,
      lastModified: new Date(col.date),
    });
  }

  return [...base, ...themeEntries, ...columnEntries];
}


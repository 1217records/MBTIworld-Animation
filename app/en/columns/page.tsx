import type { Metadata } from "next";
import Link from "next/link";
import { COLUMNS_EN } from "@/lib/columns-en";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import PromoBanner from "@/components/PromoBanner";

export const metadata: Metadata = {
  title: `MBTI Columns | ${SITE_NAME}`,
  description: "Fascinating psychological analysis and columns about Anime and MBTI.",
  openGraph: {
    title: `MBTI Columns | ${SITE_NAME}`,
    description: "Fascinating psychological analysis and columns about Anime and MBTI.",
    url: `${SITE_ORIGIN}/en/columns`,
  },
};

export default function ColumnsPage() {
  const columns = Object.values(COLUMNS_EN).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-12 animate-in fade-in pb-16">
      <header className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black font-serif text-[#16324f]">MBTI Columns</h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Discover the exciting psychological traits hiding behind your favorite characters
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        {columns.map((col) => (
          <Link
            key={col.id}
            href={`/en/columns/${col.id}`}
            className="group block bg-white rounded-2xl p-6 sm:p-8 border-2 border-gray-100 hover:border-[#16324f]/30 hover:shadow-md transition-all h-full flex flex-col"
          >
            <div className="text-xs font-bold text-gray-400 mb-2">{col.date}</div>
            <h2 className="text-xl font-bold text-[#16324f] mb-3 group-hover:text-blue-600 transition-colors">
              {col.title}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed flex-1">
              {col.description}
            </p>
            <div className="mt-6 text-sm font-bold text-[#16324f] flex items-center gap-1 group-hover:gap-2 transition-all">
              Read More <span aria-hidden="true">→</span>
            </div>
          </Link>
        ))}
      </div>

      <PromoBanner />
    </div>
  );
}

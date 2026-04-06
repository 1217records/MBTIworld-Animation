import type { Metadata } from "next";
import Link from "next/link";
import { COLUMNS } from "@/lib/columns";
import { SITE_NAME, SITE_ORIGIN, SITE_TAGLINE } from "@/lib/site";
import PromoBanner from "@/components/PromoBanner";

export const metadata: Metadata = {
  title: `MBTI 이야기 | ${SITE_NAME}`,
  description: "애니메이션과 MBTI에 얽힌 흥미로운 칼럼과 심리 분석 이야기를 만나보세요.",
  openGraph: {
    title: `MBTI 이야기 | ${SITE_NAME}`,
    description: "애니메이션과 MBTI에 얽힌 흥미로운 칼럼과 심리 분석 이야기를 만나보세요.",
    url: `${SITE_ORIGIN}/columns`,
  },
};

export default function ColumnsPage() {
  const columns = Object.values(COLUMNS).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="space-y-12 animate-in fade-in pb-16">
      <header className="text-center space-y-3">
        <h1 className="text-3xl sm:text-4xl font-black font-serif text-[#16324f]">MBTI 이야기</h1>
        <p className="text-gray-500 text-sm sm:text-base">
          캐릭터들의 성격 뒤에 숨겨진 흥미로운 심리학적 분석들
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        {columns.map((col) => (
          <Link
            key={col.id}
            href={`/columns/${col.id}`}
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
              읽어보기 <span aria-hidden="true">→</span>
            </div>
          </Link>
        ))}
      </div>

      <PromoBanner />
    </div>
  );
}

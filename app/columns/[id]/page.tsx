import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { COLUMNS } from "@/lib/columns";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import PromoBanner from "@/components/PromoBanner";
import Link from "next/link";
import MarkdownViewer from "@/components/MarkdownViewer";

type PageProps = {
  params: Promise<{ id: string }>;
};

export const runtime = "edge";

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await params;
  const col = COLUMNS[resolved.id];
  if (!col) return { title: "Not Found" };

  return {
    title: `${col.title} | ${SITE_NAME}`,
    description: col.description,
    openGraph: {
      title: `${col.title} | ${SITE_NAME}`,
      description: col.description,
      type: "article",
      url: `${SITE_ORIGIN}/columns/${col.id}`,
    },
  };
}

export default async function ColumnDetailPage({ params }: PageProps) {
  const resolved = await params;
  const col = COLUMNS[resolved.id];

  if (!col) {
    notFound();
  }

  return (
    <article className="space-y-12 animate-in fade-in pb-16">
      <div className="mb-6">
        <Link
          href="/columns"
          className="text-sm font-bold text-gray-400 hover:text-[#16324f] transition-colors flex items-center gap-2"
        >
          <span aria-hidden="true">←</span> 목록으로 돌아가기
        </Link>
      </div>

      <header className="space-y-4">
        <div className="text-sm font-bold text-gray-400">{col.date}</div>
        <h1 className="text-3xl sm:text-4xl font-black font-serif text-[#16324f] leading-tight">
          {col.title}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed font-medium">
          {col.description}
        </p>
      </header>

      <div className="bg-white rounded-[2rem] p-8 sm:p-10 border-2 border-[#16324f]/10 shadow-sm prose prose-lg max-w-none prose-h2:text-[#16324f] prose-h2:font-serif prose-h2:font-black prose-h3:text-[#16324f] prose-a:text-blue-600 prose-p:leading-relaxed prose-p:text-gray-700">
        <MarkdownViewer content={col.content} />
        
        {col.relatedTests && col.relatedTests.length > 0 && (
          <div className="mt-12 pt-8 border-t-2 border-gray-100 not-prose">
            <h3 className="text-xl sm:text-2xl font-black text-[#16324f] mb-6">🎯 이 칼럼과 관련된 테스트</h3>
            <div className="flex flex-wrap gap-3">
              {col.relatedTests.map((test) => (
                <Link
                  key={test.id}
                  href={`/test/${test.id}`}
                  className="inline-flex items-center gap-2 bg-[#16324f] hover:bg-blue-600 text-white px-6 py-3.5 rounded-2xl font-bold shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  {test.name}
                  <span aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <PromoBanner />
    </article>
  );
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { COLUMNS_EN } from "@/lib/columns-en";
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
  const col = COLUMNS_EN[resolved.id];
  if (!col) return { title: "Not Found" };

  return {
    title: `${col.title} | ${SITE_NAME}`,
    description: col.description,
    openGraph: {
      title: `${col.title} | ${SITE_NAME}`,
      description: col.description,
      type: "article",
      url: `${SITE_ORIGIN}/en/columns/${col.id}`,
    },
  };
}

export default async function ColumnDetailPage({ params }: PageProps) {
  const resolved = await params;
  const col = COLUMNS_EN[resolved.id];

  if (!col) {
    notFound();
  }

  return (
    <article className="space-y-12 animate-in fade-in pb-16">
      <div className="mb-6">
        <Link
          href="/en/columns"
          className="text-sm font-bold text-gray-400 hover:text-[#16324f] transition-colors flex items-center gap-2"
        >
          <span aria-hidden="true">←</span> Back to List
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
      </div>

      <PromoBanner />
    </article>
  );
}

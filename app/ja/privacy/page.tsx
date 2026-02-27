import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { SITE_NAME, SITE_ORIGIN } from "@/lib/site";
import { localizedAlternates } from "@/lib/seo";

export const runtime = "edge";

export const metadata: Metadata = {
  title: `プライバシーポリシー | ${SITE_NAME}`,
  description: "MBTI WORLD ANIMATION の個人情報の取扱いについて。",
  alternates: localizedAlternates("/privacy", "ja"),
  openGraph: {
    title: `プライバシーポリシー | ${SITE_NAME}`,
    description: "MBTI WORLD ANIMATION の個人情報の取扱いについて。",
    type: "website",
    url: `${SITE_ORIGIN}/ja/privacy`,
  },
};

export default function PrivacyJa() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "プライバシーポリシー",
    description: "MBTI WORLD ANIMATION のプライバシーポリシー",
    mainEntityOfPage: `${SITE_ORIGIN}/ja/privacy`,
  };

  return (
    <div className="space-y-8 animate-in fade-in">
      <JsonLd data={jsonLd} />
      <div className="space-y-2">
        <h1 className="text-3xl font-bold font-serif text-[#16324f]">プライバシーポリシー</h1>
        <p className="text-gray-400 text-sm">最終更新日: 2026年2月5日</p>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-8 text-sm text-gray-600 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">1. 取得する情報</h2>
          <p>お問い合わせ対応に必要な最小限の情報のみ取得します。</p>
          <ul className="list-disc list-inside pl-4">
            <li>お問い合わせフォーム: ニックネーム、メールアドレス、内容</li>
          </ul>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">2. 利用目的</h2>
          <p>お問い合わせ対応およびサービス改善のためにのみ利用します。</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">3. 保管と削除</h2>
          <p>目的達成後は不要な情報を速やかに削除します。</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">4. 第三者提供</h2>
          <p>法令に基づく場合を除き、第三者へ提供しません。</p>
        </section>
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#16324f]">5. お問い合わせ</h2>
          <p>個人情報に関するお問い合わせ: 1217records.kor@gmail.com</p>
        </section>
      </div>
    </div>
  );
}

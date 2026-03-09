import Image from "next/image";
import Link from "next/link";

export default function PromoBanner() {
    return (
        <Link
            href="https://duckootest.pages.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-3xl mx-auto rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:border-[#16324f]/20 transition-all relative group"
        >
            <div className="absolute top-3 left-3 bg-[#16324f] text-white text-[10px] sm:text-xs font-black tracking-widest uppercase px-2.5 py-1.5 rounded-lg z-10 shadow-sm flex items-center gap-1.5">
                <span className="text-sm">💡</span> 추천 콘텐츠
            </div>
            <div className="relative w-full aspect-[16/9] sm:aspect-[21/9]">
                <Image
                    src="/promo-duckoo.jpg"
                    alt="덕후테스트 - 나의 덕력을 증명하라!"
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
                {/* subtle gradient overlay for better text contrast if needed, though this image looks vibrant */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
        </Link>
    );
}

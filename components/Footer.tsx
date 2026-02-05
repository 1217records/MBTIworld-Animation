
import Link from 'next/link';

const Footer = () => (
  <footer className="mt-20 py-16 px-6 bg-white border-t border-gray-100">
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
      <div className="flex flex-wrap justify-center gap-8">
        <Link href="/" className="text-xs font-bold text-gray-400 hover:text-[#16324f] transition-colors">홈으로</Link>
        <Link href="/about" className="text-xs font-bold text-gray-400 hover:text-[#16324f] transition-colors">서비스 소개</Link>
        <Link href="/contact" className="text-xs font-bold text-gray-400 hover:text-[#16324f] transition-colors">테스트 제안</Link>
        <Link href="/privacy" className="text-xs font-bold text-gray-400 hover:text-[#16324f] transition-colors">개인정보 처리방침</Link>
      </div>
      <div className="text-center space-y-3">
        <p className="text-[11px] text-gray-300 font-bold tracking-[0.2em] uppercase">Your Soul, Reimagined in Anime</p>
        <p className="text-[10px] text-gray-200">© 2026 MBTI-World Archive. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;

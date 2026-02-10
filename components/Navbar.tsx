
import Link from 'next/link';
import { Suspense } from 'react';
import ShareButtons from './ShareButtons';
import LanguageToggle from './LanguageToggle';

const Navbar = () => (
  <nav className="flex items-center justify-between px-6 py-5 bg-white/70 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-50">
    <Link href="/" className="text-2xl font-black tracking-tighter text-[#16324f] font-serif">
      MBTI-world
    </Link>
    <div className="flex items-center gap-3">
      <Suspense fallback={null}>
        <LanguageToggle />
      </Suspense>
      <ShareButtons />
    </div>
  </nav>
);

export default Navbar;

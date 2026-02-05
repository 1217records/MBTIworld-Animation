
import Link from 'next/link';

const Navbar = () => (
  <nav className="flex items-center justify-center px-6 py-5 bg-white/70 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-50">
    <Link href="/" className="text-2xl font-black tracking-tighter text-[#16324f] font-serif">
      MBTI-world
    </Link>
  </nav>
);

export default Navbar;

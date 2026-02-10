import Link from "next/link";

const FooterEn = () => (
  <footer className="mt-20 py-16 px-6 bg-white border-t border-gray-100">
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-10 text-center">
      <div className="flex flex-wrap justify-center gap-8">
        <Link href="/en" className="text-xs font-bold text-gray-400 hover:text-[#16324f] transition-colors">Home</Link>
        <Link href="/en/about" className="text-xs font-bold text-gray-400 hover:text-[#16324f] transition-colors">About</Link>
        <Link href="/en/contact" className="text-xs font-bold text-gray-400 hover:text-[#16324f] transition-colors">Suggest a Test</Link>
        <Link href="/en/terms" className="text-xs font-bold text-gray-400 hover:text-[#16324f] transition-colors">Terms</Link>
        <Link href="/en/privacy" className="text-xs font-bold text-gray-400 hover:text-[#16324f] transition-colors">Privacy</Link>
      </div>
      <div className="space-y-3">
        <p className="text-sm text-gray-500 leading-relaxed">
          MBTI WORLD ANIMATION is an entertainment-focused personality test inspired by anime worlds.
          <br />
          Results are for self-reflection and are not a professional diagnosis.
        </p>
        <p className="text-xs text-gray-400 leading-relaxed">
          Operated by MBTI WORLD Animation Team · Contact: mbtiworld.kr@gmail.com
        </p>
        <p className="text-[11px] text-gray-300 font-bold tracking-[0.2em] uppercase">Your Soul, Reimagined in Anime</p>
        <p className="text-[10px] text-gray-200">© 2026 MBTI-World Archive. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default FooterEn;

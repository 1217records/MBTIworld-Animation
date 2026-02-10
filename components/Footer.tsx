
import Link from 'next/link';

const Footer = () => (
  <footer className="mt-20 py-16 px-6 bg-white border-t border-gray-100">
    <div className="max-w-4xl mx-auto flex flex-col items-center gap-10 text-center">
      <div className="flex flex-wrap justify-center gap-8">
        <Link href="/" className="text-xs font-bold text-gray-400 hover:text-[#16324f] transition-colors">홈으로</Link>
        <Link href="/about" className="text-xs font-bold text-gray-400 hover:text-[#16324f] transition-colors">서비스 소개</Link>
        <Link href="/contact" className="text-xs font-bold text-gray-400 hover:text-[#16324f] transition-colors">테스트 제안</Link>
        <Link href="/terms" className="text-xs font-bold text-gray-400 hover:text-[#16324f] transition-colors">이용 약관</Link>
        <Link href="/privacy" className="text-xs font-bold text-gray-400 hover:text-[#16324f] transition-colors">개인정보 처리방침</Link>
      </div>
      <div className="space-y-3">
        <p className="text-sm text-gray-500 leading-relaxed">
          MBTI WORLD ANIMATION은 애니메이션 세계관의 상황을 통해 성향을 탐색하는 엔터테인먼트형
          성격 테스트 서비스입니다. 결과는 자기이해를 돕는 참고용이며, 전문 진단을 대체하지 않습니다.
        </p>
        <p className="text-xs text-gray-400 leading-relaxed">
          운영/제작: MBTI WORLD Animation Team · 문의: mbtiworld.kr@gmail.com
        </p>
        <p className="text-[11px] text-gray-300 font-bold tracking-[0.2em] uppercase">Your Soul, Reimagined in Anime</p>
        <p className="text-[10px] text-gray-200">© 2026 MBTI-World Archive. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;

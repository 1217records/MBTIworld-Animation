"use client";

import Image from "next/image";
import Script from "next/script";

const KAKAO_JS_KEY = "22eb1d8928d653f7d244db698943c4d1";
const KAKAO_SDK_VERSION = "2.7.9";
const KAKAO_SDK_SRC = `https://t1.kakaocdn.net/kakao_js_sdk/${KAKAO_SDK_VERSION}/kakao.min.js`;

declare global {
  interface Window {
    Kakao?: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Share: {
        sendDefault: (payload: Record<string, unknown>) => void;
      };
    };
  }
}

type ResultShareClientProps = {
  themeId: string;
  type: string;
  shareUrl: string;
  imageUrl: string;
};

export default function ResultShareClient({ themeId, type, shareUrl, imageUrl }: ResultShareClientProps) {
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(shareUrl);
      alert("결과 링크가 복사되었습니다!");
    }
  };

  const handleKakaoShare = () => {
    if (typeof window === "undefined" || !window.Kakao) {
      alert("카카오 SDK를 불러오는 중입니다. 잠시 후 다시 시도해 주세요.");
      return;
    }

    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_JS_KEY);
    }

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "MBTI WORLD ANIMATION",
        description: "내 MBTI는 어떤 캐릭터와 같을까?",
        imageUrl,
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl,
        },
      },
      buttons: [
        {
          title: "결과 보기",
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
      ],
    });
  };

  const handleXShare = () => {
    if (typeof window === "undefined") return;
    const text = `MBTI WORLD ANIMATION · ${type}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-white rounded-[4rem] p-8 sm:p-20 border border-gray-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] space-y-12 text-center">
      <Script
        src={KAKAO_SDK_SRC}
        strategy="afterInteractive"
        onLoad={() => {
          if (window.Kakao && !window.Kakao.isInitialized()) {
            window.Kakao.init(KAKAO_JS_KEY);
          }
        }}
      />
      <div className="space-y-2">
        <h3 className="text-2xl font-black font-serif text-[#16324f]">결과 공유하기</h3>
        <p className="text-gray-400 font-medium text-sm">당신과 닮은 캐릭터를 친구들에게 보여주세요.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        <button
          className="w-full px-6 py-3.5 rounded-full bg-[#fee500] text-[#3c1e1e] font-black text-base shadow-xl shadow-yellow-200/50 hover:-translate-y-1 transition-all active:scale-95"
          onClick={handleKakaoShare}
        >
          <span className="inline-flex items-center justify-center gap-2 leading-none align-middle">
            <Image src="/icons/kakao.svg" alt="KakaoTalk" width={32} height={32} />
            카톡으로 보내기
          </span>
        </button>
        <button
          className="w-full px-6 py-3.5 rounded-full bg-gradient-to-b from-[#111827] to-[#0b0f19] text-white font-black text-base shadow-xl shadow-black/30 ring-1 ring-white/10 hover:-translate-y-1 hover:shadow-black/40 transition-all active:scale-95"
          onClick={handleXShare}
        >
          <span className="inline-flex items-center justify-center gap-1 leading-none align-middle">
            <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.175 2H20.308L13.733 9.514L21.5 22H15.156L10.2 14.333L3.52 22H0.384L7.44 13.933L0 2H6.504L10.98 9.02L17.175 2ZM16.078 20.1H17.82L5.52 3.82H3.65L16.078 20.1Z" fill="currentColor" />
            </svg>
            에 게시하기
          </span>
        </button>
        <a
          href={imageUrl}
          download={`mbti-${themeId}-${type}.png`}
          className="w-full px-6 py-3.5 rounded-full bg-white border border-gray-200 text-[#16324f] font-black text-base shadow-sm hover:bg-gray-50 transition-colors"
        >
          이미지 저장
        </a>
        <button
          onClick={handleCopyLink}
          className="w-full px-6 py-3.5 rounded-full bg-white border border-gray-200 text-[#16324f] font-black text-base shadow-sm hover:bg-gray-50 transition-colors"
        >
          링크 복사하기
        </button>
      </div>
    </section>
  );
}

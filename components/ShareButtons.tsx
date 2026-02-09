"use client";

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

export default function ShareButtons() {
  const handleCopyLink = () => {
    if (typeof window === "undefined") return;
    navigator.clipboard.writeText(window.location.origin);
    alert("홈 링크가 복사되었습니다!");
  };

  const handleKakaoShareHome = () => {
    if (typeof window === "undefined" || !window.Kakao) {
      alert("카카오 SDK를 불러오는 중입니다. 잠시 후 다시 시도해 주세요.");
      return;
    }

    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(KAKAO_JS_KEY);
    }

    const origin = window.location.origin;
    const shareUrl = `${origin}/`;
    const imageUrl = `${origin}/og/home`;

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "MBTI WORLD",
        description: "내 MBTI는 어떤 캐릭터와 같을까?",
        imageUrl,
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl,
        },
      },
      buttons: [
        {
          title: "테스트 하러 가기",
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
    const shareUrl = window.location.origin;
    const text = "MBTI WORLD · 내 MBTI는 어떤 캐릭터와 같을까?";
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex items-center gap-2">
      <Script
        src={KAKAO_SDK_SRC}
        strategy="afterInteractive"
        onLoad={() => {
          if (window.Kakao && !window.Kakao.isInitialized()) {
            window.Kakao.init(KAKAO_JS_KEY);
          }
        }}
      />
      <button
        type="button"
        onClick={handleKakaoShareHome}
        className="w-9 h-9 rounded-full border border-gray-200 bg-white/80 hover:bg-white shadow-sm hover:shadow transition flex items-center justify-center"
        aria-label="카카오톡으로 공유"
        title="카카오톡으로 공유"
      >
        <img src="/icons/kakao.svg" alt="" className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={handleXShare}
        className="w-9 h-9 rounded-full border border-gray-200 bg-white/80 hover:bg-white shadow-sm hover:shadow transition flex items-center justify-center"
        aria-label="X로 공유"
        title="X로 공유"
      >
        <svg className="h-4 w-4 text-[#0b0f19]" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.175 2H20.308L13.733 9.514L21.5 22H15.156L10.2 14.333L3.52 22H0.384L7.44 13.933L0 2H6.504L10.98 9.02L17.175 2ZM16.078 20.1H17.82L5.52 3.82H3.65L16.078 20.1Z" fill="currentColor" />
        </svg>
      </button>
      <button
        type="button"
        onClick={handleCopyLink}
        className="w-9 h-9 rounded-full border border-gray-200 bg-white/80 hover:bg-white shadow-sm hover:shadow transition flex items-center justify-center"
        aria-label="링크 복사"
        title="링크 복사"
      >
        <svg className="h-4 w-4 text-[#16324f]" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="9" y="7" width="10" height="13" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M15 7V6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <rect x="5" y="4" width="10" height="13" rx="2" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.35" />
        </svg>
      </button>
    </div>
  );
}

"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { DEFAULT_LOCALE } from "@/lib/i18n-config";

const resources = {
  ko: {
    translation: {
      langSwitch: "언어",
      languageNames: { ko: "한국어", en: "English", ja: "日本語" },
      nav: { brand: "MBTI-world" },
      footer: {
        home: "홈으로",
        about: "서비스 소개",
        contact: "테스트 제안",
        terms: "이용 약관",
        privacy: "개인정보 처리방침",
        description:
          "MBTI WORLD ANIMATION은 애니메이션 세계관의 상황을 통해 성향을 탐색하는 엔터테인먼트형 성격 테스트 서비스입니다.",
        note: "결과는 자기이해를 돕는 참고용이며, 전문 진단을 대체하지 않습니다.",
        operatedBy: "운영/제작: MBTI WORLD Animation Team · 문의: mbtiworld.kr@gmail.com",
      },
    },
  },
  en: {
    translation: {
      langSwitch: "Language",
      languageNames: { ko: "Korean", en: "English", ja: "Japanese" },
      nav: { brand: "MBTI-world" },
      footer: {
        home: "Home",
        about: "About",
        contact: "Suggest a Test",
        terms: "Terms",
        privacy: "Privacy",
        description:
          "MBTI WORLD ANIMATION is an entertainment-focused personality test inspired by anime worlds.",
        note: "Results are for self-reflection and are not a professional diagnosis.",
        operatedBy: "Operated by MBTI WORLD Animation Team · Contact: mbtiworld.kr@gmail.com",
      },
    },
  },
  ja: {
    translation: {
      langSwitch: "言語",
      languageNames: { ko: "韓国語", en: "英語", ja: "日本語" },
      nav: { brand: "MBTI-world" },
      footer: {
        home: "ホーム",
        about: "サービス紹介",
        contact: "テスト提案",
        terms: "利用規約",
        privacy: "プライバシーポリシー",
        description:
          "MBTI WORLD ANIMATIONは、アニメ世界観をもとにしたエンタメ型性格テストです。",
        note: "結果は自己理解の参考用であり、専門的診断の代替ではありません。",
        operatedBy: "運営: MBTI WORLD Animation Team · 連絡先: mbtiworld.kr@gmail.com",
      },
    },
  },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: DEFAULT_LOCALE,
    fallbackLng: DEFAULT_LOCALE,
    interpolation: { escapeValue: false },
  });
}

export default i18n;

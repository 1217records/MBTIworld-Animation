
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./data.ts",
    "./constants.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-ibm-plex)'],
        serif: ['var(--font-noto-serif)'],
      },
    },
  },
  // 동적으로 생성되는 클래스들이 빌드 시 누락되지 않도록 안전 목록에 추가
  safelist: [
    'from-[#1f4d8f]',
    'to-[#63b0f4]',
    'from-[#d45b32]',
    'to-[#f2a45f]',
    'bg-gradient-to-br',
    'bg-gradient-to-r',
    'bg-gradient-to-bl'
  ],
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  // 核心：告訴 Tailwind 掃描所有在 src/ 下的 .js, .jsx, .ts, .tsx 檔案
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

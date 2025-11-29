/** @type {import('tailwindcss').Config} */
module.exports = {
  // 核心設定：讓 Tailwind 知道要去哪裡掃描和提取樣式類別
  content: [
    // 掃描專案根目錄及其子目錄下的所有 .html, .js, .jsx, .ts, .tsx 檔案
    './src/**/*.{js,jsx,ts,tsx,html}',
    './*.html', // 確保根目錄下的 index.html 也被掃描
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

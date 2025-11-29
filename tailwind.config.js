/** @type {import('tailwindcss').Config} */
module.exports = {
  // content 欄位告訴 Tailwind 哪些檔案需要掃描類別
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

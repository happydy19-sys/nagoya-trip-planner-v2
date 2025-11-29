/**
 * PostCSS 設定檔
 * * 這是 Tailwind CSS 專案中必備的設定檔。
 * 它告訴 PostCSS 依序執行以下外掛：
 * 1. tailwindcss: 負責處理 @tailwind 指令並生成所有樣式。
 * 2. autoprefixer: 負責為 CSS 屬性添加瀏覽器前綴 (如 -webkit- 或 -ms-)，確保跨瀏覽器相容性。
 */
export default {
  plugins: {
    // 引入 Tailwind CSS 引擎，這是第一步
    tailwindcss: {},
    // 引入 Autoprefixer，通常放在最後一步，用於處理瀏覽器前綴
    autoprefixer: {},
  },
}

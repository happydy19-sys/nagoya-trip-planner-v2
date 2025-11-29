import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // 使用較新的 @vitejs/plugin-react

// https://vitejs.dev/config/
export default defineConfig({
  // *** 關鍵修正：將 base 設置為 './' (相對路徑) ***
  // 這確保在 Netlify (或任何子路徑環境) 中，靜態資源 (CSS, JS) 
  // 可以被正確地從相對路徑載入，解決樣式丟失問題。
  base: './', 
  // **************************************************
  plugins: [react()], // 使用 react 插件
})

import React from 'react';
import { Wallet } from 'lucide-react'; // 假設您使用 lucide-react 作為 icon 庫

// 模擬資料
const totalSpentTWD = 125432; 

// 這裡我們將您的主要卡片類別替換成一個簡單、保證存在的顏色 (bg-yellow-500)
// 以便測試該元素是否能接受任何背景顏色。

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Tailwind 樣式診斷測試
      </h1>

      {/* 總覽卡片 - 診斷測試 (使用簡單的 bg-yellow-500) */}
      <div className="w-full max-w-sm mb-8">
        <h2 className="text-xl font-semibold mb-2">旅費總覽 (測試版)</h2>
        <div className="bg-yellow-500 p-6 rounded-2xl shadow-lg text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-lg font-bold opacity-90 mb-2 flex items-center gap-2">
              <Wallet className="text-gray-900" /> 旅費總覽 (已換算台幣)
            </h2>
            <div className="text-5xl font-extrabold tracking-tight">
              <span className="text-xl mr-1">NT$</span>
              {Number(totalSpentTWD).toLocaleString()}
            </div>
            <p className='text-xs text-yellow-200 mt-2'>* 總額依每筆紀錄鎖定之匯率計算</p>
          </div>
        </div>
      </div>

      {/* 總覽卡片 - 原始代碼 (使用您的漸層色) */}
      <div className="w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-2">旅費總覽 (原始版)</h2>
        {/* 您的原始程式碼片段，但加上 w-full max-w-sm */}
        <div className="bg-gradient-to-br from-red-900 to-red-800 p-6 rounded-2xl shadow-lg text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-lg font-bold opacity-90 mb-2 flex items-center gap-2">
              <Wallet className="text-amber-400" /> 旅費總覽 (已換算台幣)
            </h2>
            <div className="text-5xl font-extrabold tracking-tight">
              <span className="text-xl mr-1">NT$</span>
              {Number(totalSpentTWD).toLocaleString()}
            </div>
            <p className='text-xs text-red-200 mt-2'>* 總額依每筆紀錄鎖定之匯率計算</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

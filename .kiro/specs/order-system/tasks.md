# Implementation Plan:

## Overview
多平台訂單匯整與出貨列印系統。分 4 個 Task 完成雛型開發，每個 Task 可獨立開發、驗證與 commit。依序為 HTML 結構、CSS 版面、JS 邏輯、整合檢查。

## Task Dependency Graph

```json
{
  "waves": [
    {"tasks": [1]},
    {"tasks": [2]},
    {"tasks": [3]},
    {"tasks": [4]}
  ]
}
```

## Tasks

- [x] 1. HTML 結構：建立 docs/index.html 完成所有靜態骨架
  - 建立 `docs/` 目錄
  - 建立 `index.html`，以相對路徑引用 `styles.css` 與 `app.js`
  - 加入 viewport meta 標籤
  - 建立三個 Tab 按鈕：訂單匯入、出貨列印、銷售儀表板
  - Tab 1：檔案上傳 input、「載入蝦皮範例」「載入 MOMO 範例」按鈕、原始預覽表格容器、平台篩選 select、清洗結果表格容器
  - Tab 2：「產生出貨單」「產生揀貨單」「列印」按鈕、列印版面容器
  - Tab 3：三張摘要卡片、占比橫條容器、SVG 趨勢圖容器、熱銷 TOP 5 表格
  - 所有 UI 文字使用繁體中文
  - **Requirements:** FR-1, FR-2, FR-3, FR-4, FR-5
  - **Verification:** 瀏覽器開啟 docs/index.html 無錯誤；三個 Tab 區塊 HTML 可見；所有路徑為相對路徑

- [x] 2. CSS 版面與響應式：建立 docs/styles.css 完成視覺樣式與列印支援
  - Tab 導覽列樣式（active 高亮）
  - Tab 區塊預設隱藏，`.active` 顯示
  - 檔案上傳區域虛線框
  - 表格邊框、斑馬紋、`.duplicate` 背景色
  - 摘要卡片 flex 排列
  - 出貨單 A4 版面、`page-break-after: always`
  - `@media print`：隱藏 nav 與按鈕
  - `@media (max-width: 767px)`：卡片單欄、表格 overflow-x auto、儀表板堆疊
  - **Requirements:** AC-2.2, AC-2.4, AC-3.3, AC-5.6, NFR-5
  - **Verification:** 桌面版面整齊；375px 響應式正常；列印預覽正確；duplicate class 有背景色

- [x] 3. 模擬資料與互動邏輯：建立 docs/app.js 完成所有功能
  - 頂部定義固定模擬資料（蝦皮 15 筆 + MOMO 15 筆）
  - Tab 切換邏輯
  - 載入範例按鈕事件
  - CSV 上傳 FileReader 解析
  - 非 CSV 副檔名錯誤提示
  - 欄位對照函式（蝦皮→統一、MOMO→統一）
  - 清洗結果渲染，重複訂單加 `.duplicate`
  - 平台篩選下拉過濾
  - 出貨單 HTML 產生（每筆一張）
  - 揀貨單依商品 groupBy 彙總
  - 列印按鈕 `window.print()`
  - 儀表板摘要計算
  - CSS 橫條圖（div width 百分比）
  - SVG 長條圖（動態 rect + text）
  - 熱銷 TOP 5 表格
  - **Requirements:** FR-1, FR-2, FR-3, FR-4, FR-5 全部 AC
  - **Verification:** Tab 切換正常；載入範例有資料；非 CSV 顯示錯誤；篩選可用；出貨/揀貨單正確；儀表板圖表顯示；Console 無錯誤

- [x] 4. 整合檢查與修正：逐一核對所有驗收條件
  - 核對 FR-1 至 FR-5 所有 AC
  - 確認檔案結構僅 docs/index.html、styles.css、app.js
  - 確認所有路徑為相對路徑
  - 確認無外部 CDN 或套件
  - 確認響應式與列印版面
  - 修正發現的問題
  - **Requirements:** 全部 FR 與 NFR
  - **Verification:** 所有 AC 通過；桌面與 375px 正常；列印預覽正確；Console 無錯誤；docs/ 僅三個檔案

## Notes
- 每個 Task 完成後可獨立 commit
- Task 4 為驗收性質，可能產生回頭修改 Task 1-3 的需求
- 不引入任何外部套件或 CDN

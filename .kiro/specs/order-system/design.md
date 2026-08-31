# Design Document: 多平台訂單匯整與出貨列印系統

## Overview
單頁前端應用，以 Tab 切換三個功能區塊（訂單匯入、出貨列印、銷售儀表板）。訂單來源為 Pinkoi 與 CYBERBIZ 兩個平台。所有邏輯在 `docs/index.html`、`docs/styles.css`、`docs/app.js` 三個檔案完成，不使用框架或外部套件。

## Architecture
```
docs/
├── index.html    ← 唯一 HTML，包含三個 Tab 區塊
├── styles.css    ← 所有樣式，含列印與響應式
└── app.js        ← 所有邏輯與模擬資料
```

### 頁面結構
單頁 Tab 切換，CSS class 控制顯示/隱藏，JS 切換 active class。不使用路由。

- Tab 1 — 訂單匯入：上傳區、表格式原始預覽、清洗結果表格（含平台篩選）
- Tab 2 — 出貨列印：出貨單版面、揀貨單版面、列印按鈕
- Tab 3 — 銷售儀表板：時間範圍與平台篩選下拉、摘要卡片、訂單趨勢、熱銷排行、營收長條圖、產品別營收

### 資料流
```
CSV 檔案上傳（或載入模擬範例）
       ↓
  原始資料預覽（前 5 筆）
       ↓
  欄位對照清洗 → 統一格式陣列
       ↓
  清洗結果表格 / 出貨單 / 揀貨單
```

儀表板獨立運作，直接讀取 app.js 頂部的固定模擬資料。

## Components and Interfaces

### app.js 內部區段

| 區段 | 職責 |
|------|------|
| 模擬資料 | 固定的 Pinkoi 與 CYBERBIZ 訂單陣列，約 50 筆 |
| CSV 解析 | FileReader 讀取上傳檔案、逗號分割解析 |
| 欄位對照 | 依平台將 Pinkoi／CYBERBIZ 欄位映射為統一格式 |
| 表格渲染 | 產生 HTML 表格（表格式原始預覽、清洗結果） |
| 列印版面 | 產生出貨單／揀貨單 HTML |
| 儀表板 | 計算摘要數據、繪製 SVG/CSS 圖表 |
| 營收分析 | 依時間範圍與平台篩選計算營收、繪製圖表 |
| Tab 控制 | 切換頁面區塊 active class |

### 時間範圍篩選（參考 CYBERBIZ 儀表板）
儀表板頂部提供兩個下拉選單：
- **時間範圍**：全部、過去 7 天、過去 30 天、按日、按月
- **平台**：全部、Pinkoi、CYBERBIZ

選單變更時，重新計算摘要卡片與所有營收圖表。營收長條圖依時間範圍改變 X 軸分組粒度（按日→每日，按月→每月）。

### 圖表元件
- 近 7 日訂單趨勢：原生 SVG 長條圖（動態 `<rect>` + `<text>`）
- 熱銷 TOP 5：純 HTML `<table>`
- 營收比較：原生 SVG 長條圖，X 軸依所選時間範圍動態分組
- 產品別營收比較：CSS 橫條圖（div 寬度百分比 + 數值標籤）

### 列印版面
- 出貨單：每張 A4 一筆訂單，`page-break-after: always`
- 揀貨單：單張彙總表，依商品分組
- `@media print` 隱藏導覽與按鈕

## Data Models

### 統一訂單格式
```javascript
{
  orderId: "PK20240115001",
  platform: "Pinkoi",
  date: "2024-01-15",
  recipient: "王小明",
  phone: "0912-345-678",
  address: "台北市信義區信義路五段7號",
  product: "手工香氛蠟燭",
  quantity: 2,
  logistics: "宅配",
  amount: 890
}
```

### 平台原始欄位對照
各平台匯出檔欄位對照至統一格式：

| 統一欄位 | Pinkoi 欄位 | CYBERBIZ 欄位 |
|----------|-------------|---------------|
| orderId | 訂單編號 | 訂單編號（如 #1249） |
| recipient | 收件人姓名 | 收件人 |
| phone | 收件人電話 | 聯絡電話 |
| address | 收件人地址 | 收件地址 |
| product | 商品名稱 | 商品名稱 / 規格 |
| quantity | 數量 | 數量 |
| logistics | 寄送方式 | 配送方式 |
| amount | 總金額 | 訂單總金額 |
| date | 訂購日期 | 訂單日期 |

### 模擬資料
- Pinkoi 約 30 筆 + CYBERBIZ 約 20 筆，寫在 app.js 頂部
- 涵蓋不同商品、物流方式、日期與月份（供時間範圍營收分析）

## Error Handling
- 非 CSV 檔案上傳：檢查副檔名，顯示錯誤提示文字
- 空檔案：顯示「檔案無資料」提示
- 無其他錯誤情境（純前端模擬資料，無網路請求）

## Correctness Properties

### Property 1: 資料完整性
統一欄位對照後資料完整，不遺漏欄位。重複訂單偵測基於 orderId 比對。

**Validates: Requirements 2.1, 2.2**

### Property 2: 數據一致性
儀表板數據由模擬資料即時計算，摘要卡片數字與圖表數據保證一致。

**Validates: Requirements 5.1, 5.3**

### Property 3: 營收加總正確性
營收分析依所選時間範圍與平台篩選後分組加總，篩選後各分組加總總和應等於該範圍內的總營收。

**Validates: Requirements 6.2, 6.3, 6.4**

## Testing Strategy
- 以瀏覽器手動驗證為主
- 開發者工具 375px 寬度確認響應式
- 列印預覽確認版面
- Console 確認無 JavaScript 錯誤

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
    {"tasks": [4]},
    {"tasks": [5]},
    {"tasks": [6]},
    {"tasks": [7]},
    {"tasks": [8]},
    {"tasks": [9]},
    {"tasks": [10]},
    {"tasks": [11]},
    {"tasks": [12]},
    {"tasks": [13]}
  ]
}
```

## Tasks

- [x] 1. HTML 結構：建立 docs/index.html 完成所有靜態骨架
  - 建立 `docs/` 目錄
  - 建立 `index.html`，以相對路徑引用 `styles.css` 與 `app.js`
  - 加入 viewport meta 標籤
  - 建立三個 Tab 按鈕：訂單匯入、出貨列印、銷售儀表板
  - Tab 1：檔案上傳 input、「載入範例資料（Pinkoi + CYBERBIZ）」按鈕、原始預覽表格容器、平台篩選 select、清洗結果表格容器
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
  - 頂部定義固定模擬資料（Pinkoi 20 筆 + CYBERBIZ 15 筆，共 35 筆）
  - Tab 切換邏輯
  - 載入範例按鈕事件
  - CSV 上傳 FileReader 解析
  - 非 CSV 副檔名錯誤提示
  - 欄位對照函式（Pinkoi→統一、CYBERBIZ→統一）
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

- [x] 5. 訂單異常防呆警示（訂單匯入分頁）
  - 新增異常偵測 `detectOrderIssues`：未來日期、金額為 0、重複訂單號
  - 重複訂單號以「整份訂單清單」為基準計算（`buildDupIds`）
  - 清洗結果表格：異常整列標色、異常欄位加 ⚠ 圖示與原因 tooltip（做法 A）
  - 表格上方彙總警示條：顯示各類異常筆數（做法 B）
  - 逐筆「確認無誤／需檢查」按鈕，並可就地編輯日期與金額；修正後重新判定（做法 C）
  - 確認狀態儲存於 `reviewStatus`，已確認無誤者不再計入警示
  - 新增對應 CSS（警示條、異常標色、就地編輯輸入框、處理狀態欄）
  - **Requirements:** FR-7（AC-7.1, 7.2, 7.3, 7.4, 7.9），AC-2.2
  - **Verification:** 三類異常正確標示；彙總筆數正確；確認/需檢查/還原可用；就地編輯後重新判定；Console 無錯誤

- [x] 6. 異常跨分頁連動與儀表板歸零
  - 以穩定 `_uid`（`ensureOrderUids`/`orderKey`）綁定確認狀態，讓「確認無誤」跨三分頁一致
  - 抽出共用 `splitByIssues`：將訂單分成「正常/已確認」與「未確認異常」兩組
  - 出貨列印：異常出貨單標記與列出原因、揀貨單對應商品標示、頂部異常彙總提示（異常訂單仍可列印）
  - 銷售儀表板：所有統計排除未確認異常訂單，並提示已排除筆數與類型
  - 切換分頁即時連動（切到儀表板重新渲染、切到出貨列印清空舊單據）
  - 儀表板移除範例 fallback：未載入訂單顯示 0，清除資料後即歸零；載入範例或上傳後恢復連動
  - **Requirements:** FR-7（AC-7.5, 7.6, 7.7, 7.8），AC-3.5, AC-4.4, AC-5.4, AC-5.6, AC-5.7, AC-6.7
  - **Verification:** 匯入確認/修正後，出貨列印與儀表板即時反映；儀表板初始與清除後為 0；載入範例後恢復；Console 無錯誤

- [x] 7. Pinkoi 一單多列合併與清洗結果分頁
  - 修正 `cleanOrders`：改以訂單編號為 key 合併（orderMap），同編號後續列只併入 items、金額只計一次；主列缺金額而後續列有時補上
  - 解決 Pinkoi 每個品項一列、重複收件人導致的「重複訂單號」與「金額為 0」假異常
  - 清洗結果表格加入分頁（每頁 20 筆），提供第一頁／上一頁／下一頁／最後一頁與筆數資訊
  - 分頁僅影響顯示；異常偵測與彙總仍以全部訂單計算；換頁、切換平台、匯入新資料皆回到第 1 頁
  - 新增分頁列 CSS（桌面橫向、行動裝置垂直堆疊），按鈕含 aria-label
  - **Requirements:** AC-2.5, AC-2.6
  - **Verification:** Pinkoi 多品項訂單合併為單筆且無假異常；清洗結果每頁可翻頁；異常彙總筆數不受分頁影響；Console 無錯誤

- [x] 8. 新增異常類型、金額比對條件與分頁強化
  - `cleanOrders`：無訂單編號的列不再靜默併入上一筆，改為獨立訂單以利標記；累加明細小計（`小計` 欄，無則以單價×數量估算）存於 `subtotalSum`
  - `detectOrderIssues` 新增兩類異常：`missing-id`（缺少訂單編號）、`amount-mismatch`（金額與小計不符）
  - 金額與小計比對「僅在缺少訂單編號時」才執行，避免正常訂單（總金額含運費／折扣）被誤標
  - 彙總警示條與儀表板排除提示加入兩類新異常的計數文字
  - 分頁每頁筆數由 20 改為 15；分頁列加入可直接點選的頁碼（`buildPageItems` 滑動視窗＋省略號），目前頁高亮並標記 `aria-current`
  - **Requirements:** AC-2.6, AC-7.1
  - **Verification:** 有編號且金額≠小計不標示；無編號且金額≠小計標 missing-id+amount-mismatch；無編號且金額=小計僅標 missing-id；頁碼可直接點選跳頁；Console 無錯誤

- [x] 9. 新客／回購客分析與回購率趨勢（銷售儀表板）
  - `customerKey`：以「電話＋姓名」組合為客戶識別，正規化去除空白／符號差異、大小寫一致
  - `buildFirstOrderMap`：以完整歷史計算每位客戶最早購買日，作為新／回購判定基準（不受時間範圍影響）
  - A：新客數／回購客數／回購客佔比卡片 + 雙色佔比橫條（`renderCustomerAnalysis`）
  - B：按月回購率折線圖（`drawRepeatTrend`，原生 SVG），節點標示百分比
  - 沿用平台篩選與「排除未確認異常訂單」邏輯；空資料顯示空狀態提示
  - 畫面標註「客戶以電話＋姓名識別，僅供參考」，說明遮罩欄位對準確度的影響
  - **Requirements:** FR-8（AC-8.1～8.8）
  - **Verification:** 新客/回購以完整歷史正確分類（同人同 key、不同人不同 key）；只看特定月份時歷史回購客仍判為回購；回購率趨勢百分比正確；Console 無錯誤

- [x] 10. 出貨列印分頁（出貨單每頁 10 筆）
  - 新增 `renderDocArea`：出貨單依 10 筆分頁（`DOC_PAGE_SIZE`/`docPage`），顯示區上下各一組分頁控制（`docPaginationBar`/`bindDocPagination`），沿用 `buildPageItems` 頁碼滑動視窗
  - 異常彙總提示以全部訂單計算（`buildShippingHtml` 新增 `skipBanner` 參數，分頁時由外層統一顯示）
  - 揀貨單維持單一彙總視圖不分頁
  - 產生、切換平台／單據類型皆回到第 1 頁；列印時分頁控制隱藏（`.pagination` 加入 print 隱藏清單）
  - **Requirements:** AC-3.6, AC-4.5
  - **Verification:** 120 筆出貨單分 12 頁、每頁 10 筆；頁碼可點選跳頁且邊界安全；揀貨單不分頁；列印不含分頁列；Console 無錯誤

- [x] 11. CYBERBIZ 出貨單改為「訂單明細」版面
  - `FIELD_ALIASES` 新增 sku／unitPrice(商品售價)／subtotal(小計)／shipping(運費)／bonusUsed(訂單總紅利換購點數)／bonusEarn(可獲得紅利)／shipDate／shipTime／trackingNo；並將 sku 從 style 別名獨立出來
  - `cleanOrders`：品項改存 {product, quantity, sku, unitPrice, subtotal}（保留 product 字串相容既有功能）；訂單層級存運費／紅利／配送資訊
  - `buildShippingHtml` 依平台分流：CYBERBIZ 走 `buildCyberbizLabel`（訂單明細版面），其他平台走 `buildDefaultLabel`（原版）
  - 訂單明細含商品明細表格、金額摘要、紅利點數、配送資訊；缺漏欄位以「—」留白（`dash`/`ntd` 輔助）
  - 補 mockCyberbiz 前三筆的紅利/單價/SKU/配送示意資料，供範例展示新版面
  - 新增訂單明細版面 CSS（表格化商品明細、金額摘要、配送資訊）
  - **Requirements:** AC-3.7, AC-3.8
  - **Verification:** CYBERBIZ 訂單以訂單明細版面呈現、含紅利點數；缺資料顯示「—」；Pinkoi 維持原出貨單；異常標示與分頁仍作用；Console 無錯誤

- [x] 12. 出貨列印新增「出貨方式」篩選
  - toolbar 新增 `doc-shipping` 下拉：全部／超商-7-11／超商-全家／超商-萊爾富／超商-OK／宅配／順豐物流／其他
  - `shippingCategory`：依物流文字關鍵字分類（7-11/交貨便/ibon→seven、全家→family、萊爾富→hilife、OK→ok、順豐→sf、宅配/基本運送/黑貓/郵局→home，其餘→other）
  - `filteredDocOrders` 同時套用平台與出貨方式篩選；切換出貨方式回到第 1 頁並清空顯示區
  - **Requirements:** AC-3.9
  - **Verification:** 各出貨方式關鍵字正確分類；僅標「超商取貨」歸入其他；篩選後出貨單/揀貨單只含該出貨方式訂單；Console 無錯誤

- [x] 13. 讀取 Shopee 訂單並納入銷售分析
  - `detectPlatformFromHeaders`：依標題列蝦皮特有欄位（買家帳號、買家總支付金額、蝦幣折抵…命中≥2）判定平台為 Shopee；其餘回傳 null 交由 # 規則判斷
  - `FIELD_ALIASES`：amount 最前面加「買家總支付金額」（營業額依據）；補收件者姓名/電話、商品選項名稱、主商品貨號等別名
  - `pick` 比對改為「完全相等優先，其次欄名開頭符合」，解決 Shopee 含換行說明的超長欄名（如收件者電話）
  - `cleanOrders`：Shopee 檔所有訂單標記 platform='Shopee'
  - 平台篩選（清洗結果、儀表板）新增 Shopee 選項；出貨列印 `filteredDocOrders` 預設排除 Shopee
  - 新增 mockShopee 範例（12 筆），載入範例即三平台一起分析
  - **Requirements:** AC-1.3, AC-1.5, AC-2.3, AC-3.10
  - **Verification:** Shopee 標題正確判定平台、Pinkoi 不誤判；金額取買家總支付金額而非商品總價；超長電話欄名可對應；Shopee 計入儀表板但不出現在出貨列印；Console 無錯誤

## Notes
- 每個 Task 完成後可獨立 commit
- Task 4 為驗收性質，可能產生回頭修改 Task 1-3 的需求
- Task 5、6 為異常防呆（FR-7）的後續擴充：Task 5 先在訂單匯入分頁完成警示與確認流程，Task 6 再延伸至出貨列印與儀表板的跨分頁連動
- Task 7 為實際匯入 Pinkoi 檔案後發現的修正：一單多列合併（避免假異常）與清洗結果分頁（便於逐筆檢查）
- Task 8 為實際檔案再驗證後的調整：新增缺少訂單編號與金額不符的偵測（金額比對限縮在缺編號時）、分頁改 15 筆並支援直接點選頁碼
- Task 9 為銷售分析擴充：新客／回購客分析與回購率趨勢；客戶以電話＋姓名識別，受平台欄位遮罩影響為近似值
- Task 10 為出貨列印分頁：出貨單每頁 10 筆便於逐筆異常檢查；揀貨單為彙總視圖不分頁
- Task 11 為 CYBERBIZ 出貨單客製：改用「訂單明細」版面並加入紅利點數，供消費者參考；其他平台版面不變
- Task 12 為出貨列印新增出貨方式篩選，將超商（7-11／全家／萊爾富／OK）與宅配、順豐分開，利於後續依出貨方式作業
- Task 13 為新增 Shopee 平台：讀取蝦皮訂單並納入銷售分析（營業額用買家總支付金額）；蝦皮不透過本系統出貨，故出貨列印排除
- 不引入任何外部套件或 CDN

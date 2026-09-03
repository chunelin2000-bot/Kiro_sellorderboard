// ===== 模擬資料（一筆訂單含多項商品 items；個資為假造，商品與出貨方式貼近真實樣貌） =====
var mockPinkoi = [
  // 2024-01
  { orderId: "PK20240115001", platform: "Pinkoi", date: "2024-01-15", recipient: "王小明", phone: "0912-345-678", address: "台北市信義區信義路五段7號", logistics: "宅配", amount: 890, items: [{ product: "手工香氛蠟燭", quantity: 2 }] },
  { orderId: "PK20240115002", platform: "Pinkoi", date: "2024-01-15", recipient: "李美玲", phone: "0923-456-789", address: "新北市板橋區文化路一段100號", logistics: "超商取貨", amount: 600, items: [{ product: "純棉手帕禮盒", quantity: 3 }, { product: "木質桌上收納盒", quantity: 1 }] },
  { orderId: "PK20240114003", platform: "Pinkoi", date: "2024-01-14", recipient: "張大偉", phone: "0934-567-890", address: "台中市西屯區台灣大道三段99號", logistics: "宅配", amount: 1280, items: [{ product: "皮革筆記本", quantity: 1 }] },
  { orderId: "PK20240114004", platform: "Pinkoi", date: "2024-01-14", recipient: "陳怡君", phone: "0945-678-901", address: "高雄市前鎮區中華五路789號", logistics: "超商取貨", amount: 445, items: [{ product: "手工香氛蠟燭", quantity: 1 }] },
  { orderId: "PK20240113005", platform: "Pinkoi", date: "2024-01-13", recipient: "林志豪", phone: "0956-789-012", address: "台北市大安區忠孝東路四段12號", logistics: "宅配", amount: 1560, items: [{ product: "陶瓷手沖咖啡杯", quantity: 2 }] },
  { orderId: "PK20240112006", platform: "Pinkoi", date: "2024-01-12", recipient: "吳建宏", phone: "0978-901-234", address: "台南市東區東門路二段89號", logistics: "宅配", amount: 760, items: [{ product: "植物染圍巾", quantity: 2 }] },
  { orderId: "PK20240112007", platform: "Pinkoi", date: "2024-01-12", recipient: "許雅婷", phone: "0989-012-345", address: "新竹市東區光復路一段101號", logistics: "宅配", amount: 1335, items: [{ product: "手工香氛蠟燭", quantity: 3 }] },
  { orderId: "PK20240111008", platform: "Pinkoi", date: "2024-01-11", recipient: "鄭宗翰", phone: "0910-123-456", address: "台北市松山區南京東路五段250號", logistics: "超商取貨", amount: 320, items: [{ product: "木質桌上收納盒", quantity: 1 }] },
  { orderId: "PK20240110009", platform: "Pinkoi", date: "2024-01-10", recipient: "劉俊成", phone: "0932-345-678", address: "高雄市左營區博愛二路100號", logistics: "超商取貨", amount: 2560, items: [{ product: "皮革筆記本", quantity: 2 }] },
  { orderId: "PK20240109010", platform: "Pinkoi", date: "2024-01-09", recipient: "楊家豪", phone: "0954-567-890", address: "台北市中正區重慶南路一段122號", logistics: "超商取貨", amount: 600, items: [{ product: "純棉手帕禮盒", quantity: 2 }, { product: "陶瓷手沖咖啡杯", quantity: 1 }] },
  // 2024-02
  { orderId: "PK20240205011", platform: "Pinkoi", date: "2024-02-05", recipient: "謝宜蓁", phone: "0911-111-222", address: "台北市內湖區瑞光路358號", logistics: "宅配", amount: 445, items: [{ product: "手工香氛蠟燭", quantity: 1 }] },
  { orderId: "PK20240206012", platform: "Pinkoi", date: "2024-02-06", recipient: "方志偉", phone: "0922-222-333", address: "新北市三重區重新路三段60號", logistics: "宅配", amount: 1560, items: [{ product: "陶瓷手沖咖啡杯", quantity: 2 }] },
  { orderId: "PK20240208013", platform: "Pinkoi", date: "2024-02-08", recipient: "何佳蓉", phone: "0933-333-444", address: "台中市南屯區公益路二段300號", logistics: "超商取貨", amount: 1140, items: [{ product: "植物染圍巾", quantity: 3 }] },
  { orderId: "PK20240215014", platform: "Pinkoi", date: "2024-02-15", recipient: "洪雅琪", phone: "0955-555-666", address: "桃園市桃園區中正路1200號", logistics: "超商取貨", amount: 1280, items: [{ product: "皮革筆記本", quantity: 1 }] },
  { orderId: "PK20240220015", platform: "Pinkoi", date: "2024-02-20", recipient: "蕭建志", phone: "0966-666-777", address: "台北市萬華區西園路二段30號", logistics: "宅配", amount: 890, items: [{ product: "手工香氛蠟燭", quantity: 2 }] },
  { orderId: "PK20240228016", platform: "Pinkoi", date: "2024-02-28", recipient: "魏志成", phone: "0988-888-999", address: "台中市北區學士路100號", logistics: "宅配", amount: 780, items: [{ product: "陶瓷手沖咖啡杯", quantity: 1 }] },
  // 2024-03
  { orderId: "PK20240303017", platform: "Pinkoi", date: "2024-03-03", recipient: "詹淑惠", phone: "0911-999-000", address: "台南市中西區民族路二段200號", logistics: "超商取貨", amount: 760, items: [{ product: "植物染圍巾", quantity: 2 }] },
  { orderId: "PK20240312018", platform: "Pinkoi", date: "2024-03-12", recipient: "傅雅芳", phone: "0933-111-222", address: "台北市士林區中正路400號", logistics: "宅配", amount: 600, items: [{ product: "純棉手帕禮盒", quantity: 4 }] },
  { orderId: "PK20240322019", platform: "Pinkoi", date: "2024-03-22", recipient: "賴美君", phone: "0955-333-444", address: "桃園市龜山區萬壽路一段50號", logistics: "宅配", amount: 960, items: [{ product: "木質桌上收納盒", quantity: 3 }] },
  { orderId: "PK20240330020", platform: "Pinkoi", date: "2024-03-30", recipient: "潘建中", phone: "0966-444-555", address: "台中市西區精誠路300號", logistics: "超商取貨", amount: 1160, items: [{ product: "陶瓷手沖咖啡杯", quantity: 1 }, { product: "手工香氛蠟燭", quantity: 1 }] }
];

var mockCyberbiz = [
  // 2024-01
  { orderId: "#1201", platform: "CYBERBIZ", date: "2024-01-10", recipient: "陳大文", phone: "0900-111-201", address: "台中市太平區育才路446號", logistics: "7-11貨到付款", amount: 890, shipping: 0, bonusUsed: "0點", bonusEarn: "8點", shipDate: "依實際出貨日期為準", shipTime: "不限時", trackingNo: "7-11 交貨便F15362391767", items: [{ product: "手工香氛蠟燭", quantity: 2, sku: "AY-CANDLE-01", unitPrice: 445, subtotal: 890 }] },
  { orderId: "#1202", platform: "CYBERBIZ", date: "2024-01-11", recipient: "林小美", phone: "0900-111-202", address: "台北市大同區重慶北路二段50號", logistics: "宅配", amount: 1840, shipping: 0, bonusUsed: "0點", bonusEarn: "18點", shipDate: "依實際出貨日期為準", shipTime: "不限時", trackingNo: "", items: [{ product: "陶瓷手沖咖啡杯", quantity: 1, sku: "AY-CUP-02", unitPrice: 780, subtotal: 780 }, { product: "皮革筆記本", quantity: 1, sku: "AY-NB-03", unitPrice: 1060, subtotal: 1060 }] },
  { orderId: "#1203", platform: "CYBERBIZ", date: "2024-01-15", recipient: "黃志明", phone: "0900-111-203", address: "新北市新莊區中正路100號", logistics: "全家取貨不付款", amount: 380, shipping: 60, bonusUsed: "0點", bonusEarn: "3點", shipDate: "依實際出貨日期為準", shipTime: "不限時", trackingNo: "", items: [{ product: "植物染圍巾", quantity: 1, sku: "AY-SCARF-04", unitPrice: 320, subtotal: 320 }] },
  { orderId: "#1204", platform: "CYBERBIZ", date: "2024-01-20", recipient: "吳雅琪", phone: "0900-111-204", address: "桃園市中壢區環中東路200號", logistics: "順豐物流配送", amount: 320, items: [{ product: "木質桌上收納盒", quantity: 1 }] },
  { orderId: "#1205", platform: "CYBERBIZ", date: "2024-01-25", recipient: "張家豪", phone: "0900-111-205", address: "台南市永康區中華路400號", logistics: "7-11取貨不付款", amount: 450, items: [{ product: "純棉手帕禮盒", quantity: 3 }] },
  // 2024-02
  { orderId: "#1210", platform: "CYBERBIZ", date: "2024-02-04", recipient: "李承恩", phone: "0900-111-210", address: "台北市內湖區成功路四段60號", logistics: "宅配", amount: 890, items: [{ product: "手工香氛蠟燭", quantity: 2 }] },
  { orderId: "#1211", platform: "CYBERBIZ", date: "2024-02-09", recipient: "王詩涵", phone: "0900-111-211", address: "新北市板橋區民生路一段70號", logistics: "7-11貨到付款", amount: 1060, items: [{ product: "純棉手帕禮盒", quantity: 2 }, { product: "陶瓷手沖咖啡杯", quantity: 1 }] },
  { orderId: "#1212", platform: "CYBERBIZ", date: "2024-02-14", recipient: "劉建宏", phone: "0900-111-212", address: "台中市北屯區崇德路二段80號", logistics: "宅配", amount: 1280, items: [{ product: "皮革筆記本", quantity: 1 }] },
  { orderId: "#1213", platform: "CYBERBIZ", date: "2024-02-20", recipient: "蔡欣怡", phone: "0900-111-213", address: "桃園市桃園區復興路90號", logistics: "全家取貨不付款", amount: 760, items: [{ product: "植物染圍巾", quantity: 2 }] },
  { orderId: "#1214", platform: "CYBERBIZ", date: "2024-02-27", recipient: "許文彬", phone: "0900-111-214", address: "台南市東區林森路二段100號", logistics: "順豐物流配送", amount: 780, items: [{ product: "陶瓷手沖咖啡杯", quantity: 1 }] },
  // 2024-03
  { orderId: "#1220", platform: "CYBERBIZ", date: "2024-03-05", recipient: "鄭伊婷", phone: "0900-111-220", address: "台北市文山區木柵路一段110號", logistics: "宅配", amount: 640, items: [{ product: "木質桌上收納盒", quantity: 2 }] },
  { orderId: "#1221", platform: "CYBERBIZ", date: "2024-03-11", recipient: "楊宗翰", phone: "0900-111-221", address: "新北市三重區三和路三段120號", logistics: "全家取貨不付款", amount: 1335, items: [{ product: "手工香氛蠟燭", quantity: 3 }] },
  { orderId: "#1222", platform: "CYBERBIZ", date: "2024-03-16", recipient: "周佩君", phone: "0900-111-222", address: "台中市南區復興路一段130號", logistics: "7-11貨到付款", amount: 1060, items: [{ product: "皮革筆記本", quantity: 1 }, { product: "純棉手帕禮盒", quantity: 1 }] },
  { orderId: "#1223", platform: "CYBERBIZ", date: "2024-03-21", recipient: "何冠廷", phone: "0900-111-223", address: "桃園市龜山區文化一路140號", logistics: "宅配", amount: 380, items: [{ product: "植物染圍巾", quantity: 1 }] },
  { orderId: "#1224", platform: "CYBERBIZ", date: "2024-03-27", recipient: "賴思穎", phone: "0900-111-224", address: "台南市中西區府前路一段150號", logistics: "順豐物流配送", amount: 780, items: [{ product: "陶瓷手沖咖啡杯", quantity: 1 }] }
];

// Shopee 範例資料（僅供銷售分析展示；蝦皮不透過本系統出貨）
// 金額以「買家總支付金額」為準；物流為蝦皮店到店/宅配
var mockShopee = [
  // 2024-01
  { orderId: "2401SP0001", platform: "Shopee", date: "2024-01-08", recipient: "周雅雯", phone: "0911-201-001", address: "台北市中山區南京東路二段10號", logistics: "蝦皮店到店-7-11", amount: 780, items: [{ product: "手工香氛蠟燭", quantity: 1 }] },
  { orderId: "2401SP0002", platform: "Shopee", date: "2024-01-13", recipient: "郭立群", phone: "0911-201-002", address: "新北市中和區中正路200號", logistics: "宅配", amount: 1560, items: [{ product: "陶瓷手沖咖啡杯", quantity: 2 }] },
  { orderId: "2401SP0003", platform: "Shopee", date: "2024-01-19", recipient: "簡孟樺", phone: "0911-201-003", address: "台中市西屯區market路30號", logistics: "蝦皮店到店-全家", amount: 445, items: [{ product: "手工香氛蠟燭", quantity: 1 }] },
  { orderId: "2401SP0004", platform: "Shopee", date: "2024-01-26", recipient: "田佳蓉", phone: "0911-201-004", address: "高雄市苓雅區成功一路50號", logistics: "蝦皮店到店-7-11", amount: 960, items: [{ product: "木質桌上收納盒", quantity: 3 }] },
  // 2024-02
  { orderId: "2402SP0005", platform: "Shopee", date: "2024-02-05", recipient: "史念慈", phone: "0911-201-005", address: "台北市大安區復興南路一段80號", logistics: "宅配", amount: 1280, items: [{ product: "皮革筆記本", quantity: 1 }] },
  { orderId: "2402SP0006", platform: "Shopee", date: "2024-02-12", recipient: "邱柏翰", phone: "0911-201-006", address: "桃園市中壢區中華路二段90號", logistics: "蝦皮店到店-7-11", amount: 890, items: [{ product: "手工香氛蠟燭", quantity: 2 }] },
  { orderId: "2402SP0007", platform: "Shopee", date: "2024-02-18", recipient: "周雅雯", phone: "0911-201-001", address: "台北市中山區南京東路二段10號", logistics: "蝦皮店到店-7-11", amount: 1140, items: [{ product: "植物染圍巾", quantity: 3 }] },
  { orderId: "2402SP0008", platform: "Shopee", date: "2024-02-25", recipient: "翁瑋辰", phone: "0911-201-008", address: "台南市北區成功路120號", logistics: "蝦皮店到店-全家", amount: 600, items: [{ product: "純棉手帕禮盒", quantity: 3 }] },
  // 2024-03
  { orderId: "2403SP0009", platform: "Shopee", date: "2024-03-06", recipient: "范姜宇", phone: "0911-201-009", address: "新竹市東區光復路二段60號", logistics: "宅配", amount: 1560, items: [{ product: "陶瓷手沖咖啡杯", quantity: 2 }] },
  { orderId: "2403SP0010", platform: "Shopee", date: "2024-03-14", recipient: "邱柏翰", phone: "0911-201-006", address: "桃園市中壢區中華路二段90號", logistics: "蝦皮店到店-7-11", amount: 445, items: [{ product: "手工香氛蠟燭", quantity: 1 }] },
  { orderId: "2403SP0011", platform: "Shopee", date: "2024-03-22", recipient: "湯士賢", phone: "0911-201-011", address: "台中市北區三民路三段140號", logistics: "蝦皮店到店-萊爾富", amount: 1160, items: [{ product: "陶瓷手沖咖啡杯", quantity: 1 }, { product: "手工香氛蠟燭", quantity: 1 }] },
  { orderId: "2403SP0012", platform: "Shopee", date: "2024-03-28", recipient: "田佳蓉", phone: "0911-201-004", address: "高雄市苓雅區成功一路50號", logistics: "宅配", amount: 780, items: [{ product: "植物染圍巾", quantity: 2 }] }
];

// ===== HTML 跳脫（防 XSS） =====
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ===== 訂單工具函式 =====
// 一筆訂單的總數量（items 加總）
function orderQty(o) {
  return o.items.reduce(function(sum, it) { return sum + it.quantity; }, 0);
}
// 一筆訂單的商品明細文字
function orderItemsText(o) {
  return o.items.map(function(it) { return it.product + ' × ' + it.quantity; }).join('、');
}

// ===== Tab 切換 =====
document.querySelectorAll('.tab-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.tab-btn').forEach(function(b) { b.classList.remove('active'); });
    document.querySelectorAll('.tab-content').forEach(function(c) { c.classList.remove('active'); });
    btn.classList.add('active');
    var tab = btn.dataset.tab;
    document.getElementById('tab-' + tab).classList.add('active');

    // 切換到儀表板時重新渲染，讓「訂單匯入」的確認/修正即時連動
    if (tab === 'dashboard' && typeof renderDashboard === 'function') {
      renderDashboard();
    }
    // 切換到出貨列印時清空舊單據，避免列印到未更新異常狀態的內容
    if (tab === 'print' && typeof resetDocArea === 'function') {
      resetDocArea();
    }
  });
});

// ===== 目前載入的清洗訂單 =====
var currentOrders = [];

// ===== 檔案上傳 =====
var uploadArea = document.getElementById('upload-area');
var fileInput = document.getElementById('file-input');
var uploadError = document.getElementById('upload-error');

var importStatus = document.getElementById('import-status');
var btnUpload = document.getElementById('btn-upload');

// 點「上傳訂單檔案」按鈕或點拖曳區，皆開啟檔案選取
btnUpload.addEventListener('click', function() { fileInput.click(); });
uploadArea.addEventListener('click', function() { fileInput.click(); });

// 拖曳：需在 dragenter 與 dragover 都 preventDefault，瀏覽器才允許 drop
uploadArea.addEventListener('dragenter', function(e) {
  e.preventDefault();
  e.stopPropagation();
  uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragover', function(e) {
  e.preventDefault();
  e.stopPropagation();
  uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', function(e) {
  e.preventDefault();
  e.stopPropagation();
  uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', function(e) {
  e.preventDefault();
  e.stopPropagation();
  uploadArea.classList.remove('dragover');
  if (e.dataTransfer && e.dataTransfer.files.length > 0) handleFiles(e.dataTransfer.files);
});

// 防止瀏覽器在整頁其他位置放開檔案時直接開啟檔案
window.addEventListener('dragover', function(e) { e.preventDefault(); });
window.addEventListener('drop', function(e) { e.preventDefault(); });

fileInput.addEventListener('change', function() {
  if (fileInput.files.length > 0) handleFiles(fileInput.files);
  fileInput.value = '';  // 清空以便重複選取同一檔案
});

// 讀取多個檔案（支援 .csv 與 .xlsx，全部完成後合併）
function handleFiles(fileList) {
  uploadError.hidden = true;
  var files = Array.prototype.slice.call(fileList);
  var supported = files.filter(function(f) {
    var n = f.name.toLowerCase();
    return n.endsWith('.csv') || n.endsWith('.xlsx');
  });

  if (supported.length === 0) {
    uploadError.textContent = '錯誤：請選擇 CSV 或 Excel（.xlsx）格式的檔案';
    uploadError.hidden = false;
    return;
  }
  if (supported.length < files.length) {
    uploadError.textContent = '提醒：已略過不支援的檔案，僅處理 ' + supported.length + ' 個檔案。';
    uploadError.hidden = false;
  }

  // 每個檔案回傳一個 Promise<rows>
  var tasks = supported.map(function(file) {
    var isXlsx = file.name.toLowerCase().endsWith('.xlsx');
    return readFileRows(file, isXlsx).then(function(rows) {
      return { name: file.name, rows: rows };
    }).catch(function(err) {
      return { name: file.name, rows: [], error: err };
    });
  });

  Promise.all(tasks).then(function(results) {
    var mergedOrders = [];
    var fileNames = [];
    var failed = [];
    results.forEach(function(r) {
      if (r.rows && r.rows.length >= 2) {
        mergedOrders = mergedOrders.concat(cleanOrders(r.rows));
        fileNames.push(r.name);
      } else {
        failed.push(r.name);
      }
    });
    if (failed.length > 0) {
      uploadError.textContent = '以下檔案無法解析或無資料：' + failed.join('、');
      uploadError.hidden = false;
    }
    finishImport(mergedOrders, fileNames);
  });
}

// 依副檔名讀取檔案並回傳 rows 陣列的 Promise
function readFileRows(file, isXlsx) {
  return new Promise(function(resolve, reject) {
    var reader = new FileReader();
    reader.onerror = function() { reject(new Error('讀取失敗')); };
    reader.onload = function(e) {
      if (isXlsx) {
        parseXlsx(e.target.result).then(resolve).catch(reject);
      } else {
        var text = decodeBuffer(e.target.result);
        resolve(parseCSV(text));
      }
    };
    reader.readAsArrayBuffer(file);
  });
}

// 依 BOM 自動偵測編碼並解碼為文字（支援 UTF-16 LE/BE、UTF-8）
function decodeBuffer(buffer) {
  var bytes = new Uint8Array(buffer);
  var encoding = 'utf-8';
  if (bytes.length >= 2 && bytes[0] === 0xFF && bytes[1] === 0xFE) {
    encoding = 'utf-16le';
  } else if (bytes.length >= 2 && bytes[0] === 0xFE && bytes[1] === 0xFF) {
    encoding = 'utf-16be';
  }
  try {
    return new TextDecoder(encoding).decode(bytes);
  } catch (err) {
    // 少數環境不支援某編碼時，退回 UTF-8
    return new TextDecoder('utf-8').decode(bytes);
  }
}

// 全部檔案讀完後，統一以表格呈現預覽與清洗結果
function finishImport(orders, fileNames) {
  if (orders.length === 0) {
    uploadError.textContent = '錯誤：檔案無有效訂單資料';
    uploadError.hidden = false;
    importStatus.hidden = true;
    return;
  }
  currentOrders = orders;
  ensureOrderUids(currentOrders);  // 指派穩定 _uid 供跨分頁異常判定
  reviewStatus = {};  // 新資料匯入，清空舊的確認狀態
  currentPage = 1;    // 回到第一頁
  // 狀態列：顯示檔案數與訂單數
  importStatus.hidden = false;
  importStatus.textContent = '已載入 ' + fileNames.length + ' 個檔案，共 ' + orders.length +
    ' 筆訂單' + (orders.length > 5 ? '（預覽顯示前 5 筆）' : '') + '。';
  // 原始預覽（表格，顯示前 5 筆清洗後訂單）
  renderPreviewFromOrders(orders.slice(0, 5));
  // 清洗結果（全部）
  renderCleanedTable(orders);
  // 儀表板改用剛上傳的訂單重新渲染
  renderDashboard();
}

// 偵測分隔符：比較第一行的 Tab 與逗號數量，多者為分隔符（Pinkoi 匯出常為 Tab 分隔）
function detectDelimiter(text) {
  var firstLine = text.split('\n')[0] || '';
  var tabCount = (firstLine.match(/\t/g) || []).length;
  var commaCount = (firstLine.match(/,/g) || []).length;
  return tabCount > commaCount ? '\t' : ',';
}

// 標準 CSV/TSV 解析：自動偵測分隔符，支援雙引號包裹、欄位內分隔符、跳脫雙引號 ("")、CRLF
function parseCSV(text) {
  // 移除 BOM
  if (text.charCodeAt(0) === 0xFEFF) text = text.slice(1);
  var delimiter = detectDelimiter(text);
  var rows = [];
  var row = [];
  var field = '';
  var inQuotes = false;

  for (var i = 0; i < text.length; i++) {
    var ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }  // 跳脫的雙引號
        else { inQuotes = false; }                        // 結束引號
      } else {
        field += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === delimiter) {
        row.push(field); field = '';
      } else if (ch === '\n') {
        row.push(field); field = '';
        rows.push(row); row = [];
      } else if (ch === '\r') {
        // 忽略，交由 \n 處理換行
      } else {
        field += ch;
      }
    }
  }
  // 收尾最後一個欄位/列
  if (field !== '' || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  // 移除全空的列
  return rows.filter(function(r) {
    return r.some(function(c) { return String(c).trim() !== ''; });
  }).map(function(r) {
    return r.map(function(c) { return String(c).trim(); });
  });
}

// ===== XLSX 解析（不使用外部套件，靠瀏覽器內建 DecompressionStream 解 ZIP） =====

// 解析 xlsx（ArrayBuffer）→ 回傳 rows 陣列的 Promise
function parseXlsx(arrayBuffer) {
  var bytes = new Uint8Array(arrayBuffer);
  var entries = readZipEntries(bytes);

  // 需要的檔案：工作表與（若有）sharedStrings
  var sheetEntry = entries['xl/worksheets/sheet1.xml'];
  var sharedEntry = entries['xl/sharedStrings.xml'];
  if (!sheetEntry) {
    return Promise.reject(new Error('找不到工作表 sheet1.xml'));
  }

  var jobs = [inflateEntry(sheetEntry)];
  if (sharedEntry) jobs.push(inflateEntry(sharedEntry));

  return Promise.all(jobs).then(function(texts) {
    var sheetXml = texts[0];
    var sharedStrings = texts[1] ? parseSharedStrings(texts[1]) : [];
    return parseSheetXml(sheetXml, sharedStrings);
  });
}

// 讀取 ZIP 的中央目錄（比 local header 可靠，能正確取得壓縮大小；
// 部分匯出工具使用 data descriptor 導致 local header 的大小為 0）
function readZipEntries(bytes) {
  var view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  var decoder = new TextDecoder('utf-8');
  var entries = {};

  // 1. 從檔尾往前找 End of Central Directory (EOCD) 簽名 0x06054b50
  var eocd = -1;
  for (var p = bytes.length - 22; p >= 0; p--) {
    if (view.getUint32(p, true) === 0x06054b50) { eocd = p; break; }
  }
  if (eocd < 0) return entries;

  var cdOffset = view.getUint32(eocd + 16, true);  // 中央目錄起始位移
  var cdCount = view.getUint16(eocd + 10, true);   // 條目數

  var pos = cdOffset;
  for (var n = 0; n < cdCount; n++) {
    if (view.getUint32(pos, true) !== 0x02014b50) break;  // central directory header 簽名
    var method = view.getUint16(pos + 10, true);
    var compSize = view.getUint32(pos + 20, true);
    var nameLen = view.getUint16(pos + 28, true);
    var extraLen = view.getUint16(pos + 30, true);
    var commentLen = view.getUint16(pos + 32, true);
    var localOffset = view.getUint32(pos + 42, true);
    var name = decoder.decode(bytes.subarray(pos + 46, pos + 46 + nameLen));

    // 2. 從 local file header 算出實際資料起點（名稱/extra 長度以 local header 為準）
    if (view.getUint32(localOffset, true) === 0x04034b50) {
      var lNameLen = view.getUint16(localOffset + 26, true);
      var lExtraLen = view.getUint16(localOffset + 28, true);
      var dataStart = localOffset + 30 + lNameLen + lExtraLen;
      var compData = bytes.subarray(dataStart, dataStart + compSize);
      entries[name] = { method: method, data: compData };
    }

    pos += 46 + nameLen + extraLen + commentLen;
  }
  return entries;
}

// 解壓單一 ZIP 條目 → 回傳文字的 Promise（method 0=未壓縮, 8=deflate）
function inflateEntry(entry) {
  if (entry.method === 0) {
    return Promise.resolve(new TextDecoder('utf-8').decode(entry.data));
  }
  // method 8 = deflate（ZIP 內為 raw deflate）
  if (typeof DecompressionStream === 'undefined') {
    return Promise.reject(new Error('瀏覽器不支援解壓 xlsx，請改用 CSV'));
  }
  var ds = new DecompressionStream('deflate-raw');
  var blob = new Blob([entry.data]);
  var stream = blob.stream().pipeThrough(ds);
  return new Response(stream).arrayBuffer().then(function(buf) {
    return new TextDecoder('utf-8').decode(new Uint8Array(buf));
  });
}

// 解析 sharedStrings.xml → 字串陣列
function parseSharedStrings(xml) {
  var doc = new DOMParser().parseFromString(xml, 'application/xml');
  var siList = doc.getElementsByTagName('si');
  var result = [];
  for (var i = 0; i < siList.length; i++) {
    // 一個 <si> 可能含多個 <t>（rich text），全部串接
    var tList = siList[i].getElementsByTagName('t');
    var s = '';
    for (var j = 0; j < tList.length; j++) { s += tList[j].textContent; }
    result.push(s);
  }
  return result;
}

// 解析 sheet1.xml → rows 陣列（依欄位字母排序，缺格補空）
function parseSheetXml(xml, sharedStrings) {
  var doc = new DOMParser().parseFromString(xml, 'application/xml');
  var rowList = doc.getElementsByTagName('row');
  var rows = [];

  for (var r = 0; r < rowList.length; r++) {
    var cellList = rowList[r].getElementsByTagName('c');
    var cellMap = {};
    var maxCol = 0;

    for (var c = 0; c < cellList.length; c++) {
      var cell = cellList[c];
      var ref = cell.getAttribute('r') || '';
      var colIdx = colRefToIndex(ref);
      var type = cell.getAttribute('t');
      var value = '';

      if (type === 'inlineStr') {
        var isEl = cell.getElementsByTagName('t');
        for (var k = 0; k < isEl.length; k++) { value += isEl[k].textContent; }
      } else if (type === 's') {
        // shared string：<v> 是索引
        var vs = cell.getElementsByTagName('v')[0];
        var idx = vs ? parseInt(vs.textContent, 10) : -1;
        value = (idx >= 0 && idx < sharedStrings.length) ? sharedStrings[idx] : '';
      } else {
        var v = cell.getElementsByTagName('v')[0];
        value = v ? v.textContent : '';
      }

      cellMap[colIdx] = value;
      if (colIdx > maxCol) maxCol = colIdx;
    }

    var rowArr = [];
    for (var col = 0; col <= maxCol; col++) {
      rowArr.push(cellMap[col] !== undefined ? String(cellMap[col]).trim() : '');
    }
    rows.push(rowArr);
  }

  // 移除全空列
  return rows.filter(function(rw) {
    return rw.some(function(cc) { return cc !== ''; });
  });
}

// 儲存格參照（如 "AB12"）→ 欄索引（0-based）
function colRefToIndex(ref) {
  var letters = (ref.match(/[A-Z]+/) || [''])[0];
  var idx = 0;
  for (var i = 0; i < letters.length; i++) {
    idx = idx * 26 + (letters.charCodeAt(i) - 64);
  }
  return idx - 1;
}

// ===== 載入範例（Pinkoi + CYBERBIZ + Shopee 合併，供展示用） =====
document.getElementById('btn-example').addEventListener('click', function() {
  loadExample(mockPinkoi.concat(mockCyberbiz).concat(mockShopee));
});

function loadExample(data) {
  uploadError.hidden = true;
  currentOrders = data;
  ensureOrderUids(currentOrders);  // 指派穩定 _uid 供跨分頁異常判定
  reviewStatus = {};  // 載入範例，清空舊的確認狀態
  currentPage = 1;    // 回到第一頁
  importStatus.hidden = false;
  importStatus.textContent = '已載入範例資料，共 ' + data.length + ' 筆訂單' +
    (data.length > 5 ? '（預覽顯示前 5 筆）' : '') + '。';
  renderPreviewFromOrders(data.slice(0, 5));
  renderCleanedTable(data);
  renderDashboard();
}

// ===== 清除資料 =====
document.getElementById('btn-clear').addEventListener('click', function() {
  currentOrders = [];
  reviewStatus = {};  // 清除資料時一併清空確認狀態
  uploadError.hidden = true;
  importStatus.hidden = true;
  // 清空預覽與清洗表格
  document.getElementById('preview-table').querySelector('thead').innerHTML = '';
  document.getElementById('preview-table').querySelector('tbody').innerHTML = '';
  document.getElementById('cleaned-table').querySelector('tbody').innerHTML = '';
  // 清空異常彙總條
  var summaryEl = document.getElementById('issue-summary');
  if (summaryEl) { summaryEl.className = 'issue-summary'; summaryEl.textContent = ''; }
  // 清空單據顯示區並停用列印按鈕
  document.getElementById('doc-area').innerHTML = '<p class="doc-empty">請選擇單據類型並點「產生」。</p>';
  document.getElementById('btn-print-doc').disabled = true;
  // 儀表板回到內建模擬資料
  renderDashboard();
});

// ===== 匯出清洗結果為 CSV =====
document.getElementById('btn-export').addEventListener('click', function() {
  if (currentOrders.length === 0) {
    uploadError.textContent = '尚無資料可匯出，請先上傳訂單或載入範例。';
    uploadError.hidden = false;
    return;
  }
  var csv = ordersToCsv(currentOrders);
  // 加上 UTF-8 BOM，讓 Excel 開啟時中文不亂碼
  var blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  var url = URL.createObjectURL(blob);
  var a = document.createElement('a');
  a.href = url;
  a.download = '清洗結果_' + new Date().toISOString().slice(0, 10) + '.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

// 將統一訂單轉為 CSV 文字（每筆訂單一列，商品明細合併）
function ordersToCsv(orders) {
  var headers = ['訂單編號', '平台', '日期', '收件人', '電話', '地址', '商品明細', '總數量', '物流方式', '訂單金額'];
  var lines = [headers.map(csvCell).join(',')];
  orders.forEach(function(o) {
    lines.push([
      o.orderId, o.platform, o.date, o.recipient, o.phone, o.address,
      orderItemsText(o), orderQty(o), o.logistics, o.amount
    ].map(csvCell).join(','));
  });
  return lines.join('\r\n');
}

// CSV 儲存格跳脫：含逗號/引號/換行時以雙引號包裹，內部引號加倍
function csvCell(v) {
  var s = String(v == null ? '' : v);
  if (/[",\r\n]/.test(s)) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

// ===== 原始預覽（表格式，統一訂單格式） =====
var PREVIEW_HEADERS = ['訂單編號', '平台', '日期', '收件人', '電話', '地址', '商品明細', '總數量', '物流方式', '訂單金額'];

function renderPreviewFromOrders(orders) {
  var table = document.getElementById('preview-table');
  var thead = table.querySelector('thead');
  var tbody = table.querySelector('tbody');
  thead.innerHTML = '<tr>' + PREVIEW_HEADERS.map(function(h) { return '<th>' + escapeHtml(h) + '</th>'; }).join('') + '</tr>';
  tbody.innerHTML = '';
  orders.forEach(function(o) {
    tbody.innerHTML += '<tr>' +
      '<td>' + escapeHtml(o.orderId) + '</td>' +
      '<td>' + escapeHtml(o.platform) + '</td>' +
      '<td>' + escapeHtml(o.date) + '</td>' +
      '<td>' + escapeHtml(o.recipient) + '</td>' +
      '<td>' + escapeHtml(o.phone) + '</td>' +
      '<td>' + escapeHtml(o.address) + '</td>' +
      '<td>' + escapeHtml(orderItemsText(o)) + '</td>' +
      '<td>' + orderQty(o) + '</td>' +
      '<td>' + escapeHtml(o.logistics) + '</td>' +
      '<td>$' + o.amount.toLocaleString() + '</td>' +
      '</tr>';
  });
}

// ===== 欄位別名對照表（涵蓋 Pinkoi、CYBERBIZ、Shopee 真實匯出欄位名） =====
// 注意：金額類欄位順序即優先序。Shopee 有多個金額欄，需以「買家總支付金額」為營業額，
// 故置於 amount 別名最前面優先比對。
var FIELD_ALIASES = {
  orderId:   ['訂單編號', 'orderid', 'order_id'],
  date:      ['訂單成立日期', '訂購日期', '訂單日期', '時間', '日期', 'date', 'order_date'],
  recipient: ['收件者姓名', '收件人姓名', '收件人名稱', '收件人', 'recipient', 'name'],
  phone:     ['收件者電話', '收件人電話', '聯絡電話', '電話', 'phone', 'tel'],
  address:   ['收件地址', '收件人地址', '地址', 'address'],
  product:   ['商品名稱', '商品名稱 / 規格', '購買品項', '商品', 'product', 'item'],
  style:     ['商品選項名稱', '商品款式', '商品規格', '款式'],
  sku:       ['sku', '主商品貨號', '商品選項貨號', '商品編號', '貨號'],
  quantity:  ['數量', 'quantity', 'qty'],
  logistics: ['運送方式', '出貨方式', '寄送方式', '配送方式', '物流', 'logistics', 'shipping'],
  // 買家總支付金額(Shopee)優先；其次各平台的訂單總額
  amount:    ['買家總支付金額', '訂單總金額', '總額', '總金額', '金額', 'amount', 'total'],
  subtotal:  ['小計', 'subtotal', 'sub_total', 'line_total'],
  unitPrice: ['商品售價', '商品單價', '單價', 'unit_price', 'price'],
  // CYBERBIZ 訂單明細專用欄位
  shipping:  ['運費', 'shipping_fee', 'freight'],
  bonusUsed: ['訂單總紅利換購點數', '總紅利換購點數', '紅利換購點數'],
  bonusEarn: ['可獲得紅利', '預計獲得紅利', '獲得紅利'],
  shipDate:  ['指定配送日期', '配送日期'],
  shipTime:  ['指定配送時段', '配送時段'],
  trackingNo: ['托運單號', '託運單號', 'tracking_no']
};

// 從一列物件中依別名取值。比對策略（由嚴到寬，避免誤抓）：
// 1) 完全相等  2) 欄名以別名開頭（處理 Shopee 含換行說明的超長欄名，如「收件者電話\n\n(...)」）
function pick(obj, key) {
  var aliases = FIELD_ALIASES[key];
  var headers = Object.keys(obj);
  // 先做完全相等比對（優先序即別名順序）
  for (var i = 0; i < aliases.length; i++) {
    var a = aliases[i].toLowerCase();
    if (obj[a] !== undefined && obj[a] !== '') return obj[a];
  }
  // 再做「欄名開頭符合別名」比對，解決含說明文字的超長欄名
  for (var j = 0; j < aliases.length; j++) {
    var alias = aliases[j].toLowerCase();
    for (var h = 0; h < headers.length; h++) {
      var head = headers[h];
      if (head.indexOf(alias) === 0 && obj[head] !== undefined && obj[head] !== '') {
        return obj[head];
      }
    }
  }
  return '';
}

// 依標題列特徵判斷平台；目前僅 Shopee 有明確可辨識的獨有欄位，
// 其他平台回傳 null（交由訂單編號規則判斷 CYBERBIZ/Pinkoi）
function detectPlatformFromHeaders(headers) {
  var set = {};
  headers.forEach(function(h) { set[h] = true; });
  // Shopee 匯出特有欄位（任二命中即判定為 Shopee，避免單一欄位巧合）
  var shopeeHints = ['買家帳號', '買家總支付金額', '蝦幣折抵', '蝦皮補助運費', '蝦皮補貼金額'];
  var hit = 0;
  shopeeHints.forEach(function(k) {
    if (set[k]) hit++;
    else {
      // 欄名可能含前後說明，改用開頭比對
      for (var i = 0; i < headers.length; i++) { if (headers[i].indexOf(k) === 0) { hit++; break; } }
    }
  });
  if (hit >= 2) return 'Shopee';
  return null;
}

// ===== 欄位對照 + 一單多列合併 =====
// 重要：Pinkoi 匯出會將「同一筆訂單的多個品項」拆成多列，且每列都重複收件人、
// 地址、電話等資訊，僅第一列帶有訂單總金額。若以列為單位視為獨立訂單，會產生
// 大量「重複訂單號」與「金額為 0」的假異常。因此以「訂單編號」為 key 合併同一單，
// 後續相同編號的列只把商品併入 items，不重複計入金額。
function cleanOrders(rows) {
  var headers = rows[0].map(function(h) { return String(h).toLowerCase().trim(); });
  var orders = [];
  var orderMap = {};   // orderId -> order 物件，用於合併同一單的品項
  var lastOrder = null;

  // 依標題列特徵判斷整份檔案的來源平台（Shopee 有獨有欄位，最可靠）
  var filePlatform = detectPlatformFromHeaders(headers);

  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];
    if (row.length < 2) continue;
    var obj = {};
    headers.forEach(function(h, idx) { obj[h] = (row[idx] || '').trim(); });

    var orderId = pick(obj, 'orderId');
    var recipient = pick(obj, 'recipient');
    var product = pick(obj, 'product');
    var style = pick(obj, 'style');
    var sku = pick(obj, 'sku');
    var qty = parseInt(pick(obj, 'quantity'), 10) || 1;
    var fullProduct = style ? (product + ' - ' + style) : product;
    var amount = parseInt(pick(obj, 'amount'), 10) || 0;
    var unitPrice = parseFloat(pick(obj, 'unitPrice'));
    if (isNaN(unitPrice)) unitPrice = null;
    // 該列小計（優先取「小計」欄；若無則以單價×數量估算），用於與訂單總金額比對
    var lineSubtotal = parseFloat(pick(obj, 'subtotal'));
    if (isNaN(lineSubtotal)) {
      lineSubtotal = (unitPrice != null) ? unitPrice * qty : 0;
    }

    // 品項物件：product 為顯示字串（相容既有功能）；另存 sku/unitPrice/subtotal 供 CYBERBIZ 訂單明細用
    function makeItem() {
      return { product: fullProduct, quantity: qty, sku: sku || '', unitPrice: unitPrice, subtotal: lineSubtotal || null };
    }

    // 決定這一列所屬的訂單：
    // 1) 有訂單編號且已建立過 → 併入既有訂單（同一單的後續品項列）
    // 2) 其餘（含有編號但未建立、以及無編號列）→ 各自建立獨立訂單
    //    無編號列不再靜默併入上一筆，以便被標記為「缺少訂單編號」異常
    var existing = orderId ? orderMap[orderId] : null;

    if (existing) {
      // 同一訂單的後續品項列：加商品、累加小計；若主列缺金額而此列有，補上
      if (fullProduct) existing.items.push(makeItem());
      existing.subtotalSum += lineSubtotal;
      if (!(existing.amount > 0) && amount > 0) existing.amount = amount;
      lastOrder = existing;
      continue;
    }

    // 建立新訂單。平台判定：檔案為 Shopee 則全部標記 Shopee；
    // 否則以訂單編號 # 前綴判斷（有 #→CYBERBIZ、無→Pinkoi）
    var platform = filePlatform ||
      (String(orderId).indexOf('#') === 0 ? 'CYBERBIZ' : 'Pinkoi');
    var shippingFee = parseFloat(pick(obj, 'shipping'));
    var order = {
      orderId: orderId,
      platform: platform,
      date: normalizeDate(pick(obj, 'date')),
      recipient: recipient,
      phone: pick(obj, 'phone'),
      address: pick(obj, 'address'),
      logistics: pick(obj, 'logistics'),
      amount: amount,
      subtotalSum: lineSubtotal,   // 明細小計加總，用於與 amount 比對
      items: fullProduct ? [makeItem()] : [],
      // CYBERBIZ 訂單明細欄位（其他平台通常為空，顯示時留白）
      shipping: isNaN(shippingFee) ? null : shippingFee,
      bonusUsed: pick(obj, 'bonusUsed'),
      bonusEarn: pick(obj, 'bonusEarn'),
      shipDate: pick(obj, 'shipDate'),
      shipTime: pick(obj, 'shipTime'),
      trackingNo: pick(obj, 'trackingNo')
    };
    orders.push(order);
    if (orderId) orderMap[orderId] = order;
    lastOrder = order;
  }
  return orders;
}

// 日期正規化：把 "2026/08/01 16:51" 之類轉為 "2026-08-01"
function normalizeDate(d) {
  if (!d) return '';
  var datePart = String(d).split(' ')[0].replace(/\//g, '-');
  return datePart;
}

// ===== 異常偵測 =====
// 為每筆訂單指派穩定的唯一識別（跨分頁共用，不受篩選/排序影響）
var _uidSeq = 0;
function ensureOrderUids(orders) {
  orders.forEach(function(o) {
    if (o._uid == null) o._uid = 'ord_' + (++_uidSeq);
  });
}

// 訂單的確認狀態 key：以穩定 _uid 為準，讓「確認無誤」能跨三個分頁一致生效
function orderKey(o) {
  return o._uid || ('legacy_' + (o.orderId || '無編號'));
}

// 在整份訂單清單層級計算重複的訂單編號集合
function buildDupIds(orders) {
  var idCount = {};
  orders.forEach(function(o) { if (o.orderId) idCount[o.orderId] = (idCount[o.orderId] || 0) + 1; });
  var dupIds = {};
  Object.keys(idCount).forEach(function(id) { if (idCount[id] > 1) dupIds[id] = true; });
  return dupIds;
}

// 判斷單筆訂單「目前仍需警示」的異常（排除已確認無誤者）
// dupIds 以「全部訂單」計算，確保重複判定跨分頁一致
function activeIssues(o, dupIds, todayEnd) {
  if (reviewStatus[orderKey(o)] === 'confirmed') return [];
  return detectOrderIssues(o, dupIds, todayEnd);
}

// 將訂單分成「正常/已確認」與「仍有異常」兩組，供出貨列印與儀表板使用
function splitByIssues(orders) {
  var dupIds = buildDupIds(currentOrders && currentOrders.length ? currentOrders : orders);
  var todayEnd = endOfToday();
  var clean = [], flagged = [];
  orders.forEach(function(o) {
    var iss = activeIssues(o, dupIds, todayEnd);
    if (iss.length > 0) { flagged.push({ order: o, issues: iss }); }
    else { clean.push(o); }
  });
  return { clean: clean, flagged: flagged, dupIds: dupIds, todayEnd: todayEnd };
}

// 取得今天 23:59:59 的時間戳，避免「今天成立」的訂單被誤判為未來
function endOfToday() {
  var now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999).getTime();
}

// 偵測單筆訂單的異常，回傳異常陣列 [{type, field, message}]
// dupIds：重複出現的訂單編號集合（在整份清單層級計算後傳入）
function detectOrderIssues(o, dupIds, todayEnd) {
  var issues = [];

  // 1. 訂單日期在未來
  if (o.date) {
    var t = new Date(o.date).getTime();
    if (!isNaN(t) && t > todayEnd) {
      issues.push({ type: 'future-date', field: 'date', message: '訂單日期在未來（' + o.date + '），可能為輸入錯誤' });
    }
  }

  // 2. 訂單金額為 0
  if (!(o.amount > 0)) {
    issues.push({ type: 'zero-amount', field: 'amount', message: '訂單金額為 0，可能缺少金額或對應錯誤' });
  }

  // 3. 重複訂單編號
  if (o.orderId && dupIds[o.orderId]) {
    issues.push({ type: 'duplicate-id', field: 'orderId', message: '訂單編號重複（' + o.orderId + '），可能為重複匯入' });
  }

  // 4. 缺少訂單編號（平台可能誤判為有效訂單）
  if (!o.orderId) {
    issues.push({ type: 'missing-id', field: 'orderId', message: '缺少訂單編號，可能為異常或不完整的訂單' });

    // 5. 僅在「缺少訂單編號」時，額外檢查訂單金額與明細小計是否相符
    //    （正常有編號的訂單，其總金額本就含運費/折扣，與小計不同屬正常，不檢查）
    if (o.amount > 0 && o.subtotalSum > 0 && Math.abs(o.amount - o.subtotalSum) > 1) {
      issues.push({
        type: 'amount-mismatch',
        field: 'amount',
        message: '訂單金額（' + o.amount + '）與明細小計加總（' +
          Math.round(o.subtotalSum) + '）不符，請核對'
      });
    }
  }

  return issues;
}

// 確認狀態儲存：key -> 'confirmed' | 'recheck'（未設定表示尚未處理）
var reviewStatus = {};

// ===== 分頁設定 =====
var PAGE_SIZE = 15;       // 每頁顯示筆數
var currentPage = 1;      // 目前頁碼（1-based）

// ===== 清洗結果表格（一列一筆訂單，含異常警示、分頁顯示） =====
function renderCleanedTable(orders) {
  ensureOrderUids(orders);
  var pf = document.getElementById('platform-filter').value;
  var filtered = pf === 'all' ? orders : orders.filter(function(o) { return o.platform === pf; });

  // 重複訂單編號：以「全部訂單」計算，確保與出貨列印、儀表板判定一致
  var dupIds = buildDupIds(orders);

  var todayEnd = endOfToday();

  // 第一階段：以「全部篩選後訂單」統計異常數量（不受分頁影響）
  var counts = { 'future-date': 0, 'zero-amount': 0, 'duplicate-id': 0, 'missing-id': 0, 'amount-mismatch': 0 };
  var pendingIssueOrders = 0;
  filtered.forEach(function(o) {
    if (reviewStatus[orderKey(o)] === 'confirmed') return;
    var iss = detectOrderIssues(o, dupIds, todayEnd);
    if (iss.length > 0) {
      pendingIssueOrders++;
      iss.forEach(function(x) { counts[x.type]++; });
    }
  });

  // 分頁計算：確保 currentPage 落在有效範圍
  var totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;
  var startIdx = (currentPage - 1) * PAGE_SIZE;
  var pageOrders = filtered.slice(startIdx, startIdx + PAGE_SIZE);

  var tbody = document.getElementById('cleaned-table').querySelector('tbody');
  tbody.innerHTML = '';

  // 第二階段：只渲染目前頁的訂單列
  pageOrders.forEach(function(o) {
    var key = orderKey(o);
    var issues = detectOrderIssues(o, dupIds, todayEnd);
    var status = reviewStatus[key] || (issues.length > 0 ? 'pending' : '');
    var confirmed = status === 'confirmed';

    // 彙總計數：只計尚未確認無誤的異常
    if (issues.length > 0 && !confirmed) {
      pendingIssueOrders++;
      issues.forEach(function(iss) { counts[iss.type]++; });
    }

    // 該筆各欄位的異常對照，方便標色與 tooltip
    var fieldIssue = {};
    issues.forEach(function(iss) { fieldIssue[iss.field] = iss; });

    // 列的 class：有異常且未確認 → issue-row；已確認 → confirmed-row
    var rowClass = '';
    if (issues.length > 0) {
      rowClass = confirmed ? 'confirmed-row' : 'issue-row';
    }

    // 儲存格輔助：套用異常標色與 ⚠ 圖示
    function cell(field, inner) {
      var iss = fieldIssue[field];
      if (iss && !confirmed) {
        return '<td class="cell-issue" title="' + escapeHtml(iss.message) + '">⚠ ' + inner + '</td>';
      }
      return '<td>' + inner + '</td>';
    }

    // 日期與金額為可就地編輯欄位（僅在該欄為異常且未確認時提供輸入框）
    var dateCell;
    if (fieldIssue.date && !confirmed) {
      dateCell = '<td class="cell-issue" title="' + escapeHtml(fieldIssue.date.message) + '">⚠ ' +
        '<input type="date" class="edit-input" data-key="' + escapeHtml(key) + '" data-field="date" value="' + escapeHtml(o.date) + '"></td>';
    } else {
      dateCell = '<td>' + escapeHtml(o.date) + '</td>';
    }

    var amountCell;
    if (fieldIssue.amount && !confirmed) {
      amountCell = '<td class="cell-issue" title="' + escapeHtml(fieldIssue.amount.message) + '">⚠ $' +
        '<input type="number" min="0" class="edit-input edit-amount" data-key="' + escapeHtml(key) + '" data-field="amount" value="' + o.amount + '"></td>';
    } else {
      amountCell = '<td>$' + o.amount.toLocaleString() + '</td>';
    }

    // 處理狀態欄（C）：有異常才顯示按鈕
    var actionCell;
    if (issues.length === 0) {
      actionCell = '<td class="review-cell"><span class="review-ok">正常</span></td>';
    } else if (confirmed) {
      actionCell = '<td class="review-cell"><span class="review-badge confirmed">已確認</span>' +
        '<button class="review-btn review-reset" data-key="' + escapeHtml(key) + '" data-action="reset">還原</button></td>';
    } else {
      var recheckActive = status === 'recheck' ? ' active' : '';
      actionCell = '<td class="review-cell">' +
        '<button class="review-btn review-confirm" data-key="' + escapeHtml(key) + '" data-action="confirm">確認無誤</button>' +
        '<button class="review-btn review-recheck' + recheckActive + '" data-key="' + escapeHtml(key) + '" data-action="recheck">需檢查</button>' +
        '</td>';
    }

    var idInner = escapeHtml(o.orderId);
    var tr = '<tr class="' + rowClass + '">' +
      cell('orderId', idInner) +
      '<td>' + escapeHtml(o.platform) + '</td>' +
      dateCell +
      '<td>' + escapeHtml(o.recipient) + '</td>' +
      '<td>' + escapeHtml(o.phone) + '</td>' +
      '<td>' + escapeHtml(o.address) + '</td>' +
      '<td>' + escapeHtml(orderItemsText(o)) + '</td>' +
      '<td>' + orderQty(o) + '</td>' +
      '<td>' + escapeHtml(o.logistics) + '</td>' +
      amountCell +
      actionCell +
      '</tr>';
    tbody.innerHTML += tr;
  });

  renderIssueSummary(counts, pendingIssueOrders);
  renderPagination(filtered.length, totalPages, startIdx, pageOrders.length, orders);
  bindReviewActions(orders);
}

// ===== 分頁控制列 =====
function renderPagination(totalCount, totalPages, startIdx, pageCount, orders) {
  var el = document.getElementById('cleaned-pagination');
  if (!el) return;

  if (totalCount === 0) {
    el.innerHTML = '';
    return;
  }

  var from = startIdx + 1;
  var to = startIdx + pageCount;
  var info = '第 ' + from + '–' + to + ' 筆，共 ' + totalCount + ' 筆（第 ' +
    currentPage + ' / ' + totalPages + ' 頁）';

  var prevDisabled = currentPage <= 1 ? ' disabled' : '';
  var nextDisabled = currentPage >= totalPages ? ' disabled' : '';

  // 產生頁碼清單（滑動視窗）：永遠含第 1 與最後頁，目前頁前後各 2 頁，
  // 中間跳號處以省略號 '…' 連接，避免頁數過多時按鈕爆量。
  var pageItems = buildPageItems(currentPage, totalPages);
  var numberBtns = pageItems.map(function(p) {
    if (p === '...') {
      return '<span class="page-ellipsis" aria-hidden="true">…</span>';
    }
    var activeCls = p === currentPage ? ' active' : '';
    var current = p === currentPage ? ' aria-current="page"' : '';
    return '<button class="page-btn page-num' + activeCls + '" data-page="' + p +
      '"' + current + ' aria-label="第 ' + p + ' 頁">' + p + '</button>';
  }).join('');

  el.innerHTML =
    '<span class="page-info">' + info + '</span>' +
    '<div class="page-btns">' +
      '<button class="page-btn" data-page="first"' + prevDisabled + ' aria-label="第一頁">« 第一頁</button>' +
      '<button class="page-btn" data-page="prev"' + prevDisabled + ' aria-label="上一頁">‹ 上一頁</button>' +
      numberBtns +
      '<button class="page-btn" data-page="next"' + nextDisabled + ' aria-label="下一頁">下一頁 ›</button>' +
      '<button class="page-btn" data-page="last"' + nextDisabled + ' aria-label="最後一頁">最後一頁 »</button>' +
    '</div>';

  el.querySelectorAll('.page-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (btn.disabled) return;
      var action = btn.dataset.page;
      if (action === 'first') currentPage = 1;
      else if (action === 'prev') currentPage = Math.max(1, currentPage - 1);
      else if (action === 'next') currentPage = Math.min(totalPages, currentPage + 1);
      else if (action === 'last') currentPage = totalPages;
      else {
        // 直接點選頁碼
        var target = parseInt(action, 10);
        if (!isNaN(target)) currentPage = Math.min(totalPages, Math.max(1, target));
      }
      renderCleanedTable(orders);
      // 換頁後將表格捲回頂端，方便從頭檢查
      var wrap = document.querySelector('#tab-import .table-wrapper');
      if (wrap) wrap.scrollTop = 0;
    });
  });
}

// 產生分頁頁碼清單：回傳含數字與 '...' 的陣列（滑動視窗，目前頁前後各 2 頁）
function buildPageItems(current, total) {
  var items = [];
  var windowSize = 2;                 // 目前頁前後各顯示的頁數
  var left = Math.max(2, current - windowSize);
  var right = Math.min(total - 1, current + windowSize);

  items.push(1);                      // 永遠顯示第 1 頁
  if (left > 2) items.push('...');    // 第 1 頁與視窗之間有跳號
  for (var p = left; p <= right; p++) items.push(p);
  if (right < total - 1) items.push('...');  // 視窗與最後頁之間有跳號
  if (total > 1) items.push(total);   // 永遠顯示最後一頁（total>1 時）

  return items;
}

// ===== 頂部彙總警示條（B） =====
function renderIssueSummary(counts, pendingIssueOrders) {
  var el = document.getElementById('issue-summary');
  if (!el) return;

  if (pendingIssueOrders === 0) {
    el.className = 'issue-summary ok';
    el.textContent = '✓ 未發現異常，或所有異常皆已確認無誤。';
    return;
  }

  var parts = [];
  if (counts['future-date'] > 0) parts.push('未來日期 ' + counts['future-date'] + ' 筆');
  if (counts['zero-amount'] > 0) parts.push('金額為 0 ' + counts['zero-amount'] + ' 筆');
  if (counts['duplicate-id'] > 0) parts.push('重複訂單號 ' + counts['duplicate-id'] + ' 筆');
  if (counts['missing-id'] > 0) parts.push('缺少訂單編號 ' + counts['missing-id'] + ' 筆');
  if (counts['amount-mismatch'] > 0) parts.push('金額與小計不符 ' + counts['amount-mismatch'] + ' 筆');

  el.className = 'issue-summary warn';
  el.textContent = '⚠ 發現 ' + pendingIssueOrders + ' 筆訂單有異常（' + parts.join('、') +
    '）。請逐筆確認：確認無誤或直接修正日期／金額。';
}

// ===== 逐筆確認與就地編輯事件（C） =====
function bindReviewActions(orders) {
  var tbody = document.getElementById('cleaned-table').querySelector('tbody');

  // 確認 / 需檢查 / 還原按鈕
  tbody.querySelectorAll('.review-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var key = btn.dataset.key;
      var action = btn.dataset.action;
      if (action === 'confirm') reviewStatus[key] = 'confirmed';
      else if (action === 'recheck') reviewStatus[key] = 'recheck';
      else if (action === 'reset') delete reviewStatus[key];
      renderCleanedTable(orders);
    });
  });

  // 就地編輯：修改回寫到 currentOrders 對應訂單
  tbody.querySelectorAll('.edit-input').forEach(function(input) {
    input.addEventListener('change', function() {
      var key = input.dataset.key;
      var field = input.dataset.field;
      applyEdit(orders, key, field, input.value);
      renderCleanedTable(orders);
    });
  });
}

// 依 orderKey 找到訂單並套用編輯（在 orders 原陣列上更新，確保匯出/儀表板同步）
function applyEdit(orders, key, field, value) {
  for (var i = 0; i < orders.length; i++) {
    if (orderKey(orders[i]) === key) {
      var target = orders[i];
      if (field === 'date') {
        target.date = normalizeDate(value);
      } else if (field === 'amount') {
        target.amount = parseInt(value, 10) || 0;
      }
      // 編輯後清除該筆的確認狀態，讓系統重新判定是否仍有異常
      delete reviewStatus[key];
      break;
    }
  }
}

// ===== 平台篩選（清洗結果） =====
document.getElementById('platform-filter').addEventListener('change', function() {
  currentPage = 1;  // 切換平台後回到第一頁
  if (currentOrders.length > 0) renderCleanedTable(currentOrders);
});

// ===== 出貨列印：以下拉選單切換單據類型、平台與出貨方式，共用單一顯示區 =====
var docTypeSelect = document.getElementById('doc-type');
var docPlatformSelect = document.getElementById('doc-platform');
var docShippingSelect = document.getElementById('doc-shipping');
var docArea = document.getElementById('doc-area');
var btnGenerate = document.getElementById('btn-generate');
var btnPrintDoc = document.getElementById('btn-print-doc');

var DOC_PAGE_SIZE = 10;   // 出貨單每頁筆數
var docPage = 1;          // 出貨單目前頁碼

// 依出貨方式文字判斷分類：seven/family/hilife/ok/home/sf/other
// logistics 為自由文字（如「7-11貨到付款」「全家取貨不付款」「順豐物流配送」「宅配」）
function shippingCategory(logistics) {
  var s = String(logistics || '').toLowerCase();
  if (s.indexOf('7-11') !== -1 || s.indexOf('711') !== -1 || s.indexOf('7‑11') !== -1 ||
      s.indexOf('統一') !== -1 || s.indexOf('ibon') !== -1 || s.indexOf('交貨便') !== -1) return 'seven';
  if (s.indexOf('全家') !== -1 || s.indexOf('family') !== -1) return 'family';
  if (s.indexOf('萊爾富') !== -1 || s.indexOf('hi-life') !== -1 || s.indexOf('hilife') !== -1) return 'hilife';
  if (s.indexOf('ok') !== -1 || s.indexOf('okmart') !== -1) return 'ok';
  if (s.indexOf('順豐') !== -1 || s.indexOf('sf') !== -1) return 'sf';
  if (s.indexOf('宅配') !== -1 || s.indexOf('黑貓') !== -1 || s.indexOf('新竹') !== -1 ||
      s.indexOf('郵局') !== -1 || s.indexOf('宅急便') !== -1 || s.indexOf('基本運送') !== -1) return 'home';
  return 'other';
}

// 依所選平台與出貨方式篩選目前訂單
// 出貨列印預設排除 Shopee（蝦皮不透過本系統出貨，僅納入銷售分析）
function filteredDocOrders() {
  var pf = docPlatformSelect.value;
  var ship = docShippingSelect ? docShippingSelect.value : 'all';
  return currentOrders.filter(function(o) {
    if (o.platform === 'Shopee') return false;
    if (pf !== 'all' && o.platform !== pf) return false;
    if (ship !== 'all' && shippingCategory(o.logistics) !== ship) return false;
    return true;
  });
}

// 出貨列印區的異常彙總提示條（含未確認異常時顯示）
function docIssueBanner(flaggedCount) {
  if (flaggedCount === 0) return '';
  return '<div class="doc-issue-banner">⚠ 本次共有 ' + flaggedCount +
    ' 筆訂單存在未確認異常（未來日期／金額為 0／重複訂單號），已於單據上標示。' +
    '建議先至「訂單匯入」確認或修正後再出貨，避免出錯貨或重複出貨。</div>';
}

// 顯示值：空值統一以「—」呈現（供訂單明細留白使用）
function dash(v) {
  return (v === null || v === undefined || String(v).trim() === '') ? '—' : escapeHtml(String(v));
}
// 金額顯示：數字→NT$ 千分位；無值→「—」
function ntd(v) {
  return (v === null || v === undefined || v === '' || isNaN(v)) ? '—' : 'NT$' + Number(v).toLocaleString();
}

// 產生出貨單 HTML（一筆訂單一張；CYBERBIZ 使用「訂單明細」版面，其他平台維持原版）
// skipBanner：分頁模式下由外層統一顯示彙總提示，這裡不再重複輸出
function buildShippingHtml(orders, skipBanner) {
  var split = splitByIssues(orders);
  var issueMap = {};
  split.flagged.forEach(function(f) { issueMap[orderKey(f.order)] = f.issues; });

  var html = skipBanner ? '' : docIssueBanner(split.flagged.length);

  orders.forEach(function(o) {
    var issues = issueMap[orderKey(o)] || [];
    if (o.platform === 'CYBERBIZ') {
      html += buildCyberbizLabel(o, issues);
    } else {
      html += buildDefaultLabel(o, issues);
    }
  });
  return html;
}

// 一般平台（Pinkoi 等）出貨單版面（維持原本樣式）
function buildDefaultLabel(o, issues) {
  var hasIssue = issues.length > 0;
  var fieldIssue = {};
  issues.forEach(function(iss) { fieldIssue[iss.field] = iss; });

  var itemRows = o.items.map(function(it) {
    return '<li>' + escapeHtml(it.product) + ' × ' + it.quantity + '</li>';
  }).join('');

  function line(label, field, value) {
    var mark = fieldIssue[field] ? '<span class="doc-warn-tag">⚠</span> ' : '';
    return '<p><strong>' + label + '：</strong>' + mark + escapeHtml(value) + '</p>';
  }

  var issueNotice = '';
  if (hasIssue) {
    var msgs = issues.map(function(iss) { return escapeHtml(iss.message); }).join('；');
    issueNotice = '<p class="label-issue-notice">⚠ 異常提醒：' + msgs + '</p>';
  }

  return '<div class="shipping-label' + (hasIssue ? ' label-issue' : '') + '">' +
    '<h4>出貨單</h4>' +
    issueNotice +
    line('訂單編號', 'orderId', o.orderId) +
    '<p><strong>平台：</strong>' + escapeHtml(o.platform) + '</p>' +
    line('訂單日期', 'date', o.date) +
    '<p><strong>收件人：</strong>' + escapeHtml(o.recipient) + '</p>' +
    '<p><strong>電話：</strong>' + escapeHtml(o.phone) + '</p>' +
    '<p><strong>地址：</strong>' + escapeHtml(o.address) + '</p>' +
    '<p><strong>商品明細：</strong></p><ul>' + itemRows + '</ul>' +
    '<p><strong>物流方式：</strong>' + escapeHtml(o.logistics) + '</p>' +
    '</div>';
}

// CYBERBIZ「訂單明細」版面（含商品明細表格、金額、紅利點數、配送資訊）
function buildCyberbizLabel(o, issues) {
  var hasIssue = issues.length > 0;
  var fieldIssue = {};
  issues.forEach(function(iss) { fieldIssue[iss.field] = iss; });
  function mark(field) { return fieldIssue[field] ? '<span class="doc-warn-tag">⚠</span> ' : ''; }

  var issueNotice = '';
  if (hasIssue) {
    var msgs = issues.map(function(iss) { return escapeHtml(iss.message); }).join('；');
    issueNotice = '<p class="label-issue-notice">⚠ 異常提醒：' + msgs + '</p>';
  }

  // 商品明細表格
  var totalQty = 0;
  var itemRows = o.items.map(function(it) {
    totalQty += it.quantity;
    return '<tr>' +
      '<td>' + escapeHtml(it.product) + '</td>' +
      '<td>' + dash(it.sku) + '</td>' +
      '<td class="num">' + ntd(it.unitPrice) + '</td>' +
      '<td class="num">' + it.quantity + '</td>' +
      '<td class="num">' + ntd(it.subtotal) + '</td>' +
      '</tr>';
  }).join('');

  var itemsTable =
    '<table class="od-items"><thead><tr>' +
      '<th>商品名稱 / 規格</th><th>SKU</th><th class="num">單價</th><th class="num">數量</th><th class="num">小計</th>' +
    '</tr></thead><tbody>' + itemRows + '</tbody></table>';

  // 金額摘要（小計以品項小計加總；缺值以總額回推）
  var subtotal = o.subtotalSum > 0 ? o.subtotalSum : null;
  var amountCell = mark('amount') + ntd(o.amount);

  var summary =
    '<table class="od-summary">' +
      '<tr><td class="lbl">小計</td><td class="num">' + ntd(subtotal) + '</td></tr>' +
      '<tr><td class="lbl">運費</td><td class="num">' + ntd(o.shipping) + '</td></tr>' +
      '<tr><td class="lbl">訂單總金額（共 ' + totalQty + ' 件）</td><td class="num">' + amountCell + '</td></tr>' +
      '<tr><td class="lbl">總紅利換購點數</td><td class="num">' + dash(o.bonusUsed) + '</td></tr>' +
      '<tr><td class="lbl">預計獲得紅利</td><td class="num">' + dash(o.bonusEarn) + '</td></tr>' +
    '</table>';

  // 配送資訊表格
  var shipping =
    '<h5>配送資訊</h5>' +
    '<table class="od-ship">' +
      '<tr><td class="lbl">收件人</td><td>' + dash(o.recipient) + '</td></tr>' +
      '<tr><td class="lbl">聯絡電話</td><td>' + dash(o.phone) + '</td></tr>' +
      '<tr><td class="lbl">收件地址</td><td>' + dash(o.address) + '</td></tr>' +
      '<tr><td class="lbl">配送方式</td><td>' + dash(o.logistics) + '</td></tr>' +
      '<tr><td class="lbl">指定配送日期</td><td>' + dash(o.shipDate) + '</td></tr>' +
      '<tr><td class="lbl">指定配送時段</td><td>' + dash(o.shipTime) + '</td></tr>' +
      '<tr><td class="lbl">託運單號</td><td>' + dash(o.trackingNo) + '</td></tr>' +
    '</table>';

  return '<div class="shipping-label order-detail' + (hasIssue ? ' label-issue' : '') + '">' +
    '<h4>訂單明細</h4>' +
    issueNotice +
    '<p class="od-meta"><strong>訂單編號：</strong>' + mark('orderId') + escapeHtml(o.orderId || '—') + '</p>' +
    '<p class="od-meta"><strong>訂單日期：</strong>' + mark('date') + escapeHtml(o.date || '—') + '</p>' +
    '<h5>商品明細</h5>' + itemsTable +
    summary +
    shipping +
    '</div>';
}

// 產生揀貨單 HTML（依商品彙總；含異常訂單的商品加註記）
function buildPickingHtml(orders) {
  var split = splitByIssues(orders);
  var flaggedIds = {};
  split.flagged.forEach(function(f) { if (f.order.orderId) flaggedIds[f.order.orderId] = true; });

  var groups = {};
  orders.forEach(function(o) {
    o.items.forEach(function(it) {
      if (!groups[it.product]) groups[it.product] = { qty: 0, orders: [], hasIssue: false };
      groups[it.product].qty += it.quantity;
      if (groups[it.product].orders.indexOf(o.orderId) === -1) {
        groups[it.product].orders.push(o.orderId);
      }
      if (flaggedIds[o.orderId]) groups[it.product].hasIssue = true;
    });
  });

  var html = docIssueBanner(split.flagged.length);
  html += '<div class="picking-list"><h4>揀貨單</h4><table>' +
    '<thead><tr><th>商品名稱</th><th>總需求數量</th><th>對應訂單</th></tr></thead><tbody>';
  Object.keys(groups).forEach(function(product) {
    var g = groups[product];
    // 對應訂單中屬於異常者，於編號前加 ⚠
    var orderCells = g.orders.map(function(id) {
      return (flaggedIds[id] ? '⚠ ' : '') + escapeHtml(id);
    }).join(', ');
    html += '<tr' + (g.hasIssue ? ' class="picking-issue"' : '') + '>' +
      '<td>' + escapeHtml(product) + '</td>' +
      '<td>' + g.qty + '</td>' +
      '<td>' + orderCells + '</td></tr>';
  });
  html += '</tbody></table></div>';
  return html;
}

// 清空顯示區並停用列印（切換類型或平台時使用）
function resetDocArea() {
  docArea.innerHTML = '<p class="doc-empty">已變更選項，請點「產生」。</p>';
  btnPrintDoc.disabled = true;
}

// 渲染出貨列印顯示區（出貨單分頁每頁 10 筆；揀貨單為彙總視圖不分頁）
function renderDocArea() {
  if (currentOrders.length === 0) {
    docArea.innerHTML = '<p class="doc-empty">請先於「訂單匯入」載入訂單資料。</p>';
    btnPrintDoc.disabled = true;
    return;
  }
  var orders = filteredDocOrders();
  if (orders.length === 0) {
    docArea.innerHTML = '<p class="doc-empty">所選平台無訂單資料。</p>';
    btnPrintDoc.disabled = true;
    return;
  }

  var type = docTypeSelect.value;
  if (type === 'picking') {
    // 揀貨單：依商品彙總，維持單一視圖不分頁
    docArea.innerHTML = buildPickingHtml(orders);
  } else {
    // 出貨單：一筆一張，依 10 筆分頁
    var totalPages = Math.max(1, Math.ceil(orders.length / DOC_PAGE_SIZE));
    if (docPage > totalPages) docPage = totalPages;
    if (docPage < 1) docPage = 1;
    var startIdx = (docPage - 1) * DOC_PAGE_SIZE;
    var pageOrders = orders.slice(startIdx, startIdx + DOC_PAGE_SIZE);

    // 彙總提示以「全部訂單」計算，讓使用者知道整批的異常筆數
    var splitAll = splitByIssues(orders);
    var pageHtml = docIssueBanner(splitAll.flagged.length) + buildShippingHtml(pageOrders, true);
    docArea.innerHTML = docPaginationBar(orders.length, totalPages, startIdx, pageOrders.length) +
      pageHtml +
      docPaginationBar(orders.length, totalPages, startIdx, pageOrders.length);
    bindDocPagination(orders.length);
  }
  btnPrintDoc.disabled = false;  // 產生後才可列印
}

// 出貨單分頁控制列
function docPaginationBar(totalCount, totalPages, startIdx, pageCount) {
  var from = startIdx + 1;
  var to = startIdx + pageCount;
  var info = '第 ' + from + '–' + to + ' 筆，共 ' + totalCount + ' 筆（第 ' +
    docPage + ' / ' + totalPages + ' 頁）';
  var prevDisabled = docPage <= 1 ? ' disabled' : '';
  var nextDisabled = docPage >= totalPages ? ' disabled' : '';

  var pageItems = buildPageItems(docPage, totalPages);
  var numberBtns = pageItems.map(function(p) {
    if (p === '...') return '<span class="page-ellipsis" aria-hidden="true">…</span>';
    var activeCls = p === docPage ? ' active' : '';
    var current = p === docPage ? ' aria-current="page"' : '';
    return '<button class="page-btn page-num doc-page-btn' + activeCls + '" data-doc-page="' + p +
      '"' + current + ' aria-label="第 ' + p + ' 頁">' + p + '</button>';
  }).join('');

  return '<nav class="pagination doc-pagination" aria-label="出貨單分頁">' +
    '<span class="page-info">' + info + '</span>' +
    '<div class="page-btns">' +
      '<button class="page-btn doc-page-btn" data-doc-page="first"' + prevDisabled + ' aria-label="第一頁">« 第一頁</button>' +
      '<button class="page-btn doc-page-btn" data-doc-page="prev"' + prevDisabled + ' aria-label="上一頁">‹ 上一頁</button>' +
      numberBtns +
      '<button class="page-btn doc-page-btn" data-doc-page="next"' + nextDisabled + ' aria-label="下一頁">下一頁 ›</button>' +
      '<button class="page-btn doc-page-btn" data-doc-page="last"' + nextDisabled + ' aria-label="最後一頁">最後一頁 »</button>' +
    '</div></nav>';
}

// 綁定出貨單分頁按鈕事件
function bindDocPagination(totalCount) {
  var totalPages = Math.max(1, Math.ceil(totalCount / DOC_PAGE_SIZE));
  docArea.querySelectorAll('.doc-page-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (btn.disabled) return;
      var action = btn.dataset.docPage;
      if (action === 'first') docPage = 1;
      else if (action === 'prev') docPage = Math.max(1, docPage - 1);
      else if (action === 'next') docPage = Math.min(totalPages, docPage + 1);
      else if (action === 'last') docPage = totalPages;
      else {
        var target = parseInt(action, 10);
        if (!isNaN(target)) docPage = Math.min(totalPages, Math.max(1, target));
      }
      renderDocArea();
      var wrap = document.getElementById('doc-area');
      if (wrap) wrap.scrollTop = 0;
    });
  });
}

// 產生：依所選單據類型與平台渲染到共用顯示區（每次產生從第 1 頁開始）
btnGenerate.addEventListener('click', function() {
  docPage = 1;
  renderDocArea();
});

// 切換單據類型時清空顯示區，避免列印到舊單據
docTypeSelect.addEventListener('change', function() {
  docPage = 1;
  resetDocArea();
  // 產生按鈕顏色隨類型變化（出貨單藍、揀貨單琥珀）
  btnGenerate.className = 'doc-btn ' + (docTypeSelect.value === 'picking' ? 'doc-btn-picking' : 'doc-btn-shipping');
});

// 切換平台時同樣清空顯示區
docPlatformSelect.addEventListener('change', function() {
  docPage = 1;
  resetDocArea();
});

// 切換出貨方式時同樣清空顯示區
if (docShippingSelect) {
  docShippingSelect.addEventListener('change', function() {
    docPage = 1;
    resetDocArea();
  });
}

// 列印目前顯示的單據
btnPrintDoc.addEventListener('click', function() {
  window.print();
});

// ===== 營收與訂單合併圖（長條=營收，折線=訂單數） =====
// items: [{label, revenue, orders}]
function drawComboChart(svgId, items) {
  var svg = document.getElementById(svgId);
  var barWidth = 34;
  var gap = 30;
  var startX = 46;
  var baseY = 190;
  var chartHeight = 150;
  var svgWidth = startX + items.length * (barWidth + gap) + 20;
  var svgHeight = 240;
  var maxRev = Math.max.apply(null, items.map(function(it) { return it.revenue; })) || 1;
  var maxOrd = Math.max.apply(null, items.map(function(it) { return it.orders; })) || 1;

  var content = '';
  var linePoints = [];

  items.forEach(function(it, i) {
    var x = startX + i * (barWidth + gap);
    // 營收長條
    var h = (it.revenue / maxRev) * chartHeight;
    content += '<rect x="' + x + '" y="' + (baseY - h) + '" width="' + barWidth + '" height="' + h + '" fill="#2e9e6b" rx="2"/>';
    content += '<text x="' + (x + barWidth / 2) + '" y="' + (baseY - h - 5) + '" text-anchor="middle" font-size="9">$' + it.revenue.toLocaleString() + '</text>';
    // X 軸標籤
    content += '<text x="' + (x + barWidth / 2) + '" y="' + (baseY + 16) + '" text-anchor="middle" font-size="10">' + escapeHtml(it.label) + '</text>';
    // 折線節點座標（以訂單數對應高度）
    var cx = x + barWidth / 2;
    var cy = baseY - (it.orders / maxOrd) * chartHeight;
    linePoints.push({ x: cx, y: cy, orders: it.orders });
  });

  // 折線
  if (linePoints.length > 1) {
    var path = linePoints.map(function(p, i) { return (i === 0 ? 'M' : 'L') + p.x + ' ' + p.y; }).join(' ');
    content += '<path d="' + path + '" fill="none" stroke="#e0662b" stroke-width="2"/>';
  }
  // 節點與訂單數標籤
  linePoints.forEach(function(p) {
    content += '<circle cx="' + p.x + '" cy="' + p.y + '" r="3.5" fill="#e0662b"/>';
    content += '<text x="' + p.x + '" y="' + (p.y - 8) + '" text-anchor="middle" font-size="9" fill="#e0662b">' + p.orders + '</text>';
  });

  svg.innerHTML = content;
  svg.setAttribute('viewBox', '0 0 ' + svgWidth + ' ' + svgHeight);
}

// ===== 時間範圍篩選 =====
// 儀表板資料來源：只反映實際載入的訂單，未載入時為空（不再 fallback 範例資料）
function dashboardSource() {
  var src = currentOrders || [];
  ensureOrderUids(src);  // 確保來源資料皆有穩定 _uid
  return src;
}

function getLatestDate(orders) {
  var src = orders || dashboardSource();
  return src.map(function(o) { return o.date; }).sort().slice(-1)[0];
}

function filterByRange(orders, range) {
  if (range === 'all' || range === 'day' || range === 'month') return orders;
  if (orders.length === 0) return orders;
  var latest = getLatestDate(orders);
  var latestTime = new Date(latest).getTime();
  var days = range === '7d' ? 7 : 30;
  var startTime = latestTime - (days - 1) * 24 * 60 * 60 * 1000;
  return orders.filter(function(o) {
    return new Date(o.date).getTime() >= startTime;
  });
}

// 依所選範圍分組，產出合併圖資料（營收 + 訂單數）
function buildComboItems(orders, range) {
  var groups = {};
  var groupByMonth = (range === 'month');
  orders.forEach(function(o) {
    var key = groupByMonth ? o.date.slice(0, 7) : o.date;
    if (!groups[key]) groups[key] = { revenue: 0, orders: 0 };
    groups[key].revenue += o.amount;
    groups[key].orders += 1;
  });
  return Object.keys(groups).sort().map(function(k) {
    return { label: groupByMonth ? k : k.slice(5), revenue: groups[k].revenue, orders: groups[k].orders };
  });
}

function rangeTitle(range) {
  switch (range) {
    case '7d': return '營收與訂單趨勢（過去 7 天）';
    case '30d': return '營收與訂單趨勢（過去 30 天）';
    case 'day': return '營收與訂單趨勢（按日）';
    case 'month': return '營收與訂單趨勢（按月）';
    default: return '營收與訂單趨勢（全部）';
  }
}

// 儀表板異常提示：說明有幾筆異常訂單被排除在統計之外
function renderDashboardIssueNotice(flagged) {
  var el = document.getElementById('dash-issue-notice');
  if (!el) return;

  if (!flagged || flagged.length === 0) {
    el.className = 'issue-summary';
    el.textContent = '';
    return;
  }

  // 依類型統計被排除的異常
  var counts = { 'future-date': 0, 'zero-amount': 0, 'duplicate-id': 0, 'missing-id': 0, 'amount-mismatch': 0 };
  flagged.forEach(function(f) {
    f.issues.forEach(function(iss) { if (counts[iss.type] != null) counts[iss.type]++; });
  });
  var parts = [];
  if (counts['future-date'] > 0) parts.push('未來日期 ' + counts['future-date'] + ' 筆');
  if (counts['zero-amount'] > 0) parts.push('金額為 0 ' + counts['zero-amount'] + ' 筆');
  if (counts['duplicate-id'] > 0) parts.push('重複訂單號 ' + counts['duplicate-id'] + ' 筆');
  if (counts['missing-id'] > 0) parts.push('缺少訂單編號 ' + counts['missing-id'] + ' 筆');
  if (counts['amount-mismatch'] > 0) parts.push('金額與小計不符 ' + counts['amount-mismatch'] + ' 筆');

  el.className = 'issue-summary warn';
  el.textContent = '⚠ 已排除 ' + flagged.length + ' 筆未確認異常訂單，不列入下方統計（' +
    parts.join('、') + '）。請至「訂單匯入」確認無誤或修正後，統計才會納入這些訂單。';
}

// ===== 新客／回購客分析 =====
// 客戶識別 key：電話＋姓名組合（皆正規化去除空白與符號差異）；兩者皆空則不計入
function customerKey(o) {
  var phone = (o.phone || '').replace(/[\s\-()]/g, '').toLowerCase();
  var name = (o.recipient || '').replace(/\s/g, '').toLowerCase();
  if (!phone && !name) return '';
  return phone + '|' + name;
}

// 計算每位客戶的「最早購買日期」（以完整歷史為基準）
function buildFirstOrderMap(historyOrders) {
  var firstDate = {};
  historyOrders.forEach(function(o) {
    var key = customerKey(o);
    if (!key || !o.date) return;
    if (!firstDate[key] || o.date < firstDate[key]) firstDate[key] = o.date;
  });
  return firstDate;
}

// 渲染 A（新客/回購客卡片與佔比橫條）與 B（回購率趨勢折線）
// historyClean：完整歷史（判定首購用）；orders：所選期間的訂單（呈現用）
function renderCustomerAnalysis(historyClean, orders) {
  var firstDateMap = buildFirstOrderMap(historyClean);

  // --- A：以「所選期間出現的客戶」分類新客/回購客（一位客戶只計一次） ---
  var seen = {};          // 期間內已計算過的客戶
  var newCount = 0, repeatCount = 0;
  orders.forEach(function(o) {
    var key = customerKey(o);
    if (!key || seen[key]) return;
    seen[key] = true;
    // 該客戶的首購日若早於本筆訂單日期 → 回購客；否則為期間內新客
    var first = firstDateMap[key];
    if (first && o.date && first < o.date) repeatCount++;
    else newCount++;
  });
  var totalCust = newCount + repeatCount;
  var repeatRatio = totalCust > 0 ? Math.round(repeatCount / totalCust * 100) : 0;

  document.getElementById('new-customers').textContent = newCount;
  document.getElementById('repeat-customers').textContent = repeatCount;
  document.getElementById('repeat-ratio').textContent = repeatRatio + '%';

  var bar = document.getElementById('customer-ratio-bar');
  if (bar) {
    if (totalCust === 0) {
      bar.innerHTML = '<span class="ratio-empty">尚無足夠客戶資料</span>';
    } else {
      var newPct = Math.round(newCount / totalCust * 100);
      var repeatPct = 100 - newPct;
      bar.innerHTML =
        '<div class="ratio-seg seg-new" style="width:' + newPct + '%" title="新客 ' + newCount + ' 人">' +
          (newPct >= 12 ? newPct + '%' : '') + '</div>' +
        '<div class="ratio-seg seg-repeat" style="width:' + repeatPct + '%" title="回購客 ' + repeatCount + ' 人">' +
          (repeatPct >= 12 ? repeatPct + '%' : '') + '</div>';
    }
  }

  // --- B：回購率趨勢（按月）---
  // 當月回購率 = 當月「首購日早於本月」的客戶數 ÷ 當月活躍客戶數
  var monthly = {};   // 'YYYY-MM' -> { active:{}, repeat:{} }
  orders.forEach(function(o) {
    var key = customerKey(o);
    if (!key || !o.date) return;
    var month = o.date.slice(0, 7);
    if (!monthly[month]) monthly[month] = { active: {}, repeat: {} };
    monthly[month].active[key] = true;
    var first = firstDateMap[key];
    // 首購月早於當月 → 該月的回購客
    if (first && first.slice(0, 7) < month) monthly[month].repeat[key] = true;
  });
  var trendItems = Object.keys(monthly).sort().map(function(m) {
    var activeN = Object.keys(monthly[m].active).length;
    var repeatN = Object.keys(monthly[m].repeat).length;
    return { label: m, rate: activeN > 0 ? Math.round(repeatN / activeN * 100) : 0 };
  }).slice(-12);
  drawRepeatTrend('repeat-trend-svg', trendItems);
}

// 繪製回購率趨勢折線圖（百分比，0–100）
function drawRepeatTrend(svgId, items) {
  var svg = document.getElementById(svgId);
  if (!svg) return;

  if (items.length === 0) {
    svg.innerHTML = '<text x="10" y="30" font-size="12" fill="#999">尚無資料</text>';
    svg.setAttribute('viewBox', '0 0 300 60');
    return;
  }

  var gap = 70, startX = 46, baseY = 170, chartHeight = 140;
  var svgWidth = startX + items.length * gap + 20;
  var svgHeight = 210;

  var content = '';
  // Y 軸基準線（0% 與 100%）
  content += '<line x1="' + startX + '" y1="' + baseY + '" x2="' + (svgWidth - 10) + '" y2="' + baseY + '" stroke="#e0e0e0"/>';
  content += '<line x1="' + startX + '" y1="' + (baseY - chartHeight) + '" x2="' + (svgWidth - 10) + '" y2="' + (baseY - chartHeight) + '" stroke="#f0f0f0"/>';
  content += '<text x="' + (startX - 8) + '" y="' + (baseY + 4) + '" text-anchor="end" font-size="9" fill="#999">0%</text>';
  content += '<text x="' + (startX - 8) + '" y="' + (baseY - chartHeight + 4) + '" text-anchor="end" font-size="9" fill="#999">100%</text>';

  var points = items.map(function(it, i) {
    return {
      x: startX + i * gap + 10,
      y: baseY - (it.rate / 100) * chartHeight,
      rate: it.rate,
      label: it.label
    };
  });

  if (points.length > 1) {
    var path = points.map(function(p, i) { return (i === 0 ? 'M' : 'L') + p.x + ' ' + p.y; }).join(' ');
    content += '<path d="' + path + '" fill="none" stroke="#7b5cd6" stroke-width="2"/>';
  }
  points.forEach(function(p) {
    content += '<circle cx="' + p.x + '" cy="' + p.y + '" r="3.5" fill="#7b5cd6"/>';
    content += '<text x="' + p.x + '" y="' + (p.y - 8) + '" text-anchor="middle" font-size="9" fill="#7b5cd6">' + p.rate + '%</text>';
    content += '<text x="' + p.x + '" y="' + (baseY + 16) + '" text-anchor="middle" font-size="10">' + escapeHtml(p.label) + '</text>';
  });

  svg.innerHTML = content;
  svg.setAttribute('viewBox', '0 0 ' + svgWidth + ' ' + svgHeight);
}

// ===== 儀表板（依篩選條件重新渲染） =====
function renderDashboard() {
  var range = document.getElementById('range-filter').value;
  var platform = document.getElementById('dash-platform-filter').value;

  var source = dashboardSource();
  var byPlatform = platform === 'all' ? source : source.filter(function(o) { return o.platform === platform; });
  var allInRange = filterByRange(byPlatform, range);

  // 異常連動：排除仍未確認的異常訂單，避免污染營收/客單價/趨勢統計
  var split = splitByIssues(allInRange);
  var orders = split.clean;                 // 統計僅採用「正常或已確認」的訂單
  var excludedCount = split.flagged.length; // 被排除的異常訂單數
  renderDashboardIssueNotice(split.flagged);

  // 摘要（營收以訂單層級 amount 加總，一筆只計一次）
  var totalOrders = orders.length;
  var totalRevenue = orders.reduce(function(sum, o) { return sum + o.amount; }, 0);
  var avgPrice = totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0;

  document.getElementById('total-orders').textContent = totalOrders;
  document.getElementById('total-revenue').textContent = '$' + totalRevenue.toLocaleString();
  document.getElementById('avg-price').textContent = '$' + avgPrice.toLocaleString();

  // 合併圖（營收長條 + 訂單數折線）
  document.getElementById('revenue-chart-title').textContent = rangeTitle(range);
  var comboItems = buildComboItems(orders, range).slice(-12);
  drawComboChart('revenue-svg', comboItems);

  // 新客／回購客分析（A）與回購率趨勢（B）
  // 以「平台篩選後、未經時間範圍過濾」的乾淨訂單為完整歷史基準，
  // 才能正確判斷某客戶在所選期間是否為第一次購買（新客）。
  var historyClean = splitByIssues(byPlatform).clean;
  renderCustomerAnalysis(historyClean, orders);

  // 熱銷 TOP 5（展開 items 計數量；營收以該商品 items 佔訂單金額比例估算不精確，改用數量排序並顯示訂單數）
  var productSales = {};
  orders.forEach(function(o) {
    o.items.forEach(function(it) {
      if (!productSales[it.product]) productSales[it.product] = { qty: 0, orderCount: 0 };
      productSales[it.product].qty += it.quantity;
      productSales[it.product].orderCount += 1;
    });
  });
  var sortedByQty = Object.keys(productSales).map(function(p) {
    return { name: p, qty: productSales[p].qty, orderCount: productSales[p].orderCount };
  }).sort(function(a, b) { return b.qty - a.qty; }).slice(0, 5);

  var tbody = document.getElementById('top5-table').querySelector('tbody');
  tbody.innerHTML = '';
  sortedByQty.forEach(function(item, i) {
    tbody.innerHTML += '<tr><td>' + (i + 1) + '</td><td>' + escapeHtml(item.name) + '</td><td>' + item.qty + '</td><td>' + item.orderCount + ' 筆</td></tr>';
  });

  // 產品別營收比較：以「含該商品的訂單金額加總」呈現（同一訂單多商品時各商品皆計入該訂單金額，僅供相對比較）
  var productRevenue = {};
  orders.forEach(function(o) {
    o.items.forEach(function(it) {
      productRevenue[it.product] = (productRevenue[it.product] || 0) + o.amount / o.items.length;
    });
  });
  var productRevenueSorted = Object.keys(productRevenue).map(function(p) {
    return { name: p, revenue: Math.round(productRevenue[p]) };
  }).sort(function(a, b) { return b.revenue - a.revenue; });

  var maxRev = Math.max.apply(null, productRevenueSorted.map(function(it) { return it.revenue; })) || 1;
  var chartHtml = '';
  productRevenueSorted.forEach(function(it) {
    var percent = Math.round(it.revenue / maxRev * 100);
    chartHtml += '<div class="bar-row">' +
      '<span class="bar-label bar-label-wide">' + escapeHtml(it.name) + '</span>' +
      '<div class="bar-track"><div class="bar-fill pinkoi" style="width:' + percent + '%"></div></div>' +
      '<span class="bar-percent">$' + it.revenue.toLocaleString() + '</span></div>';
  });
  document.getElementById('product-revenue-chart').innerHTML = chartHtml;

  // 更新同步狀態
  updateSyncStatus(source);
}

// 更新儀表板同步狀態列
function updateSyncStatus(source) {
  var el = document.getElementById('sync-status');
  if (!el) return;
  var isUploaded = (currentOrders && currentOrders.length > 0);
  var time = new Date().toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  if (isUploaded) {
    el.className = 'sync-status synced';
    el.textContent = '✓ 已與訂單同步：共 ' + source.length + ' 筆訂單（' + time + '）';
  } else {
    el.className = 'sync-status demo';
    el.textContent = '尚無訂單資料。請至「訂單匯入」上傳或載入範例，再回此頁查看銷售分析。';
  }
}

// 篩選變更即重新渲染
document.getElementById('range-filter').addEventListener('change', renderDashboard);
document.getElementById('dash-platform-filter').addEventListener('change', renderDashboard);

// 「與訂單同步」按鈕：以目前已載入的訂單重新渲染儀表板
document.getElementById('btn-sync').addEventListener('click', renderDashboard);

// 頁面載入後初始化儀表板
renderDashboard();

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
  { orderId: "#1201", platform: "CYBERBIZ", date: "2024-01-10", recipient: "陳大文", phone: "0900-111-201", address: "台中市太平區育才路446號", logistics: "7-11貨到付款", amount: 1012, items: [{ product: "栗米光采修護精華 30mL", quantity: 1 }] },
  { orderId: "#1202", platform: "CYBERBIZ", date: "2024-01-11", recipient: "林小美", phone: "0900-111-202", address: "台北市大同區重慶北路二段50號", logistics: "宅配", amount: 2586, items: [{ product: "極光透亮二合一洗卸蜜 150mL", quantity: 1 }, { product: "栗米光采修護精華 30mL", quantity: 1 }] },
  { orderId: "#1203", platform: "CYBERBIZ", date: "2024-01-15", recipient: "黃志明", phone: "0900-111-203", address: "新北市新莊區中正路100號", logistics: "全家取貨不付款", amount: 650, items: [{ product: "紅葡萄藻海洋舒緩凍膜 100ml", quantity: 1 }] },
  { orderId: "#1204", platform: "CYBERBIZ", date: "2024-01-20", recipient: "吳雅琪", phone: "0900-111-204", address: "桃園市中壢區環中東路200號", logistics: "順豐物流配送", amount: 1898, items: [{ product: "極光飽水潤透輕凝霜 50mL 買一送一", quantity: 1 }] },
  { orderId: "#1205", platform: "CYBERBIZ", date: "2024-01-25", recipient: "張家豪", phone: "0900-111-205", address: "台南市永康區中華路400號", logistics: "7-11取貨不付款", amount: 990, items: [{ product: "面面俱到-山海顏在地植萃面膜綜合組", quantity: 1 }] },
  // 2024-02
  { orderId: "#1210", platform: "CYBERBIZ", date: "2024-02-04", recipient: "李承恩", phone: "0900-111-210", address: "台北市內湖區成功路四段60號", logistics: "宅配", amount: 1993, items: [{ product: "極光透亮二合一洗卸蜜 150mL", quantity: 1 }] },
  { orderId: "#1211", platform: "CYBERBIZ", date: "2024-02-09", recipient: "王詩涵", phone: "0900-111-211", address: "新北市板橋區民生路一段70號", logistics: "7-11貨到付款", amount: 1550, items: [{ product: "紅葡萄藻海洋舒緩凍膜 旅行瓶 30ml 買一送一", quantity: 1 }, { product: "栗米光采修護精華 30mL", quantity: 1 }] },
  { orderId: "#1212", platform: "CYBERBIZ", date: "2024-02-14", recipient: "劉建宏", phone: "0900-111-212", address: "台中市北屯區崇德路二段80號", logistics: "宅配", amount: 1898, items: [{ product: "極光飽水潤透輕凝霜 50mL 買一送一", quantity: 1 }] },
  { orderId: "#1213", platform: "CYBERBIZ", date: "2024-02-20", recipient: "蔡欣怡", phone: "0900-111-213", address: "桃園市桃園區復興路90號", logistics: "全家取貨不付款", amount: 599, items: [{ product: "精油香氛禮盒 睡眠噴霧與撥提棒", quantity: 1 }] },
  { orderId: "#1214", platform: "CYBERBIZ", date: "2024-02-27", recipient: "許文彬", phone: "0900-111-214", address: "台南市東區林森路二段100號", logistics: "順豐物流配送", amount: 2024, items: [{ product: "栗米光采修護精華 30mL 買一送一", quantity: 1 }] },
  // 2024-03
  { orderId: "#1220", platform: "CYBERBIZ", date: "2024-03-05", recipient: "鄭伊婷", phone: "0900-111-220", address: "台北市文山區木柵路一段110號", logistics: "宅配", amount: 1200, items: [{ product: "紅葡萄藻海洋舒緩凍膜 100ml 買一送一", quantity: 1 }] },
  { orderId: "#1221", platform: "CYBERBIZ", date: "2024-03-11", recipient: "楊宗翰", phone: "0900-111-221", address: "新北市三重區三和路三段120號", logistics: "全家取貨不付款", amount: 1950, items: [{ product: "極光透亮二合一洗卸蜜 150mL", quantity: 1 }] },
  { orderId: "#1222", platform: "CYBERBIZ", date: "2024-03-16", recipient: "周佩君", phone: "0900-111-222", address: "台中市南區復興路一段130號", logistics: "7-11貨到付款", amount: 1611, items: [{ product: "栗米光采修護精華 30mL", quantity: 1 }, { product: "精油香氛禮盒 睡眠噴霧與撥提棒", quantity: 1 }] },
  { orderId: "#1223", platform: "CYBERBIZ", date: "2024-03-21", recipient: "何冠廷", phone: "0900-111-223", address: "桃園市龜山區文化一路140號", logistics: "宅配", amount: 990, items: [{ product: "面面俱到-山海顏在地植萃面膜綜合組", quantity: 1 }] },
  { orderId: "#1224", platform: "CYBERBIZ", date: "2024-03-27", recipient: "賴思穎", phone: "0900-111-224", address: "台南市中西區府前路一段150號", logistics: "順豐物流配送", amount: 1993, items: [{ product: "極光透亮二合一洗卸蜜 150mL", quantity: 1 }] }
];

var allOrders = mockPinkoi.concat(mockCyberbiz);

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
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
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

// 讀取多個檔案（逐一讀取，全部完成後合併）
function handleFiles(fileList) {
  uploadError.hidden = true;
  var files = Array.prototype.slice.call(fileList);
  var csvFiles = files.filter(function(f) { return f.name.toLowerCase().endsWith('.csv'); });

  if (csvFiles.length === 0) {
    uploadError.textContent = '錯誤：請選擇 CSV 格式的檔案';
    uploadError.hidden = false;
    return;
  }
  if (csvFiles.length < files.length) {
    uploadError.textContent = '提醒：已略過非 CSV 檔案，僅處理 ' + csvFiles.length + ' 個 CSV。';
    uploadError.hidden = false;
  }

  var mergedOrders = [];
  var readCount = 0;
  var fileNames = [];

  csvFiles.forEach(function(file) {
    var reader = new FileReader();
    reader.onload = function(e) {
      var text = decodeBuffer(e.target.result);
      var rows = parseCSV(text);
      if (rows.length >= 2) {
        var cleaned = cleanOrders(rows);
        mergedOrders = mergedOrders.concat(cleaned);
        fileNames.push(file.name);
      }
      readCount++;
      if (readCount === csvFiles.length) {
        finishImport(mergedOrders, fileNames);
      }
    };
    // 以 ArrayBuffer 讀取，才能依 BOM 判斷編碼（Pinkoi 匯出常為 UTF-16）
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
  // 狀態列：顯示檔案數與訂單數
  importStatus.hidden = false;
  importStatus.textContent = '已載入 ' + fileNames.length + ' 個檔案，共 ' + orders.length +
    ' 筆訂單' + (orders.length > 5 ? '（預覽顯示前 5 筆）' : '') + '。';
  // 原始預覽（表格，顯示前 5 筆清洗後訂單）
  renderPreviewFromOrders(orders.slice(0, 5));
  // 清洗結果（全部）
  renderCleanedTable(orders);
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

// ===== 載入範例 =====
document.getElementById('btn-pinkoi').addEventListener('click', function() {
  loadExample(mockPinkoi);
});

document.getElementById('btn-cyberbiz').addEventListener('click', function() {
  loadExample(mockCyberbiz);
});

function loadExample(data) {
  uploadError.hidden = true;
  currentOrders = data;
  importStatus.hidden = false;
  importStatus.textContent = '已載入範例，共 ' + data.length + ' 筆訂單' +
    (data.length > 5 ? '（預覽顯示前 5 筆）' : '') + '。';
  renderPreviewFromOrders(data.slice(0, 5));
  renderCleanedTable(data);
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

// ===== 欄位別名對照表（涵蓋 Pinkoi 與 CYBERBIZ 真實匯出欄位名） =====
var FIELD_ALIASES = {
  orderId:   ['訂單編號', 'orderid', 'order_id'],
  date:      ['訂單成立日期', '訂購日期', '訂單日期', '時間', '日期', 'date', 'order_date'],
  recipient: ['收件人姓名', '收件人名稱', '收件人', 'recipient', 'name'],
  phone:     ['收件人電話', '聯絡電話', '電話', 'phone', 'tel'],
  address:   ['收件人地址', '收件地址', '地址', 'address'],
  product:   ['商品名稱', '商品名稱 / 規格', '購買品項', '商品', 'product', 'item'],
  style:     ['商品款式', '商品規格', '款式', 'sku'],
  quantity:  ['數量', 'quantity', 'qty'],
  logistics: ['運送方式', '出貨方式', '寄送方式', '配送方式', '物流', 'logistics', 'shipping'],
  amount:    ['總額', '訂單總金額', '總金額', '金額', 'amount', 'total']
};

// 從一列物件中依別名取值（別名皆已小寫化比對）
function pick(obj, key) {
  var aliases = FIELD_ALIASES[key];
  for (var i = 0; i < aliases.length; i++) {
    var a = aliases[i].toLowerCase();
    if (obj[a] !== undefined && obj[a] !== '') return obj[a];
  }
  return '';
}

// ===== 欄位對照 + 一單多列向下填補（fill-down） =====
function cleanOrders(rows) {
  var headers = rows[0].map(function(h) { return String(h).toLowerCase().trim(); });
  var orders = [];
  var lastOrder = null;

  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];
    if (row.length < 2) continue;
    var obj = {};
    headers.forEach(function(h, idx) { obj[h] = (row[idx] || '').trim(); });

    var orderId = pick(obj, 'orderId');
    var recipient = pick(obj, 'recipient');
    var product = pick(obj, 'product');
    var style = pick(obj, 'style');
    var qty = parseInt(pick(obj, 'quantity'), 10) || 1;
    var fullProduct = style ? (product + ' - ' + style) : product;

    // 判斷是否為明細列：訂單編號與上一筆相同（或空）且收件人為空 → 追加到上一筆
    var isDetailRow = lastOrder && (recipient === '') && (orderId === '' || orderId === lastOrder.orderId);

    if (isDetailRow) {
      if (fullProduct) lastOrder.items.push({ product: fullProduct, quantity: qty });
      continue;
    }

    // 主列：建立新訂單。平台以訂單編號 # 前綴判斷
    var platform = String(orderId).indexOf('#') === 0 ? 'CYBERBIZ' : 'Pinkoi';
    var order = {
      orderId: orderId,
      platform: platform,
      date: normalizeDate(pick(obj, 'date')),
      recipient: recipient,
      phone: pick(obj, 'phone'),
      address: pick(obj, 'address'),
      logistics: pick(obj, 'logistics'),
      amount: parseInt(pick(obj, 'amount'), 10) || 0,
      items: fullProduct ? [{ product: fullProduct, quantity: qty }] : []
    };
    orders.push(order);
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

// ===== 清洗結果表格（一列一筆訂單） =====
function renderCleanedTable(orders) {
  var pf = document.getElementById('platform-filter').value;
  var filtered = pf === 'all' ? orders : orders.filter(function(o) { return o.platform === pf; });

  var idCount = {};
  filtered.forEach(function(o) { idCount[o.orderId] = (idCount[o.orderId] || 0) + 1; });

  var tbody = document.getElementById('cleaned-table').querySelector('tbody');
  tbody.innerHTML = '';
  filtered.forEach(function(o) {
    var dup = idCount[o.orderId] > 1 ? ' class="duplicate"' : '';
    tbody.innerHTML += '<tr' + dup + '>' +
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

// ===== 平台篩選（清洗結果） =====
document.getElementById('platform-filter').addEventListener('change', function() {
  if (currentOrders.length > 0) renderCleanedTable(currentOrders);
});

// ===== 出貨單（一筆訂單一張，含多項商品） =====
document.getElementById('btn-shipping').addEventListener('click', function() {
  var area = document.getElementById('print-area');
  if (currentOrders.length === 0) {
    area.innerHTML = '<p>請先載入訂單資料</p>';
    return;
  }
  var html = '';
  currentOrders.forEach(function(o) {
    var itemRows = o.items.map(function(it) {
      return '<li>' + escapeHtml(it.product) + ' × ' + it.quantity + '</li>';
    }).join('');
    html += '<div class="shipping-label">' +
      '<h4>出貨單</h4>' +
      '<p><strong>訂單編號：</strong>' + escapeHtml(o.orderId) + '</p>' +
      '<p><strong>收件人：</strong>' + escapeHtml(o.recipient) + '</p>' +
      '<p><strong>電話：</strong>' + escapeHtml(o.phone) + '</p>' +
      '<p><strong>地址：</strong>' + escapeHtml(o.address) + '</p>' +
      '<p><strong>商品明細：</strong></p><ul>' + itemRows + '</ul>' +
      '<p><strong>物流方式：</strong>' + escapeHtml(o.logistics) + '</p>' +
      '</div>';
  });
  area.innerHTML = html;
});

// ===== 揀貨單（依商品彙總，展開所有訂單的 items） =====
document.getElementById('btn-picking').addEventListener('click', function() {
  var area = document.getElementById('print-area');
  if (currentOrders.length === 0) {
    area.innerHTML = '<p>請先載入訂單資料</p>';
    return;
  }
  var groups = {};
  currentOrders.forEach(function(o) {
    o.items.forEach(function(it) {
      if (!groups[it.product]) groups[it.product] = { qty: 0, orders: [] };
      groups[it.product].qty += it.quantity;
      if (groups[it.product].orders.indexOf(o.orderId) === -1) {
        groups[it.product].orders.push(o.orderId);
      }
    });
  });

  var html = '<div class="picking-list"><h4>揀貨單</h4><table>' +
    '<thead><tr><th>商品名稱</th><th>總需求數量</th><th>對應訂單</th></tr></thead><tbody>';
  Object.keys(groups).forEach(function(product) {
    var g = groups[product];
    html += '<tr><td>' + escapeHtml(product) + '</td><td>' + g.qty + '</td><td>' + escapeHtml(g.orders.join(', ')) + '</td></tr>';
  });
  html += '</tbody></table></div>';
  area.innerHTML = html;
});

// ===== 列印 =====
document.getElementById('btn-print').addEventListener('click', function() {
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
function getLatestDate() {
  return allOrders.map(function(o) { return o.date; }).sort().slice(-1)[0];
}

function filterByRange(orders, range) {
  if (range === 'all' || range === 'day' || range === 'month') return orders;
  var latest = getLatestDate();
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

// ===== 儀表板（依篩選條件重新渲染） =====
function renderDashboard() {
  var range = document.getElementById('range-filter').value;
  var platform = document.getElementById('dash-platform-filter').value;

  var byPlatform = platform === 'all' ? allOrders : allOrders.filter(function(o) { return o.platform === platform; });
  var orders = filterByRange(byPlatform, range);

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
}

// 篩選變更即重新渲染
document.getElementById('range-filter').addEventListener('change', renderDashboard);
document.getElementById('dash-platform-filter').addEventListener('change', renderDashboard);

// 頁面載入後初始化儀表板
renderDashboard();

// ===== 模擬資料（Pinkoi，涵蓋多月份供營收分析） =====
var mockPinkoi = [
  // 2024-01
  { orderId: "PK20240115001", platform: "Pinkoi", date: "2024-01-15", recipient: "王小明", phone: "0912-345-678", address: "台北市信義區信義路五段7號", product: "手工香氛蠟燭", quantity: 2, logistics: "宅配", amount: 890 },
  { orderId: "PK20240115002", platform: "Pinkoi", date: "2024-01-15", recipient: "李美玲", phone: "0923-456-789", address: "新北市板橋區文化路一段100號", product: "純棉手帕禮盒", quantity: 3, logistics: "超商取貨", amount: 450 },
  { orderId: "PK20240114003", platform: "Pinkoi", date: "2024-01-14", recipient: "張大偉", phone: "0934-567-890", address: "台中市西屯區台灣大道三段99號", product: "皮革筆記本", quantity: 1, logistics: "宅配", amount: 1280 },
  { orderId: "PK20240114004", platform: "Pinkoi", date: "2024-01-14", recipient: "陳怡君", phone: "0945-678-901", address: "高雄市前鎮區中華五路789號", product: "手工香氛蠟燭", quantity: 1, logistics: "超商取貨", amount: 445 },
  { orderId: "PK20240113005", platform: "Pinkoi", date: "2024-01-13", recipient: "林志豪", phone: "0956-789-012", address: "台北市大安區忠孝東路四段12號", product: "陶瓷手沖咖啡杯", quantity: 2, logistics: "宅配", amount: 1560 },
  { orderId: "PK20240113006", platform: "Pinkoi", date: "2024-01-13", recipient: "黃淑芬", phone: "0967-890-123", address: "桃園市中壢區中正路500號", product: "純棉手帕禮盒", quantity: 1, logistics: "超商取貨", amount: 150 },
  { orderId: "PK20240112007", platform: "Pinkoi", date: "2024-01-12", recipient: "吳建宏", phone: "0978-901-234", address: "台南市東區東門路二段89號", product: "植物染圍巾", quantity: 2, logistics: "宅配", amount: 760 },
  { orderId: "PK20240112008", platform: "Pinkoi", date: "2024-01-12", recipient: "許雅婷", phone: "0989-012-345", address: "新竹市東區光復路一段101號", product: "手工香氛蠟燭", quantity: 3, logistics: "宅配", amount: 1335 },
  { orderId: "PK20240111009", platform: "Pinkoi", date: "2024-01-11", recipient: "鄭宗翰", phone: "0910-123-456", address: "台北市松山區南京東路五段250號", product: "木質桌上收納盒", quantity: 1, logistics: "超商取貨", amount: 320 },
  { orderId: "PK20240111010", platform: "Pinkoi", date: "2024-01-11", recipient: "蔡佳穎", phone: "0921-234-567", address: "台中市北屯區文心路四段200號", product: "陶瓷手沖咖啡杯", quantity: 1, logistics: "宅配", amount: 780 },
  { orderId: "PK20240110011", platform: "Pinkoi", date: "2024-01-10", recipient: "劉俊成", phone: "0932-345-678", address: "高雄市左營區博愛二路100號", product: "皮革筆記本", quantity: 2, logistics: "超商取貨", amount: 2560 },
  { orderId: "PK20240110012", platform: "Pinkoi", date: "2024-01-10", recipient: "周怡靜", phone: "0943-456-789", address: "新北市永和區永和路二段50號", product: "植物染圍巾", quantity: 1, logistics: "宅配", amount: 380 },
  { orderId: "PK20240109013", platform: "Pinkoi", date: "2024-01-09", recipient: "楊家豪", phone: "0954-567-890", address: "台北市中正區重慶南路一段122號", product: "純棉手帕禮盒", quantity: 2, logistics: "超商取貨", amount: 300 },
  { orderId: "PK20240109014", platform: "Pinkoi", date: "2024-01-09", recipient: "趙雅萍", phone: "0965-678-901", address: "台南市安平區安平路500號", product: "木質桌上收納盒", quantity: 2, logistics: "宅配", amount: 640 },
  { orderId: "PK20240109015", platform: "Pinkoi", date: "2024-01-09", recipient: "王小明", phone: "0912-345-678", address: "台北市信義區信義路五段7號", product: "陶瓷手沖咖啡杯", quantity: 1, logistics: "超商取貨", amount: 780 },
  // 2024-02
  { orderId: "PK20240205016", platform: "Pinkoi", date: "2024-02-05", recipient: "謝宜蓁", phone: "0911-111-222", address: "台北市內湖區瑞光路358號", product: "手工香氛蠟燭", quantity: 1, logistics: "宅配", amount: 445 },
  { orderId: "PK20240206017", platform: "Pinkoi", date: "2024-02-06", recipient: "方志偉", phone: "0922-222-333", address: "新北市三重區重新路三段60號", product: "陶瓷手沖咖啡杯", quantity: 2, logistics: "宅配", amount: 1560 },
  { orderId: "PK20240208018", platform: "Pinkoi", date: "2024-02-08", recipient: "何佳蓉", phone: "0933-333-444", address: "台中市南屯區公益路二段300號", product: "植物染圍巾", quantity: 3, logistics: "超商取貨", amount: 1140 },
  { orderId: "PK20240212019", platform: "Pinkoi", date: "2024-02-12", recipient: "郭明哲", phone: "0944-444-555", address: "高雄市苓雅區四維三路50號", product: "純棉手帕禮盒", quantity: 2, logistics: "宅配", amount: 300 },
  { orderId: "PK20240215020", platform: "Pinkoi", date: "2024-02-15", recipient: "洪雅琪", phone: "0955-555-666", address: "桃園市桃園區中正路1200號", product: "皮革筆記本", quantity: 1, logistics: "超商取貨", amount: 1280 },
  { orderId: "PK20240220021", platform: "Pinkoi", date: "2024-02-20", recipient: "蕭建志", phone: "0966-666-777", address: "台北市萬華區西園路二段30號", product: "手工香氛蠟燭", quantity: 2, logistics: "宅配", amount: 890 },
  { orderId: "PK20240224022", platform: "Pinkoi", date: "2024-02-24", recipient: "葉佩珊", phone: "0977-777-888", address: "新竹縣竹北市光明一路200號", product: "木質桌上收納盒", quantity: 1, logistics: "超商取貨", amount: 320 },
  { orderId: "PK20240228023", platform: "Pinkoi", date: "2024-02-28", recipient: "魏志成", phone: "0988-888-999", address: "台中市北區學士路100號", product: "陶瓷手沖咖啡杯", quantity: 1, logistics: "宅配", amount: 780 },
  // 2024-03
  { orderId: "PK20240303024", platform: "Pinkoi", date: "2024-03-03", recipient: "詹淑惠", phone: "0911-999-000", address: "台南市中西區民族路二段200號", product: "植物染圍巾", quantity: 2, logistics: "超商取貨", amount: 760 },
  { orderId: "PK20240308025", platform: "Pinkoi", date: "2024-03-08", recipient: "羅家銘", phone: "0922-000-111", address: "高雄市三民區建工路500號", product: "手工香氛蠟燭", quantity: 1, logistics: "宅配", amount: 445 },
  { orderId: "PK20240312026", platform: "Pinkoi", date: "2024-03-12", recipient: "傅雅芳", phone: "0933-111-222", address: "台北市士林區中正路400號", product: "純棉手帕禮盒", quantity: 4, logistics: "宅配", amount: 600 },
  { orderId: "PK20240318027", platform: "Pinkoi", date: "2024-03-18", recipient: "曾俊凱", phone: "0944-222-333", address: "新北市中和區景安路100號", product: "皮革筆記本", quantity: 1, logistics: "超商取貨", amount: 1280 },
  { orderId: "PK20240322028", platform: "Pinkoi", date: "2024-03-22", recipient: "賴美君", phone: "0955-333-444", address: "桃園市龜山區萬壽路一段50號", product: "木質桌上收納盒", quantity: 3, logistics: "宅配", amount: 960 },
  { orderId: "PK20240326029", platform: "Pinkoi", date: "2024-03-26", recipient: "潘建中", phone: "0966-444-555", address: "台中市西區精誠路300號", product: "陶瓷手沖咖啡杯", quantity: 1, logistics: "超商取貨", amount: 780 },
  { orderId: "PK20240330030", platform: "Pinkoi", date: "2024-03-30", recipient: "謝宜蓁", phone: "0911-111-222", address: "台北市內湖區瑞光路358號", product: "植物染圍巾", quantity: 1, logistics: "宅配", amount: 380 }
];

// ===== 模擬資料（CYBERBIZ，欄位對照自訂單明細範例 #1249） =====
var mockCyberbiz = [
  // 2024-01
  { orderId: "#1201", platform: "CYBERBIZ", date: "2024-01-10", recipient: "李悅溱", phone: "0936-756-912", address: "立功門市(台中市太平區育才路446號)", product: "栗米光采修護精華 30mL", quantity: 1, logistics: "7-11貨到付款", amount: 1012 },
  { orderId: "#1202", platform: "CYBERBIZ", date: "2024-01-11", recipient: "陳冠廷", phone: "0918-223-456", address: "台北市大同區重慶北路二段50號", product: "栗米淨白面膜 5入", quantity: 2, logistics: "宅配", amount: 780 },
  { orderId: "#1203", platform: "CYBERBIZ", date: "2024-01-13", recipient: "林思妤", phone: "0927-334-567", address: "新北市新莊區中正路100號", product: "栗米保濕乳液 100mL", quantity: 1, logistics: "全家取貨付款", amount: 650 },
  { orderId: "#1204", platform: "CYBERBIZ", date: "2024-01-16", recipient: "黃柏睿", phone: "0938-445-678", address: "桃園市中壢區環中東路200號", product: "栗米光采修護精華 30mL", quantity: 2, logistics: "宅配", amount: 2024 },
  { orderId: "#1205", platform: "CYBERBIZ", date: "2024-01-20", recipient: "吳芷瑄", phone: "0949-556-789", address: "台中市西屯區文心路三段300號", product: "栗米胺基酸潔顏乳 120mL", quantity: 3, logistics: "7-11貨到付款", amount: 1170 },
  { orderId: "#1206", platform: "CYBERBIZ", date: "2024-01-25", recipient: "張哲維", phone: "0910-667-890", address: "台南市永康區中華路400號", product: "栗米淨白面膜 5入", quantity: 1, logistics: "宅配", amount: 390 },
  { orderId: "#1207", platform: "CYBERBIZ", date: "2024-01-28", recipient: "劉宜庭", phone: "0921-778-901", address: "高雄市鳳山區青年路500號", product: "栗米保濕乳液 100mL", quantity: 2, logistics: "全家取貨付款", amount: 1300 },
  // 2024-02
  { orderId: "#1210", platform: "CYBERBIZ", date: "2024-02-04", recipient: "蔡承翰", phone: "0932-889-012", address: "台北市內湖區成功路四段60號", product: "栗米光采修護精華 30mL", quantity: 1, logistics: "宅配", amount: 1012 },
  { orderId: "#1211", platform: "CYBERBIZ", date: "2024-02-09", recipient: "鄭雅文", phone: "0943-990-123", address: "新北市板橋區民生路一段70號", product: "栗米胺基酸潔顏乳 120mL", quantity: 2, logistics: "7-11貨到付款", amount: 780 },
  { orderId: "#1212", platform: "CYBERBIZ", date: "2024-02-14", recipient: "許博鈞", phone: "0954-101-234", address: "台中市北屯區崇德路二段80號", product: "栗米淨白面膜 5入", quantity: 4, logistics: "宅配", amount: 1560 },
  { orderId: "#1213", platform: "CYBERBIZ", date: "2024-02-18", recipient: "楊詠晴", phone: "0965-212-345", address: "桃園市桃園區復興路90號", product: "栗米保濕乳液 100mL", quantity: 1, logistics: "全家取貨付款", amount: 650 },
  { orderId: "#1214", platform: "CYBERBIZ", date: "2024-02-22", recipient: "周家瑋", phone: "0976-323-456", address: "台南市東區林森路二段100號", product: "栗米光采修護精華 30mL", quantity: 3, logistics: "宅配", amount: 3036 },
  { orderId: "#1215", platform: "CYBERBIZ", date: "2024-02-27", recipient: "何宛蓉", phone: "0987-434-567", address: "高雄市三民區九如二路600號", product: "栗米胺基酸潔顏乳 120mL", quantity: 1, logistics: "7-11貨到付款", amount: 390 },
  // 2024-03
  { orderId: "#1220", platform: "CYBERBIZ", date: "2024-03-05", recipient: "郭子綺", phone: "0918-545-678", address: "台北市文山區木柵路一段110號", product: "栗米淨白面膜 5入", quantity: 2, logistics: "宅配", amount: 780 },
  { orderId: "#1221", platform: "CYBERBIZ", date: "2024-03-11", recipient: "蕭立群", phone: "0929-656-789", address: "新北市三重區三和路三段120號", product: "栗米保濕乳液 100mL", quantity: 3, logistics: "全家取貨付款", amount: 1950 },
  { orderId: "#1222", platform: "CYBERBIZ", date: "2024-03-16", recipient: "葉映彤", phone: "0930-767-890", address: "台中市南區復興路一段130號", product: "栗米光采修護精華 30mL", quantity: 1, logistics: "7-11貨到付款", amount: 1012 },
  { orderId: "#1223", platform: "CYBERBIZ", date: "2024-03-21", recipient: "曾郁翔", phone: "0941-878-901", address: "桃園市龜山區文化一路140號", product: "栗米胺基酸潔顏乳 120mL", quantity: 2, logistics: "宅配", amount: 780 },
  { orderId: "#1224", platform: "CYBERBIZ", date: "2024-03-27", recipient: "賴思穎", phone: "0952-989-012", address: "台南市中西區府前路一段150號", product: "栗米淨白面膜 5入", quantity: 1, logistics: "全家取貨付款", amount: 390 }
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

uploadArea.addEventListener('click', function() { fileInput.click(); });

uploadArea.addEventListener('dragover', function(e) {
  e.preventDefault();
  uploadArea.classList.add('dragover');
});

uploadArea.addEventListener('dragleave', function() {
  uploadArea.classList.remove('dragover');
});

uploadArea.addEventListener('drop', function(e) {
  e.preventDefault();
  uploadArea.classList.remove('dragover');
  if (e.dataTransfer.files.length > 0) handleFile(e.dataTransfer.files[0]);
});

fileInput.addEventListener('change', function() {
  if (fileInput.files.length > 0) handleFile(fileInput.files[0]);
});

function handleFile(file) {
  uploadError.hidden = true;
  if (!file.name.toLowerCase().endsWith('.csv')) {
    uploadError.textContent = '錯誤：請選擇 CSV 格式的檔案';
    uploadError.hidden = false;
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var rows = parseCSV(e.target.result);
    if (rows.length < 2) {
      uploadError.textContent = '錯誤：檔案無資料';
      uploadError.hidden = false;
      return;
    }
    renderPreview(rows);
    var cleaned = cleanOrders(rows);
    currentOrders = cleaned;
    renderCleanedTable(cleaned);
  };
  reader.readAsText(file);
}

function parseCSV(text) {
  var lines = text.trim().split('\n');
  return lines.map(function(line) {
    return line.split(',').map(function(cell) { return cell.trim().replace(/^"|"$/g, ''); });
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
  // 預覽：顯示前 5 筆原始欄位
  var headers = ['訂單編號', '平台', '日期', '收件人', '電話', '地址', '商品', '數量', '物流', '金額'];
  var rows = [headers];
  data.slice(0, 5).forEach(function(o) {
    rows.push([o.orderId, o.platform, o.date, o.recipient, o.phone, o.address, o.product, o.quantity, o.logistics, o.amount]);
  });
  renderPreviewFromArray(rows);
  currentOrders = data;
  renderCleanedTable(data);
}

// ===== 原始預覽 =====
function renderPreview(rows) {
  var table = document.getElementById('preview-table');
  var thead = table.querySelector('thead');
  var tbody = table.querySelector('tbody');
  thead.innerHTML = '<tr>' + rows[0].map(function(h) { return '<th>' + escapeHtml(h) + '</th>'; }).join('') + '</tr>';
  tbody.innerHTML = '';
  rows.slice(1, 6).forEach(function(row) {
    tbody.innerHTML += '<tr>' + row.map(function(c) { return '<td>' + escapeHtml(c) + '</td>'; }).join('') + '</tr>';
  });
}

function renderPreviewFromArray(rows) {
  var table = document.getElementById('preview-table');
  var thead = table.querySelector('thead');
  var tbody = table.querySelector('tbody');
  thead.innerHTML = '<tr>' + rows[0].map(function(h) { return '<th>' + escapeHtml(h) + '</th>'; }).join('') + '</tr>';
  tbody.innerHTML = '';
  rows.slice(1).forEach(function(row) {
    tbody.innerHTML += '<tr>' + row.map(function(c) { return '<td>' + escapeHtml(c) + '</td>'; }).join('') + '</tr>';
  });
}

// ===== 欄位對照（CSV 用，對照 Pinkoi 與 CYBERBIZ 欄位） =====
function cleanOrders(rows) {
  var headers = rows[0].map(function(h) { return h.toLowerCase().trim(); });
  var orders = [];
  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];
    if (row.length < 3) continue;
    var obj = {};
    headers.forEach(function(h, idx) { obj[h] = row[idx] || ''; });

    var orderId = obj['訂單編號'] || obj['orderid'] || obj['order_id'] || row[0];
    // 以訂單編號格式判斷平台：# 開頭視為 CYBERBIZ，否則 Pinkoi
    var platform = String(orderId).indexOf('#') === 0 ? 'CYBERBIZ' : 'Pinkoi';

    orders.push({
      orderId: orderId,
      platform: platform,
      date: obj['日期'] || obj['訂購日期'] || obj['訂單日期'] || obj['date'] || obj['order_date'] || row[2],
      recipient: obj['收件人'] || obj['收件人姓名'] || obj['recipient'] || obj['name'] || row[3],
      phone: obj['電話'] || obj['收件人電話'] || obj['聯絡電話'] || obj['phone'] || obj['tel'] || row[4],
      address: obj['地址'] || obj['收件人地址'] || obj['收件地址'] || obj['address'] || row[5],
      product: obj['商品'] || obj['商品名稱'] || obj['商品名稱 / 規格'] || obj['product'] || obj['item'] || row[6],
      quantity: parseInt(obj['數量'] || obj['quantity'] || obj['qty'] || row[7], 10) || 1,
      logistics: obj['物流'] || obj['寄送方式'] || obj['配送方式'] || obj['logistics'] || obj['shipping'] || row[8],
      amount: parseInt(obj['金額'] || obj['總金額'] || obj['訂單總金額'] || obj['amount'] || obj['total'] || row[9], 10) || 0
    });
  }
  return orders;
}

// ===== 清洗結果表格 =====
function renderCleanedTable(orders) {
  // 依平台篩選
  var pf = document.getElementById('platform-filter').value;
  var filtered = pf === 'all' ? orders : orders.filter(function(o) { return o.platform === pf; });

  // 找出重複的 orderId
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
      '<td>' + escapeHtml(o.product) + '</td>' +
      '<td>' + escapeHtml(o.quantity) + '</td>' +
      '<td>' + escapeHtml(o.logistics) + '</td>' +
      '</tr>';
  });
}

// ===== 平台篩選（清洗結果） =====
document.getElementById('platform-filter').addEventListener('change', function() {
  if (currentOrders.length > 0) renderCleanedTable(currentOrders);
});

// ===== 出貨單 =====
document.getElementById('btn-shipping').addEventListener('click', function() {
  var area = document.getElementById('print-area');
  if (currentOrders.length === 0) {
    area.innerHTML = '<p>請先載入訂單資料</p>';
    return;
  }
  var html = '';
  currentOrders.forEach(function(o) {
    html += '<div class="shipping-label">' +
      '<h4>出貨單</h4>' +
      '<p><strong>訂單編號：</strong>' + escapeHtml(o.orderId) + '</p>' +
      '<p><strong>收件人：</strong>' + escapeHtml(o.recipient) + '</p>' +
      '<p><strong>電話：</strong>' + escapeHtml(o.phone) + '</p>' +
      '<p><strong>地址：</strong>' + escapeHtml(o.address) + '</p>' +
      '<p><strong>商品：</strong>' + escapeHtml(o.product) + ' × ' + escapeHtml(o.quantity) + '</p>' +
      '<p><strong>物流方式：</strong>' + escapeHtml(o.logistics) + '</p>' +
      '</div>';
  });
  area.innerHTML = html;
});

// ===== 揀貨單 =====
document.getElementById('btn-picking').addEventListener('click', function() {
  var area = document.getElementById('print-area');
  if (currentOrders.length === 0) {
    area.innerHTML = '<p>請先載入訂單資料</p>';
    return;
  }
  // 依商品分組
  var groups = {};
  currentOrders.forEach(function(o) {
    if (!groups[o.product]) groups[o.product] = { qty: 0, orders: [] };
    groups[o.product].qty += o.quantity;
    groups[o.product].orders.push(o.orderId);
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

// ===== SVG 長條圖（通用繪製函式） =====
// items: [{label, value}], opts: { color, valuePrefix }
function drawBarChart(svgId, items, opts) {
  opts = opts || {};
  var color = opts.color || '#4a90d9';
  var prefix = opts.valuePrefix || '';
  var svg = document.getElementById(svgId);
  var barWidth = 32;
  var gap = 24;
  var startX = 40;
  var baseY = 170;
  var chartHeight = 130;
  var svgWidth = startX + items.length * (barWidth + gap) + 20;
  var svgHeight = 220;
  var maxVal = Math.max.apply(null, items.map(function(it) { return it.value; })) || 1;

  var content = '';
  items.forEach(function(it, i) {
    var x = startX + i * (barWidth + gap);
    var h = (it.value / maxVal) * chartHeight;
    content += '<rect x="' + x + '" y="' + (baseY - h) + '" width="' + barWidth + '" height="' + h + '" fill="' + color + '" rx="2"/>';
    // 數值標籤
    content += '<text x="' + (x + barWidth / 2) + '" y="' + (baseY - h - 5) + '" text-anchor="middle" font-size="10">' + prefix + it.value.toLocaleString() + '</text>';
    // 類別標籤
    content += '<text x="' + (x + barWidth / 2) + '" y="' + (baseY + 15) + '" text-anchor="middle" font-size="10">' + escapeHtml(it.label) + '</text>';
  });

  svg.innerHTML = content;
  svg.setAttribute('viewBox', '0 0 ' + svgWidth + ' ' + svgHeight);
}

// ===== 時間範圍篩選 =====
// 以資料中最新日期為基準，計算過去 N 天的起始日
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

// 依所選範圍決定營收圖表的分組方式與標題
function buildRevenueItems(orders, range) {
  var groups = {};
  var groupByMonth = (range === 'month');
  orders.forEach(function(o) {
    var key = groupByMonth ? o.date.slice(0, 7) : o.date;
    groups[key] = (groups[key] || 0) + o.amount;
  });
  return Object.keys(groups).sort().map(function(k) {
    return { label: groupByMonth ? k : k.slice(5), value: groups[k] };
  });
}

function rangeTitle(range) {
  switch (range) {
    case '7d': return '營收比較（過去 7 天）';
    case '30d': return '營收比較（過去 30 天）';
    case 'day': return '營收比較（按日）';
    case 'month': return '營收比較（按月）';
    default: return '營收比較（全部）';
  }
}

// ===== 儀表板（依篩選條件重新渲染） =====
function renderDashboard() {
  var range = document.getElementById('range-filter').value;
  var platform = document.getElementById('dash-platform-filter').value;

  // 平台篩選
  var byPlatform = platform === 'all' ? allOrders : allOrders.filter(function(o) { return o.platform === platform; });
  // 時間範圍篩選
  var orders = filterByRange(byPlatform, range);

  // 摘要
  var totalOrders = orders.length;
  var totalRevenue = orders.reduce(function(sum, o) { return sum + o.amount; }, 0);
  var avgPrice = totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0;

  document.getElementById('total-orders').textContent = totalOrders;
  document.getElementById('total-revenue').textContent = '$' + totalRevenue.toLocaleString();
  document.getElementById('avg-price').textContent = '$' + avgPrice.toLocaleString();

  // 訂單趨勢（篩選後每日訂單數，最多顯示最後 10 個日期）
  var dateGroups = {};
  orders.forEach(function(o) { dateGroups[o.date] = (dateGroups[o.date] || 0) + 1; });
  var trendItems = Object.keys(dateGroups).sort().slice(-10).map(function(d) {
    return { label: d.slice(5), value: dateGroups[d] };
  });
  drawBarChart('trend-svg', trendItems, { color: '#4a90d9', valuePrefix: '' });

  // 熱銷 TOP 5
  var productSales = {};
  orders.forEach(function(o) {
    if (!productSales[o.product]) productSales[o.product] = { qty: 0, revenue: 0 };
    productSales[o.product].qty += o.quantity;
    productSales[o.product].revenue += o.amount;
  });
  var sortedByQty = Object.keys(productSales).map(function(p) {
    return { name: p, qty: productSales[p].qty, revenue: productSales[p].revenue };
  }).sort(function(a, b) { return b.qty - a.qty; }).slice(0, 5);

  var tbody = document.getElementById('top5-table').querySelector('tbody');
  tbody.innerHTML = '';
  sortedByQty.forEach(function(item, i) {
    tbody.innerHTML += '<tr><td>' + (i + 1) + '</td><td>' + escapeHtml(item.name) + '</td><td>' + item.qty + '</td><td>$' + item.revenue.toLocaleString() + '</td></tr>';
  });

  // 營收比較（依所選時間範圍動態分組）
  document.getElementById('revenue-chart-title').textContent = rangeTitle(range);
  var revenueItems = buildRevenueItems(orders, range).slice(-12);
  drawBarChart('revenue-svg', revenueItems, { color: '#2e9e6b', valuePrefix: '$' });

  // 產品別營收比較（CSS 橫條圖）
  var productRevenueSorted = Object.keys(productSales).map(function(p) {
    return { name: p, revenue: productSales[p].revenue };
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

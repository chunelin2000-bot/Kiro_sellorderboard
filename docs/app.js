// ===== 模擬資料 =====
var mockShopee = [
  { orderId: "SH20240115001", platform: "蝦皮", date: "2024-01-15", recipient: "王小明", phone: "0912-345-678", address: "台北市信義區信義路五段7號", product: "保濕精華液 30ml", quantity: 2, logistics: "超商取貨", amount: 890 },
  { orderId: "SH20240115002", platform: "蝦皮", date: "2024-01-15", recipient: "李美玲", phone: "0923-456-789", address: "新北市板橋區文化路一段100號", product: "玻尿酸面膜 5入", quantity: 3, logistics: "宅配", amount: 450 },
  { orderId: "SH20240114003", platform: "蝦皮", date: "2024-01-14", recipient: "張大偉", phone: "0934-567-890", address: "台中市西屯區台灣大道三段99號", product: "維他命C精華 20ml", quantity: 1, logistics: "超商取貨", amount: 1280 },
  { orderId: "SH20240114004", platform: "蝦皮", date: "2024-01-14", recipient: "陳怡君", phone: "0945-678-901", address: "高雄市前鎮區中華五路789號", product: "保濕精華液 30ml", quantity: 1, logistics: "宅配", amount: 445 },
  { orderId: "SH20240113005", platform: "蝦皮", date: "2024-01-13", recipient: "林志豪", phone: "0956-789-012", address: "台北市大安區忠孝東路四段12號", product: "膠原蛋白飲 10入", quantity: 2, logistics: "超商取貨", amount: 1560 },
  { orderId: "SH20240113006", platform: "蝦皮", date: "2024-01-13", recipient: "黃淑芬", phone: "0967-890-123", address: "桃園市中壢區中正路500號", product: "玻尿酸面膜 5入", quantity: 1, logistics: "宅配", amount: 150 },
  { orderId: "SH20240112007", platform: "蝦皮", date: "2024-01-12", recipient: "吳建宏", phone: "0978-901-234", address: "台南市東區東門路二段89號", product: "防曬乳 SPF50 50ml", quantity: 2, logistics: "超商取貨", amount: 760 },
  { orderId: "SH20240112008", platform: "蝦皮", date: "2024-01-12", recipient: "許雅婷", phone: "0989-012-345", address: "新竹市東區光復路一段101號", product: "保濕精華液 30ml", quantity: 3, logistics: "宅配", amount: 1335 },
  { orderId: "SH20240111009", platform: "蝦皮", date: "2024-01-11", recipient: "鄭宗翰", phone: "0910-123-456", address: "台北市松山區南京東路五段250號", product: "卸妝水 200ml", quantity: 1, logistics: "超商取貨", amount: 320 },
  { orderId: "SH20240111010", platform: "蝦皮", date: "2024-01-11", recipient: "蔡佳穎", phone: "0921-234-567", address: "台中市北屯區文心路四段200號", product: "膠原蛋白飲 10入", quantity: 1, logistics: "宅配", amount: 780 },
  { orderId: "SH20240110011", platform: "蝦皮", date: "2024-01-10", recipient: "劉俊成", phone: "0932-345-678", address: "高雄市左營區博愛二路100號", product: "維他命C精華 20ml", quantity: 2, logistics: "超商取貨", amount: 2560 },
  { orderId: "SH20240110012", platform: "蝦皮", date: "2024-01-10", recipient: "周怡靜", phone: "0943-456-789", address: "新北市永和區永和路二段50號", product: "防曬乳 SPF50 50ml", quantity: 1, logistics: "宅配", amount: 380 },
  { orderId: "SH20240109013", platform: "蝦皮", date: "2024-01-09", recipient: "楊家豪", phone: "0954-567-890", address: "台北市中正區重慶南路一段122號", product: "玻尿酸面膜 5入", quantity: 2, logistics: "超商取貨", amount: 300 },
  { orderId: "SH20240109014", platform: "蝦皮", date: "2024-01-09", recipient: "趙雅萍", phone: "0965-678-901", address: "台南市安平區安平路500號", product: "卸妝水 200ml", quantity: 2, logistics: "宅配", amount: 640 },
  { orderId: "SH20240109015", platform: "蝦皮", date: "2024-01-09", recipient: "王小明", phone: "0912-345-678", address: "台北市信義區信義路五段7號", product: "膠原蛋白飲 10入", quantity: 1, logistics: "超商取貨", amount: 780 }
];

var mockMomo = [
  { orderId: "MO20240115001", platform: "MOMO", date: "2024-01-15", recipient: "謝宜蓁", phone: "0911-111-222", address: "台北市內湖區瑞光路358號", product: "保濕精華液 30ml", quantity: 1, logistics: "宅配", amount: 445 },
  { orderId: "MO20240115002", platform: "MOMO", date: "2024-01-15", recipient: "方志偉", phone: "0922-222-333", address: "新北市三重區重新路三段60號", product: "膠原蛋白飲 10入", quantity: 2, logistics: "宅配", amount: 1560 },
  { orderId: "MO20240114003", platform: "MOMO", date: "2024-01-14", recipient: "何佳蓉", phone: "0933-333-444", address: "台中市南屯區公益路二段300號", product: "防曬乳 SPF50 50ml", quantity: 3, logistics: "超商取貨", amount: 1140 },
  { orderId: "MO20240114004", platform: "MOMO", date: "2024-01-14", recipient: "郭明哲", phone: "0944-444-555", address: "高雄市苓雅區四維三路50號", product: "玻尿酸面膜 5入", quantity: 2, logistics: "宅配", amount: 300 },
  { orderId: "MO20240113005", platform: "MOMO", date: "2024-01-13", recipient: "洪雅琪", phone: "0955-555-666", address: "桃園市桃園區中正路1200號", product: "維他命C精華 20ml", quantity: 1, logistics: "超商取貨", amount: 1280 },
  { orderId: "MO20240113006", platform: "MOMO", date: "2024-01-13", recipient: "蕭建志", phone: "0966-666-777", address: "台北市萬華區西園路二段30號", product: "保濕精華液 30ml", quantity: 2, logistics: "宅配", amount: 890 },
  { orderId: "MO20240112007", platform: "MOMO", date: "2024-01-12", recipient: "葉佩珊", phone: "0977-777-888", address: "新竹縣竹北市光明一路200號", product: "卸妝水 200ml", quantity: 1, logistics: "超商取貨", amount: 320 },
  { orderId: "MO20240112008", platform: "MOMO", date: "2024-01-12", recipient: "魏志成", phone: "0988-888-999", address: "台中市北區學士路100號", product: "膠原蛋白飲 10入", quantity: 1, logistics: "宅配", amount: 780 },
  { orderId: "MO20240111009", platform: "MOMO", date: "2024-01-11", recipient: "詹淑惠", phone: "0911-999-000", address: "台南市中西區民族路二段200號", product: "防曬乳 SPF50 50ml", quantity: 2, logistics: "超商取貨", amount: 760 },
  { orderId: "MO20240111010", platform: "MOMO", date: "2024-01-11", recipient: "羅家銘", phone: "0922-000-111", address: "高雄市三民區建工路500號", product: "保濕精華液 30ml", quantity: 1, logistics: "宅配", amount: 445 },
  { orderId: "MO20240110011", platform: "MOMO", date: "2024-01-10", recipient: "傅雅芳", phone: "0933-111-222", address: "台北市士林區中正路400號", product: "玻尿酸面膜 5入", quantity: 4, logistics: "宅配", amount: 600 },
  { orderId: "MO20240110012", platform: "MOMO", date: "2024-01-10", recipient: "曾俊凱", phone: "0944-222-333", address: "新北市中和區景安路100號", product: "維他命C精華 20ml", quantity: 1, logistics: "超商取貨", amount: 1280 },
  { orderId: "MO20240109013", platform: "MOMO", date: "2024-01-09", recipient: "賴美君", phone: "0955-333-444", address: "桃園市龜山區萬壽路一段50號", product: "卸妝水 200ml", quantity: 3, logistics: "宅配", amount: 960 },
  { orderId: "MO20240109014", platform: "MOMO", date: "2024-01-09", recipient: "潘建中", phone: "0966-444-555", address: "台中市西區精誠路300號", product: "膠原蛋白飲 10入", quantity: 1, logistics: "超商取貨", amount: 780 },
  { orderId: "MO20240109015", platform: "MOMO", date: "2024-01-09", recipient: "謝宜蓁", phone: "0911-111-222", address: "台北市內湖區瑞光路358號", product: "防曬乳 SPF50 50ml", quantity: 1, logistics: "宅配", amount: 380 }
];

// 合併所有模擬資料
var allOrders = mockShopee.concat(mockMomo);

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
document.getElementById('btn-shopee').addEventListener('click', function() {
  loadExample(mockShopee, '蝦皮');
});

document.getElementById('btn-momo').addEventListener('click', function() {
  loadExample(mockMomo, 'MOMO');
});

function loadExample(data, platform) {
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
  thead.innerHTML = '<tr>' + rows[0].map(function(h) { return '<th>' + h + '</th>'; }).join('') + '</tr>';
  tbody.innerHTML = '';
  rows.slice(1, 6).forEach(function(row) {
    tbody.innerHTML += '<tr>' + row.map(function(c) { return '<td>' + c + '</td>'; }).join('') + '</tr>';
  });
}

function renderPreviewFromArray(rows) {
  var table = document.getElementById('preview-table');
  var thead = table.querySelector('thead');
  var tbody = table.querySelector('tbody');
  thead.innerHTML = '<tr>' + rows[0].map(function(h) { return '<th>' + h + '</th>'; }).join('') + '</tr>';
  tbody.innerHTML = '';
  rows.slice(1).forEach(function(row) {
    tbody.innerHTML += '<tr>' + row.map(function(c) { return '<td>' + c + '</td>'; }).join('') + '</tr>';
  });
}

// ===== 欄位對照（CSV 用） =====
function cleanOrders(rows) {
  var headers = rows[0].map(function(h) { return h.toLowerCase().trim(); });
  var orders = [];
  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];
    if (row.length < 3) continue;
    var obj = {};
    headers.forEach(function(h, idx) { obj[h] = row[idx] || ''; });
    // 嘗試對照常見欄位名
    orders.push({
      orderId: obj['訂單編號'] || obj['orderid'] || obj['order_id'] || row[0],
      platform: obj['平台'] || obj['platform'] || '未知',
      date: obj['日期'] || obj['date'] || obj['order_date'] || row[2],
      recipient: obj['收件人'] || obj['recipient'] || obj['name'] || row[3],
      phone: obj['電話'] || obj['phone'] || obj['tel'] || row[4],
      address: obj['地址'] || obj['address'] || row[5],
      product: obj['商品'] || obj['product'] || obj['item'] || row[6],
      quantity: parseInt(obj['數量'] || obj['quantity'] || obj['qty'] || row[7]) || 1,
      logistics: obj['物流'] || obj['logistics'] || obj['shipping'] || row[8],
      amount: parseInt(obj['金額'] || obj['amount'] || obj['total'] || row[9]) || 0
    });
  }
  return orders;
}

// ===== 清洗結果表格 =====
function renderCleanedTable(orders) {
  var filter = document.getElementById('platform-filter').value;
  var filtered = filter === 'all' ? orders : orders.filter(function(o) { return o.platform === filter; });

  // 找出重複的 orderId
  var idCount = {};
  filtered.forEach(function(o) { idCount[o.orderId] = (idCount[o.orderId] || 0) + 1; });

  var tbody = document.getElementById('cleaned-table').querySelector('tbody');
  tbody.innerHTML = '';
  filtered.forEach(function(o) {
    var dup = idCount[o.orderId] > 1 ? ' class="duplicate"' : '';
    tbody.innerHTML += '<tr' + dup + '>' +
      '<td>' + o.orderId + '</td>' +
      '<td>' + o.platform + '</td>' +
      '<td>' + o.date + '</td>' +
      '<td>' + o.recipient + '</td>' +
      '<td>' + o.phone + '</td>' +
      '<td>' + o.address + '</td>' +
      '<td>' + o.product + '</td>' +
      '<td>' + o.quantity + '</td>' +
      '<td>' + o.logistics + '</td>' +
      '</tr>';
  });
}

// ===== 平台篩選 =====
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
      '<p><strong>訂單編號：</strong>' + o.orderId + '</p>' +
      '<p><strong>收件人：</strong>' + o.recipient + '</p>' +
      '<p><strong>電話：</strong>' + o.phone + '</p>' +
      '<p><strong>地址：</strong>' + o.address + '</p>' +
      '<p><strong>商品：</strong>' + o.product + ' × ' + o.quantity + '</p>' +
      '<p><strong>物流方式：</strong>' + o.logistics + '</p>' +
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
    html += '<tr><td>' + product + '</td><td>' + g.qty + '</td><td>' + g.orders.join(', ') + '</td></tr>';
  });
  html += '</tbody></table></div>';
  area.innerHTML = html;
});

// ===== 列印 =====
document.getElementById('btn-print').addEventListener('click', function() {
  window.print();
});

// ===== 儀表板（頁面載入即顯示） =====
function initDashboard() {
  // 摘要
  var totalOrders = allOrders.length;
  var totalRevenue = allOrders.reduce(function(sum, o) { return sum + o.amount; }, 0);
  var avgPrice = Math.round(totalRevenue / totalOrders);

  document.getElementById('total-orders').textContent = totalOrders;
  document.getElementById('total-revenue').textContent = '$' + totalRevenue.toLocaleString();
  document.getElementById('avg-price').textContent = '$' + avgPrice.toLocaleString();

  // 平台占比橫條圖
  var shopeeCount = mockShopee.length;
  var momoCount = mockMomo.length;
  var total = shopeeCount + momoCount;
  var shopeePercent = Math.round(shopeeCount / total * 100);
  var momoPercent = 100 - shopeePercent;

  var chartHtml = '<div class="bar-row">' +
    '<span class="bar-label">蝦皮</span>' +
    '<div class="bar-track"><div class="bar-fill shopee" style="width:' + shopeePercent + '%"></div></div>' +
    '<span class="bar-percent">' + shopeePercent + '%</span></div>' +
    '<div class="bar-row">' +
    '<span class="bar-label">MOMO</span>' +
    '<div class="bar-track"><div class="bar-fill momo" style="width:' + momoPercent + '%"></div></div>' +
    '<span class="bar-percent">' + momoPercent + '%</span></div>';
  document.getElementById('platform-chart').innerHTML = chartHtml;

  // 近 7 日趨勢 SVG 長條圖
  var dates = ['01-09', '01-10', '01-11', '01-12', '01-13', '01-14', '01-15'];
  var dailyShopee = [];
  var dailyMomo = [];
  dates.forEach(function(d) {
    var fullDate = '2024-' + d;
    dailyShopee.push(mockShopee.filter(function(o) { return o.date === fullDate; }).length);
    dailyMomo.push(mockMomo.filter(function(o) { return o.date === fullDate; }).length);
  });

  var svg = document.getElementById('trend-svg');
  var svgWidth = 420;
  var svgHeight = 200;
  var barWidth = 20;
  var gap = 40;
  var maxVal = Math.max.apply(null, dailyShopee.concat(dailyMomo)) || 1;
  var startX = 40;

  var svgContent = '';
  dates.forEach(function(d, i) {
    var x = startX + i * (barWidth * 2 + gap);
    var hShopee = (dailyShopee[i] / maxVal) * 140;
    var hMomo = (dailyMomo[i] / maxVal) * 140;

    // 蝦皮長條
    svgContent += '<rect x="' + x + '" y="' + (160 - hShopee) + '" width="' + barWidth + '" height="' + hShopee + '" fill="#ee4d2d"/>';
    // MOMO 長條
    svgContent += '<rect x="' + (x + barWidth + 2) + '" y="' + (160 - hMomo) + '" width="' + barWidth + '" height="' + hMomo + '" fill="#7b2d8b"/>';
    // 日期標籤
    svgContent += '<text x="' + (x + barWidth) + '" y="180" text-anchor="middle" font-size="11">' + d + '</text>';
    // 數字
    if (dailyShopee[i] > 0) svgContent += '<text x="' + (x + barWidth/2) + '" y="' + (155 - hShopee) + '" text-anchor="middle" font-size="10">' + dailyShopee[i] + '</text>';
    if (dailyMomo[i] > 0) svgContent += '<text x="' + (x + barWidth + 2 + barWidth/2) + '" y="' + (155 - hMomo) + '" text-anchor="middle" font-size="10">' + dailyMomo[i] + '</text>';
  });

  // 圖例
  svgContent += '<rect x="' + startX + '" y="190" width="12" height="12" fill="#ee4d2d"/>';
  svgContent += '<text x="' + (startX + 16) + '" y="200" font-size="11">蝦皮</text>';
  svgContent += '<rect x="' + (startX + 60) + '" y="190" width="12" height="12" fill="#7b2d8b"/>';
  svgContent += '<text x="' + (startX + 76) + '" y="200" font-size="11">MOMO</text>';

  svg.innerHTML = svgContent;
  svg.setAttribute('viewBox', '0 0 ' + svgWidth + ' ' + svgHeight);

  // 熱銷 TOP 5
  var productSales = {};
  allOrders.forEach(function(o) {
    if (!productSales[o.product]) productSales[o.product] = { qty: 0, revenue: 0 };
    productSales[o.product].qty += o.quantity;
    productSales[o.product].revenue += o.amount;
  });

  var sorted = Object.keys(productSales).map(function(p) {
    return { name: p, qty: productSales[p].qty, revenue: productSales[p].revenue };
  }).sort(function(a, b) { return b.qty - a.qty; }).slice(0, 5);

  var tbody = document.getElementById('top5-table').querySelector('tbody');
  tbody.innerHTML = '';
  sorted.forEach(function(item, i) {
    tbody.innerHTML += '<tr><td>' + (i + 1) + '</td><td>' + item.name + '</td><td>' + item.qty + '</td><td>$' + item.revenue.toLocaleString() + '</td></tr>';
  });
}

// 頁面載入後初始化儀表板
initDashboard();

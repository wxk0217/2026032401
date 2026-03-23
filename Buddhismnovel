<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>佛教小說集 - 數位文獻資料庫 (禪意升級版)</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;700&family=Zhi+Mang+Xing&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        :root {
            --bg-color: #F9F4E8;      /* 宣紙色 */
            --primary-color: #B5955D; /* 沉香金 */
            --text-color: #333333;    /* 古墨灰 */
            --border-color: #D2C1A5;
            --accent-color: #8C2727;  /* 朱砂紅 */
            --ink-color: rgba(51, 51, 51, 0.03); /* 水墨暈染顏色 */
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: 'Noto Serif TC', serif;
            line-height: 1.8;
            padding: 40px 20px;
            overflow-x: hidden;
            position: relative;
        }

        /* 水墨動態背景 */
        body::before {
            content: "";
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background-image: 
                radial-gradient(circle at 20% 30%, var(--ink-color) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, var(--ink-color) 0%, transparent 60%);
            z-index: -1;
            animation: inkWash 20s infinite alternate;
        }

        @keyframes inkWash {
            0% { background-position: 0% 0%; }
            100% { background-position: 100% 100%; }
        }

        .container {
            max-width: 1100px;
            margin: 0 auto;
            border: 1px solid var(--border-color);
            padding: 60px;
            background: rgba(255, 255, 255, 0.95); /* 半透明白色，透出背景水墨 */
            box-shadow: 0 4px 30px rgba(0,0,0,0.03);
            position: relative;
            backdrop-filter: blur(5px);
        }

        /* 裝飾線條 */
        .container::before, .container::after {
            content: "";
            position: absolute;
            border: 2px solid var(--primary-color);
            width: 30px;
            height: 30px;
            opacity: 0.6;
        }
        .container::before { top: 15px; left: 15px; border-right: 0; border-bottom: 0; }
        .container::after { bottom: 15px; right: 15px; border-left: 0; border-top: 0; }

        header {
            text-align: center;
            margin-bottom: 70px;
            border-bottom: 2px solid var(--primary-color);
            padding-bottom: 40px;
            position: relative;
        }

        header::after {
            content: "蓮"; /* 水墨蓮花插圖 (用文字代替，實際可用 SVG) */
            font-family: 'Zhi Mang Xing', cursive;
            font-size: 8rem;
            color: rgba(181, 149, 93, 0.1);
            position: absolute;
            bottom: -30px;
            right: 20px;
            z-index: -1;
        }

        h1 { 
            font-size: 3rem; 
            letter-spacing: 12px; 
            color: var(--accent-color); 
            font-family: 'Zhi Mang Xing', cursive;
            margin-bottom: 15px;
        }
        .subtitle { font-size: 1.2rem; color: #666; font-weight: normal;}

        section { margin-bottom: 70px; opacity: 0; transform: translateY(20px); transition: all 0.8s ease; }
        section.visible { opacity: 1; transform: translateY(0); }

        h2 {
            border-left: 6px solid var(--primary-color);
            padding-left: 20px;
            margin-bottom: 35px;
            color: var(--primary-color);
            font-size: 1.8rem;
            letter-spacing: 2px;
            position: relative;
        }

        h2::after {
            content: "";
            position: absolute;
            bottom: -10px; left: 0; width: 100px; height: 1px;
            background: var(--border-color);
        }

        /* 學者分類區 */
        .classification-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 25px;
        }
        .class-box {
            background: #FDFBFA;
            border: 1px inset var(--border-color);
            padding: 25px;
            transition: box-shadow 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        .class-box:hover { box-shadow: 0 5px 15px rgba(181, 149, 93, 0.1); }
        
        .class-box::after {
            content: "卷"; /* 水墨捲軸插圖 */
            font-family: 'Zhi Mang Xing', cursive;
            font-size: 5rem;
            color: rgba(181, 149, 93, 0.05);
            position: absolute;
            bottom: -10px; right: -10px;
        }

        .class-box h3 { font-size: 1.2rem; margin-bottom: 15px; color: var(--accent-color); border-bottom: 1px dashed var(--border-color); padding-bottom: 10px; }
        .class-box ul { list-style: none; padding-left: 5px; font-size: 0.95rem; color: #555; }
        .class-box li { margin-bottom: 8px; position: relative; padding-left: 15px; }
        .class-box li::before { content: "❖"; color: var(--primary-color); position: absolute; left: 0; font-size: 0.8rem; top: 2px; }

        /* 圖表區 */
        .charts-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin-bottom: 50px;
        }
        .chart-container {
            background: #fff;
            padding: 20px;
            border: 1px solid var(--border-color);
            border-radius: 4px;
            height: 350px;
            position: relative;
        }
        .chart-container h3 { text-align: center; font-size: 1rem; color: #666; margin-bottom: 15px; font-weight: normal;}

        /* 統計區 */
        .stats-container {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            background: var(--primary-color);
            background-image: linear-gradient(135deg, var(--primary-color) 0%, #c9ae7a 100%);
            color: white;
            padding: 40px;
            border-radius: 4px;
            margin-top: 20px;
            box-shadow: 0 10px 20px rgba(181, 149, 93, 0.15);
            position: relative;
        }
        
        .stats-container::after {
            content: "佛"; /* 水墨佛像剪影 */
            font-family: 'Zhi Mang Xing', cursive;
            font-size: 10rem;
            color: rgba(255, 255, 255, 0.08);
            position: absolute;
            top: -20px; left: 50%; transform: translateX(-50%);
            z-index: 0;
        }

        .stat-item { text-align: center; position: relative; z-index: 1; flex: 1; min-width: 150px; margin: 10px; }
        .stat-num { font-size: 3rem; font-weight: bold; display: block; font-family: 'Zhi Mang Xing', cursive; line-height: 1;}
        .stat-label { font-size: 1rem; opacity: 0.9; letter-spacing: 1px; margin-top: 5px; display: block;}

        /* 表格樣式 */
        .table-wrapper { overflow-x: auto; margin-top: 30px; box-shadow: 0 2px 10px rgba(0,0,0,0.02); }
        table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.9rem;
            min-width: 600px;
        }
        th {
            background: var(--primary-color);
            color: white;
            padding: 15px;
            text-align: left;
            letter-spacing: 1px;
            font-weight: normal;
        }
        td {
            padding: 12px 15px;
            border-bottom: 1px solid var(--border-color);
            color: #444;
        }
        tr:nth-child(even) { background-color: #FDFBFA; }
        tr:hover { background-color: #fcf9f2; }
        td:nth-child(3) { color: var(--accent-color); font-weight: bold; } /* 作者身分顏色突顯 */

        footer {
            margin-top: 80px;
            text-align: center;
            font-size: 0.9rem;
            color: #888;
            border-top: 1px solid var(--border-color);
            padding-top: 30px;
            position: relative;
        }
        
        footer::before {
            content: "☸"; /* 法輪標誌 */
            font-size: 1.5rem;
            color: var(--primary-color);
            position: absolute;
            top: -15px; left: 50%; transform: translateX(-50%);
            background: var(--bg-color);
            padding: 0 15px;
        }

        @media (max-width: 850px) {
            .charts-grid { grid-template-columns: 1fr; }
            .container { padding: 30px; }
            h1 { font-size: 2.2rem; letter-spacing: 8px; }
            .class-box { padding: 15px; }
        }
    </style>
</head>
<body>

<div class="container">
    <header>
        <h1>《佛教小說集》</h1>
        <p class="subtitle">數位文獻資料庫與結構分析</p>
        <p style="margin-top: 5px; color: #888;">朱橋編 ‧ 佛教文化出版社 (1960年11月)</p>
    </header>

    <section class="animate-section">
        <h2>故事性質多維分類</h2>
        <div class="classification-grid">
            <div class="class-box">
                <h3>范純武分類 [cite: 4-7]</h3>
                <ul>
                    <li>新創作題材的小說</li>
                    <li>雜揉個人經驗的小說</li>
                    <li>改編佛教故事的小說</li>
                </ul>
            </div>
            <div class="class-box">
                <h3>李玉珍分類 [cite: 8-14]</h3>
                <ul>
                    <li>改寫的佛經故事</li>
                    <li>鄉野傳奇式的勸善小說</li>
                    <li>以家庭情愛印證佛法</li>
                    <li>遊歷寺院和僧尼交遊記載</li>
                    <li>反共懷鄉的小說創作</li>
                    <li>無法歸類</li>
                </ul>
            </div>
            <div class="class-box">
                <h3>丁敏分類 [cite: 15-21]</h3>
                <ul>
                    <li>借用佛教題材</li>
                    <li>賦予佛教神佛中國性格</li>
                    <li>以佛教故事為敘述結構</li>
                    <li>以具體事物譬喻佛法</li>
                    <li>以佛教幻設與時間為軸</li>
                    <li>因果報應</li>
                </ul>
            </div>
            <div class="class-box">
                <h3>吳賢愷分類 [cite: 22-28]</h3>
                <ul>
                    <li>佛教故事改編</li>
                    <li>佛教哲理和戒律</li>
                    <li>果報思想</li>
                    <li>佛僧寺廟對情節有推進作用</li>
                    <li>佛僧寺廟作為背景或填充</li>
                    <li>關係不明</li>
                </ul>
            </div>
        </div>
    </section>

    <section class="animate-section">
        <h2>數據可視化分析</h2>
        <div class="charts-grid">
            <div class="chart-container">
                <h3>作者身分分佈 (共32人) [cite: 31-35]</h3>
                <canvas id="authorChart"></canvas>
            </div>
            <div class="chart-container">
                <h3>作品佛教性質分類 (篇數) [cite: 36-42]</h3>
                <canvas id="natureChart"></canvas>
            </div>
        </div>
        
        <div class="stats-container">
            <div class="stat-item">
                <span class="stat-numCount" data-target="32">0</span><span class="stat-num" style="display:inline;">篇</span>
                <span class="stat-label">收錄總篇目</span>
            </div>
            <div class="stat-item">
                <span class="stat-numCount" data-target="13">0</span><span class="stat-num" style="display:inline;">人</span>
                <span class="stat-label">曾任軍職作者 [cite: 32]</span>
            </div>
            <div class="stat-item">
                <span class="stat-numCount" data-target="5">0</span><span class="stat-num" style="display:inline;">人</span>
                <span class="stat-label">僧尼作者 [cite: 33]</span>
            </div>
            <div class="stat-item">
                <span class="stat-numCount" data-target="10">0</span><span class="stat-num" style="display:inline;">篇</span>
                <span class="stat-label">最主要類別：背景填充 [cite: 41]</span>
            </div>
        </div>
    </section>

    <section class="animate-section">
        <h2>完整作品清單錄 (依吳賢愷分類) [cite: 30]</h2>
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>作者</th>
                        <th>篇名</th>
                        <th>身分</th>
                        <th>原出處</th>
                        <th>佛教性質 (吳賢愷分類)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>摩迦 (星雲)</td><td>不同的愛</td><td>僧</td><td></td><td>佛教哲理和戒律</td></tr>
                    <tr><td>常覺</td><td>一顆沉沒的摩尼珠</td><td>僧</td><td></td><td>佛教哲理和戒律</td></tr>
                    <tr><td>自立</td><td>回頭是岸</td><td>僧</td><td></td><td>佛教哲理和戒律</td></tr>
                    <tr><td>孟瑤</td><td>聲色場</td><td>普通作家</td><td></td><td>背景或敘述填充</td></tr>
                    <tr><td>郭嗣汾</td><td>紅葉</td><td>軍</td><td></td><td>背景或敘述填充</td></tr>
                    <tr><td>周君亮</td><td>荒寺之一夜</td><td>普通作家</td><td>《暢流》19卷3期</td><td>佛教哲理和戒律</td></tr>
                    <tr><td>公孫嬿</td><td>普陀緣</td><td>軍</td><td></td><td>情節推進作用</td></tr>
                    <tr><td>楚軍</td><td>雨</td><td>軍</td><td></td><td>背景或敘述填充</td></tr>
                    <tr><td>魏希文</td><td>胡家父子</td><td>軍</td><td>《晨光》7卷10期</td><td>關係不明</td></tr>
                    <tr><td>墨人</td><td>馬腳</td><td>軍</td><td></td><td>關係不明</td></tr>
                    <tr><td>劉心皇</td><td>幻情錄</td><td>普通作家</td><td></td><td>背景或敘述填充</td></tr>
                    <tr><td>西帆</td><td>人間的奇蹟</td><td>軍</td><td></td><td>情節推進作用</td></tr>
                    <tr><td>鄧文來</td><td>小蘭</td><td>軍</td><td></td><td>背景或敘述填充</td></tr>
                    <tr><td>鐘雷</td><td>紅塵</td><td>軍</td><td>《晨光》5卷6-8期</td><td>情節推進作用</td></tr>
                    <tr><td>繁露</td><td>髮緣</td><td>普通作家</td><td></td><td>情節推進作用</td></tr>
                    <tr><td>喬霖 (彭樹楷)</td><td>重生</td><td>軍</td><td></td><td>情節推進作用</td></tr>
                    <tr><td>潘琦君</td><td>悟</td><td>虔誠</td><td></td><td>背景或敘述填充</td></tr>
                    <tr><td>張慈蓮</td><td>三角</td><td>僧</td><td></td><td>情節推進作用</td></tr>
                    <tr><td>胡國偉</td><td>桃花開九月</td><td>普通作家</td><td></td><td>情節推進作用</td></tr>
                    <tr><td>絜邨</td><td>須大拏太子的故事</td><td>虔誠</td><td></td><td>佛教故事改編</td></tr>
                    <tr><td>杜雲之</td><td>大慈悲嶺</td><td>普通作家</td><td></td><td>佛教哲理和戒律</td></tr>
                    <tr><td>陳劍慧</td><td>自殺者的悲歌</td><td>軍、虔誠</td><td></td><td>佛教哲理和戒律</td></tr>
                    <tr><td>宣建人</td><td>為善最樂</td><td>軍</td><td></td><td>果報思想</td></tr>
                    <tr><td>志琨</td><td>喜帖</td><td>普通作家</td><td></td><td>情節推進作用</td></tr>
                    <tr><td>鄭心本</td><td>皈依</td><td>虔誠</td><td></td><td>情節推進作用</td></tr>
                    <tr><td>觀心</td><td>樓上樓下</td><td>普通作家</td><td></td><td>背景或敘述填充</td></tr>
                    <tr><td>謝冰瑩</td><td>永恆的友情</td><td>軍、虔誠</td><td></td><td>關係不明</td></tr>
                    <tr><td>阮囊</td><td>朝來寒雨晚來風</td><td>軍</td><td></td><td>背景或敘述填充</td></tr>
                    <tr><td>林海音</td><td>母親的祕密</td><td>普通作家</td><td></td><td>關係不明</td></tr>
                    <tr><td>曼濤</td><td>布施</td><td>僧</td><td></td><td>佛教哲理和戒律</td></tr>
                    <tr><td>蕭傳文</td><td>白狐</td><td>普通作家</td><td></td><td>背景或敘述填充</td></tr>
                    <tr><td>朱橋</td><td>畫像</td><td>普通作家</td><td></td><td>背景或敘述填充</td></tr>
                </tbody>
            </table>
        </div>
    </section>

    <footer>
        <p>數位文獻整理 ‧ 基於 1960 年《佛教小說集》研究資料</p>
        <p style="font-size: 0.8rem; margin-top: 5px;">網站設計：GIT 網站設計專家</p>
    </footer>
</div>

<script>
    // 1. 捲動載入動畫
    const sections = document.querySelectorAll('.animate-section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // 觸發數字滾動
                if (entry.target.querySelector('.stat-numCount')) {
                    startCounter(entry.target);
                }
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));

    // 2. 數字滾動動畫
    function startCounter(section) {
        const counters = section.querySelectorAll('.stat-numCount');
        counters.forEach(counter => {
            if (counter.classList.contains('counted')) return;
            const target = +counter.getAttribute('data-target');
            let count = 0;
            const speed = target / 20; // 控制速度
            const updateCount = () => {
                count += speed;
                if (count < target) {
                    counter.innerText = Math.ceil(count);
                    setTimeout(updateCount, 50);
                } else {
                    counter.innerText = target;
                    counter.classList.add('counted');
                }
            };
            updateCount();
        });
    }

    // 3. 圖表繪製 (Chart.js)
    const ctxAuthor = document.getElementById('authorChart').getContext('2d');
    const ctxNature = document.getElementById('natureChart').getContext('2d');
    
    // 東方沉穩色調
    const chartColors = ['#B5955D', '#8C2727', '#5D737E', '#A2AD91', '#D2C1A5', '#766B57'];

    // 作者身分餅圖
    new Chart(ctxAuthor, {
        type: 'pie',
        data: {
            labels: ['軍職 (13)', '僧尼 (5)', '虔誠者 (5)', '普通作家 (11)'],
            datasets: [{
                data: [13, 5, 5, 11],
                backgroundColor: chartColors.slice(0, 4),
                borderWidth: 1,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { font: { family: 'Noto Serif TC' } } }
            },
            animation: { animateScale: true, animateRotate: true }
        }
    });

    // 佛教性質柱狀圖
    new Chart(ctxNature, {
        type: 'bar',
        data: {
            labels: ['故事改編', '哲理戒律', '果報思想', '情節推進', '背景填充', '關係不明'],
            datasets: [{
                label: '篇數',
                data: [1, 7, 1, 9, 10, 4],
                backgroundColor: chartColors[0],
                borderColor: chartColors[0],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, ticks: { stepSize: 2 } }
            },
            plugins: {
                legend: { display: false },
                tooltip: { titleFont: { family: 'Noto Serif TC' }, bodyFont: { family: 'Noto Serif TC' } }
            }
        }
    });
</script>

</body>
</html>

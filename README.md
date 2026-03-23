<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>《佛教小說集》數位文獻研究統合資料庫</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;700&family=Ma+Shan+Zheng&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        :root {
            --bg: #F4F1EA;
            --paper: #FFFFFF;
            --primary: #A68A56;
            --text: #2C2C2C;
            --accent: #8E2929;
            --border: #D6C5A0;
            --max-w: 1200px;
            --base-font: 18px;
        }

        body.dark-mode {
            --bg: #121212;
            --paper: #1E1E1E;
            --text: #D1D1D1;
            --border: #333;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; scroll-behavior: smooth; }

        body {
            background-color: var(--bg);
            color: var(--text);
            font-family: 'Noto Serif TC', serif;
            font-size: var(--base-font);
            line-height: 1.8;
            transition: all 0.4s ease;
        }

        /* 右側懸浮工具箱 */
        #settings-box {
            position: fixed; top: 20px; right: 20px; z-index: 10000;
            background: var(--paper); border: 2px solid var(--primary);
            padding: 15px; border-radius: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.2);
            width: 200px;
        }
        .s-title { font-size: 14px; font-weight: bold; color: var(--accent); margin-bottom: 10px; border-bottom: 1px solid var(--border); }
        .s-group { margin-bottom: 12px; }
        .s-label { font-size: 12px; display: block; margin-bottom: 4px; opacity: 0.7; }
        .s-btns { display: flex; flex-wrap: wrap; gap: 4px; }
        .s-btns button {
            flex: 1; padding: 6px; border: 1px solid var(--border);
            background: var(--bg); color: var(--text);
            cursor: pointer; font-size: 11px; border-radius: 4px; transition: 0.2s;
        }
        .s-btns button.active { background: var(--primary); color: white; border-color: var(--primary); }

        /* 響應式容器控制 */
        .content-wrapper {
            width: 100%; max-width: var(--max-w); margin: 0 auto;
            background: var(--paper); padding: 100px 80px;
            border-left: 1px solid var(--border); border-right: 1px solid var(--border);
            position: relative; transition: max-width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* 標題與裝飾 */
        header { text-align: center; margin-bottom: 80px; }
        h1 { font-family: 'Ma Shan Zheng', cursive; font-size: 5rem; color: var(--accent); margin-bottom: 10px; }
        .sub-header { font-size: 1.3rem; letter-spacing: 5px; color: var(--primary); font-weight: bold; }
        .info-bar { margin-top: 20px; font-size: 1rem; color: #777; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 10px 0; }

        nav {
            position: sticky; top: 0; background: var(--paper); z-index: 999;
            display: flex; justify-content: center; gap: 25px; padding: 20px 0;
            border-bottom: 1px solid var(--border); margin-bottom: 60px;
        }
        nav a { text-decoration: none; color: var(--text); font-weight: 700; font-size: 1rem; transition: 0.3s; }
        nav a:hover { color: var(--accent); }

        section { margin-bottom: 120px; }
        h2 { font-size: 2.5rem; color: var(--primary); margin-bottom: 40px; display: flex; align-items: center; }
        h2::after { content: ""; flex: 1; height: 1px; background: var(--border); margin-left: 20px; }

        /* 文字內容排版 */
        .academic-p { margin-bottom: 25px; text-align: justify; }
        .highlight-box {
            background: rgba(166, 138, 86, 0.08); border-left: 8px solid var(--accent);
            padding: 40px; margin: 40px 0; border-radius: 0 15px 15px 0;
        }
        .highlight-box h3 { color: var(--accent); margin-bottom: 20px; font-size: 1.6rem; }

        /* 分類理論網格 */
        .grid-4 { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 30px; }
        .card-theory { border: 1px solid var(--border); padding: 25px; background: var(--bg); transition: 0.3s; }
        .card-theory:hover { border-color: var(--accent); box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
        .card-theory h4 { color: var(--accent); margin-bottom: 15px; border-bottom: 2px solid var(--primary); padding-bottom: 5px; }
        .card-theory ul { list-style: none; font-size: 0.95rem; }
        .card-theory li { margin-bottom: 8px; position: relative; padding-left: 20px; }
        .card-theory li::before { content: "卍"; position: absolute; left: 0; color: var(--primary); font-size: 0.8rem; }

        /* 數據表格 */
        .table-container { width: 100%; overflow-x: auto; border: 1px solid var(--border); margin: 30px 0; border-radius: 8px; }
        table { width: 100%; border-collapse: collapse; min-width: 1000px; background: var(--paper); }
        th { background: var(--primary); color: white; padding: 18px; text-align: left; font-size: 1.1rem; }
        td { padding: 15px; border-bottom: 1px solid var(--border); font-size: 0.95rem; line-height: 1.6; }
        tr:nth-child(even) { background: rgba(0,0,0,0.02); }
        tr:hover { background: rgba(142, 41, 41, 0.05); }

        .chart-section { padding: 40px; border: 1px solid var(--border); background: var(--paper); border-radius: 12px; }

        /* 水墨背景 */
        .ink-bg { position: fixed; z-index: -1; opacity: 0.06; pointer-events: none; }
        .ink-1 { top: 5%; left: -100px; width: 600px; }
        .ink-2 { bottom: 5%; right: -100px; width: 500px; transform: rotate(180deg); }

        footer { text-align: center; padding: 100px; border-top: 1px solid var(--border); color: #888; font-size: 1rem; }

        @media (max-width: 768px) {
            .content-wrapper { padding: 40px 20px; }
            h1 { font-size: 3rem; }
            nav { gap: 10px; font-size: 0.8rem; flex-wrap: wrap; }
            #settings-box { display: none; } /* 手機端自動全屏 */
        }
    </style>
</head>
<body>

    <svg class="ink-bg ink-1" viewBox="0 0 100 100"><path fill="currentColor" d="M50,10 C60,40 90,50 100,60 C70,70 60,90 50,100 C40,90 30,70 0,60 C10,50 40,40 50,10 Z" /></svg>
    <svg class="ink-bg ink-2" viewBox="0 0 100 100"><path fill="currentColor" d="M50,10 C60,40 90,50 100,60 C70,70 60,90 50,100 C40,90 30,70 0,60 C10,50 40,40 50,10 Z" /></svg>

    <div id="settings-box">
        <div class="s-title">數位閱覽工具</div>
        <div class="s-group">
            <span class="s-label">載體模擬 (寬度)</span>
            <div class="s-btns">
                <button class="active" onclick="changeView('1200px', this)">電腦版</button>
                <button onclick="changeView('850px', this)">平板版</button>
                <button onclick="changeView('400px', this)">手機版</button>
            </div>
        </div>
        <div class="s-group">
            <span class="s-label">視覺模式</span>
            <div class="s-btns">
                <button class="active" onclick="changeMode('light', this)">日間宣紙</button>
                <button onclick="changeMode('dark', this)">夜間墨池</button>
            </div>
        </div>
        <div class="s-group">
            <span class="s-label">文本大小</span>
            <div class="s-btns">
                <button onclick="changeFont('16px', this)">標準</button>
                <button class="active" onclick="changeFont('19px', this)">舒適</button>
                <button onclick="changeFont('22px', this)">清晰</button>
            </div>
        </div>
    </div>

    <div class="content-wrapper" id="main-content">
        <header>
            <h1>佛教小說集</h1>
            <div class="sub-header">數位文獻與學術統合資料庫</div>
            <div class="info-bar">
                朱橋 編 ‧ 佛教文化出版社 ‧ 1960年11月 ‧ 數位重建版
            </div>
        </header>

        <nav>
            <a href="#section-theory">性質分類</a>
            <a href="#section-history">歷史脈絡</a>
            <a href="#section-scholar">學術觀點</a>
            <a href="#section-compare">篇目研究</a>
            <a href="#section-database">完整資料庫</a>
        </nav>

        <section id="section-theory">
            <h2>故事性質分類理論</h2>
            <div class="academic-p">
                針對《佛教小說集》的作品性質，學界曾提出多種分類維度。本庫統合范純武、李玉珍、丁敏及吳賢愷四家理論，呈現其對佛教文藝定義的演變。
            </div>
            <div class="grid-4">
                <div class="card-theory">
                    <h4>范純武 分類</h4>
                    <ul>
                        <li>新創作題材的小說</li>
                        <li>雜揉個人經驗的小說</li>
                        <li>改編佛教故事的小說</li>
                    </ul>
                </div>
                <div class="card-theory">
                    <h4>李玉珍 分類</h4>
                    <ul>
                        <li>改寫的佛經故事</li>
                        <li>鄉野傳奇式的勸善小說</li>
                        <li>以家庭情愛印證佛法</li>
                        <li>遊歷寺院與僧尼交遊記載</li>
                        <li>反共懷鄉的小說創作</li>
                        <li>無法歸類之作品</li>
                    </ul>
                </div>
                <div class="card-theory">
                    <h4>丁敏 分類</h4>
                    <ul>
                        <li>借用佛教題材</li>
                        <li>賦予佛教神佛中國性格</li>
                        <li>以佛教故事典故為結構</li>
                        <li>以具體事物譬喻佛法</li>
                        <li>佛教幻設與停格時間軸</li>
                        <li>因果報應思想</li>
                    </ul>
                </div>
                <div class="card-theory">
                    <h4>吳賢愷 分類</h4>
                    <ul>
                        <li>佛教故事改編</li>
                        <li>佛教哲理和戒律</li>
                        <li>果報思想</li>
                        <li>佛僧對情節具推進作用</li>
                        <li>佛僧作為背景或填充</li>
                        <li>關係不明</li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="section-history">
            <h2>反共文學與戰鬥文藝的衰退 (1955-1956)</h2>
            <div class="academic-p">
                1955年「戰鬥文藝」口號的提出，實際上標示著反共文學的挫敗與轉向。隨後1956年發生的數件大事，決定了當代台灣文學史的走向：
            </div>
            <div class="highlight-box">
                <h3>關鍵歷史轉折點</h3>
                <p><b>1. 《文藝創作》停刊與文獎會解散：</b> 標誌著官方戰鬥文藝體制的鬆動與解體。</p>
                <p><b>2. 美國壓制與張道藩失勢：</b> 陳明成指出，張道藩的失勢與美國對當時政治環境的壓制，是反共文學衰退的重要外因。</p>
                <p><b>3. 向公務轉向：</b> 封德屏觀察到，張道藩此後專心投入公務，戰鬥文藝不再是其首要關切。</p>
                <p><b>4. 反共文學作為類型：</b> 王德威認為應將反共文學視為一種「類型文學」，而「戰鬥」則轉化為一種人生的精神。</p>
            </div>
        </section>

        <section id="section-scholar">
            <h2>核心學術觀點統合</h2>
            <div class="academic-p">
                關於《佛教小說集》及其背後的作家群體（特別是軍中作家），多位學者提出了具備深度的研究視角：
            </div>
            <div class="highlight-box" style="background: var(--paper); border: 1px solid var(--border);">
                <p><b>• 翁伯川《「軍中三劍客」的文學創作與活動研究》(2017)：</b> 提出關鍵辨析：<b>「軍中作家」不等同於「軍人作家」，更不等同於「反共作家」</b>。這為本集中的朱橋、郭嗣汾等人提供了更立體的定位。</p>
                <hr style="margin: 20px 0; border: none; border-top: 1px dashed var(--border);">
                <p><b>• 鍾肇政的對日態度：</b> 探討文藝作品中民族意識的消長，以及對日本文化、戰爭記憶的複雜情感處理。</p>
                <hr style="margin: 20px 0; border: none; border-top: 1px dashed var(--border);">
                <p><b>• 戰鬥文藝的性質：</b> 一種「沒有類型的類型」，涵蓋了民族主義、健康寫實主義等多種面相，而非單一的政治宣傳。</p>
            </div>
        </section>

        <section id="section-compare">
            <h2>比對研究：反共懷鄉篇目認定差異</h2>
            <div class="academic-p">
                針對《佛教小說集》中具有「反共懷鄉」性質的作品，李玉珍與吳賢愷兩位學者在選錄標準上有顯著差異。
            </div>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th style="width: 200px;">學者</th>
                            <th style="width: 150px;">篇數統計</th>
                            <th>詳細選錄篇目</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>李玉珍</b></td>
                            <td style="color: var(--accent); font-weight: bold; font-size: 1.5rem;">11 篇</td>
                            <td>〈紅葉〉、〈雨〉、〈人間的奇蹟〉、〈紅塵〉、〈三角〉、〈喜帖〉、〈朝來寒雨晚來風〉、〈荒寺的一夜〉、〈普陀緣〉、〈重生〉、〈佈施〉</td>
                        </tr>
                        <tr>
                            <td><b>吳賢愷</b></td>
                            <td style="color: var(--primary); font-weight: bold; font-size: 1.5rem;">5 篇</td>
                            <td>〈普陀緣〉、〈紅塵〉、〈重生〉、〈三角〉、〈朝來寒雨晚來風〉</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="chart-section">
                <canvas id="diffChart" height="120"></canvas>
            </div>
        </section>

        <section id="section-database">
            <h2>完整作品全錄 (32 篇數據庫)</h2>
            <div class="academic-p">
                以下表格收錄 1960 年版《佛教小說集》完整 32 篇作品，並標註作者身分、原出處卷期以及吳賢愷對其佛教性質之分類：
            </div>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>作者</th>
                            <th>篇名</th>
                            <th>作者身分</th>
                            <th>原出處 / 時間詳情</th>
                            <th>佛教性質分類 (吳賢愷系統)</th>
                        </tr>
                    </thead>
                    <tbody id="data-body">
                        </tbody>
                </table>
            </div>
        </section>

        <footer>
            <p>數位整合研究：2024 文獻學數位化專案</p>
            <p style="margin-top:15px; font-size: 0.8rem;">參考資料：翁伯川(2017)、陳明成、封德屏、王德威、鍾肇政等學術文獻與《佛教小說集》原典</p>
        </footer>
    </div>

    <script>
        // 核心資料庫 (完整 32 筆)
        const database = [
            ["摩迦（星雲）", "不同的愛", "僧", "無", "佛教哲理和戒律"],
            ["常覺", "一顆沉沒的摩尼珠", "僧", "無", "佛教哲理和戒律"],
            ["自立", "回頭是岸", "僧", "無", "佛教哲理和戒律"],
            ["孟瑤", "聲色場", "普通作家", "無", "佛、僧人、寺廟作為背景或敘述填充"],
            ["郭嗣汾", "紅葉", "軍", "無", "佛、僧人、寺廟作為背景或敘述填充"],
            ["周君亮", "荒寺之一夜", "普通作家", "《暢流》19卷3期，1959年3月", "佛教哲理和戒律"],
            ["公孫嬿", "普陀緣", "軍", "無", "佛、僧人、寺廟對小說情節有推進作用"],
            ["楚軍", "雨", "軍", "無", "佛、僧人、寺廟作為背景或敘述填充"],
            ["魏希文", "胡家父子", "軍", "《晨光》7卷10期，1959年12月", "關係不明"],
            ["墨人", "馬腳", "軍", "無", "關係不明"],
            ["劉心皇", "幻情錄", "普通作家", "無", "佛、僧人、寺廟作為背景或敘述填充"],
            ["西帆", "人間的奇蹟", "軍", "無", "佛、僧人、寺廟對小說情節有推進作用"],
            ["鄧文來", "小蘭", "軍", "無", "佛、僧人、寺廟作為背景或敘述填充"],
            ["鐘雷", "紅塵", "軍", "《晨光》5卷6-8期，1957年8-10月", "佛、僧人、寺廟對小說情節有推進作用"],
            ["繁露", "髮緣", "普通作家", "無", "佛、僧人、寺廟對小說情節有推進作用"],
            ["喬霖（彭樹楷）", "重生", "軍", "無", "佛、僧人、寺廟對小說情節有推進作用"],
            ["潘琦君", "悟", "虔誠", "無", "佛、僧人、寺廟作為背景或敘述填充"],
            ["張慈蓮", "三角", "僧", "無", "佛、僧人、寺廟對小說情節有推進作用"],
            ["胡國偉", "桃花開九月", "普通作家", "無", "佛、僧人、寺廟對小說情節有推進作用"],
            ["絜邨", "須大拏太子的故事", "虔誠", "無", "佛教故事改編"],
            ["杜雲之", "大慈悲嶺", "普通作家", "無", "佛教哲理和戒律"],
            ["陳劍慧", "自殺者的悲歌", "軍、虔誠", "無", "佛教哲理和戒律"],
            ["宣建人", "為善最樂", "軍", "無", "果報思想"],
            ["志琨", "喜帖", "普通作家", "無", "佛、僧人、寺廟對小說情節有推進作用"],
            ["鄭心本", "皈依", "虔誠", "無", "佛、僧人、寺廟對小說情節有推進作用"],
            ["觀心", "樓上樓下", "普通作家", "無", "佛、僧人、寺廟作為背景或敘述填充"],
            ["謝冰瑩", "永恆的友情", "軍、虔誠", "無", "關係不明"],
            ["阮囊", "朝來寒雨晚來風", "軍", "無", "佛、僧人、寺廟作為背景或敘述填充"],
            ["林海音", "母親的祕密", "普通作家", "無", "關係不明"],
            ["曼濤", "佈施", "僧", "無", "佛教哲理和戒律"],
            ["蕭傳文", "白狐", "普通作家", "無", "佛、僧人、寺廟作為背景或敘述填充"],
            ["朱橋", "畫像", "普通作家", "無", "佛、僧人、寺廟作為背景或敘述填充"]
        ];

        // 表格填充
        const tbody = document.getElementById('data-body');
        database.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach((cell, index) => {
                const td = document.createElement('td');
                td.textContent = cell;
                if(index === 1) td.style.fontWeight = "bold";
                if(index === 2 && cell.includes("軍")) td.style.color = "#4a5d23";
                if(index === 2 && cell.includes("僧")) td.style.color = "#8e2929";
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });

        // 圖表邏輯
        const ctx = document.getElementById('diffChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['李玉珍 選錄範圍', '吳賢愷 選錄範圍'],
                datasets: [{
                    label: '「反共懷鄉」作品篇數',
                    data: [11, 5],
                    backgroundColor: ['rgba(142, 41, 41, 0.8)', 'rgba(166, 138, 86, 0.8)'],
                    borderColor: ['#8E2929', '#A68A56'],
                    borderWidth: 2
                }]
            },
            options: {
                indexAxis: 'y',
                plugins: { legend: { display: false } },
                scales: { x: { beginAtZero: true, max: 15 } }
            }
        });

        // 閱覽工具邏輯
        function changeView(w, btn) {
            document.getElementById('main-content').style.maxWidth = w;
            setActive(btn);
        }
        function changeMode(mode, btn) {
            document.body.className = (mode === 'dark' ? 'dark-mode' : '');
            setActive(btn);
        }
        function changeFont(size, btn) {
            document.documentElement.style.setProperty('--base-font', size);
            setActive(btn);
        }
        function setActive(btn) {
            btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }
    </script>
</body>
</html>

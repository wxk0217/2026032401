<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>佛教小說集：數位研究與文獻統合資料庫</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;700&family=Ma+Shan+Zheng&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        :root {
            --bg-color: #F4F1EA;
            --paper-color: #FFFFFF;
            --primary-color: #A68A56;
            --text-color: #2C2C2C;
            --accent-color: #8E2929;
            --border-color: #D6C5A0;
            --max-w: 1200px;
            --font-size: 18px;
        }

        body.dark-mode {
            --bg-color: #121212;
            --paper-color: #1E1E1E;
            --text-color: #D1D1D1;
            --border-color: #333;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; scroll-behavior: smooth; }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: 'Noto Serif TC', serif;
            font-size: var(--font-size);
            line-height: 1.8;
            transition: all 0.3s ease;
        }

        /* 側邊閱覽工具箱 */
        .settings-panel {
            position: fixed; top: 20px; right: 20px; z-index: 9999;
            background: var(--paper-color); border: 2px solid var(--primary-color);
            padding: 15px; border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            width: 180px;
        }
        .settings-panel h4 { font-size: 14px; margin-bottom: 10px; color: var(--accent-color); border-bottom: 1px solid var(--border-color); }
        .setting-item { margin-bottom: 15px; }
        .setting-label { font-size: 12px; display: block; margin-bottom: 5px; opacity: 0.8; }
        .btn-group { display: flex; flex-wrap: wrap; gap: 5px; }
        button {
            flex: 1; padding: 5px; border: 1px solid var(--border-color);
            background: var(--bg-color); color: var(--text-color);
            cursor: pointer; font-size: 12px; border-radius: 4px;
        }
        button.active { background: var(--primary-color); color: white; border-color: var(--primary-color); }

        /* 主佈局 */
        .content-container {
            width: 100%; max-width: var(--max-w); margin: 0 auto;
            background: var(--paper-color); padding: 80px 60px;
            border-left: 1px solid var(--border-color); border-right: 1px solid var(--border-color);
            transition: max-width 0.5s ease; position: relative;
        }

        header { text-align: center; margin-bottom: 60px; border-bottom: 3px double var(--primary-color); padding-bottom: 40px; }
        h1 { font-family: 'Ma Shan Zheng', cursive; font-size: 4.5rem; color: var(--accent-color); margin: 0; }
        .header-meta { font-size: 1.2rem; margin-top: 15px; letter-spacing: 4px; color: var(--primary-color); }

        nav {
            position: sticky; top: 0; background: var(--paper-color); z-index: 100;
            display: flex; justify-content: center; gap: 30px; padding: 15px 0;
            border-bottom: 1px solid var(--border-color); margin-bottom: 50px;
        }
        nav a { text-decoration: none; color: var(--text-color); font-weight: bold; font-size: 1rem; transition: 0.3s; }
        nav a:hover { color: var(--accent-color); }

        section { margin-bottom: 100px; }
        h2 { font-size: 2.2rem; color: var(--primary-color); margin-bottom: 30px; display: flex; align-items: center; }
        h2::after { content: ""; flex: 1; height: 1px; background: var(--border-color); margin-left: 20px; }

        /* 內文樣式 */
        .text-block { margin-bottom: 30px; text-align: justify; }
        .scholar-quote {
            background: rgba(175, 146, 99, 0.05); border-left: 6px solid var(--accent-color);
            padding: 30px; margin: 30px 0; border-radius: 0 10px 10px 0;
        }
        .scholar-quote h3 { margin-bottom: 15px; color: var(--accent-color); font-size: 1.4rem; }
        
        /* 四家分類卡片 */
        .theory-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
        .theory-card { border: 1px solid var(--border-color); padding: 20px; background: var(--bg-color); }
        .theory-card h4 { color: var(--accent-color); margin-bottom: 10px; border-bottom: 1px dashed var(--primary-color); }
        .theory-card ul { list-style: none; padding-left: 10px; font-size: 0.95rem; }
        .theory-card li { margin-bottom: 5px; position: relative; padding-left: 15px; }
        .theory-card li::before { content: "•"; position: absolute; left: 0; color: var(--primary-color); }

        /* 比對表格 */
        .compare-section { margin-top: 40px; }
        .table-box { width: 100%; overflow-x: auto; border: 1px solid var(--border-color); margin: 20px 0; }
        table { width: 100%; border-collapse: collapse; min-width: 900px; background: var(--paper-color); }
        th { background: var(--primary-color); color: white; padding: 15px; text-align: left; font-size: 1rem; }
        td { padding: 12px 15px; border-bottom: 1px solid var(--border-color); font-size: 0.9rem; vertical-align: top; }
        tr:hover { background: rgba(166, 138, 86, 0.05); }

        /* 背景水墨 */
        .watermark { position: fixed; z-index: -1; opacity: 0.04; pointer-events: none; }
        .lotus { top: 10%; right: -50px; width: 500px; }

        footer { text-align: center; padding: 80px; border-top: 1px solid var(--border-color); color: #888; font-size: 0.9rem; }

        @media (max-width: 768px) {
            .content-container { padding: 40px 20px; }
            h1 { font-size: 2.8rem; }
            nav { gap: 10px; font-size: 0.8rem; }
        }
    </style>
</head>
<body>

    <svg class="watermark lotus" viewBox="0 0 100 100"><path fill="currentColor" d="M50,5 Q70,40 95,50 Q70,60 50,95 Q30,60 5,50 Q30,40 50,5" /></svg>

    <div class="settings-panel">
        <h4>閱覽工具箱</h4>
        <div class="setting-item">
            <span class="setting-label">載體模擬</span>
            <div class="btn-group">
                <button class="active" onclick="setView('1200px', this)">電腦</button>
                <button onclick="setView('768px', this)">平板</button>
                <button onclick="setView('375px', this)">手機</button>
            </div>
        </div>
        <div class="setting-item">
            <span class="setting-label">色彩模式</span>
            <div class="btn-group">
                <button class="active" onclick="setMode('light', this)">宣紙</button>
                <button onclick="setMode('dark', this)">墨池</button>
            </div>
        </div>
        <div class="setting-item">
            <span class="setting-label">字體大小</span>
            <div class="btn-group">
                <button onclick="setFont('16px', this)">小</button>
                <button class="active" onclick="setFont('18px', this)">中</button>
                <button onclick="setFont('22px', this)">大</button>
            </div>
        </div>
    </div>

    <div class="content-container" id="main-view">
        <header>
            <h1>佛教小說集</h1>
            <p class="header-meta">朱橋 編 ‧ 佛教文化出版社 ‧ 1960年11月</p>
        </header>

        <nav>
            <a href="#theory">分類理論</a>
            <a href="#history">歷史背景</a>
            <a href="#scholar">學術爭鳴</a>
            <a href="#compare">比對研究</a>
            <a href="#database">完整清單</a>
        </nav>

        <section id="theory">
            <h2>故事性質分類體系</h2>
            <div class="theory-grid">
                <div class="theory-card">
                    <h4>范純武 分類</h4>
                    <ul>
                        <li>新創作題材的小說</li>
                        <li>雜揉個人經驗的小說</li>
                        <li>改編佛教故事的小說</li>
                    </ul>
                </div>
                <div class="theory-card">
                    <h4>李玉珍 分類</h4>
                    <ul>
                        <li>改寫的佛經故事</li>
                        <li>鄉野傳奇式的勸善小說</li>
                        <li>以家庭情愛印證佛法的小說</li>
                        <li>遊歷寺院和僧尼交遊的記載</li>
                        <li>反共懷鄉的小說創作</li>
                        <li>無法歸類</li>
                    </ul>
                </div>
                <div class="theory-card">
                    <h4>丁敏 分類</h4>
                    <ul>
                        <li>借用佛教題材</li>
                        <li>賦予佛教神佛中國性格</li>
                        <li>以佛教故事和典故為敘述結構</li>
                        <li>以具體事物譬喻佛法</li>
                        <li>以佛教幻設和當下停格的時間為軸</li>
                        <li>因果報應</li>
                    </ul>
                </div>
                <div class="theory-card">
                    <h4>吳賢愷 分類</h4>
                    <ul>
                        <li>佛教故事改編</li>
                        <li>佛教哲理和戒律</li>
                        <li>果報思想</li>
                        <li>佛僧對小說情節有推進作用</li>
                        <li>佛僧作為背景或敘述填充</li>
                        <li>關係不明</li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="history">
            <h2>反共文學與戰鬥文藝的衰退</h2>
            <div class="text-block">
                <p>1955年戰鬥文藝口號的提出，實際上標示著反共文學的挫敗。進入1956年後，反共文學與戰鬥文藝顯著衰退，具體標誌為：</p>
                <div class="scholar-quote">
                    <p>• <b>《文藝創作》停刊：</b> 當時最具影響力的官辦文學雜誌退出舞台。</p>
                    <p>• <b>文獎會解散：</b> 官方獎勵機制的終結。</p>
                    <p>• <b>張道藩專心投入公務：</b> 封德屏指出，原本主導戰鬥文藝的靈魂人物轉向一般政務。</p>
                    <p>• <b>美國壓制與失勢：</b> 陳明成研究指出，美國因素的介入與張道藩個人的失勢是重要外因。</p>
                </div>
            </div>
        </section>

        <section id="scholar">
            <h2>核心學術觀點</h2>
            <div class="scholar-quote">
                <h3>王德威：類型文學的界定</h3>
                <p>王德威將「反共文學」視為一種類型文學。在這種語境下，「戰鬥」不僅是口號，而是一種人生的精神。這影響了我們對《佛教小說集》中軍中作家創作的解讀。</p>
            </div>
            <div class="scholar-quote">
                <h3>翁伯川：作家身分的釐清</h3>
                <p>在《「軍中三劍客」的文學創作與活動研究》(2017) 中，翁伯川明確區分：<b>「軍中作家」不等於「軍人作家」，更不等於「反共作家」</b>。這為理解本集中郭嗣汾、公孫嬿等人的作品提供了更細緻的維度。</p>
            </div>
            <div class="scholar-quote">
                <h3>鍾肇政：對日態度的投射</h3>
                <p>鍾肇政關注重點在於作品中呈現的民族認同，特別是對日本態度的細微變化。</p>
            </div>
        </section>

        <section id="compare">
            <h2>反共懷鄉 VS 反共愛國：篇目比對</h2>
            <div class="text-block">
                <p>針對《佛教小說集》中「反共懷鄉」作品的定義，李玉珍與吳賢愷有顯著的數量與篇目差異：</p>
            </div>
            <div class="table-box">
                <table>
                    <thead>
                        <tr><th>學者</th><th>篇數</th><th>選錄篇目內容</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><b>李玉珍</b></td>
                            <td>11 篇</td>
                            <td>〈紅葉〉、〈雨〉、〈人間的奇蹟〉、〈紅塵〉、〈三角〉、〈喜帖〉、〈朝來寒雨晚來風〉、〈荒寺的一夜〉、〈普陀緣〉、〈重生〉、〈佈施〉</td>
                        </tr>
                        <tr>
                            <td><b>吳賢愷</b></td>
                            <td>5 篇</td>
                            <td>〈普陀緣〉、〈紅塵〉、〈重生〉、〈三角〉、〈朝來寒雨晚來風〉</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="chart-box" style="padding: 20px; border: 1px solid var(--border-color);">
                <canvas id="statChart" height="100"></canvas>
            </div>
        </section>

        <section id="database">
            <h2>作品全錄 (32 篇完整數據)</h2>
            <div class="table-box">
                <table>
                    <thead>
                        <tr>
                            <th>作者</th>
                            <th>篇名</th>
                            <th>作者身分</th>
                            <th>原出處 / 時間</th>
                            <th>吳賢愷分類性質</th>
                        </tr>
                    </thead>
                    <tbody id="full-table">
                        </tbody>
                </table>
            </div>
        </section>

        <footer>
            <p>參考文獻：</p>
            <p>翁伯川，《「軍中三劍客」的文學創作與活動研究》，臺南：成大博士論文，2017。</p>
            <p>陳明成、封德屏、王德威、鍾肇政相關學術論述整理。</p>
        </footer>
    </div>

    <script>
        // 1. 完整 32 筆資料 (根據 Word 內容精確錄入)
        const fullData = [
            ["摩迦（星雲）", "不同的愛", "僧", "", "佛教哲理和戒律"],
            ["常覺", "一顆沉沒的摩尼珠", "僧", "", "佛教哲理和戒律"],
            ["自立", "回頭是岸", "僧", "", "佛教哲理和戒律"],
            ["孟瑤", "聲色場", "普通作家", "", "作為背景或敘述填充"],
            ["郭嗣汾", "紅葉", "軍", "", "作為背景或敘述填充"],
            ["周君亮", "荒寺之一夜", "普通作家", "《暢流》19卷3期，1959.03", "佛教哲理和戒律"],
            ["公孫嬿", "普陀緣", "軍", "", "對小說情節有推進作用"],
            ["楚軍", "雨", "軍", "", "作為背景或敘述填充"],
            ["魏希文", "胡家父子", "軍", "《晨光》7卷10期，1959.12", "關係不明"],
            ["墨人", "馬腳", "軍", "", "關係不明"],
            ["劉心皇", "幻情錄", "普通作家", "", "作為背景或敘述填充"],
            ["西帆", "人間的奇蹟", "軍", "", "對小說情節有推進作用"],
            ["鄧文來", "小蘭", "軍", "", "作為背景或敘述填充"],
            ["鐘雷", "紅塵", "軍", "《晨光》5卷6-8期，1957.08", "對小說情節有推進作用"],
            ["繁露", "髮緣", "普通作家", "", "對小說情節有推進作用"],
            ["喬霖（彭樹楷）", "重生", "軍", "", "對小說情節有推進作用"],
            ["潘琦君", "悟", "虔誠", "", "作為背景或敘述填充"],
            ["張慈蓮", "三角", "僧", "", "對小說情節有推進作用"],
            ["胡國偉", "桃花開九月", "普通作家", "", "對小說情節有推進作用"],
            ["絜邨", "須大拏太子的故事", "虔誠", "", "佛教故事改編"],
            ["杜雲之", "大慈悲嶺", "普通作家", "", "佛教哲理和戒律"],
            ["陳劍慧", "自殺者的悲歌", "軍、虔誠", "", "佛教哲理和戒律"],
            ["宣建人", "為善最樂", "軍", "", "果報思想"],
            ["志琨", "喜帖", "普通作家", "", "對小說情節有推進作用"],
            ["鄭心本", "皈依", "虔誠", "", "對小說情節有推進作用"],
            ["觀心", "樓上樓下", "普通作家", "", "作為背景或敘述填充"],
            ["謝冰瑩", "永恆的友情", "軍、虔誠", "", "關係不明"],
            ["阮囊", "朝來寒雨晚來風", "軍", "", "作為背景或敘述填充"],
            ["林海音", "母親的祕密", "普通作家", "", "關係不明"],
            ["曼濤", "佈施", "僧", "", "佛教哲理和戒律"],
            ["蕭傳文", "白狐", "普通作家", "", "作為背景或敘述填充"],
            ["朱橋", "畫像", "普通作家", "", "作為背景或敘述填充"]
        ];

        // 2. 填充表格
        const tb = document.getElementById('full-table');
        fullData.forEach(r => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${r[0]}</td><td><b>${r[1]}</b></td><td>${r[2]}</td><td style="color:#666">${r[3]}</td><td>${r[4]}</td>`;
            tb.appendChild(tr);
        });

        // 3. 渲染統計圖表
        new Chart(document.getElementById('statChart'), {
            type: 'bar',
            data: {
                labels: ['李玉珍 選錄 (11)', '吳賢愷 選錄 (5)'],
                datasets: [{
                    label: '「反共懷鄉」作品篇數',
                    data: [11, 5],
                    backgroundColor: ['#8E2929', '#A68A56']
                }]
            },
            options: { indexAxis: 'y', plugins: { legend: { display: false } } }
        });

        // 4. 工具箱邏輯
        function setView(w, btn) {
            document.getElementById('main-view').style.maxWidth = w;
            toggleActive(btn);
        }
        function setMode(mode, btn) {
            document.body.classList.toggle('dark-mode', mode === 'dark');
            toggleActive(btn);
        }
        function setFont(size, btn) {
            document.documentElement.style.setProperty('--font-size', size);
            toggleActive(btn);
        }
        function toggleActive(btn) {
            btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }
    </script>
</body>
</html>

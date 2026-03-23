<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>《佛教小說集》文獻研究全錄</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;700&family=Ma+Shan+Zheng&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        :root {
            --bg: #F4F1EA;
            --paper: #FFFFFF;
            --text: #2C2C2C;
            --primary: #A68A56;
            --accent: #8E2929;
            --border: #D6C5A0;
            --view-width: 100%; /* 預設全屏 */
            --base-font: 18px;
        }

        body.dark-mode {
            --bg: #1A1A1A;
            --paper: #2D2D2D;
            --text: #E0E0E0;
            --border: #444;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; scroll-behavior: smooth; }

        body {
            background-color: var(--bg);
            color: var(--text);
            font-family: 'Noto Serif TC', serif;
            font-size: var(--base-font);
            line-height: 1.8;
            transition: 0.3s;
        }

        /* 閱覽工具列 - 改為頂部固定，方便操作 */
        .toolbar {
            position: fixed; top: 0; left: 0; width: 100%; height: 60px;
            background: var(--paper); border-bottom: 2px solid var(--primary);
            z-index: 9999; display: flex; align-items: center; justify-content: center;
            gap: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .tool-item { display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: bold; }
        .btn-group { display: flex; gap: 2px; }
        .btn-group button {
            padding: 4px 12px; border: 1px solid var(--border); background: var(--bg);
            color: var(--text); cursor: pointer; font-size: 12px; transition: 0.2s;
        }
        .btn-group button.active { background: var(--primary); color: white; border-color: var(--primary); }

        /* 主容器 */
        .main-container {
            width: 100%;
            max-width: var(--view-width);
            margin: 60px auto 0 auto;
            background: var(--paper);
            min-height: 100vh;
            padding: 80px 10%;
            transition: max-width 0.5s ease;
            position: relative;
            box-shadow: 0 0 50px rgba(0,0,0,0.05);
        }

        /* 內容排版 */
        header { text-align: center; margin-bottom: 80px; }
        h1 { font-family: 'Ma Shan Zheng', cursive; font-size: 4.5rem; color: var(--accent); margin: 0; }
        .subtitle { font-size: 1.4rem; color: var(--primary); letter-spacing: 5px; margin-top: 10px; }

        section { margin-bottom: 100px; border-bottom: 1px solid var(--border); padding-bottom: 50px; }
        section:last-child { border-bottom: none; }

        h2 { font-size: 2rem; color: var(--primary); margin-bottom: 30px; display: flex; align-items: center; }
        h2::after { content: ""; flex: 1; height: 1px; background: var(--border); margin-left: 20px; }

        h3 { font-size: 1.5rem; color: var(--accent); margin: 40px 0 20px 0; border-left: 5px solid var(--accent); padding-left: 15px; }
        
        p { margin-bottom: 20px; text-align: justify; }
        ul { margin-bottom: 30px; padding-left: 40px; }
        li { margin-bottom: 10px; }

        /* 分類排版 */
        .classification-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-top: 20px; }
        .class-card { background: var(--bg); padding: 25px; border: 1px solid var(--border); border-top: 4px solid var(--primary); }
        .class-card h4 { margin-bottom: 15px; color: var(--accent); font-size: 1.2rem; }

        /* 表格排版 */
        .table-wrap { overflow-x: auto; margin: 30px 0; border: 1px solid var(--border); }
        table { width: 100%; border-collapse: collapse; min-width: 900px; }
        th { background: var(--primary); color: white; padding: 15px; text-align: left; position: sticky; top: 0; }
        td { padding: 12px 15px; border-bottom: 1px solid var(--border); font-size: 0.9rem; }
        tr:hover { background: rgba(166, 138, 86, 0.05); }

        /* 導覽列 */
        .nav-links { display: flex; justify-content: center; gap: 30px; margin-bottom: 50px; flex-wrap: wrap; }
        .nav-links a { text-decoration: none; color: var(--text); font-weight: bold; border-bottom: 1px solid transparent; transition: 0.3s; }
        .nav-links a:hover { color: var(--accent); border-bottom: 1px solid var(--accent); }

        footer { text-align: center; padding: 50px; color: #999; border-top: 1px solid var(--border); }

        /* 背景裝飾 */
        .watermark { position: fixed; z-index: -1; opacity: 0.03; pointer-events: none; }
        .wm-left { bottom: 0; left: 0; width: 400px; }
    </style>
</head>
<body>

    <div class="toolbar">
        <div class="tool-item">
            顯示比例
            <div class="btn-group">
                <button class="active" onclick="setView('100%', this)">電腦版(滿版)</button>
                <button onclick="setView('1000px', this)">電腦版(置中)</button>
                <button onclick="setView('768px', this)">平板</button>
                <button onclick="setView('400px', this)">手機</button>
            </div>
        </div>
        <div class="tool-item">
            色彩模式
            <div class="btn-group">
                <button class="active" onclick="setMode('light', this)">日間宣紙</button>
                <button onclick="setMode('dark', this)">夜間墨池</button>
            </div>
        </div>
        <div class="tool-item">
            字體大小
            <div class="btn-group">
                <button onclick="setFont('16px', this)">標準</button>
                <button class="active" onclick="setFont('19px', this)">舒適</button>
                <button onclick="setFont('23px', this)">清晰</button>
            </div>
        </div>
    </div>

    <svg class="watermark wm-left" viewBox="0 0 100 100"><path fill="currentColor" d="M0,100 C30,80 70,80 100,100 L100,0 L0,0 Z" /></svg>

    <div class="main-container" id="viewContainer">
        <header>
            <h1>佛教小說集</h1>
            <p class="subtitle">朱橋編：佛教文化出版社，1960年11月</p>
        </header>

        <nav class="nav-links">
            <a href="#section1">一、故事性質分類</a>
            <a href="#section2">二、反共懷鄉VS反共愛國</a>
            <a href="#section3">三、學術論述與歷史背景</a>
            <a href="#section4">四、吳賢愷分類全表 (32篇)</a>
        </nav>

        <section id="section1">
            <h2>故事性質分類</h2>
            <div class="classification-grid">
                <div class="class-card">
                    <h4>范純武 分類</h4>
                    <ul>
                        <li>新創作題材的小說</li>
                        <li>雜揉個人經驗的小說</li>
                        <li>改編佛教故事的小說</li>
                    </ul>
                </div>
                <div class="class-card">
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
                <div class="class-card">
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
                <div class="class-card">
                    <h4>吳賢愷 分類</h4>
                    <ul>
                        <li>佛教故事改編</li>
                        <li>佛教哲理和戒律</li>
                        <li>果報思想</li>
                        <li>佛、僧人、寺廟對小說情節有推進作用</li>
                        <li>佛、僧人、寺廟作為背景或敘述填充</li>
                        <li>關係不明</li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="section2">
            <h2>反共懷鄉 VS 反共愛國</h2>
            <h3>學者定義篇目比對</h3>
            <p>本研究觀察到，不同學者對於「反共懷鄉」作品的選錄標準存在差異：</p>
            
            <div style="background: var(--bg); padding: 30px; border: 1px solid var(--border);">
                <p><strong>李玉珍（選錄十一篇）：</strong></p>
                <p>〈紅葉〉、〈雨〉、〈人間的奇蹟〉、〈紅塵〉、〈三角〉、〈喜帖〉、〈朝來寒雨晚來風〉、〈荒寺的一夜〉、〈普陀緣〉、〈重生〉、〈佈施〉</p>
                
                <hr style="margin: 20px 0; border: none; border-top: 1px dashed var(--border);">
                
                <p><strong>吳賢愷（選錄四篇/五筆）：</strong></p>
                <p>〈普陀緣〉、〈紅塵〉、〈重生〉、〈三角〉、〈朝來寒雨晚來風〉</p>
            </div>
        </section>

        <section id="section3">
            <h2>學術論述與歷史背景</h2>
            
            <h3>核心觀點與學者論述</h3>
            <ul>
                <li><strong>王德威：</strong>反共文學作為一種類型文學。</li>
                <li><strong>鍾肇政：</strong>對日本的態度。</li>
            </ul>

            <h3>歷史轉折：反共文學與戰鬥文藝的衰退</h3>
            <p><strong>1956年：</strong>《文藝創作》停刊和文獎會解散，標誌著反共文學和戰鬥文藝的衰退。</p>
            <p><strong>1955年：</strong>戰鬥文藝口號的提出標示著反共文學的挫敗。</p>

            <h3>政治與社會因素</h3>
            <ul>
                <li><strong>陳明成：</strong>美國壓制和張道藩的失勢。</li>
                <li><strong>封德屏：</strong>張道藩專心投入公務。</li>
            </ul>

            <h3>戰鬥文藝的性質定義</h3>
            <p>戰鬥文藝被視為「一種沒有類型的類型」。其中包含：</p>
            <ul>
                <li>反共文學</li>
                <li>民族主義</li>
                <li>健康寫實主義</li>
                <li>「戰鬥」作為一種人生的精神</li>
            </ul>

            <div style="background: rgba(142, 41, 41, 0.05); padding: 30px; border-radius: 8px;">
                <p><strong>重要概念辨析：</strong></p>
                <p>軍中作家 <strong>不等於</strong> 軍人作家 <strong>不等於</strong> 反共作家。</p>
            </div>

            <h3>主要參考資料</h3>
            <p>翁伯川：《「軍中三劍客」的文學創作與活動研究》，臺南：國立成功大學中國文學系博士論文，2017。</p>
        </section>

        <section id="section4">
            <h2>吳賢愷分類表 (全錄)</h2>
            <div class="table-wrap">
                <table id="dataTable">
                    <thead>
                        <tr>
                            <th>作者</th>
                            <th>篇名</th>
                            <th>作者身分</th>
                            <th>原出處</th>
                            <th>佛教性質分類</th>
                        </tr>
                    </thead>
                    <tbody id="tableBody">
                        </tbody>
                </table>
            </div>
        </section>

        <footer>
            <p>© 2024 《佛教小說集》數位文獻研究誌</p>
            <p>資料來源：您提供的《佛教小說集.docx》檔案內容</p>
        </footer>
    </div>

    <script>
        // 閱覽工具邏輯
        function setView(width, btn) {
            document.getElementById('viewContainer').style.maxWidth = width;
            updateBtn(btn);
        }
        function setMode(mode, btn) {
            document.body.className = (mode === 'dark' ? 'dark-mode' : '');
            updateBtn(btn);
        }
        function setFont(size, btn) {
            document.documentElement.style.setProperty('--base-font', size);
            updateBtn(btn);
        }
        function updateBtn(btn) {
            btn.parentElement.querySelectorAll('button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }

        // 完整錄入 32 篇作品數據 (依據 docx 內容)
        const worksData = [
            ["摩迦（星雲）", "不同的愛", "僧", "", "佛教哲理和戒律"],
            ["常覺", "一顆沉沒的摩尼珠", "僧", "", "佛教哲理和戒律"],
            ["自立", "回頭是岸", "僧", "", "佛教哲理和戒律"],
            ["孟瑤", "聲色場", "普通作家", "", "佛、僧人、寺廟作為背景或敘述填充"],
            ["郭嗣汾", "紅葉", "軍", "", "佛、僧人、寺廟作為背景或敘述填充"],
            ["周君亮", "荒寺之一夜", "普通作家", "《暢流》19卷3期，1959年3月", "佛教哲理和戒律"],
            ["公孫嬿", "普陀緣", "軍", "", "佛、僧人、寺廟對小說情節有推進作用"],
            ["楚軍", "雨", "軍", "", "佛、僧人、寺廟作為背景或敘述填充"],
            ["魏希文", "胡家父子", "軍", "《晨光》7卷10期，1959年12月", "關係不明"],
            ["墨人", "馬腳", "軍", "", "關係不明"],
            ["劉心皇", "幻情錄", "普通作家", "", "佛、僧人、寺廟作為背景或敘述填充"],
            ["西帆", "人間的奇蹟", "軍", "", "佛、僧人、寺廟對小說情節有推進作用"],
            ["鄧文來", "小蘭", "軍", "", "佛、僧人、寺廟作為背景或敘述填充"],
            ["鐘雷", "紅塵", "軍", "《晨光》5卷6-8期，1957年8-10月", "佛、僧人、寺廟對小說情節有推進作用"],
            ["繁露", "髮緣", "普通作家", "", "佛、僧人、寺廟對小說情節有推進作用"],
            ["喬霖（彭樹楷）", "重生", "軍", "", "佛、僧人、寺廟對小說情節有推進作用"],
            ["潘琦君", "悟", "虔誠", "", "佛、僧人、寺廟作為背景或敘述填充"],
            ["張慈蓮", "三角", "僧", "", "佛、僧人、寺廟對小說情節有推進作用"],
            ["胡國偉", "桃花開九月", "普通作家", "", "佛、僧人、寺廟對小說情節有推進作用"],
            ["絜邨", "須大拏太子的故事", "虔誠", "", "佛教故事改編"],
            ["杜雲之", "大慈悲嶺", "普通作家", "", "佛教哲理和戒律"],
            ["陳劍慧", "自殺者的悲歌", "軍、虔誠", "", "佛教哲理和戒律"],
            ["宣建人", "為善最樂", "軍", "", "果報思想"],
            ["志琨", "喜帖", "普通作家", "", "佛、僧人、寺廟對小說情節有推進作用"],
            ["鄭心本", "皈依", "虔誠", "", "佛、僧人、寺廟對小說情節有推進作用"],
            ["觀心", "樓上樓下", "普通作家", "", "佛、僧人、寺廟作為背景或敘述填充"],
            ["謝冰瑩", "永恆的友情", "軍、虔誠", "", "關係不明"],
            ["阮囊", "朝來寒雨晚來風", "軍", "", "佛、僧人、寺廟作為背景或敘述填充"],
            ["林海音", "母親的祕密", "普通作家", "", "關係不明"],
            ["曼濤", "佈施", "僧", "", "佛教哲理和戒律"],
            ["蕭傳文", "白狐", "普通作家", "", "佛、僧人、寺廟作為背景或敘述填充"],
            ["朱橋", "畫像", "普通作家", "", "佛、僧人、寺廟作為背景或敘述填充"]
        ];

        // 動態生成表格
        const tbody = document.getElementById('tableBody');
        worksData.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach((cell, index) => {
                const td = document.createElement('td');
                td.textContent = cell;
                // 特別標註身分顏色
                if(index === 2 && cell === "僧") td.style.color = "var(--accent)";
                if(index === 2 && cell === "軍") td.style.color = "#4a7c44";
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
    </script>
</body>
</html>

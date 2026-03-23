<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <title>佛教小說研究誌 - 響應式預覽系統</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;700&family=Ma+Shan+Zheng&display=swap" rel="stylesheet">
    <style>
        :root {
            --panel-bg: #2C2C2C;
            --active-gold: #A68A56;
            --frame-bg: #E5E5E5;
        }

        body, html { margin: 0; padding: 0; height: 100%; background: var(--frame-bg); font-family: sans-serif; overflow: hidden; }

        /* 控制面板 */
        .viewport-controls {
            height: 60px;
            background: var(--panel-bg);
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 20px;
            color: white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.3);
            position: relative;
            z-index: 2000;
        }

        .control-btn {
            background: transparent;
            border: 1px solid #666;
            color: #DDD;
            padding: 8px 15px;
            cursor: pointer;
            border-radius: 4px;
            transition: 0.3s;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .control-btn.active {
            background: var(--active-gold);
            border-color: var(--active-gold);
            color: white;
        }

        .control-btn:hover { border-color: var(--active-gold); }

        /* 模擬器容器 */
        .preview-wrapper {
            height: calc(100% - 60px);
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 20px;
            overflow-y: auto;
            transition: 0.5s ease-in-out;
        }

        .device-frame {
            background: white;
            width: 100%; /* Default Desktop */
            height: 100%;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 20px 50px rgba(0,0,0,0.2);
            border-radius: 8px;
            overflow: hidden;
            border: 8px solid #333;
        }

        /* 設備尺寸定義 */
        .mode-desktop { width: 100%; max-width: 1200px; height: 95%; }
        .mode-tablet { width: 768px; height: 90%; }
        .mode-mobile { width: 375px; height: 80%; }

        iframe {
            width: 100%;
            height: 100%;
            border: none;
            background: #F4F1EA;
        }

        .hint {
            position: absolute;
            right: 20px;
            font-size: 12px;
            color: #888;
        }
    </style>
</head>
<body>

    <div class="viewport-controls">
        <span style="font-family: 'Ma Shan Zheng'; margin-right: 20px; color: var(--active-gold);">預覽模式：</span>
        <button class="control-btn active" onclick="setMode('desktop', this)">💻 電腦</button>
        <button class="control-btn" onclick="setMode('tablet', this)">Tablet 平板</button>
        <button class="control-btn" onclick="setMode('mobile', this)">📱 手機</button>
        <div class="hint">切換按鈕可模擬不同載體閱讀體驗</div>
    </div>

    <div class="preview-wrapper">
        <div id="device" class="device-frame mode-desktop">
            <iframe id="content-frame" srcdoc='
<!DOCTYPE html>
<html lang="zh-Hant">
<head>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;700&family=Ma+Shan+Zheng&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        :root { --bg: #F4F1EA; --gold: #A68A56; --ink: #2C2C2C; --red: #8E2929; }
        * { box-sizing: border-box; scroll-behavior: smooth; }
        body { background: var(--bg); color: var(--ink); font-family: "Noto Serif TC", serif; margin:0; padding:0; line-height:1.8; }
        
        nav { position: sticky; top:0; background: rgba(244,241,234,0.9); backdrop-filter:blur(5px); border-bottom:1px solid var(--gold); padding:10px 20px; z-index:100; display:flex; justify-content:space-around; }
        nav a { text-decoration:none; color: var(--ink); font-size: 0.9rem; font-weight:bold; }
        
        .container { max-width: 900px; margin: 20px auto; background: white; padding: 40px; border: 1px solid var(--gold); }
        h1 { font-family: "Ma Shan Zheng"; font-size: 3rem; color: var(--red); text-align:center; margin:0;}
        h2 { color: var(--gold); border-bottom: 2px solid var(--gold); padding-bottom:5px; margin-top:40px; }
        
        .scholar-box { background: #FBF9F5; border-left: 4px solid var(--red); padding: 15px; margin: 10px 0; }
        .timeline { border-left: 2px solid var(--gold); padding-left: 20px; }
        .tag { background: var(--gold); color:white; padding: 2px 8px; border-radius:3px; font-size:0.8rem; }
        
        table { width: 100%; border-collapse: collapse; margin-top:20px; font-size:0.85rem; }
        th { background: #F2EDE4; padding: 10px; border: 1px solid var(--gold); }
        td { padding: 8px; border: 1px solid #EEE; }
        
        .chart-wrap { border: 1px solid var(--gold); padding:15px; margin-top:20px; }
    </style>
</head>
<body>
    <nav>
        <a href="#history">歷史轉折</a>
        <a href="#scholars">學者觀點</a>
        <a href="#compare">篇目比對</a>
        <a href="#list">完整清單</a>
    </nav>
    <div class="container">
        <h1>佛教小說研究誌</h1>
        <p style="text-align:center; color:#666;">朱橋編 ‧ 1960年11月 ‧ 數位文獻資料庫</p>

        <section id="history">
            <h2>歷史背景：戰鬥文藝的轉型</h2>
            <div class="timeline">
                <p><b>1955年：</b> 戰鬥文藝口號提出，實為反共文學挫敗之始。</p>
                <p><b>1956年：</b> 《文藝創作》停刊、文獎會解散。陳明成指出受美國壓制與張道藩失勢影響。封德屏觀察張道藩此後專注公務。</p>
                <p><b>核心定義：</b> 戰鬥文藝被視為一種人生精神。強調「軍中作家 ≠ 軍人作家 ≠ 反共作家」。</p>
            </div>
        </section>

        <section id="scholars">
            <h2>核心學術觀點</h2>
            <div class="scholar-box">
                <span class="tag">王德威</span>
                <p>反共文學作為一種類型文學。</p>
            </div>
            <div class="scholar-box">
                <span class="tag">鍾肇政</span>
                <p>探討文學中對日本的態度。</p>
            </div>
            <div class="scholar-box">
                <span class="tag">翁伯川</span>
                <p>《軍中三劍客的文學創作與活動研究》(2017)。</p>
            </div>
        </section>

        <section id="compare">
            <h2>反共懷鄉 VS 反共愛國</h2>
            <p>學者針對「反共懷鄉」性質作品選錄之篇目比對：</p>
            <table>
                <tr><th>學者</th><th>篇目數</th><th>作品</th></tr>
                <tr><td>李玉珍</td><td>11 篇</td><td>〈紅葉〉、〈雨〉、〈人間的奇蹟〉、〈紅塵〉、〈三角〉、〈喜帖〉、〈朝來寒雨晚來風〉、〈荒寺的一夜〉、〈普陀緣〉、〈重生〉〈佈施〉</td></tr>
                <tr><td>吳賢愷</td><td>5 篇</td><td>〈普陀緣〉、〈紅塵〉、〈重生〉、〈三角〉、〈朝來寒雨晚來風〉</td></tr>
            </table>
            <div class="chart-wrap">
                <canvas id="c"></canvas>
            </div>
        </section>

        <section id="list">
            <h2>作品全錄 (32篇)</h2>
            <table id="t">
                <thead><tr><th>作者</th><th>篇名</th><th>性質</th></tr></thead>
                <tbody id="tb"></tbody>
            </table>
        </section>
        
        <footer style="margin-top:50px; text-align:center; font-size:0.8rem; color:#999;">
            參考資料：翁伯川(2017)、陳明成、封德屏、王德威等學術著作。
        </footer>
    </div>

    <script>
        const d = [
            ["摩迦(星雲)", "不同的愛", "哲理戒律"], ["常覺", "一顆沉沒的摩尼珠", "哲理戒律"], ["自立", "回頭是岸", "哲理戒律"],
            ["孟瑤", "聲色場", "背景填充"], ["郭嗣汾", "紅葉", "背景填充"], ["周君亮", "荒寺之一夜", "哲理戒律"],
            ["公孫嬿", "普陀緣", "情節推進"], ["楚軍", "雨", "背景填充"], ["魏希文", "胡家父子", "關係不明"],
            ["墨人", "馬腳", "關係不明"], ["劉心皇", "幻情錄", "背景填充"], ["西帆", "人間的奇蹟", "情節推進"],
            ["鄧文來", "小蘭", "背景填充"], ["鐘雷", "紅塵", "情節推進"], ["繁露", "髮緣", "情節推進"],
            ["喬霖", "重生", "情節推進"], ["潘琦君", "悟", "背景填充"], ["張慈蓮", "三角", "情節推進"],
            ["胡國偉", "桃花開九月", "情節推進"], ["絜邨", "須大拏故事", "故事改編"], ["杜雲之", "大慈悲嶺", "哲理戒律"],
            ["陳劍慧", "自殺者悲歌", "哲理戒律"], ["宣建人", "為善最樂", "果報思想"], ["志琨", "喜帖", "情節推進"],
            ["鄭心本", "皈依", "情節推進"], ["觀心", "樓上樓下", "背景填充"], ["謝冰瑩", "永恆友情", "關係不明"],
            ["阮囊", "朝來寒雨晚來風", "背景填充"], ["林海音", "母親秘密", "關係不明"], ["曼濤", "佈施", "哲理戒律"],
            ["蕭傳文", "白狐", "背景填充"], ["朱橋", "畫像", "背景填充"]
        ];
        const tb = document.getElementById("tb");
        d.forEach(r => {
            const tr = document.createElement("tr");
            tr.innerHTML = `<td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td>`;
            tb.appendChild(tr);
        });

        new Chart(document.getElementById("c"), {
            type: "bar",
            data: {
                labels: ["李玉珍 (11)", "吳賢愷 (5)"],
                datasets: [{ label: "選錄篇數", data: [11, 5], backgroundColor: ["#8E2929", "#A68A56"] }]
            },
            options: { indexAxis: "y" }
        });
    </script>
</body>
</html>
'></iframe>
        </div>
    </div>

    <script>
        function setMode(mode, btn) {
            // 切換按鈕樣式
            document.querySelectorAll('.control-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 切換設備框架尺寸
            const device = document.getElementById('device');
            device.className = 'device-frame mode-' + mode;
        }
    </script>
</body>
</html>

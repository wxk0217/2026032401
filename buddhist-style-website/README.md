# 佛教小說集 - Buddhist Fiction Collection

一個以禪意極簡主義設計風格呈現《佛教小說集》的學術專題網站。

## 📖 內容介紹

本網站介紹了由朱橋編輯、佛教文化出版社於 1960 年 11 月出版的《佛教小說集》。這部作品集合了當時臺灣文壇對佛教題材的多元創作與詮釋，共收錄 32 篇故事。

### 主要章節

- **概述** - 佛教小說集的編纂與意義
- **故事分類體系** - 多元的詮釋與創作方式
- **作者與創作背景** - 不同身分視角的佛教詮釋
- **主要主題與意蘊** - 佛教思想在文學中的呈現
- **時代背景與文化意義** - 反共文學與戰鬥文藝的脈絡
- **統計分析** - 作者身分與佛教程度的關聯

## 🎨 設計特色

- **禪意極簡主義** - 米白色背景、古銅金強調色、毛筆線條分割
- **英雄區域** - 水墨漸層背景與禪宗圓相符號
- **交互式導覽** - 下拉式選單快速切換章節
- **響應式預覽** - 手機/平板/電腦三種預覽切換功能
- **數據可視化** - 4 個交互式圖表展示統計數據
- **平滑動畫** - 400ms+ 過渡效果與淡入淡出

## 🚀 部署方式

### GitHub Pages 自動部署

本項目配置了 GitHub Actions 工作流程，支持自動部署到 GitHub Pages：

1. **推送代碼到 main 分支**
   ```bash
   git push origin main
   ```

2. **自動觸發部署**
   - GitHub Actions 會自動構建項目
   - 將構建結果部署到 GitHub Pages
   - 訪問地址：`https://yourusername.github.io/buddhist-style-website/`

### 本地開發

```bash
# 安裝依賴
pnpm install

# 啟動開發服務器
pnpm dev

# 構建生產版本
pnpm build

# 預覽生產版本
pnpm preview
```

## 📁 項目結構

```
buddhist-style-website/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx          # 主頁面
│   │   ├── components/
│   │   │   └── DataVisualization.tsx  # 數據圖表組件
│   │   ├── App.tsx               # 應用入口
│   │   ├── main.tsx              # React 入口
│   │   └── index.css             # 全局樣式
│   ├── index.html                # HTML 模板
│   └── public/                   # 靜態資源
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions 工作流程
├── vite.config.ts                # Vite 配置
└── package.json                  # 項目依賴
```

## 🛠️ 技術棧

- **React 19** - 用戶界面框架
- **Tailwind CSS 4** - 樣式系統
- **Recharts** - 數據可視化
- **Vite** - 構建工具
- **TypeScript** - 類型安全

## 📊 統計數據

- **總故事數** - 32 篇
- **作者身分** - 僧尼 5 人、軍中作家 13 人、虔誠信徒 5 人、普通作家 11 人
- **佛教程度** - 60% 的作品具有中高度的佛教程度
- **主要主題** - 佛教故事改編、佛教哲理、因果報應、人間佛教

## 📝 許可證

本項目為學術研究用途。

## 🔗 相關資源

- 《佛教小說集》- 朱橋編，佛教文化出版社，1960 年 11 月
- 禪宗美學與當代設計的融合

---

**最後更新** - 2026 年 3 月

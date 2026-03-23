# GitHub Pages 部署完整指南

## 📋 前置準備

1. **GitHub 帳號** - 已有
2. **Git 命令行工具** - 需要安裝（如果還沒有）
3. **本項目代碼** - 已準備好

---

## 🚀 部署步驟

### 步驟 1：在 GitHub 創建新倉庫

1. 登入 GitHub：https://github.com
2. 點擊右上角 **「+」** → **「New repository」**
3. 填寫倉庫信息：
   - **Repository name**：`buddhist-style-website`（或您喜歡的名稱）
   - **Description**：`佛教小說集 - 戰後臺灣佛教文學的多元詮釋`
   - **Visibility**：選擇 **Public**（這樣才能使用 GitHub Pages）
   - **不要勾選** "Initialize this repository with a README"
4. 點擊 **「Create repository」**

### 步驟 2：複製倉庫 URL

創建完成後，您會看到一個頁面，頁面上有一個綠色的 **「Code」** 按鈕。

- 點擊 **「Code」** 按鈕
- 選擇 **「HTTPS」** 標籤
- 複製顯示的 URL，格式如：`https://github.com/您的用戶名/buddhist-style-website.git`

### 步驟 3：在本地初始化 Git 倉庫

在您的電腦上打開終端/命令提示符，執行以下命令：

```bash
# 進入項目目錄
cd /path/to/buddhist-style-website

# 初始化 Git 倉庫
git init

# 添加所有文件
git add .

# 創建初始提交
git commit -m "Initial commit: Buddhist Fiction Collection website"

# 添加遠端倉庫（將下面的 URL 替換為您複製的 URL）
git remote add origin https://github.com/您的用戶名/buddhist-style-website.git

# 推送到 GitHub（第一次推送）
git branch -M main
git push -u origin main
```

### 步驟 4：配置 GitHub Pages

1. 進入您的倉庫頁面：`https://github.com/您的用戶名/buddhist-style-website`
2. 點擊上方的 **「Settings」** 標籤
3. 左側菜單選擇 **「Pages」**
4. 在 **「Source」** 部分：
   - 選擇 **「Deploy from a branch」**
   - **Branch** 選擇 **「main」**
   - **Folder** 選擇 **「/(root)」**
5. 點擊 **「Save」**

### 步驟 5：等待部署完成

1. 返回倉庫主頁
2. 點擊右側的 **「Deployments」** 或 **「Actions」** 標籤
3. 您會看到一個名為 **「Deploy to GitHub Pages」** 的工作流程
4. 等待它完成（通常需要 1-2 分鐘）
5. 完成後，您的網站將在以下地址可訪問：
   ```
   https://您的用戶名.github.io/buddhist-style-website/
   ```

---

## 💻 完整命令行版本

如果您想直接複製粘貼所有命令，請按照以下步驟：

```bash
# 1. 進入項目目錄
cd /path/to/buddhist-style-website

# 2. 初始化並推送到 GitHub
git init
git add .
git commit -m "Initial commit: Buddhist Fiction Collection website"
git remote add origin https://github.com/您的用戶名/buddhist-style-website.git
git branch -M main
git push -u origin main
```

**重要：將上面的 `https://github.com/您的用戶名/buddhist-style-website.git` 替換為您實際的倉庫 URL**

---

## 📝 後續更新

每次修改代碼後，要推送到 GitHub：

```bash
# 添加所有變更
git add .

# 提交變更
git commit -m "描述您的變更"

# 推送到 GitHub
git push origin main
```

GitHub Actions 會自動檢測到推送，並自動構建和部署您的網站。

---

## 🔧 常見問題

### Q1：部署後網站顯示 404？
**A：** 檢查以下幾點：
- 確保 GitHub Pages 已啟用（Settings → Pages）
- 確保分支設置為 `main`
- 等待 2-3 分鐘讓 GitHub 完成部署
- 清除瀏覽器緩存（Ctrl+Shift+Delete）

### Q2：如何修改部署的網站內容？
**A：** 
1. 在本地修改文件
2. 執行 `git add .` 和 `git commit -m "描述"`
3. 執行 `git push origin main`
4. GitHub Actions 會自動部署更新

### Q3：如何查看部署狀態？
**A：** 
1. 進入倉庫頁面
2. 點擊 **「Actions」** 標籤
3. 查看 **「Deploy to GitHub Pages」** 工作流程的狀態

### Q4：部署失敗怎麼辦？
**A：** 
1. 檢查 Actions 標籤中的錯誤日誌
2. 常見原因：
   - Node.js 版本不兼容
   - 依賴安裝失敗
   - 構建錯誤
3. 查看 `.github/workflows/deploy.yml` 文件確保配置正確

---

## 🎯 最終檢查清單

- [ ] 在 GitHub 創建了倉庫
- [ ] 複製了倉庫 URL
- [ ] 執行了 `git init` 和 `git add .`
- [ ] 執行了 `git commit` 和 `git push`
- [ ] 在 Settings → Pages 中啟用了 GitHub Pages
- [ ] 等待部署完成（查看 Actions 標籤）
- [ ] 訪問 `https://您的用戶名.github.io/buddhist-style-website/` 確認網站上線

---

## 📞 需要幫助？

如果遇到問題，請檢查：
1. GitHub 官方文檔：https://docs.github.com/en/pages
2. 倉庫的 Actions 標籤中的錯誤日誌
3. 確保所有命令都正確執行

祝您部署順利！🎉

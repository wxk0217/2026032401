# 部署到您的 GitHub 倉庫

## 您的信息

- **GitHub 用戶名**：wxk0217
- **倉庫名稱**：2026032401
- **倉庫 URL**：https://github.com/wxk0217/2026032401.git
- **部署後網址**：https://wxk0217.github.io/2026032401/

---

## 🚀 一鍵部署

### 方式 1：使用自動化腳本（推薦）

**Mac/Linux 用戶：**
```bash
bash deploy.sh https://github.com/wxk0217/2026032401.git
```

**Windows 用戶：**
```cmd
deploy.bat https://github.com/wxk0217/2026032401.git
```

### 方式 2：手動命令行部署

```bash
# 進入項目目錄
cd /path/to/buddhist-style-website

# 初始化 Git
git init

# 添加所有文件
git add .

# 創建初始提交
git commit -m "Initial commit: Buddhist Fiction Collection website"

# 添加遠端倉庫
git remote add origin https://github.com/wxk0217/2026032401.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

---

## ✅ 部署後的設置

部署完成後，您需要在 GitHub 上啟用 GitHub Pages：

1. 進入您的倉庫：https://github.com/wxk0217/2026032401
2. 點擊 **Settings** 標籤
3. 左側菜單選擇 **Pages**
4. 在 **Source** 部分選擇：
   - **Deploy from a branch**
   - **Branch**：main
   - **Folder**：/(root)
5. 點擊 **Save**

---

## 🎉 完成！

等待 1-2 分鐘後，您的網站將在以下地址可訪問：

```
https://wxk0217.github.io/2026032401/
```

---

## 📝 後續更新

每次修改代碼後，只需執行：

```bash
git add .
git commit -m "您的更改描述"
git push origin main
```

GitHub 會自動重新構建和部署您的網站。

---

## 🔍 檢查部署狀態

1. 進入倉庫頁面：https://github.com/wxk0217/2026032401
2. 點擊 **Actions** 標籤
3. 查看 **Deploy to GitHub Pages** 工作流程的狀態

---

## 💡 有用的鏈接

- 您的倉庫：https://github.com/wxk0217/2026032401
- 部署後的網站：https://wxk0217.github.io/2026032401/
- GitHub Pages 文檔：https://docs.github.com/en/pages

祝您部署順利！🎊

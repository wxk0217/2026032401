# 🚀 快速開始 - 5 分鐘部署到 GitHub Pages

## 只需 3 步！

### 步驟 1️⃣：在 GitHub 創建倉庫

1. 登入 GitHub：https://github.com
2. 點擊 **「+」** → **「New repository」**
3. 倉庫名稱：`buddhist-style-website`
4. 選擇 **Public**
5. 點擊 **「Create repository」**
6. 複製倉庫 URL（綠色 Code 按鈕）

### 步驟 2️⃣：運行部署腳本

**如果您使用 Mac/Linux：**
```bash
bash deploy.sh https://github.com/yourusername/buddhist-style-website.git
```

**如果您使用 Windows：**
```cmd
deploy.bat https://github.com/yourusername/buddhist-style-website.git
```

> 將 `yourusername` 替換為您的 GitHub 用戶名

### 步驟 3️⃣：啟用 GitHub Pages

1. 進入您的倉庫頁面
2. 點擊 **Settings** → **Pages**
3. 選擇 **Deploy from a branch**
4. 分支選擇 **main**
5. 點擊 **Save**

✅ **完成！** 等待 1-2 分鐘後，訪問：
```
https://yourusername.github.io/buddhist-style-website/
```

---

## 📝 如何更新網站內容？

每次修改後執行：

```bash
git add .
git commit -m "更新說明"
git push origin main
```

GitHub 會自動重新部署！

---

## 🆘 遇到問題？

- **推送失敗？** 確保您已在本地配置 Git：
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your@email.com"
  ```

- **404 錯誤？** 檢查 Settings → Pages 是否已正確配置

- **需要詳細指南？** 查看 `GITHUB_DEPLOY_GUIDE.md`

---

## 🎉 就這樣！

您的佛教小說集網站現在已在線上！


@echo off
REM 佛教小說集 - GitHub Pages 快速部署腳本 (Windows)
REM 使用方法: deploy.bat <GitHub倉庫URL>
REM 例如: deploy.bat https://github.com/yourusername/buddhist-style-website.git

setlocal enabledelayedexpansion

echo.
echo 🚀 佛教小說集 - GitHub Pages 部署開始
echo ==================================

REM 檢查是否提供了倉庫 URL
if "%1"=="" (
    echo ❌ 錯誤：請提供 GitHub 倉庫 URL
    echo 使用方法: deploy.bat ^<GitHub倉庫URL^>
    echo 例如: deploy.bat https://github.com/yourusername/buddhist-style-website.git
    pause
    exit /b 1
)

set REPO_URL=%1

REM 檢查 Git 是否已安裝
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ 錯誤：Git 未安裝。請先安裝 Git
    echo 下載地址: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM 檢查是否已經是 Git 倉庫
if not exist ".git" (
    echo 📝 初始化 Git 倉庫...
    git init
    echo ✅ Git 倉庫已初始化
) else (
    echo ✅ Git 倉庫已存在
)

REM 添加所有文件
echo 📦 添加所有文件...
git add .
echo ✅ 文件已添加

REM 檢查是否有未提交的更改
git diff-index --quiet HEAD --
if %errorlevel% equ 0 (
    echo ⚠️  沒有新的更改要提交
) else (
    echo 💾 創建初始提交...
    git commit -m "Initial commit: Buddhist Fiction Collection website"
    echo ✅ 提交已創建
)

REM 添加遠端倉庫
echo 🔗 添加遠端倉庫...
git remote | findstr /R "^origin$" >nul
if %errorlevel% equ 0 (
    echo ⚠️  遠端倉庫已存在，更新 URL...
    git remote set-url origin %REPO_URL%
) else (
    git remote add origin %REPO_URL%
)
echo ✅ 遠端倉庫已配置

REM 重命名分支為 main
echo 🌿 確保使用 main 分支...
git rev-parse --verify main >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ main 分支已存在
    git checkout main
) else (
    git branch -M main
    echo ✅ 分支已重命名為 main
)

REM 推送到 GitHub
echo 🚀 推送到 GitHub...
git push -u origin main
if %errorlevel% neq 0 (
    echo ❌ 推送失敗。請檢查您的 GitHub 認證設置
    pause
    exit /b 1
)
echo ✅ 代碼已推送到 GitHub

echo.
echo ==================================
echo ✨ 部署完成！
echo ==================================
echo.
echo 📍 後續步驟：
echo 1. 進入 GitHub 倉庫設置
echo 2. 導航到 Settings ^> Pages
echo 3. 選擇 'Deploy from a branch'
echo 4. 選擇 'main' 分支
echo 5. 點擊 Save
echo.
echo ⏳ 等待 1-2 分鐘，您的網站將在以下地址可訪問：
echo    https://yourusername.github.io/buddhist-style-website/
echo.
echo 💡 提示：將 'yourusername' 替換為您的 GitHub 用戶名
echo.
pause

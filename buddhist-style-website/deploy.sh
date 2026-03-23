#!/bin/bash

# 佛教小說集 - GitHub Pages 快速部署腳本
# 使用方法: bash deploy.sh <GitHub倉庫URL>
# 例如: bash deploy.sh https://github.com/yourusername/buddhist-style-website.git

set -e

echo "🚀 佛教小說集 - GitHub Pages 部署開始"
echo "=================================="

# 檢查是否提供了倉庫 URL
if [ -z "$1" ]; then
    echo "❌ 錯誤：請提供 GitHub 倉庫 URL"
    echo "使用方法: bash deploy.sh <GitHub倉庫URL>"
    echo "例如: bash deploy.sh https://github.com/yourusername/buddhist-style-website.git"
    exit 1
fi

REPO_URL=$1

# 檢查 Git 是否已安裝
if ! command -v git &> /dev/null; then
    echo "❌ 錯誤：Git 未安裝。請先安裝 Git"
    exit 1
fi

# 檢查是否已經是 Git 倉庫
if [ ! -d ".git" ]; then
    echo "📝 初始化 Git 倉庫..."
    git init
    echo "✅ Git 倉庫已初始化"
else
    echo "✅ Git 倉庫已存在"
fi

# 添加所有文件
echo "📦 添加所有文件..."
git add .
echo "✅ 文件已添加"

# 檢查是否有未提交的更改
if git diff-index --quiet HEAD --; then
    echo "⚠️  沒有新的更改要提交"
else
    echo "💾 創建初始提交..."
    git commit -m "Initial commit: Buddhist Fiction Collection website"
    echo "✅ 提交已創建"
fi

# 添加遠端倉庫
echo "🔗 添加遠端倉庫..."
if git remote | grep -q origin; then
    echo "⚠️  遠端倉庫已存在，更新 URL..."
    git remote set-url origin "$REPO_URL"
else
    git remote add origin "$REPO_URL"
fi
echo "✅ 遠端倉庫已配置"

# 重命名分支為 main
echo "🌿 確保使用 main 分支..."
if git rev-parse --verify main > /dev/null 2>&1; then
    echo "✅ main 分支已存在"
    git checkout main
else
    git branch -M main
    echo "✅ 分支已重命名為 main"
fi

# 推送到 GitHub
echo "🚀 推送到 GitHub..."
git push -u origin main
echo "✅ 代碼已推送到 GitHub"

echo ""
echo "=================================="
echo "✨ 部署完成！"
echo "=================================="
echo ""
echo "📍 後續步驟："
echo "1. 進入 GitHub 倉庫設置"
echo "2. 導航到 Settings → Pages"
echo "3. 選擇 'Deploy from a branch'"
echo "4. 選擇 'main' 分支"
echo "5. 點擊 Save"
echo ""
echo "⏳ 等待 1-2 分鐘，您的網站將在以下地址可訪問："
echo "   https://yourusername.github.io/buddhist-style-website/"
echo ""
echo "💡 提示：將 'yourusername' 替換為您的 GitHub 用戶名"
echo ""

@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

if "%1"=="" (
    echo Please provide GitHub repository URL
    echo Usage: deploy_fixed.bat https://github.com/yourusername/repository.git
    pause
    exit /b 1
)

set REPO_URL=%1

where git >nul 2>nul
if %errorlevel% neq 0 (
    echo Git is not installed. Please install Git from https://git-scm.com/download/win
    pause
    exit /b 1
)

if not exist ".git" (
    echo Initializing Git repository...
    git init
    echo Git repository initialized
) else (
    echo Git repository already exists
)

echo Adding all files...
git add .
echo Files added

git diff-index --quiet HEAD --
if %errorlevel% equ 0 (
    echo No changes to commit
) else (
    echo Creating initial commit...
    git commit -m "Initial commit: Buddhist Fiction Collection website"
    echo Commit created
)

echo Adding remote repository...
git remote | findstr /R "^origin$" >nul
if %errorlevel% equ 0 (
    echo Remote repository exists, updating URL...
    git remote set-url origin %REPO_URL%
) else (
    git remote add origin %REPO_URL%
)
echo Remote repository configured

echo Ensuring main branch...
git rev-parse --verify main >nul 2>&1
if %errorlevel% equ 0 (
    echo main branch exists
    git checkout main
) else (
    git branch -M main
    echo Branch renamed to main
)

echo Pushing to GitHub...
git push -u origin main
if %errorlevel% neq 0 (
    echo Push failed. Please check your GitHub authentication.
    pause
    exit /b 1
)
echo Code pushed to GitHub

echo.
echo Deployment complete!
echo.
echo Next steps:
echo 1. Go to your GitHub repository settings
echo 2. Navigate to Settings ^> Pages
echo 3. Select 'Deploy from a branch'
echo 4. Select 'main' branch
echo 5. Click Save
echo.
echo Your website will be available at:
echo https://yourusername.github.io/repository-name/
echo.
pause

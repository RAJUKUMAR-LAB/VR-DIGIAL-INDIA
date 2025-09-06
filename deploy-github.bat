@echo off
REM GitHub Pages Quick Deploy Script for Windows
REM Run this in your project folder

echo 🚀 VR Digital India - GitHub Pages Deployment
echo ==============================================

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git is not installed. Please install Git first.
    echo Download from: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Initialize git if not already done
if not exist ".git" (
    echo 📦 Initializing Git repository...
    git init
    echo ✅ Git initialized
)

REM Add all files
echo 📁 Adding all files to Git...
git add .
echo ✅ Files added

REM Commit files
echo 💾 Committing files...
git commit -m "Deploy VR Digital India website to GitHub Pages"
echo ✅ Files committed

REM Ask for GitHub repository URL
echo.
echo 🔗 Enter your GitHub repository URL:
echo Format: https://github.com/username/vrdigitalindia.git
set /p repo_url="Repository URL: "

REM Add remote origin
echo 🌐 Adding remote repository...
git remote add origin "%repo_url%"
echo ✅ Remote added

REM Push to GitHub
echo 🚀 Pushing to GitHub...
git branch -M main
git push -u origin main
echo ✅ Pushed to GitHub

echo.
echo 🎉 DEPLOYMENT COMPLETE!
echo ========================
echo Your website will be live in 2-3 minutes at:
echo https://yourusername.github.io/vrdigitalindia
echo.
echo Next steps:
echo 1. Go to GitHub repository
echo 2. Settings ^> Pages
echo 3. Enable GitHub Pages
echo 4. Your site is LIVE! ✅
echo.
pause

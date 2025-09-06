#!/bin/bash
# GitHub Pages Quick Deploy Script
# Run this in your project folder

echo "🚀 VR Digital India - GitHub Pages Deployment"
echo "=============================================="

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Initialize git if not already done
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git initialized"
fi

# Add all files
echo "📁 Adding all files to Git..."
git add .
echo "✅ Files added"

# Commit files
echo "💾 Committing files..."
git commit -m "Deploy VR Digital India website to GitHub Pages"
echo "✅ Files committed"

# Ask for GitHub repository URL
echo "🔗 Enter your GitHub repository URL:"
echo "Format: https://github.com/username/vrdigitalindia.git"
read -p "Repository URL: " repo_url

# Add remote origin
echo "🌐 Adding remote repository..."
git remote add origin "$repo_url"
echo "✅ Remote added"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git branch -M main
git push -u origin main
echo "✅ Pushed to GitHub"

echo ""
echo "🎉 DEPLOYMENT COMPLETE!"
echo "========================"
echo "Your website will be live in 2-3 minutes at:"
echo "https://yourusername.github.io/vrdigitalindia"
echo ""
echo "Next steps:"
echo "1. Go to GitHub repository"
echo "2. Settings > Pages"
echo "3. Enable GitHub Pages"
echo "4. Your site is LIVE! ✅"

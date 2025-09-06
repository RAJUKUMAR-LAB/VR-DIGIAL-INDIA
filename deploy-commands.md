# Quick Deployment Commands

## GitHub Pages Deployment
```bash
# 1. Initialize git repository
git init

# 2. Add all files
git add .

# 3. Commit files
git commit -m "Initial commit - VR Digital India website"

# 4. Add GitHub remote
git remote add origin https://github.com/yourusername/vrdigitalindia.git

# 5. Push to GitHub
git push -u origin main
```

## Netlify Deployment
```bash
# Option 1: Drag and drop (Easy)
# Just drag your folder to netlify.com/drop

# Option 2: CLI
npm install -g netlify-cli
netlify deploy
netlify deploy --prod
```

## FTP Upload Commands (For paid hosting)
```bash
# Using FileZilla or any FTP client
Host: ftp.yourdomain.com
Username: your_ftp_username
Password: your_ftp_password
Port: 21

# Upload all files to public_html folder
```

## Custom Domain Setup
```bash
# Add CNAME record in DNS
# Type: CNAME
# Name: www
# Value: yourusername.github.io

# Add A record
# Type: A  
# Name: @
# Value: 185.199.108.153
```

## SSL Certificate (Free)
```bash
# Let's Encrypt (Most hosting providers include this)
# Cloudflare (Free plan available)
# GitHub Pages (Automatic HTTPS)
```

Your website is ready to go live! 🚀

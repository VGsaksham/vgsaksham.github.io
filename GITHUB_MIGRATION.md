# GitHub Migration Guide

This guide will help you migrate your portfolio project to GitHub and host it using GitHub Pages.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Access to your GitHub account from your local machine

## Steps to Migrate

### 1. Create a New Repository on GitHub (if not already done)

If the repository `https://github.com/VGsaksham/saksham.github.io` doesn't exist yet:

1. Go to GitHub.com and log in
2. Click on the "+" in the top-right corner and select "New repository"
3. Name it `saksham.github.io`
4. Set visibility to public
5. Do not initialize with README, .gitignore, or license
6. Create the repository

### 2. Configure GitHub Pages

1. Go to your repository's settings
2. Scroll down to "GitHub Pages" section
3. Under "Source", select "GitHub Actions"
4. Save the settings

### 3. Push Your Code to GitHub

You can use the included PowerShell script:

```
.\setup-github.ps1
```

Or manually run these commands:

```
# Remove existing .git directory if present
Remove-Item -Recurse -Force .\.git

# Initialize new Git repository
git init

# Add all files to Git
git add .

# Commit changes
git commit -m "Initial commit"

# Add the remote repository
git remote add origin https://github.com/VGsaksham/saksham.github.io.git

# Set up GitHub Pages by pushing to main branch
git branch -M main
git push -u origin main --force
```

### 4. Wait for GitHub Actions to Deploy

1. Go to the "Actions" tab in your repository
2. You should see a workflow running
3. Once complete, your site will be available at: https://vgsaksham.github.io/

## Troubleshooting

### Authentication Issues

If you encounter authentication issues when pushing:

1. Try using a personal access token instead of password
2. Set up SSH keys for GitHub
3. Use GitHub CLI for authentication

### Deployment Issues

If your site doesn't deploy correctly:

1. Check the "Actions" tab for any workflow failures
2. Ensure GitHub Pages is enabled in your repository settings
3. Verify that the vite.config.ts file has the correct base URL 
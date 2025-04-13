# This script helps you push your project to GitHub
# Run this script in PowerShell: .\setup-github.ps1

Write-Host "Setting up GitHub repository..."

# Remove existing .git directory if present
if (Test-Path .\.git) {
    Remove-Item -Recurse -Force .\.git
}

# Initialize new Git repository
git init

# Configure Git user
git config user.email "sakshambhown1920@gmail.con"
git config user.name "VGsaksham"

# Add all files to Git
git add .

# Commit changes
git commit -m "Initial commit"

# Add the remote repository
git remote add origin https://github.com/VGsaksham/saksham.github.io.git

# Set up GitHub Pages by pushing to main branch
git branch -M main
git push -u origin main --force

Write-Host "Setup complete! Your project has been pushed to GitHub."
Write-Host "GitHub Pages will be available at: https://vgsaksham.github.io/saksham.github.io/"
Write-Host "It may take a few minutes for the site to be deployed." 
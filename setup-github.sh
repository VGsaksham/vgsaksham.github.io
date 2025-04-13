#!/bin/bash

# This script helps you push your project to GitHub
# Make sure to run this script with bash: bash setup-github.sh

echo "Setting up GitHub repository..."

# Remove existing .git directory if present
rm -rf .git

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

echo "Setup complete! Your project has been pushed to GitHub."
echo "GitHub Pages will be available at: https://vgsaksham.github.io/saksham.github.io/"
echo "It may take a few minutes for the site to be deployed." 
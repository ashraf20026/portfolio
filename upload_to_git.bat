@echo off
echo Initializing Git...
git init
if %errorlevel% neq 0 exit /b %errorlevel%

echo Configuring User...
git config user.email "ashrfahmd413@gmail.com"
git config user.name "Ashraf Ahmed"

echo Adding Files...
git add .

echo Committing...
git commit -m "Initial commit"

echo Setting Branch...
git branch -M main

echo Setting Remote...
git remote remove origin 2>nul
git remote add origin https://github.com/ashraf20026/portfolio.git

echo Pushing...
git push -u origin main
echo Done.

@echo off
echo Cleaning final files and uploading...

cd /d "%~dp0"

if exist "final_css_fixes_v2.css" del /f "final_css_fixes_v2.css"
if exist "sync_to_github.bat" del /f "sync_to_github.bat"

git add .
git commit -m "Clean project files"
git push origin main --force

if exist "clean_and_upload.bat" del /f "clean_and_upload.bat"

del /f "%~f0"

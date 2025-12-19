@echo off
echo =====================================================
echo Cleaning Project and Uploading to GitHub
echo =====================================================

cd /d "%~dp0"

echo.
echo Step 1: Deleting unnecessary files...
if exist "temp_styles.css" del /f "temp_styles.css"
if exist "final_css_fixes.css" del /f "final_css_fixes.css"
if exist "final_css_fixes_v2.css" del /f "final_css_fixes_v2.css"
if exist "server_fix.bat" del /f "server_fix.bat"
if exist "sync_to_github.bat" del /f "sync_to_github.bat"

cd ..
if exist "update_site.bat" del /f "update_site.bat"
if exist "force_upload.bat" del /f "force_upload.bat"

cd app1

echo.
echo Step 2: Adding changes to Git...
git add .

echo.
echo Step 3: Committing changes...
git commit -m "Fix WhatsApp links and clean project"

echo.
echo Step 4: Forcing upload to GitHub...
git push origin main --force

echo.
echo =====================================================
echo DONE! Wait 2-3 minutes for GitHub to update site.
echo =====================================================
pause

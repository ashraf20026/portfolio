@echo off
echo Check for changes...
git status

echo Adding fixes (relative paths & base URL)...
git add .
git commit -m "Fix 404 errors causing deployment issues"

echo Pushing changes to GitHub...
git push
echo.
echo ========================================================
echo If asked for credentials, please enter them in the popup.
echo ========================================================
pause

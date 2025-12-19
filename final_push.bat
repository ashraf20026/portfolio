@echo off
echo ===========================================
echo 1. Checking Git Remote...
git remote -v
echo -------------------------------------------
echo 2. Checking Status...
git status
echo -------------------------------------------
echo 3. Saving any leftover changes...
git add .
git commit -m "Manual trigger for deployment"
echo -------------------------------------------
echo 4. PUSHING TO GITHUB (Start)...
echo [If a popup appears, please sign in]
git push
echo ===========================================
echo DONE.
echo Please look at the output above.
echo If it says "Everything up-to-date" or "deltat compression...", then it worked.
echo.
pause

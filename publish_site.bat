@echo off
echo ===================================================
echo building the project for production...
echo ===================================================
call npm run build
if %errorlevel% neq 0 (
    echo Build failed. Exiting.
    pause
    exit /b %errorlevel%
)

echo.
echo ===================================================
echo Deploying to GitHub Pages...
echo ===================================================
call npm run deploy
if %errorlevel% neq 0 (
    echo Deployment failed. Please check the errors above.
    pause
    exit /b %errorlevel%
)

echo.
echo ===================================================
echo SUCCESS! Your site is live.
echo Please enable the 'gh-pages' branch in GitHub Settings if not already done.
echo ===================================================
pause

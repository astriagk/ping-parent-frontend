@echo off
REM Android App Runner Script
REM Run this AFTER Metro bundler is running in another terminal

echo ========================================
echo  Android App Builder
echo ========================================
echo.

echo [1/4] Setting JAVA_HOME...
set JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot
echo    - JAVA_HOME: %JAVA_HOME%
echo.

echo [2/4] Navigating to project...
cd /d D:\astria\pingParentFrontend
echo    - Current directory: %CD%
echo.

echo [3/4] Checking for Metro bundler...
timeout /t 2 /nobreak >nul
echo    - Make sure Metro is running in another terminal
echo.

echo [4/4] Building and installing Android app...
echo    - This may take a few minutes...
echo.
echo ========================================
echo.

npm run android

echo.
echo ========================================
echo  Build Complete
echo ========================================
pause

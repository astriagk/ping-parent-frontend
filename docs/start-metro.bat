@echo off
REM Metro Bundler Startup Script
REM This script kills existing processes and starts Metro bundler with cache reset

echo ========================================
echo  Metro Bundler Startup
echo ========================================
echo.

echo [1/4] Killing existing Node processes...
taskkill /IM node.exe /F 2>nul
if %errorlevel% equ 0 (
    echo    - Killed existing processes
    timeout /t 2 /nobreak >nul
) else (
    echo    - No existing processes found
)
echo.

echo [2/4] Setting JAVA_HOME...
set JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot
echo    - JAVA_HOME: %JAVA_HOME%
echo.

echo [3/4] Navigating to project...
cd /d D:\astria\pingParentFrontend
echo    - Current directory: %CD%
echo.

echo [4/4] Starting Metro bundler with cache reset...
echo    - Wait for "Dev server ready" message
echo    - Press Ctrl+C to stop
echo.
echo ========================================
echo.

npx react-native start --reset-cache

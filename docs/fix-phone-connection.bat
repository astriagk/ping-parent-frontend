@echo off
REM Quick fix for phone connection issues
echo ========================================
echo  Phone Connection Fix
echo ========================================
echo.

echo [1/3] Setting up ADB reverse for USB connection...
adb reverse tcp:8081 tcp:8081
echo    - Port forwarding enabled
echo.

echo [2/3] Opening Dev Menu on phone...
adb shell input keyevent 82
echo    - Dev Menu should open on your phone
echo.

echo [3/3] Instructions:
echo    - On phone Dev Menu, tap "Reload"
echo    - Or press 'R' twice in Metro terminal
echo.

echo ========================================
echo  Fix Applied - Check Your Phone
echo ========================================
echo.
echo If still not working:
echo 1. Make sure Metro is running (start-metro.bat)
echo 2. Run this script again
echo 3. Or manually: Shake phone ^> Settings ^> Set host to: 10.31.78.207:8081
echo.
pause

# Metro Bundler Startup Guide

## Quick Fix - Run these commands in sequence

### Step 1: Kill Existing Metro Processes

```cmd
REM Find processes using port 8081
netstat -ano | findstr :8081

REM Kill the process (replace <PID> with the actual process ID from above)
taskkill /PID <PID> /F

REM Or kill all node processes at once
taskkill /IM node.exe /F
```

### Step 2: Set JAVA_HOME (Critical for Android)

```cmd
REM Set JAVA_HOME for current session
set JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot

REM Verify it's set correctly
echo %JAVA_HOME%
```

### Step 3: Clean and Start Metro Bundler

```cmd
REM Navigate to project directory
cd D:\astria\pingParentFrontend

REM Clear Metro cache and start
npx react-native start --reset-cache
```

**Keep this terminal running!** Metro bundler should show "Dev server ready" message.

### Step 4: Run Android App (New Terminal/CMD)

Open a **NEW** CMD window and run:

```cmd
REM Set JAVA_HOME again in new terminal
set JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot

REM Navigate to project
cd D:\astria\pingParentFrontend

REM Run Android app
npm run android
```

---

## Complete Step-by-Step Process

### Terminal 1: Metro Bundler

```cmd
@echo off
echo === Killing existing processes ===
taskkill /IM node.exe /F
timeout /t 2

echo.
echo === Setting JAVA_HOME ===
set JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot
echo JAVA_HOME: %JAVA_HOME%

echo.
echo === Starting Metro Bundler ===
cd D:\astria\pingParentFrontend
npx react-native start --reset-cache
```

### Terminal 2: Android Build

```cmd
@echo off
echo === Setting JAVA_HOME ===
set JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot

echo.
echo === Waiting for Metro to be ready ===
timeout /t 5

echo.
echo === Running Android App ===
cd D:\astria\pingParentFrontend
npm run android
```

---

## Permanent JAVA_HOME Fix

To avoid setting JAVA_HOME every time, add it to Windows Environment Variables:

1. Press `Win + X` → System
2. Click "Advanced system settings"
3. Click "Environment Variables"
4. Under "System variables", click "New"
5. Variable name: `JAVA_HOME`
6. Variable value: `C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot`
7. Click OK on all dialogs
8. **Restart CMD/Terminal**

---

## Troubleshooting

### Error: Port 8081 already in use

```cmd
REM Kill all node processes
taskkill /IM node.exe /F

REM Wait a moment
timeout /t 2

REM Try starting Metro again
npx react-native start --reset-cache
```

### Error: JAVA_HOME is set to an invalid directory

```cmd
REM Check available Java installations
dir "C:\Program Files\Eclipse Adoptium\"

REM Set to correct path (adjust version as needed)
set JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot
```

### Error: Unable to load script from assets

1. Make sure Metro bundler is running in Terminal 1
2. Wait for "Dev server ready" message before running Android app
3. Check device/emulator is connected: `adb devices`
4. Shake device → "Settings" → Dev Settings → change "Debug server host & port" to `localhost:8081`

### Clean Build (if issues persist)

```cmd
cd D:\astria\pingParentFrontend\android
gradlew clean
cd ..
npm start -- --reset-cache
```

---

## Quick Reference Commands

```cmd
REM Kill Metro
taskkill /IM node.exe /F

REM Start Metro
set JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot
npx react-native start --reset-cache

REM Run Android (in new terminal)
set JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot
npm run android

REM Check connected devices
adb devices

REM Reload app without rebuild
adb shell input keyevent 82
```

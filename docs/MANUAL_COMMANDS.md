# Manual CMD Commands Reference

Quick reference for running the app manually without using the batch scripts.

## Starting the App - Two Terminals Required

### Terminal 1: Metro Bundler

```cmd
REM Kill existing Node processes
taskkill /IM node.exe /F

REM Wait a moment
timeout /t 2

REM Set JAVA_HOME
set JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot

REM Navigate to project
cd D:\astria\pingParentFrontend

REM Start Metro with cache reset
npx react-native start --reset-cache
```

**Keep this terminal running!** Wait for "Dev server ready" message.

---

### Terminal 2: Android App

Open a **new CMD window** and run:

```cmd
REM Set JAVA_HOME
set JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot

REM Navigate to project
cd D:\astria\pingParentFrontend

REM Build and run Android app
npm run android
```

---

## Quick Commands

### Kill Metro Bundler

```cmd
taskkill /IM node.exe /F
```

### Check Port 8081

```cmd
netstat -ano | findstr :8081
```

### Kill Specific Process by PID

```cmd
taskkill /PID <process_id> /F
```

### Check Connected Devices

```cmd
adb devices
```

### Reload App (without rebuilding)

```cmd
REM Press R twice in Metro terminal
REM OR
adb shell input keyevent 82
```

### Clean Android Build

```cmd
cd D:\astria\pingParentFrontend\android
gradlew clean
cd ..
```

---

## iOS Commands

### Start Metro

```cmd
npm start -- --reset-cache
```

### Run iOS App

```cmd
npm run ios
```

---

## Troubleshooting Commands

### Clear Metro Cache

```cmd
npx react-native start --reset-cache
```

### Clear All Caches

```cmd
REM Clear Metro cache
rm -rf node_modules/.cache

REM Clear watchman cache
watchman watch-del-all

REM Clear npm cache
npm cache clean --force

REM Reinstall dependencies
npm install
```

### Reset Everything

```cmd
REM Kill processes
taskkill /IM node.exe /F

REM Clean Android build
cd android
gradlew clean
cd ..

REM Remove node_modules
rmdir /s /q node_modules

REM Reinstall
npm install

REM Start fresh
npm start -- --reset-cache
```

---

## Environment Variables

### Check JAVA_HOME

```cmd
echo %JAVA_HOME%
```

### List Java Installations

```cmd
dir "C:\Program Files\Eclipse Adoptium\"
```

### Verify Java Version

```cmd
java -version
```

---

## Useful Development Commands

### Run Tests

```cmd
npm test
```

### Run Linter

```cmd
npm run lint
```

### Build Release APK

```cmd
cd android
gradlew assembleRelease
cd ..
```

Release APK location: `android/app/build/outputs/apk/release/app-release.apk`

---

## Network Configuration

### Check Computer IP Address

```cmd
ipconfig
```

Look for "IPv4 Address" under your active network adapter.

### Configure Device to Connect Over WiFi

1. On device, shake to open Dev Menu
2. Tap "Settings"
3. Tap "Debug server host & port for device"
4. Enter your computer's IP: `192.168.x.x:8081`
5. Go back and reload

---

## Common Error Fixes

### Port 8081 Already in Use

```cmd
netstat -ano | findstr :8081
taskkill /PID <PID> /F
```

### Metro Not Connecting

```cmd
REM Restart Metro with reset
taskkill /IM node.exe /F
npx react-native start --reset-cache
```

### Gradle Build Failure

```cmd
set JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot
cd android
gradlew clean
cd ..
npm run android
```

### App Won't Load Bundle

1. Ensure Metro is running (Terminal 1)
2. Wait for "Dev server ready"
3. Check device connection: `adb devices`
4. Run app: `npm run android`

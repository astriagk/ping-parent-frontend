# Building and Installing on Mobile

Complete guide for building and installing the app on Android devices.

## Quick Development Install

If Metro bundler is running and your phone is connected via USB:

```cmd
npm run android
```

This automatically:

- ✅ Builds the app
- ✅ Installs on connected device
- ✅ Launches the app
- ✅ Connects to Metro bundler

---

## Prerequisites

### Required

- Android phone with **USB Debugging enabled**
- USB cable connected to computer
- Metro bundler running (`docs\start-metro.bat`)

### Enable USB Debugging on Phone

1. Go to **Settings** → **About Phone**
2. Tap **Build Number** 7 times (enables Developer Mode)
3. Go to **Settings** → **Developer Options**
4. Enable **USB Debugging**
5. Connect phone via USB
6. Accept "Allow USB debugging" prompt on phone

---

## Development Build (Debug)

### Method 1: Using Batch Scripts (Easiest)

1. **Start Metro Bundler:**

   ```cmd
   # Double-click this file:
   docs\start-metro.bat
   ```

   Keep this terminal running!

2. **Build and Install:**
   ```cmd
   # Double-click this file:
   docs\run-android.bat
   ```
   Wait for build to complete (~3-5 minutes first time)

### Method 2: Manual Commands

```cmd
# Terminal 1 - Metro Bundler
set JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot
cd D:\astria\pingParentFrontend
npm start -- --reset-cache

# Terminal 2 - Build and Install
set JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot
cd D:\astria\pingParentFrontend
adb devices
npm run android
```

### Verify Phone Connection

```cmd
# Check if phone is detected
adb devices

# Should show something like:
# List of devices attached
# 44061JEHN12510  device
```

---

## Release Build (Production APK)

Create a standalone APK file for distribution or production.

### Step 1: Build Release APK

```cmd
# Set JAVA_HOME
set JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot

# Navigate to android folder
cd D:\astria\pingParentFrontend\android

# Build release APK
gradlew assembleRelease

# Or on Mac/Linux:
./gradlew assembleRelease
```

### Step 2: Find the APK

APK location:

```
D:\astria\pingParentFrontend\android\app\build\outputs\apk\release\app-release.apk
```

### Step 3: Install Release APK

**Option A: Install via ADB**

```cmd
adb install android\app\build\outputs\apk\release\app-release.apk
```

**Option B: Copy to Phone**

```cmd
# Copy APK to phone's Download folder
adb push android\app\build\outputs\apk\release\app-release.apk /sdcard/Download/

# On phone: Files app → Downloads → Tap app-release.apk → Install
```

**Option C: Share APK File**

- Email the APK
- Upload to cloud storage
- Transfer via USB
- Install on any Android device

---

## Installing APK Manually on Phone

1. Copy `app-release.apk` to phone
2. Open **File Manager** or **Files** app
3. Navigate to **Downloads** folder
4. Tap on **app-release.apk**
5. Tap **Install**
6. Allow installation from unknown sources if prompted

---

## Reinstalling the App

### Uninstall First

```cmd
# Via ADB
adb uninstall com.pingparentfrontend

# Or on phone: Settings → Apps → Ping Parent → Uninstall
```

### Then Install

```cmd
npm run android
# or
adb install path\to\app-release.apk
```

---

## Troubleshooting

### Phone Not Detected

```cmd
# Check connection
adb devices

# If empty or "unauthorized":
```

- Check USB cable is data cable (not just charging)
- Accept "Allow USB debugging" on phone
- Try different USB port
- Restart ADB: `adb kill-server` then `adb start-server`

### Build Fails

```cmd
# Clean build
cd android
gradlew clean
cd ..

# Verify JAVA_HOME
echo %JAVA_HOME%

# Should show: C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot

# Try again
npm run android
```

### Metro Not Connecting

```cmd
# Kill Metro
taskkill /IM node.exe /F

# Restart with cache reset
npm start -- --reset-cache

# In new terminal
npm run android
```

### Port Forwarding for USB Connection

```cmd
# Forward Metro port to phone
adb reverse tcp:8081 tcp:8081

# Open Dev Menu on phone
adb shell input keyevent 82

# Reload app
# Press R twice in Metro terminal
```

### Installation Failed Error

```cmd
# App already installed - uninstall first
adb uninstall com.pingparentfrontend

# Then install again
npm run android
```

### WiFi Connection Issues

If USB not working, use WiFi:

1. Connect phone and computer to **same WiFi network**
2. Get computer IP: `ipconfig` (look for IPv4 Address)
3. On phone: Shake → Settings → "Debug server host & port"
4. Enter: `YOUR_IP:8081` (e.g., `10.31.78.207:8081`)
5. Go back → Reload

---

## Build Optimization

### First Build (Slow)

First build takes **5-10 minutes** because it:

- Downloads Gradle dependencies
- Builds all modules
- Creates APK

### Subsequent Builds (Faster)

After first build, takes **1-3 minutes** because:

- Dependencies cached
- Only changed code rebuilt

### Speed Up Builds

```cmd
# Clean only when needed (adds time)
# Don't run this every time:
gradlew clean

# Use --no-daemon only if issues
gradlew assembleRelease --no-daemon
```

---

## Installing on Multiple Devices

### Connect Multiple Phones

```cmd
# List all connected devices
adb devices

# Install on specific device
adb -s <device_id> install app-release.apk

# Example:
adb -s 44061JEHN12510 install app-release.apk
```

---

## Production Release Checklist

Before creating production APK:

- [ ] Update version in `android/app/build.gradle`
- [ ] Test all features
- [ ] Configure API endpoints for production
- [ ] Remove console.log statements
- [ ] Enable Proguard (code minification)
- [ ] Generate signed APK (for Play Store)
- [ ] Test on multiple devices

---

## Useful Commands

```cmd
# Check device info
adb shell getprop ro.product.model

# View device logs
adb logcat

# Clear app data
adb shell pm clear com.pingparentfrontend

# Take screenshot
adb shell screencap -p /sdcard/screen.png
adb pull /sdcard/screen.png

# Record screen
adb shell screenrecord /sdcard/demo.mp4
# Stop with Ctrl+C
adb pull /sdcard/demo.mp4
```

---

## Quick Reference

| Task             | Command                                 |
| ---------------- | --------------------------------------- |
| Check connection | `adb devices`                           |
| Install debug    | `npm run android`                       |
| Build release    | `cd android && gradlew assembleRelease` |
| Install APK      | `adb install path\to\app.apk`           |
| Uninstall        | `adb uninstall com.pingparentfrontend`  |
| Forward port     | `adb reverse tcp:8081 tcp:8081`         |
| Open Dev Menu    | `adb shell input keyevent 82`           |
| Reload app       | Press R twice in Metro                  |

---

## Next Steps

- See [MANUAL_COMMANDS.md](./MANUAL_COMMANDS.md) for Metro commands
- See [METRO_BUNDLER_GUIDE.md](./METRO_BUNDLER_GUIDE.md) for troubleshooting
- Use `fix-phone-connection.bat` if connection issues

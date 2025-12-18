# Android setup and run (Windows)

This document explains how to set up your Windows development environment to build and run the React Native Android app in this repository.

## Overview

- Install a supported JDK (Eclipse Temurin recommended)
- Install Android Studio and required SDK components
- Create or launch an Android Virtual Device (AVD)
- Set environment variables (`JAVA_HOME`, `ANDROID_SDK_ROOT`) and add SDK tools to `PATH`
- Start Metro and run the app

## 1) Install a JDK (Eclipse Temurin 17 recommended)

Download and install Temurin 17 (Windows x64) from:

https://adoptium.net/

After installing note the installation folder (example):

`C:\Program Files\Eclipse Adoptium\jdk-17.0.8.7-hotspot`

## 2) Set `JAVA_HOME` and update `PATH`

Temporary (current terminal session only — useful for testing):

```powershell
$jdk = "C:\Program Files\Eclipse Adoptium\jdk-17.0.8.7-hotspot"
$env:JAVA_HOME = $jdk
$env:Path = $env:Path + ";" + "$jdk\bin"
java -version
where.exe java
```

Persistent (adds to your user environment using `setx`) — replace the paths below with the actual ones on your machine:

```powershell
setx JAVA_HOME "C:\Program Files\Eclipse Adoptium\jdk-17.0.8.7-hotspot"
# Append JDK bin and Android SDK tools (replace USERNAME and SDK path accordingly)
setx PATH "%PATH%;C:\Program Files\Eclipse Adoptium\jdk-17.0.8.7-hotspot\bin;C:\Users\%USERNAME%\AppData\Local\Android\Sdk\platform-tools;C:\Users\%USERNAME%\AppData\Local\Android\Sdk\emulator"
```

Important: `setx` writes to the registry and the change is only visible to future processes. Restart your terminal and Android Studio after using `setx`. Prefer editing System Properties → Environment Variables when possible to avoid PATH truncation.

## 3) Install Android Studio and SDK components

1. Install Android Studio: https://developer.android.com/studio
2. Open Android Studio → Tools → SDK Manager and install:
   - Android SDK Platform-Tools
   - Android Emulator
   - One or more Android SDK Platform (e.g. API 33)

Note the SDK path shown in SDK Manager (commonly `C:\Users\<you>\AppData\Local\Android\Sdk`) and ensure `platform-tools` and `emulator` are added to your PATH.

## 4) Create / start an emulator (AVD)

- Android Studio → Tools → AVD Manager → Create Virtual Device → choose device and system image → Finish
- To start from terminal:

```powershell
emulator -list-avds
emulator -avd <Your_AVD_Name>
```

## 5) Verify tool availability

Run these after restarting terminal/IDE:

```powershell
java -version
where.exe java
adb version
emulator -list-avds
```

## 6) Start Metro and run the app

Open a terminal in the project root and start Metro:

```bash
npx react-native start
```

In another terminal run the Android build (this will build and install the APK to the running emulator/device):

```bash
npx react-native run-android
```

Or open the `android` folder in Android Studio and click Run (select the running emulator as target).

## 7) Common issues & troubleshooting

- `'adb' is not recognized` or `emulator` not found: ensure `platform-tools` and `emulator` folders are in `PATH` and you restarted the terminal/IDE after changes.
- `ERROR: JAVA_HOME is set to an invalid directory`: make sure the folder you set as `JAVA_HOME` exists and points to a JDK installation (contains `bin\\java.exe`).
- Gradle JDK vendor errors (e.g., `JvmVendorSpec IBM_SEMERU`): use a supported JDK (Temurin/Adoptium or Azul Temurin/OpenJDK) or upgrade the Gradle wrapper. The quickest fix is to install Temurin and point `JAVA_HOME` to it.
- If Fast Refresh or file changes are not picked up on Windows, enable polling:

```powershell
$env:CHOKIDAR_USEPOLLING = "true"
npx react-native start
```

- If you see stale bundles or cache problems, restart Metro with reset cache:

```bash
npx react-native start --reset-cache
```

## 8) Additional checks

- Run the React Native environment doctor:

```bash
npx react-native doctor
```

Follow its recommendations and install any missing components.

## 9) Notes for contributors

- When making changes to native Android code (Java/Kotlin or Gradle files) you must rebuild the app (`npx react-native run-android` or via Android Studio). Fast Refresh only applies to JS/TS.
- If you prefer, open only the `android` folder in Android Studio (File → Open → select `android` folder).

---

If you'd like, I can add a short checklist or craft exact `setx` commands using your SDK/JDK paths — paste them here and I'll generate the commands.

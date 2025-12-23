# Build and Deploy Android APK

Follow these steps to build and deploy your app as an APK on an Android device:

## 1. Install EAS CLI

If you haven't already, install EAS CLI globally:

```bash
npm install -g eas-cli
```

## 2. Log in to Expo

```bash
eas login
```

## 3. Configure EAS Build

If you haven't already:

```bash
eas build:configure
```

## 4. Build the APK

To build a universal APK (easy to install on any device):

```bash
eas build -p android --profile preview
```

- Wait for the build to finish. You will get a download link for the APK.

## 5. Download and Install APK

- Download the APK from the link provided by EAS.
- Transfer the APK to your Android device.
- Open the APK on your device and follow the prompts to install (you may need to enable "Install from unknown sources").

---

For more details, see the [Expo EAS Build documentation](https://docs.expo.dev/build/introduction/).

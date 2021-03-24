# Default App artwork

These are the default launcher icons & splash screens for NativeScript apps.

The splash screen and the iOS Icon is exported from `splash_screen_and_icon.afdesign` to the correct folders automatically.

The Android Icon has been generated using AndroidStudio and copied here, so there is no source file for the icons themselves!

To generate a new icon, use AndroidStudio and follow this article: https://nstudio.io/blog/adaptive-icons

To use the new adaptive icon, make sure `AndroidManifest.xml` has

```xml
android:icon="@mipmap/ic_launcher"
```

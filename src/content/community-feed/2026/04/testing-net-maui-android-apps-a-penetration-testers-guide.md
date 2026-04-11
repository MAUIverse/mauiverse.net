---
title: "Testing .NET MAUI Android Apps: A Penetration Tester's Guide"
link: https://medium.com/@GypsyCrushader114/testing-net-maui-android-apps-a-penetration-testers-guide-9e973920c564
description: "Adarsh Pillai shares a comprehensive penetration testing methodology tailored specifically for .NET MAUI Android applications. The guide covers the tooling differences, common vulnerability patterns, and a full MAPT checklist that every MAUI developer should be aware of."
date: 2026-04-09
author: GypsyCrushader
contentType: article
---

Most mobile penetration testing guides assume Java or Kotlin code in the APK, but .NET MAUI apps work differently — the real business logic lives in `.dll` assemblies, not in DEX files. This guide walks through the full methodology for testing MAUI Android apps, from the perspective of someone who's done it hands-on.

## What you'll learn

- Why standard tools like jadx won't show you MAUI business logic, and why you need dnSpy or ILSpy instead
- How to extract and analyze `.dll` assemblies from an APK using `apktool`
- How to map every screen in the app from `AssemblyInfo` attributes
- How to spot client-side authentication bypass vulnerabilities in `AppShell.cs`
- Common MAUI-specific vulnerability patterns: plaintext credential storage, client-side auth state, JWT tokens in SharedPreferences, and misconfigured exported activities
- How to use Frida to hook SharedPreferences writes and intercept credentials in real time
- A complete MAUI mobile application penetration testing (MAPT) checklist

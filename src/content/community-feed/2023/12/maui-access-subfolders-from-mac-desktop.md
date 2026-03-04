---
title: "MAUI MacCatalyst app - Access folders and sub folders on desktop"
link: https://tonyedwardspz.co.uk/blog/maui-access-subfolders-from-mac-desktop/
description: Tony explains why desktop file access can fail in MAUI MacCatalyst apps due to Apple sandbox restrictions. The post walks through a local-development workaround and clarifies the App Store trade-offs you need to consider.
date: 2023-12-27
author: tonyedwardspz
contentType: article
---

This guide helps you understand a common MacCatalyst friction point before you burn time debugging file APIs that are actually blocked by entitlement policy.

## What you'll learn

- Why App Sandbox prevents direct folder traversal outside allowed scopes
- How to adjust `entitlements.plist` for personal/local scenarios
- What security and distribution implications come with disabling sandbox keys
- Where to look in Apple docs for App Store-safe alternatives

## Why read it

If your MAUI desktop app needs filesystem access, this gives you a clear decision path between convenience during development and compliance for release.

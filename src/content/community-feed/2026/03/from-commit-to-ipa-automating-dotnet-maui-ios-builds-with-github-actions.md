---
title: "From Commit to IPA: Automating .NET MAUI iOS Builds with GitHub Actions"
link: https://medium.com/medialesson/from-commit-to-ipa-automating-net-maui-ios-builds-with-github-actions-fd8d9d47240b
description: "A step-by-step guide to building and signing a .NET MAUI iOS app in GitHub Actions, from importing a .p12 certificate to downloading provisioning profiles automatically. Assumes the Apple-side preparation is already complete."
date: 2026-03-27
author: tsjdev-apps
contentType: article
---

Once the Apple-side prerequisites are in place, the iOS CI workflow becomes a predictable sequence of importing secrets and calling `dotnet publish`. This article focuses purely on the GitHub Actions side of iOS automation for .NET MAUI.

### What you will learn

- Which six GitHub Secrets are needed for iOS signing and what each one does
- How to convert a `.p12` certificate to Base64 for storage in GitHub Secrets
- How to configure a macOS-based GitHub Actions workflow that imports the certificate, downloads provisioning profiles, and publishes a signed `.ipa`
- How to automatically derive version numbers from the pipeline run
- Common pitfalls around bundle ID mismatches, broken Base64 values, and Xcode version drift

If you still need to create the signing certificate and provisioning profile, start with the [preparation article](https://medium.com/medialesson/before-the-ipa-preparing-ios-signing-6e7861fcd84f) first.

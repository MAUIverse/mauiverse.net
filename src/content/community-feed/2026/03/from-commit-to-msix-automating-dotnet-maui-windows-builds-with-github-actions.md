---
title: "From Commit to MSIX: Automating .NET MAUI Windows Builds with GitHub Actions"
link: https://medium.com/medialesson/from-commit-to-msix-automating-net-maui-windows-builds-with-github-actions-9e1709a7e5dd
description: "Sebastian Jensen walks through building a signed MSIX package for a .NET MAUI Windows app using GitHub Actions, covering certificate creation, manifest alignment, and test distribution. This is the Windows installment in his cross-platform CI/CD series for .NET MAUI."
date: 2026-03-31
author: tsjdev-apps
contentType: article
---

Windows packaging for .NET MAUI involves more than just running `dotnet publish`. This guide tackles the full pipeline: aligning `Package.appxmanifest` with the signing identity, creating and storing a self-signed test certificate, and producing a signed `.msix` in GitHub Actions.

### What you will learn

- How to align the Windows manifest publisher name with the certificate subject
- How to create a self-signed test certificate and convert it for GitHub Secrets
- How to configure a GitHub Actions workflow that builds a signed `.msix`
- How to include the public certificate in the artifact for test machine installation
- Common issues around certificate trust, package identity, and Windows App Runtime dependencies

This is part of a cross-platform series that also covers [Android](https://medium.com/medialesson/from-commit-to-aab-apk-automating-net-maui-android-builds-with-github-actions-bc30468b2d08) and [iOS](https://medium.com/medialesson/from-commit-to-ipa-automating-net-maui-ios-builds-with-github-actions-fd8d9d47240b) CI/CD for .NET MAUI.

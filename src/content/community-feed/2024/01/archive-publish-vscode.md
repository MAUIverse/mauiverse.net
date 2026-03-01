---
title: ".NET MAUI: Archive and Publish using Visual Studio Code"
link: https://dev.to/vhugogarcia/net-maui-archive-and-publish-using-visual-studio-code-3dh2
description: "Visual Studio Code enables complete .NET MAUI build and publish workflows for iOS and Android using command-line tools. This guide covers archiving apps with proper signing, uploading to stores, and managing platform-specific configurations."
date: 2024-01-19
author: vhugogarcia
contentType: article
---

When Visual Studio for Mac got deprecated, folks worried about losing publishing capabilities. Turns out? VS Code + command line is actually awesome. Victor walks through the entire archive and publish workflow for both iOS and Android using nothing but VS Code and terminal commands.

Configure your .csproj with signing details, run `dotnet publish` with the right flags, and boom—you've got a signed IPA or AAB ready to ship. For iOS, pop over to XCode Organizer for upload. For Android, grab your AAB and head to Google Play Console. Simple, fast, and totally CI/CD ready.

**You'll learn:**
- Configuring .csproj for iOS and Android release builds
- Using dotnet publish commands for archiving
- Managing signing certificates and provisioning profiles
- Uploading to App Store and Play Store
- Why VS Code is legit for professional MAUI development

[Read the full walkthrough](https://dev.to/vhugogarcia/net-maui-archive-and-publish-using-visual-studio-code-3dh2) and ship your apps from VS Code!

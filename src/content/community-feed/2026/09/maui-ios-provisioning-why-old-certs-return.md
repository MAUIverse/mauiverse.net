---
title: "MAUI iOS Provisioning: Why Old Certs Return"
link: https://www.seeleycoder.com/blog/maui-ios-provisioning-visual-studio-pair-to-mac/
description: "Jon Seeley traces why two expired Apple signing certificates kept reappearing on his Mac every time Visual Studio on Windows paired with it. The cause was a provisioning cache in a different folder than most older answers mention."
date: 2026-09-08
author: fooberichu150
contentType: article
---

Delete the certificates, delete the provisioning profiles, clear the Xamarin cache, remove the Apple account from Visual Studio, and the old certificates still come back. Jon Seeley hit this while setting up a new MAUI app on Visual Studio for Windows with a Mac mini as the build host. He tells the story with the dead ends included.

The troubleshooting shows a useful method. After ruling out Xcode, the Windows certificate store and the usual caches, he stopped deleting the destination and watched what was writing to it. On the Mac, tracing showed Pair to Mac staging full signing identities, private keys included, as PKCS#12 files under `/private/tmp` and importing them into the login keychain.

The source turned out to be `%LOCALAPPDATA%\maui\iOS\Provisioning`, not the older `Xamarin\iOS\Provisioning` folder that most answers point to. Key takeaways include:

- **Where the state lives:** current MAUI tooling keeps provisioning data in the `maui` folder, and `~/Library/Caches/maui/PairToMac` matters on the Mac side
- **Why deleting fails:** Visual Studio syncs identities it still has cached on Windows every time it connects
- **How to find it:** `fs_usage` is a good way to see which process is touching a file

If you develop for iOS from Windows, this is worth knowing before you lose an evening to stale signing identities.

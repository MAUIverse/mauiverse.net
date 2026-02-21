---
title: "Remove iOS Navigation Bar Separator in .NET MAUI"
link: https://dev.to/vhugogarcia/remove-ios-navigation-bar-separator-in-net-maui-1ma1
description: "Custom handlers in .NET MAUI enable removal of iOS navigation bar separators when using Shell. Platform-specific code modifies UINavigationBarAppearance to create seamless, edge-to-edge navigation experiences."
date: 2024-01-17
author: victor-hugo-garcia
contentType: article
---

Want to get rid of that annoying navigation bar separator line on iOS? Victor shows how to create a custom Shell handler that removes it while keeping your cross-platform code clean. It's all about tapping into `UINavigationBarAppearance` and setting `ShadowColor` to clear.

The best part? All your platform-specific code stays in the Platforms/iOS folder where it belongs. Register the handler in MauiProgram.cs and you're done. Your iOS app looks polished and native without compromising your MAUI architecture.

**You'll learn:**
- Creating custom ShellRenderer handlers for iOS
- Removing navigation bar separators with UINavigationBarAppearance
- Customizing tab bar appearance to match
- Keeping platform-specific code isolated and maintainable

[Read the implementation guide](https://dev.to/vhugogarcia/remove-ios-navigation-bar-separator-in-net-maui-1ma1) and polish up your iOS UI!

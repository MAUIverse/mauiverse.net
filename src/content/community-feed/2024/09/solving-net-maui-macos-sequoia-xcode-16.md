---
title: "Solving .NET MAUI Issues on macOS Sequoia with Visual Studio Code and XCode 16"
link: https://dev.to/vhugogarcia/solving-net-maui-issues-on-macos-sequoia-with-visual-studio-code-and-xcode-16-3ljd
description: "macOS Sequoia and XCode 16 initially broke .NET MAUI compatibility, requiring workarounds until official support arrived. This guide documents solutions including downgrading XCode, managing provisioning profiles, and disabling XAML Hot Reload."
date: 2024-09-19
author: victor-hugo-garcia
contentType: article
---

Remember when macOS Sequoia and XCode 16 dropped and everything broke? Victor documented the whole adventure—from the initial panic to the eventual fixes. If you're dealing with compatibility issues (or want to avoid them next time), this is your survival guide.

The good news: Microsoft eventually shipped official support. But Victor's post documents all the workarounds that kept folks productive during the transition, like disabling XAML Hot Reload, moving provisioning profiles, and running multiple XCode versions side-by-side.

**Key takeaways:**
- Disable auto-updates and watch the xamarin-macios repo
- How to run multiple XCode versions simultaneously
- Fixing provisioning profile path issues
- Handling build stripping errors (code 139)
- XAML Hot Reload workarounds for VS Code

[Read the full post](https://dev.to/vhugogarcia/solving-net-maui-issues-on-macos-sequoia-with-visual-studio-code-and-xcode-16-3ljd) to arm yourself for the next big macOS update!

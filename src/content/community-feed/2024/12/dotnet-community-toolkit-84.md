---
title: "Announcing .NET Community Toolkit 8.4"
link: https://devblogs.microsoft.com/dotnet/announcing-the-dotnet-community-toolkit-840/
description: "Simon Rozsival and Sergio Pedri announce .NET Community Toolkit 8.4, headlined by long-requested partial property support for the MVVM Toolkit source generators. Read the announcement for the full analyzer additions, the one-click code fixer, and why partial properties unlock Native AOT for WinUI 3 and UWP."
date: 2024-12-12
author: simonrozsival
contentType: article
---

The 8.4 release of the .NET Community Toolkit lands one of the MVVM Toolkit's most requested features — partial property support — alongside a big batch of new analyzers, a migration code fixer, and assorted fixes and performance improvements.

## What you'll learn

- **Partial properties for `[ObservableProperty]`** — how the .NET 9 SDK's partial and semi-auto (`field` keyword) properties let you declare observable properties that integrate cleanly with C#, including custom accessibility, attributes, and modifiers like `new`, `sealed`, `override`, and `required`
- **Native AOT for WinRT** — why moving to partial properties makes `[ObservableProperty]` fully AOT safe for UWP and WinUI 3 apps using CsWinRT
- **A one-click code fixer** — how to migrate every `[ObservableProperty]` field in your solution to partial properties automatically, plus the `<LangVersion>preview</LangVersion>` requirement to enable it
- **A wave of new analyzers** — the MVVMTK0041–MVVMTK0055 diagnostics that catch invalid declarations, guide AOT-safe patterns, and flag unsupported combinations with `[GeneratedBindableCustomProperty]`
- **Other improvements** — Windows SDK version validation, attribute forwarding to accessors, a new `AsStream()` extension over `ReadOnlySequence<byte>`, and more

Read the full announcement for code examples, the complete diagnostic list, and links to get started with the 8.4 release.

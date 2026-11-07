---
title: "Native badges for Shell tabs in .NET 11"
link: https://tonyedwardspz.co.uk/blog/maui-11-tab-bar-badges-are-here/
description: "Tony Edwards looks at the new native badge support for Shell tabs in .NET MAUI 11, built on three bindable properties on `BaseShellItem`. He also explains how it works on each platform, including a useful difference between an empty string and `null`."
date: 2026-11-07
author: tonyedwardspz
contentType: article
---

Unread counts and attention dots used to mean platform-specific code or a third-party package. .NET MAUI 11 adds `BadgeText`, `BadgeColor` and `BadgeTextColor` to `BaseShellItem`, so a `ShellContent` or `Tab` can show a native badge with a few lines of XAML. Because the properties are bindable, they can follow a view model property such as an unread count.

The most useful detail is how `BadgeText` is interpreted: a value like `"5"` shows a count, an empty string shows a dot, and `null` hides the badge.

Tony then looks at the implementation from Gerald Versluis in PR #34659. Rather than drawing a custom badge, each platform uses its own native control:

- **Android:** Material's `BadgeDrawable`
- **iOS and Mac Catalyst:** `UITabBarItem.BadgeValue`
- **Windows:** the WinUI `InfoBadge`

He also points out a caveat for anyone planning to show arbitrary text: the API takes a string, but the result isn't identical across platforms, and the first implementation covers bottom tabs only. It's a short read, and the linked docs and PR include tests and a sample.

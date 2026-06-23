---
title: "Give Your .NET MAUI Android Apps a Material 3 Makeover"
link: https://devblogs.microsoft.com/dotnet/dotnet-maui-material-3/
description: "Gerald Versluis explains how to enable Material 3 styling in .NET MAUI 10 with a single MSBuild property, covering which controls are supported today and what's coming next. One line in your .csproj transforms your Android app to use Google's latest design system."
date: 2026-05-26
author: jfversluis
contentType: article
---

Material 3 (Material You) support is here for .NET MAUI 10 on Android, and enabling it is as simple as adding `<UseMaterial3>true</UseMaterial3>` to your project file. This official blog post from Gerald Versluis provides the full picture — what it enables, what it looks like, and what's still coming.

## What you'll learn

- Enabling Material 3 with a single `<UseMaterial3>true</UseMaterial3>` property in your `.csproj`
- Which controls are covered today: Entry, Editor, SearchBar, Picker, RadioButton, DatePicker, TimePicker, Switch, ProgressBar, Slider, CheckBox, Button, ImageButton, and Shell
- What Material 3 brings visually: dynamic colour schemes, outlined text inputs with floating labels, Material DatePicker calendar overlay, and updated track/thumb designs
- How explicit style overrides (BackgroundColor, TextColor, custom handlers) still take precedence over Material 3 defaults
- What's not yet covered: per-control opt-in, navigation chrome, CollectionView, and dynamic colour token APIs
- How to opt back out by removing the property — your app reverts to Material 2 on the next build

---
title: "Goodbye ValueConverters, Hello C# Expressions in .NET MAUI"
link: https://www.telerik.com/blogs/goodbye-valueconverters-hello-csharp-expressions-net-maui
description: "Leomaris Reyes shows how C# Expressions let you drop most ValueConverters and write logic directly in your .NET MAUI XAML. Through before-and-after examples, she demonstrates just how much boilerplate you can delete while making bindings more readable."
date: 2026-07-13
author: LeomarisReyes
contentType: article
---

Converters have long helped .NET MAUI developers reshape data for the UI, but they add ceremony for even the smallest bits of logic. Leomaris Reyes walks through how C# Expressions change that, letting you inline math, string interpolation, boolean logic, and event handling right where you need it.

## What you'll learn

- **Simpler property bindings** — implicit (`{FullName}`) and explicit (`{= FullName}`) expression syntax as a replacement for verbose `Binding` markup
- **String interpolation in XAML** — swapping `StringFormat` for readable expressions like `{=$'Total: ${Price} USD'}`
- **Calculations without computed properties** — performing multi-root math such as `{=$'Subtotal: ${UnitPrice * ItemsCount:F2}'}` directly in markup
- **Boolean negation the easy way** — replacing an entire `IValueConverter` class with `{=!IsLoggedIn}`
- **Inline lambda event handlers** — wiring events like `Clicked="{(s, e) => ClickCount++}"` without commands or code-behind

Read the full article for the side-by-side comparisons and see how much cleaner your .NET MAUI XAML can get.

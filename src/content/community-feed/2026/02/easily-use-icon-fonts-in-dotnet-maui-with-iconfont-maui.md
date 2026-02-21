---
title: "Easily Use Icon Fonts in .NET MAUI with IconFont.Maui"
link: https://blog.verslu.is/maui/icon-fonts-dotnet-maui/
description: Gerald Versluis introduces IconFont.Maui, a source-generator-powered approach that turns raw icon font glyphs into strongly typed constants for .NET MAUI. The post shows how this removes fragile Unicode copy-paste workflows and makes icon usage clearer, safer, and easier to maintain.
date: 2026-02-17
author: jfversluis
contentType: article
---

This post is a practical guide for anyone who has wrestled with unreadable icon codepoints in XAML. Gerald explains how `IconFont.Maui.SourceGenerator` parses TTF metadata at build time and emits discoverable constants and font-family helpers, so your UI code can use readable `x:Static` icon references instead of magic Unicode values.

You’ll also learn how to consume the ready-made Fluent Icons package, wire it up with `.UseIconFonts()` in `MauiProgram`, and apply the same workflow to your own custom icon fonts using the template repository. By the end, you get a clean mental model for packaging icon fonts as NuGet libraries with better IntelliSense, fewer runtime surprises, and much easier long-term maintenance.

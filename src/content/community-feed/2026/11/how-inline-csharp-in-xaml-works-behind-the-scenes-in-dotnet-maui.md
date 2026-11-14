---
title: "How inline C# in XAML works behind the scenes in .NET MAUI"
link: https://tonyedwardspz.co.uk/blog/maui-11-how-inline-csharp-in-xaml-works/
description: "Tony Edwards looks at the new `x:Code` directive in .NET MAUI 11, which lets you declare methods, fields and properties directly inside a XAML file. He also traces how Stéphane Delcroix's source generator turns that inline code into a partial class."
date: 2026-11-06
author: tonyedwardspz
contentType: article
---

Following his earlier post on C# expressions in XAML, Tony Edwards takes the next step: `x:Code`, which lets a page declare members without a code-behind file. You need the XAML source generator (`MauiXamlInflator` set to `SourceGen`) and preview features enabled. His examples are a counter button with a private field and handler, and a `CollectionView` selection handler that navigates through Shell. He's sensible about the limits, too. Small, view-specific code fits well, but more involved logic still belongs in a view model.

The second half reads through PR #34715. The generator gains a third pipeline that runs between code-behind generation and `InitializeComponent`, so event handlers resolve at compile time. It writes a partial class to a file such as `MainPage.xaml.xcode.cs`, lifts `using` directives to the top and removes duplicates. The directive never becomes part of the visual tree.

Tony also lists the rules: it must be a direct child of the root element, and the root must declare `x:Class`. There are diagnostics for misuse, such as `MAUIX2015`.

It's a six-minute read for anyone curious about what the source generator does with your XAML.

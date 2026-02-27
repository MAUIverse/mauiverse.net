---
title: "Mrk MAUI Refactorkit"
link: https://github.com/SkJonko/MRK.MAUI.RefactorKit
description: "MRK.MAUI.RefactorKit is a Roslyn analyzer that helps automate common Xamarin.Forms to .NET MAUI refactors directly inside your project. It converts legacy MVVM patterns to modern CommunityToolkit syntax using familiar lightbulb fixes."
date: "2025-06-13"
author: "SkJonko"
contentType: "github"
---

MRK.MAUI.RefactorKit is a Roslyn analyzer and code fix provider designed to reduce the manual grind of migrating Xamarin.Forms code to .NET MAUI. By plugging directly into your build as a NuGet analyzer, it scans for common legacy MVVM patterns and offers automated refactorings that align your code with modern MAUI and CommunityToolkit.Mvvm practices.

The tool focuses on high value transformations such as converting traditional backing properties into ObservableProperty fields and updating legacy command patterns to RelayCommand. Because suggestions surface through the standard Visual Studio lightbulb experience, teams can incrementally modernize codebases while keeping full control over the changes.
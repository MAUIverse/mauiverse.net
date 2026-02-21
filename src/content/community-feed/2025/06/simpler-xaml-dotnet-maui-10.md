---
title: "Simpler XAML in .NET MAUI 10"
link: https://devblogs.microsoft.com/dotnet/simpler-xaml-in-dotnet-maui-10/
description: David Ortinau previews implicit/global XAML namespaces in .NET MAUI (via XmlnsDefinition) to reduce xmlns boilerplate and simplify XAML files.
date: 2025-06-26
author: davidortinau
---

XAML can get verbose quickly once you’re pulling in your own namespaces and multiple third-party libraries. This .NET 10 preview feature aims to reduce that boilerplate by letting you define namespaces globally.

The post covers the opt-in flags, using `XmlnsDefinition`/`XmlnsPrefix`, how prefix-less XAML works, and the current known issues (editor squiggles and potential perf impact).

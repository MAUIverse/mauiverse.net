---
title: ".NET MAUI Performance Features in .NET 9"
link: https://devblogs.microsoft.com/dotnet/dotnet-9-performance-improvements-in-dotnet-maui/
description: Jonathan Peppers and Simon Rozsival cover .NET 9 MAUI performance features like full trimming, NativeAOT support, and compiled bindings, plus profiling guidance.
date: 2025-02-20
author: jonathanpeppers
---

This post focuses on performance through **app size + startup improvements** and the tooling to measure real-world impact.

It covers what full trimming changes, where **NativeAOT** fits (and its current platform support), why **compiled XAML/bindings** matter for trimming/AOT, and how to use tools like `dotnet-trace` and `dotnet-gcdump` to profile MAUI apps.

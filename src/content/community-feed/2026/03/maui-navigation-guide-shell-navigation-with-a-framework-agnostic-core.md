---
title: "MAUI Navigation Guide: Shell Navigation with a Framework-Agnostic Core"
link: https://github.com/michalpobuta/MauiNavigation/blob/main/NAVIGATION_GUIDE.md
description: "A comprehensive guide to structuring .NET MAUI Shell navigation with a clean Core/App split, keeping ViewModels free of MAUI dependencies. Covers fundamentals through advanced patterns like navigation guards, deep linking, and modal result passing."
date: 2026-03-30
author: michalpobuta
contentType: github
---

This in-depth navigation guide pairs a fully working sample repository with 20 sections of documentation covering everything from project setup to advanced patterns. The architecture enforces a strict separation between a platform-agnostic Core project (ViewModels, contracts, parameters) and the MAUI App project (pages, Shell, DI wiring).

### What you will learn

- How to structure a Core/App project split where ViewModels have zero MAUI dependencies — enforced at compile time
- How to define an `INavigationService` contract with strongly-typed route parameters
- How to build `BaseViewModel<T>` and `BasePage<TViewModel>` base classes that handle lifecycle, busy states, and parameter delivery
- How to wire up Shell route registration and DI in `MauiProgram`
- Advanced patterns including error handling, modal result passing, navigation guards, deep linking, shared state, and ViewModel testing

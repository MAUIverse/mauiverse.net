---
title: "Integrating Native Device Features in .NET MAUI Apps Using Dependency Injection"
link: https://shaunebu.com/i5CQx
description: "Jorge Perales Diaz shows how to reach native device features like camera and location in .NET MAUI through clean, injectable abstractions. By defining interfaces and platform-specific implementations, your shared code stays modular, testable, and platform-agnostic."
date: 2026-02-03
author: jpd21122012
contentType: article
---

A single MAUI codebase still needs to touch platform-bound features like camera access, location, and Bluetooth. This article shows how dependency injection lets you inject that platform-specific functionality into shared code without coupling your app to any one platform.

## What you'll learn

- How DI works in .NET MAUI and how to register services in `MauiProgram.cs`
- Defining cross-platform interfaces such as `ICameraService` and `ILocationService`
- Implementing those interfaces per platform (Android, iOS) for camera and location features
- Injecting native services into pages and ViewModels via the constructor
- Best practices: interface segregation, favoring constructor injection over static/singletons, encapsulating platform logic, and testing on real devices

A clean, foundational pattern for keeping your shared MAUI code tidy while still using native capabilities.

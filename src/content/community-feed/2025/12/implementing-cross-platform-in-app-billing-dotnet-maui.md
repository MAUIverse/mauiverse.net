---
title: Implementing Cross-Platform In-App Billing in .NET MAUI Applications
link: https://devblogs.microsoft.com/dotnet/cross-platform-billing-dotnet-maui/
description: Gerald Versluis shares a BillingService sample showing a clean, unified interface for in-app purchases across Android, iOS/Mac Catalyst, and Windows.
date: 2025-12-15
author: jfversluis
---

In-app purchases are one of those areas where MAUI’s “one codebase” story still requires careful platform work.

This post by **Gerald Versluis** introduces a cross-platform **BillingService** sample that wraps platform billing APIs behind a single interface—while keeping the implementation maintainable with DI + MVVM.


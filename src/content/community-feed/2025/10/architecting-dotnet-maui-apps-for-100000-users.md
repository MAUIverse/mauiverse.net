---
title: "Architecting .NET MAUI Apps for 100,000+ Users: A Practical Template"
link: https://medium.com/@thimanshu1993/architecting-net-maui-apps-for-100-000-users-a-practical-template-da39c082fd36
description: "Himanshu Tyagi shares the project split he uses for .NET MAUI apps aimed at a large user base. Core, infrastructure, and the app project stay apart, with notes on HTTP resilience, startup time, and what to monitor once the app is out."
date: 2025-10-15
author: thimanshu1993
contentType: article
---

A structure that only one person understands will not survive the second team. Himanshu Tyagi lays out the .NET MAUI layout he wishes he had started with, after years of Xamarin and MAUI apps, and ties each choice back to shipping speed and support cost.

## What you'll learn

- **Three projects** — `Core` for models, interfaces, and business logic; `Infrastructure` for SQLite, APIs, and platform services; `Maui` for views, view models, and converters. Business logic can be tested without a device
- **Data and HTTP** — one `IRepository<T>` so new developers are not learning a different access style per feature, plus an `HttpClient` with timeout, retry, and a circuit breaker
- **Registration in one place** — singletons, transients, and a scoped navigation service in a single `AddAppServices` extension
- **A startup budget** — cold start under 3 seconds, warm start under 1 second, lazy services, image caching, `CollectionView` virtualization, and indexed queries before you call the app ready
- **Errors and telemetry** — network failures show cached data, everything else is logged and explained. He names Sentry, New Relic, Crashlytics, and Application Insights, and shows a Sentry init that samples 20% of traces

Read the full template for the week-by-week list he gives a team that already has an app and needs to scale it, rather than rewrite it.

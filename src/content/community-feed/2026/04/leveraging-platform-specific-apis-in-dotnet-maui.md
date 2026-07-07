---
title: "Leveraging Platform-Specific APIs in .NET MAUI"
link: https://shaunebu.com/w270o
description: "Jorge Perales Diaz digs into the two main ways to write platform-specific code in .NET MAUI — partial classes and conditional compilation — and when to reach for each. It's a clear-eyed guide to keeping native integrations clean instead of letting #if directives take over your codebase."
date: 2026-04-07
author: jpd21122012
contentType: article
---

"Write once, run anywhere" is a guiding principle, not an absolute rule — real apps need biometrics, sensors, secure storage, and OS-level tweaks. This deep dive compares partial classes and conditional compilation so you can add platform-specific code without turning your project into a mess.

## What you'll learn

- Why some APIs are inherently platform-bound (biometrics, file access, notifications, hardware sensors) and where forcing shared code breaks down
- How to structure partial classes and partial methods across `.shared`, `.android`, `.ios`, and `.windows` files, with full `GetDeviceName()` examples
- How conditional compilation (`#if ANDROID` / `#elif IOS` / `#elif WINDOWS`) works and where it shines
- A side-by-side comparison of both approaches on maintainability, scalability, readability, and setup cost
- A recommended hybrid pattern — partials for services and core logic, `#if` for minor inline differences — combined with dependency injection

Great guidance for turning a functional MAUI app into a production-ready one.

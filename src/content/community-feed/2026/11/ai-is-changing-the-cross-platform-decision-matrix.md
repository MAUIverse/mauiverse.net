---
title: "AI is Changing the Cross-Platform Decision Matrix"
link: https://devblogs.microsoft.com/dotnet/ai-cross-platform-decision-matrix/
description: "David Ortinau tests whether AI coding agents flatten the choice between a shared MAUI UI and separate platform UIs, by rebuilding his Barista Notes app with .NET for iOS and .NET for Android. It's a data-rich read for anyone weighing build cost against the cost of owning two UIs."
date: 2026-11-20
author: davidortinau
contentType: article
---

Team knowledge and team capacity used to push people towards a single shared UI, but agents change both. David Ortinau ran an experiment to see how far. Barista Notes is a .NET MAUI app with about 31,000 lines of C#, written with MauiReactor, and he had agents rebuild its iOS and Android apps as platform UI (UIKit and Android Views in C#) over a shared class library.

The rewrite took about three elapsed days in one agent session and under four hours of David's own time. Shared code dropped from 99.2% to 40.4%, though a shared Core still made up more than half of each app. Adding the same feature, a map of bean origins, to both versions used about 1.4 times the worker model time on the platform UI side and drew more defect feedback, while the coordinating agent used more time than both implementations combined.

At runtime, with full composite ReadyToRun on both sides, platform UI started about 50% faster on Android and 35% faster on iOS, using .NET 11 GA on one device per platform. David also lays out when he'd pick each option, from MAUI Controls to Blazor Hybrid, drawn UI, platform UI or a mix.

His conclusion is that building a second UI is no longer the expensive part, but owning it still is.

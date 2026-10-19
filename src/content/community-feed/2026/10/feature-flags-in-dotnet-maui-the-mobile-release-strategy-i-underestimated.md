---
title: "Feature Flags in .NET MAUI: The Mobile Release Strategy I Underestimated"
link: https://medium.com/@thimanshu1993/feature-flags-in-net-maui-the-mobile-release-strategy-i-underestimated-b7d6dddbab0c
description: "Himanshu Tyagi explains why a store version is not a feature rollout, and how a small flag service lets a .NET MAUI app change behaviour without a new build. The post covers pilot users, API version switches, and why every flag needs a date to be deleted."
date: 2026-10-16
author: thimanshu1993
contentType: article
---

Shipping a build and turning a feature on are different jobs. Himanshu Tyagi walks through the moment that distinction mattered: a feature already in production that should be on for some users and off for everyone else, without waiting on store review.

## What you'll learn

- **A flag versus a version check** — `appVersion >= 5` turns a feature on for everyone who installed that build. A flag can limit it to internal testers, one customer, or a percentage, and turn it off the same day
- **A provider-shaped service** — `IFeatureFlagService.IsEnabled` hides LaunchDarkly, Firebase Remote Config, App Configuration, or your own API, then drives `IsVisible` and `Shell` navigation
- **Where it earns its keep** — gradual rollout, keeping a v1 and v2 API alive during a backend migration, UI experiments, and premium actions such as export
- **What it does not replace** — versioning, environment config, and API-driven behaviour stay. Flags sit beside them
- **The debt** — nested `if (flagA)` branches after a few releases, and a flag that is never removed becomes a permanent fork. Create, roll out, monitor, then delete the flag and the old path

Read the post for the cases he still would not put behind a flag, including a text change that is going to everyone anyway.

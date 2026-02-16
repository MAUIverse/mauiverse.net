---
title: "Supporting Android 16KB page sizes"
link: https://thewissen.io/16kb-page-sizes-android
description: "Steven Thewissen explains Google Play’s 16KB memory page size requirement for Android 15+ and what .NET MAUI developers need to upgrade/check to ensure their apps and native dependencies are compatible."
date: 2025-12-01
author: sthewissen
---

Android’s move to 16 KB memory pages can break apps that rely on native dependencies built for 4 KB pages.

This post breaks down what the requirement means and what to verify (MAUI version + dependencies) to ship safely.

---
title: "Integrating captcha into a .NET MAUI application"
link: https://vladislavantonyuk.github.io/articles/Integrating-captcha-into-a-.NET-MAUI-application/
description: Two ways to add captcha to a .NET MAUI app—native Android SafetyNet reCAPTCHA and a cross-platform WebView-based approach.
date: 2023-02-19
author: VladislavAntonyuk
---

Captcha is a straightforward way to raise the bar against automated abuse, but the implementation details vary by platform.

This post compares a **native Android** approach using Google’s APIs with a **cross-platform WebView** strategy that works across targets (including MAUI Blazor), plus guidance on registering keys and validating tokens.

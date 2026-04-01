---
title: "Accessibility in .NET MAUI: What It Is and How to Implement It"
link: https://www.telerik.com/blogs/accessibility-net-maui-what-how-to-implement
description: "Leomaris Reyes breaks down the POUR principles and shows how to apply accessibility (A11y) practices in .NET MAUI using SemanticProperties, scalable text, and proper control sizing. A practical guide to making your MAUI apps usable by everyone."
date: 2026-03-16
author: LeomarisReyes
contentType: article
---

Accessibility should be built in from the start, not bolted on at the end. This article walks through the four POUR principles — Perceivable, Operable, Understandable, and Robust — and translates each one into concrete .NET MAUI implementation patterns.

### What you will learn

- What A11y means and why it matters for mobile apps, not just the web
- How to use `SemanticProperties` to make controls readable by screen readers like TalkBack and VoiceOver
- How to set up semantic headings and mark decorative images as inaccessible
- How to enable `FontAutoScalingEnabled` so text respects user system preferences
- Minimum touch target sizes for iOS (44x44 pt) and Android (48x48 dp) and how to apply them
- How to write clear, non-technical error messages and action labels
- How to use `OnPlatform` for consistent cross-platform behavior where platforms diverge

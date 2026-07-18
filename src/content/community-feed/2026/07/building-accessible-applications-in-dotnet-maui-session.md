---
title: "Building Accessible Applications in .NET MAUI"
link: https://www.youtube.com/watch?v=UZCLGcOb-MA
description: "Shaun Lawrence takes over the MauiMart demo app to show how a deliberately inaccessible .NET MAUI app becomes usable by everyone. Recorded for Microsoft Zero to Hero, this ~1 hour session walks through the APIs, tooling, and habits that make accessibility surprisingly low-effort."
date: 2026-07-17
author: bijington
contentType: video
---

In this Microsoft Zero to Hero session, Shaun Lawrence starts from a purposely broken sample app — tiny touch targets, icon-only actions, poor contrast, placeholder-only inputs — and progressively fixes it live, proving that accessible .NET MAUI apps don't require a rewrite or an expert on the team.

## What you'll learn

- **Why accessibility is broader than you think** — permanent, temporary, and situational impairments, and how accessible design ends up improving the app for everyone
- **How the accessibility tree works** — why screen readers navigate a separate tree from your XAML, and how .NET MAUI maps controls to native VoiceOver, TalkBack, and Narrator support out of the box
- **SemanticProperties in practice** — using `Description` and `Hint` to convey what a control is and what it does, and when adding both is redundant
- **Headings, decorative images, and focus** — structuring navigation, opting elements in and out of the accessibility tree, and keeping focus sensible
- **Dynamic text and touch targets** — letting layouts scale text without truncation and making controls easy to hit one-handed
- **Testing your apps** — VoiceOver, the Android Accessibility Scanner, and the iOS Accessibility Inspector for validating your work

Watch the full session for the live MauiMart fixes, audience Q&A on trade-offs, and Shaun's challenge to try navigating your own app with a screen reader.

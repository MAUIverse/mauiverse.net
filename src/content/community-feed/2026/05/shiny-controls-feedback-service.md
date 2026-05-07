---
title: "The Feedback Service — One Hook to Rule Them All"
link: https://allanritchie.com/blog/2026/05/feedback-service/
description: "Allan Ritchie introduces IFeedbackService in Shiny Controls v1.0 — a single injectable service that every interactive control calls for haptic, TTS, sound effects, analytics, or any combination. Implement it once, and every control uses it automatically."
date: 2026-05-05
author: aritchie
contentType: article
---

Every tap, swipe, and keystroke in your app is an opportunity for feedback. Instead of scattering `HapticFeedback.Default.Perform()` calls through your codebase, Shiny Controls v1.0 provides `IFeedbackService` — a single injectable hook that every interactive control already calls.

## What you'll learn

- How `IFeedbackService.OnRequested(control, eventName, args)` gives you the live control instance and typed event data
- How to extend the default haptic behaviour with text-to-speech, sound effects, and analytics in one service
- Pluggable hooks for standard MAUI controls (`Button`, `Slider`, `Entry`, `Switch`) via `MauiControlFeedbackBuilder`
- The full event catalog for built-in Shiny controls: ChatView, SecurityPin, FloatingPanel, ImageViewer, ImageEditor, Scheduler, and more
- AOT-safe implementation with `ConditionalWeakTable`, no reflection, and proper unsubscription

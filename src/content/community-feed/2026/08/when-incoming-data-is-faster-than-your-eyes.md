---
title: "When Incoming Data Is Faster Than Your Eyes"
link: https://taublast.github.io/posts/LimitBindings/
description: "Nick Kovalsky shares a real fix from a Bluetooth app receiving data 20 times a second: throttle how often bindings raise PropertyChanged while keeping data processing at full speed. A drop-in ThrottledViewModel base class gates UI updates to a smooth ~12Hz."
date: 2026-08-18
author: taublast
contentType: article
---

A device streaming 20 packets per second can quietly choke the UI thread, since every `PropertyChanged` triggers binding evaluation, layout, and redraw. Nick Kovalsky walks through gating UI updates to a readable rate while letting the data path run untouched.

## What you'll learn

- **Where the cost is** — why the number of UI invalidations, not the data rate, breaks smoothness
- **Collect then flush** — a `SmartOnPropertyChanged` that records changed property names into a set instead of raising events immediately
- **A gated `ThrottledViewModel`** — a reusable base class that flushes on a schedule, with a pending flag so the last packet is never dropped
- **Implementation details** — raising events outside the lock, cached `PropertyChangedEventArgs`, a reused buffer, and monotonic `Stopwatch` timing
- **Skipping no-op work** — rounding and comparing before formatting strings, plus why ~12Hz was the sweet spot
- **The trade-offs** — values up to one interval stale, per-viewmodel gating, and clock-paced (not frame-paced) flushes

Read the full post for the complete class and usage example you can drop into your own app.

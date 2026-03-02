---
title: "MessagingCenter Is Dead in .NET 10 - Here’s What’s Next For Your MAUI app!"
link: https://www.youtube.com/watch?v=EMB4TFBRomU
description: MessagingCenter is removed in .NET 10, and this video shows practical migration options for existing MAUI apps. You will see a drop-in plugin path and guidance toward modern messenger patterns.
date: 2025-06-26
author: jfversluis
contentType: video
---

Removing `MessagingCenter` impacts many existing MAUI codebases, so migration strategy matters for stability and delivery speed. This walkthrough covers how to transition safely using `Plugin.Maui.MessagingCenter` for compatibility and when to move to `WeakReferenceMessenger` for a more future-facing architecture.

### What you will learn

- What breaks with MessagingCenter removal in .NET 10
- How to use a compatibility plugin to reduce migration risk
- How `WeakReferenceMessenger` improves performance and long-term maintainability

### Trade-off

- A compatibility plugin helps fast adoption, but direct migration to modern messaging APIs is usually better long term

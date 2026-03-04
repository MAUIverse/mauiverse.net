---
title: "Set current shell item from anywhere in a MAUI app"
link: https://tonyedwardspz.co.uk/blog/set-current-shell-item/
description: This guide shows how to keep MAUI Shell tab state in sync when navigating from app notifications into nested views. Tony demonstrates a simple pattern for switching the active tab programmatically to preserve user orientation.
date: 2024-02-29
author: tonyedwardspz
contentType: article
---

The post addresses a subtle UX gap: deep linking can navigate correctly but still leave Shell tab selection visually wrong.

## Fast path

- **Prereqs:** A MAUI Shell app with notification-triggered navigation
- **Steps:** Name your tab items, add a shell switching method, and invoke it on the main thread before navigation
- **Result:** Correct view navigation and correct active tab highlighting
- **Next:** Reuse the pattern for other deep-link entry points

## What you'll learn

- How to coordinate navigation and Shell state updates
- Why main-thread invocation matters for smooth UI behavior
- Where to place this logic for reuse across platform entry paths

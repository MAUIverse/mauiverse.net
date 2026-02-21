---
title: "How to Get the Active Window in .NET MAUI"
link: https://vladislavantonyuk.github.io/articles/How-to-Get-the-Active-Window-in-.NET-MAUI/
description: A simple pattern for tracking the active Window in multi-window .NET MAUI apps by extending Window and surfacing an IsActive flag plus helper extensions.
date: 2025-03-14
author: VladislavAntonyuk
---

.NET MAUI supports multiple windows, but doesn’t provide a built-in way to ask “which one is active?”—a common need for popups and UI state management.

Vladislav Antonyuk demonstrates a clean approach: subclass `Window` to track activation/deactivation, then add extension methods to reliably find and use the current active window.

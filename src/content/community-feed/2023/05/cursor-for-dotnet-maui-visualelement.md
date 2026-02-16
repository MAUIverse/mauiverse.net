---
title: "Setting a cursor for .NET MAUI VisualElement"
link: https://vladislavantonyuk.github.io/articles/Setting-a-cursor-for-.NET-MAUI-VisualElement/
description: Add custom mouse cursors to .NET MAUI controls with platform-specific implementations and an attached property for XAML-friendly usage.
date: 2023-05-10
author: VladislavAntonyuk
---

Desktop-focused MAUI apps often need better pointer affordances (like hand, text, resize) than the default cursor behavior provides.

Vladislav Antonyuk walks through implementing cursor support per platform (Android, iOS, MacCatalyst, Windows) and then packaging it behind an attached property so you can set cursors cleanly from XAML.

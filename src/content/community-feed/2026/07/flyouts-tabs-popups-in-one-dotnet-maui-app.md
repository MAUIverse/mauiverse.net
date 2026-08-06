---
title: "Flyouts, Tabs, and Popups in One .NET MAUI App"
link: https://mr5z.github.io/mr5z/posts/touring-food-delivery-app.html
description: "Mark Laureta tours a full Food Delivery showcase app for MvvmEssentials, his Shell alternative for .NET MAUI navigation and MVVM. Screen by screen, it shows flyouts, tabs, and popups sharing one clean ViewModel lifecycle contract."
date: 2026-07-25
author: mr5z
contentType: article
---

Written for .NET MAUI UI July 2026, Mark Laureta walks through Food Delivery, the showcase app for MvvmEssentials, a navigation and MVVM library he built as an alternative to Shell. Each screen highlights a different piece of the framework.

## What you'll learn

- **A unified lifecycle contract** — a `PageViewModel` base with hooks like `OnParametersSet`, `OnNavigatedTo/From`, and `OnInitialized` shared across surfaces
- **Flyout + tabs shell** — composing a `FlyoutPage` with a nested `TabbedPage`, and behaviors that fix lifecycle propagation into the detail
- **Once vs. every time** — deciding between `OnInitialized` and `OnNavigatedTo`/`OnTabSelected` for loading data
- **Typed navigation** — passing typed parameters instead of route strings, with auto-mapped properties
- **Popups that return results** — awaiting a typed result from a popup instead of callbacks or shared state
- **Registering it all** — wiring pages, tabs, and popups with a fluent `MapPage`/`RegisterPage` registry

Read the full post and grab the Food Delivery repo to run the complete example.

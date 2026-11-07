---
title: "Setting up a basic MVVM architecture in .NET MAUI"
link: https://blog.pieeatingninjas.be/2022/02/11/setting-up-a-basic-mvvm-architecture-in-net-maui/
description: "Pieter Nijs builds a small MVVM setup for .NET MAUI without a third-party framework, using the built-in dependency injection, a view-model-first `NavigationService` and parameter passing. It was written during MAUI Preview 12, with a later note pointing to his MVVM book."
date: 2022-02-11
author: PieEatingNinjas
contentType: article
---

Prism and FreshMVVM weren't working on the MAUI previews at the time, so Pieter Nijs put together his own minimal framework. The goals were simple: working dependency injection, binding view models to views, linear navigation from view models, passing parameters, and triggering code on navigation.

The post shows how MAUI's built-in DI container (the `Services` property on the builder) covers the first two goals. Register your pages and view models, take a view model as a constructor parameter, and set it as the `BindingContext`. It then builds a `NavigationService` for moving between view models, adds back navigation, and finishes with parameters and navigation callbacks.

Pieter added a December 2023 note: much of the post still applies, but for a thorough treatment of MVVM in MAUI he points to his book. It's worth a read if you want to understand how the pieces fit before you adopt a library.

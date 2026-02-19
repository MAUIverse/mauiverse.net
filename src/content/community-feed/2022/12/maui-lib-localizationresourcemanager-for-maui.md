---
title: "MAUI Lib - LocalizationResourceManager for MAUI!"
link: https://sirjohnk.com/coding/MAUI-Lib-1/
description: "Johan Svensson presents `LocalizationResourceManager.Maui`, a .NET MAUI localization library inspired by Xamarin Community Toolkit patterns and adapted for MAUI-first usage. He covers its DI-friendly setup, multi-resource support, and runtime culture persistence features while official toolkit direction continues to evolve."
date: 2022-12-27
author: SirJohnK
contentType: article
---

This post describes why Johan built a dedicated MAUI localization library: Xamarin Community Toolkit localization helpers were valuable, but direct reuse in MAUI was complicated by legacy dependencies and ongoing toolkit decisions.

The summary of capabilities includes builder-pattern setup, support for multiple and file-based resource managers, culture save/restore behavior, DI registration through `ILocalizationResourceManager`, dotted resource-name support, and translation binding enhancements.

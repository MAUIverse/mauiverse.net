---
title: "My Favorite Color Extensions from the .NET MAUI Community Toolkit"
link: https://www.telerik.com/blogs/my-favorite-color-extensions-net-maui-community-toolkit
description: "Leomaris Reyes walks through the Community Toolkit's color animation and conversion extensions, including BackgroundColorTo, TextColorTo and ToBlackOrWhite. It's a four-minute read with short code samples if you want smoother color transitions or readable text on changing backgrounds."
date: 2026-11-09
author: LeomarisReyes
contentType: article
---

Color tells users something before they read a word, and the .NET MAUI Community Toolkit includes a few extension methods that make working with it easier. Leomaris Reyes starts with a quick refresher on extension methods, then splits the tour into two groups.

The animation extensions, `BackgroundColorTo` and `TextColorTo`, fade a control from one color to another. Each takes optional rate, duration and easing parameters, and the post gives a pink-to-blue example for each, with a GIF of the result. The conversion extensions are more situational: `ToBlackOrWhite` picks a readable text color for a dynamic background, `IsDark` tests a color, `ToInverseColor` flips it, `WithRed`, `WithGreen` and `WithBlue` adjust a single channel, and `ToRgbString` produces a string value.

Each extension is short enough to try in a few minutes, and the post links to the official documentation for the rest.

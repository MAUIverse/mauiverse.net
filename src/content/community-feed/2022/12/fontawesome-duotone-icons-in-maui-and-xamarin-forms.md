---
title: "FontAwesome Duotone icons in MAUI and Xamarin.Forms"
link: https://blog.pieeatingninjas.be/2022/12/13/fontawesome-duotone-icons-in-maui-and-xamarin-forms/
description: "Pieter Nijs shows how to register Font Awesome in a .NET MAUI or Xamarin.Forms app, then use the Duotone font to color each layer of an icon separately. The trick is a `#` or `##` suffix on the icon name."
date: 2022-12-13
author: PieEatingNinjas
contentType: article
---

Font Awesome is an easy way to add icons to a mobile app, and the Duotone set adds a second color for depth. Pieter Nijs starts with the basics for both frameworks. In Xamarin.Forms you embed the font file and register it with `ExportFont`, while in .NET MAUI you add it through `ConfigureFonts` in `MauiProgram.cs`. After that, a `Label` with the right `FontFamily` and icon name does the job.

For Duotone icons, each icon has two layers. Adding `#` to the icon name renders the first layer, and `##` renders the second. Pieter shows three labels in different colors, then stacks the two layers in a `Grid` so they appear as one icon in two colors.

It's a short, practical recipe if you use Font Awesome Pro and want to move beyond single-color icons.

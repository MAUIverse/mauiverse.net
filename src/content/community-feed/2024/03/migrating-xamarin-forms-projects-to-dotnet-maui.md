---
title: "Navigating Real-Time Challenges: Migrating Xamarin.Forms Projects to .NET MAUI"
link: https://medium.com/@thimanshu1993/navigating-real-time-challenges-upgrading-xamarin-forms-projects-to-net-maui-160af36f440f
description: "Himanshu Tyagi lists the layout and API surprises that showed up after a Xamarin.Forms app was already compiling as .NET MAUI. AndExpand, Grid definitions, StackLayout, WebClient, and spacing defaults had all changed behaviour."
date: 2024-03-21
author: thimanshu1993
contentType: article
---

The migration guide gets the project building. Himanshu Tyagi writes about what broke after that, on a real Xamarin.Forms app, once the screens were running under .NET MAUI.

## What you'll learn

- **Layout options that disappeared** — `StartAndExpand`, `CenterAndExpand`, `EndAndExpand`, and `FillAndExpand` are gone. What remains is `Start`, `Center`, `End`, and `Fill`, and the XAML has to be rearranged around that
- **Grids and stacks** — rows and columns must be declared. `StackLayout` children can extend past the space they used to be clipped to, which is why he replaced many stacks with grids
- **Spacing defaults** — padding, margin, `StackLayout.Spacing`, and grid row and column spacing default to zero, so screens that relied on the old defaults collapse
- **`WebClient`** — deprecated from .NET 6. `HttpClient` covered his downloads. FTP does not, and needs another library
- **The UI thread** — `Device.BeginInvokeOnMainThread` is deprecated in favour of `MainThread.BeginInvokeOnMainThread`

Read the post if your migration compiles and the UI still looks wrong. These are the differences he had to fix by hand.

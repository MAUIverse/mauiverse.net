---
title: "Skeleton in .NET MAUI: What It Is and How to Use It"
link: https://www.telerik.com/blogs/skeleton-net-maui-what-and-how-to-use-it
description: "Leomaris Reyes explains why skeletons beat spinners for loading states and shows how to use the Telerik UI for .NET MAUI RadSkeleton. Covers when skeletons help (and when they don't), the built-in anatomies like Article and Card, and building a fully custom skeleton layout."
date: 2026-08-24
author: LeomarisReyes
contentType: article
---

A blank screen makes users assume your app is broken. Leomaris Reyes makes the case for skeletons — gray placeholder blocks that mirror your real layout while data loads — and walks through implementing them with the Telerik UI for .NET MAUI `RadSkeleton` component.

## What you'll learn

- **What a skeleton is** — placeholder blocks in the shape of your content, with subtle animation, versus an empty screen or spinner
- **When to use them (and when not)** — great for API waits and heavy images; skip them for instant loads and very simple screens
- **Getting started with RadSkeleton** — adding the Telerik namespace, registering controls with `UseTelerik()`, and dropping in `<telerik:RadSkeleton />`
- **Built-in anatomies** — ready-made `SkeletonType` structures like Article, Text, PersonaCircle/Square, Image, Video, Card, and ContentFeed
- **Custom skeleton views** — defining your own layout as a `DataTemplate` and assigning it via `LoadingViewTemplate`

Read the full article for each skeleton type illustrated and the complete custom-template example.

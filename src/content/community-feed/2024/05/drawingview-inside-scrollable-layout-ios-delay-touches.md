---
title: "How to use a DrawingView inside a scrollable layout, in .NET MAUI"
link: https://medium.com/medialesson/how-to-use-a-drawingview-inside-a-scrollable-layout-in-net-maui-2a080e32cdb4
description: "José Pereira explains why DrawingView can feel unresponsive on iOS inside ScrollView/TableView and shows fixes by disabling DelaysContentTouches (plus a renderer workaround for TableView)."
date: 2024-05-25
author: zleao
---

If DrawingView is wrapped in a scrollable container on iOS, touch gestures can be delayed or captured by the scroll view.

This post shows how to disable the iOS touch delay to restore smooth drawing interactions.

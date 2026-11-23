---
title: "Introducing the Syncfusion .NET MAUI Bottom Sheet Control"
link: https://www.syncfusion.com/blogs/post/dotnet-maui-bottom-sheet-control
description: "Syncfusion introduces its new .NET MAUI Bottom Sheet control, a slide-up panel with grabber customization, swipe handling, modal and non-modal modes, and four expansion states. The post builds a task-details sheet and is a useful starting point if you'd rather not hand-roll the gestures and animations."
date: 2026-11-19
author: syncfusion
contentType: article
---

A bottom sheet lets you show more information without taking someone off the page they're on, but building one means handling layout, gestures, animation and several presentation states. Syncfusion's new control, available in the `Syncfusion.Maui.BottomSheet` package as part of Essential Studio 2026 Volume 3 SP, packages that up.

The post walks through the options that matter in practice. You can restyle the grabber and set a custom content width, which helps on tablets and desktops where a full-width sheet looks stretched. `SwipeFromHeaderOnly` keeps a scrollable list inside the sheet from fighting the drag gesture. `IsModal` and `CollapseOnOverlayTap` control whether the page behind stays interactive, and `AllowedState` limits which of the four states (`Hidden`, `Collapsed`, `HalfExpanded` and `FullExpanded`) a user can reach.

It then puts these together in a task management example that shows task details in a sheet, with programmatic open and close and state-change events. The control hosts any MAUI view, so it suits filter panels, item previews and location details too. It's a commercial control, so check Syncfusion's licensing before adopting it.

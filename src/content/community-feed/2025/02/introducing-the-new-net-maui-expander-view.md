---
title: "Introducing The New .NET MAUI Expander View"
link: https://albyrock87.hashnode.dev/introducing-the-new-net-maui-expander-view
description: "Alberto introduces Nalu ExpanderViewBox, a layout-friendly expander control designed to animate size changes and simplify collapsible UI in .NET MAUI. The post shows how to handle dynamic content, build accordions, and avoid common CollectionView pitfalls with a clean, minimal API."
date: "2025-02-11"
author: "albyrock87"
contentType: "article"
---

In this post, Alberto introduces Nalu ExpanderViewBox, a fresh take on expandable content for .NET MAUI that focuses on working with the layout system rather than fighting it. 

The article begins by explaining the motivation behind yet another expander control, pointing out that many existing options either impose an accordion style or fail to properly leverage MAUI’s layout behavior. The goal here is simplicity: a lightweight container that can constrain content, animate size changes, and remain flexible for different UI patterns.

The walkthrough then moves into practical scenarios you are likely to encounter in real apps. You will see how to automatically animate container size when dynamic content changes, how to implement collapsible sections when content size is unknown, and how to build a traditional accordion when you actually want one. The post also digs into a tricky area many developers hit: using expanders inside CollectionView while dealing with virtualization and view reuse. By explaining the built-in animation behavior and binding patterns, the author shows how the control avoids common scrolling and resize glitches.

If you have struggled with expandable UI in MAUI or want a cleaner, layout-friendly alternative, this is a focused and practical introduction worth exploring.

---
title: "Deprecation of ListView in .NET MAUI"
link: https://dev.to/vhugogarcia/deprecation-of-listview-in-net-maui-cga
description: "Microsoft announced ListView's deprecation in .NET 10, encouraging developers to migrate to CollectionView for better performance and flexibility. This guide provides step-by-step migration patterns including template conversion, selection handling, and SwipeView alternatives."
date: 2025-03-29
author: vhugogarcia
contentType: article
---

Big news from the .NET MAUI team: `ListView` is officially on its way out in .NET 10! But don't worry—this is actually a good thing. The team is focusing all their energy on `CollectionView`, which is faster, more flexible, and honestly just better all around.

Victor walks through everything you need to know about making the switch, from converting those old `TextCell` and `ImageCell` templates to DataTemplates, to replacing context actions with the slick new `SwipeView`. Plus, you'll learn how to take advantage of CollectionView's awesome features like grid layouts, better grouping, and built-in empty state handling.

**Key topics covered:**
- Step-by-step migration patterns from ListView to CollectionView
- Converting cell templates and selection handling
- Using SwipeView for modern context actions
- Leveraging flexible layout options (vertical, horizontal, grid)
- Performance benefits and why now's the time to migrate

[Read Victor's complete migration guide](https://dev.to/vhugogarcia/deprecation-of-listview-in-net-maui-cga) to future-proof your MAUI apps before .NET 10 drops!

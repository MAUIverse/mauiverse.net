---
title: "Replicating Project Pad UI in .NET MAUI"
link: https://www.telerik.com/blogs/replicating-project-pad-ui-net-maui
description: "Leomaris Reyes recreates a project-manager design from Dribbble, using BindableLayout and the Telerik UI for .NET MAUI CollectionView to handle repeated elements. It's a seven-minute read that shows when a data-driven layout beats copying controls by hand."
date: 2026-10-19
author: LeomarisReyes
contentType: article
---

Repeated visual elements give you a choice: copy the XAML for each one, or bind a list and let the layout generate them. This article makes the second case by rebuilding the Project Pad mobile design in four blocks: intro, header, categories and footer.

The intro screen is a Grid with an image, a logo and a rounded button. Leomaris shows that you get a circle by setting equal `HeightRequest` and `WidthRequest` values and a `CornerRadius` of half that size. The header covers the title, description, divider, overlapping avatars and a round star button. The categories block is where the data-driven approach pays off: a small model, a view model that fills it, and the XAML that renders it with a `BindableLayout` and the Telerik CollectionView.

It's most useful if you're comfortable with Grids and want to see where bindable layouts fit. The Telerik controls require a license or trial.

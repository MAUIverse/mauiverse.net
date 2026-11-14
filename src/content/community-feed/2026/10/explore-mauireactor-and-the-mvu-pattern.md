---
title: "Explore MauiReactor and the MVU Pattern"
link: https://www.telerik.com/blogs/explore-mauireactor-mvu-pattern
description: "Héctor Pérez introduces MauiReactor, Adolfo Marinucci's component-based library for writing .NET MAUI UIs in fluent C# using the Model-View-Update pattern. It's a nine-minute tour with a habit-tracker sample if you're curious what MAUI looks like without XAML or bindings."
date: 2026-10-26
author: hprez21
contentType: article
---

MVVM with XAML is the default for MAUI, but it isn't the only way to build a screen. Héctor Pérez looks at **MauiReactor**, which implements the MVU (Model-View-Update) pattern on top of MAUI, so the UI is declared in C# and rebuilt whenever the state changes.

He explains MVU first: the model is the screen's state, the view is a function that renders it, and updates are the only place state can change. He then sets up a project from the `Reactor.Maui.TemplatePack` template and replaces `UseMauiApp<App>()` with `UseMauiReactorApp<MainPage>()`. From there the post builds up gradually. It starts with a stateless component, then adds a stateful counter with `Component<TState>` and `SetState`, and finally a habit-tracker style app with a reusable child component.

Héctor is clear that MauiReactor isn't officially supported by the MAUI team. It's still a good way to see whether this style suits you before trying it on a real project.

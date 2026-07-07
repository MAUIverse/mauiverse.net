---
title: "Building a .NET MAUI App with the MVU (Model-View-Update) Pattern"
link: https://shaunebu.com/2ABmv
description: "Jorge Perales Diaz introduces the MVU (Model-View-Update) pattern as a predictable, unidirectional alternative to MVVM in .NET MAUI. He builds a working Task Tracker from scratch using declarative C# markup to show how state-as-a-function-of-the-UI plays out in practice."
date: 2025-10-14
author: jpd21122012
contentType: article
---

MVVM is the default for XAML frameworks, but it's not the only option. This deep-dive explores MVU — the functional, Elm-inspired pattern built on immutable state and unidirectional data flow — and shows how to apply it in a real .NET MAUI app.

## What you'll learn

- The three MVU building blocks: an immutable Model (app state), a View as a pure function of state, and a pure Update function that returns a new Model from a Message
- A clear side-by-side comparison of MVU and MVVM across data flow, state management, boilerplate, learning curve, and predictability
- A step-by-step build of a Task Tracker using .NET MAUI's declarative C# markup instead of XAML
- Real-world scenarios where MVU shines (data-driven forms, state-heavy apps, functional-leaning teams, rapid prototyping) — and when to stick with MVVM

Give it a read if you're curious about a fresh, highly testable way to architect MAUI apps.

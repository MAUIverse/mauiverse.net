---
title: "Introducing Bindable Property Source Generators"
link: https://codetraveler.io/2026/01/29/introducing-bindable-property-source-generators/
description: Brandon Minnick introduces new CommunityToolkit.Maui source generators for BindableProperty and attached bindable properties to reduce boilerplate in .NET MAUI.
date: 2026-01-29
author: TheCodeTraveler
---

CommunityToolkit.Maui v14 adds new (experimental) source generators that can generate **BindableProperty** and **attached bindable properties** from attributes like `[BindableProperty]` and `[AttachedBindableProperty<T>]`.

This post walks through how to opt in, what code gets generated, and how to configure common scenarios like default values, binding modes, validation, and property changed hooks.

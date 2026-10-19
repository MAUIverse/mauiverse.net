---
title: "How to Transfer Data from One Page to Another in .NET MAUI"
link: https://medium.com/@thimanshu1993/how-to-transfer-data-from-one-page-to-another-in-net-maui-or-xamarin-forms-e433737ab3fb
description: "Himanshu Tyagi passes a selected employee between .NET MAUI pages through a shared service, instead of a constructor parameter that ties the two pages together. The sample is MVVM, dependency injection, and a dictionary keyed by name."
date: 2023-12-12
author: thimanshu1993
contentType: article
---

A list page that constructs the detail page with an employee in the constructor works until the next navigation needs the same object. Himanshu Tyagi pulls that hand-off into a service so the pages do not know how each other is built. The same idea applies to Xamarin.Forms.

## What you'll learn

- **Why the constructor gets awkward** — the list page has to know the detail page's constructor, and the data is stuck on that one navigation
- **`ISharedService`** — `Add<T>(key, value)` and `GetValue<T>(key)`, implemented as a dictionary on `SharedService`
- **Registration** — view models as transient, the shared service as a singleton in `MauiProgram`, so both pages see the same dictionary
- **The hand-off** — the home view model stores `"SelectedEmployee"` and pushes `DetailPage`. The detail view model reads that key in its constructor
- **The UI thread** — the push is wrapped in `MainThread.BeginInvokeOnMainThread`

Read the post for the folder layout and the [sample repository](https://github.com/thimanshu1993/MauiDataSharing). The dictionary is the whole mechanism, so the interesting part is where you put it.

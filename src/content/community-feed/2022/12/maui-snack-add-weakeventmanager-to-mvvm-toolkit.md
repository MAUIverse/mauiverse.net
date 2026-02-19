---
title: "MAUI Snack - Add WeakEventManager to MVVM Toolkit!"
link: https://sirjohnk.com/coding/MAUI-Snack-1/
description: "Johan Svensson explores extending CommunityToolkit.Mvvm’s `ObservableObject` with MAUI’s `WeakEventManager` to improve event handling safety. The post shows how to reduce memory-leak risk while keeping the productivity benefits of MVVM Toolkit source generators."
date: 2022-12-06
author: SirJohnK
contentType: article
---

Johan begins by showing how MVVM Toolkit attributes simplify view model code, then points out a gap he missed from Xamarin Community Toolkit: built-in weak event handling for property change notifications.

He proposes a `BaseObservableObject` approach that inherits from `ObservableObject` and intercepts `INotifyPropertyChanged` and `INotifyPropertyChanging` events through `WeakEventManager`, giving MAUI apps safer event subscriptions without abandoning MVVM Toolkit patterns.

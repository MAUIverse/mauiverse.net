---
title: "Edge-to-Edge CollectionView Scrolling on iPhone Duo"
link: https://blog.pieeatingninjas.be/blog/2026-11-11-edge-to-edge-scrolling-on-iphone-duo/
description: "Pieter Nijs tracks down why a .NET MAUI CollectionView leaves small gaps at the top and bottom on the iPhone Duo, and packages a fix in DuoExtensions.Maui. It's worth a read if your list should scroll behind the system bars while the first item still starts clear of the title."
date: 2026-11-11
author: PieEatingNinjas
contentType: article
---

On the iPhone Duo, the title bar scrolls out of the way without any special configuration, but a `CollectionView` doesn't quite follow it to the screen edges. Pieter Nijs found small gaps at the top and bottom, and neither `SafeAreaEdges` option got rid of them: `None` left the first items hidden under the title, while `Container` kept them visible but left the gaps.

His approach is to separate the viewport from the content insets. The viewport should extend behind the system bars, and UIKit's automatic inset adjustment should give the content a safe start and end. MAUI sets the native `ContentInsetAdjustmentBehavior` to `Never`, and switching it to `Automatic` wasn't enough on its own. The collection view's controller isn't attached to the page's controller, so UIKit never received the appearance notification it needs to calculate the safe area.

The reusable fix is an opt-in iOS handler in **DuoExtensions.Maui**, enabled with `UseEdgeToEdgeCollectionView()`. The post walks through what the handler does, the XAML setup using `SafeAreaEdges="Container, None"`, and a few caveats. It applies to all iOS `CollectionView` controls in the app, and it can conflict with an existing custom handler. A standard `ScrollView` doesn't need it.

If you're adapting a list-heavy MAUI app for the foldable, the explanation of the safe-area plumbing is useful even if you don't adopt the package.

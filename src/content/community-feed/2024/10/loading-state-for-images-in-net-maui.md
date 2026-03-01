---
title: "Loading State for Images in .NET MAUI"
link: https://dev.to/vhugogarcia/loading-state-for-images-in-net-maui-28ng
description: "Control reference bindings in .NET MAUI enable elegant loading indicators for images across all platforms. By binding to the Image control's IsLoading property, developers can provide visual feedback during image fetching operations."
date: 2024-10-31
author: vhugogarcia
contentType: article
---

Here's a slick trick for your MAUI apps: Victor shows how to add loading spinners to images without touching your ViewModel code. Just use control reference bindings to tap into the Image control's built-in `IsLoading` property. Seriously elegant!

Shout out to Gerald Versluis for the original inspiration on this pattern. It works everywhere—single images, CollectionView, CarouselView—and it's pure XAML. The user sees a spinner while images load, and it automatically hides when done. No custom state management needed.

**What you'll learn:**
- Using control reference bindings in XAML
- Binding ActivityIndicator to Image.IsLoading property
- Creating smooth loading states for image galleries
- Works across iOS, Android, Windows, and macOS

[Check out the article](https://dev.to/vhugogarcia/loading-state-for-images-in-net-maui-28ng) for the complete code walkthrough!

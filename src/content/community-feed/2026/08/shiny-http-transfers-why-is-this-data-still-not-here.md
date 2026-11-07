---
title: "Shiny HTTP Transfers: Why Is This Data Still Not Here?"
link: https://allanritchie.com/blog/2026/08/background-http-transfers/
description: "Allan Ritchie explains why uploads and downloads stall when iOS suspends your app or Android reclaims it, and how Shiny.Net.Http hands the bytes to the platform instead. He covers pause states, resumable downloads and progress that stays accurate while the app isn't running."
date: 2026-08-26
author: aritchie
contentType: article
---

The 200 MB video stalls at 60% because the user answered a text message. Allan Ritchie's argument is that the data isn't late because something is broken. The OS suspended the process, so nobody was carrying it. The answer is to stop holding the socket and let the platform do it.

Shiny.Net.Http is the oldest library he maintains, starting as a Xamarin plugin in 2016. It offers one API over whatever each platform provides:

- **iOS and Mac Catalyst:** a background `NSURLSession`, which can relaunch the app to finish
- **Android:** a managed loop inside a foreground service that shuts down when the queue empties
- **Other targets:** the same loop gated on connectivity, plus Service Worker Background Sync for Blazor WebAssembly

The post spends time on the details that usually get glossed over. Network loss pauses a transfer instead of failing it, and downloads resume with `Range` requests. Four distinct states separate "the network went away", "it's metered", "a person paused it" and "the server said no", so only a deliberate pause stays paused. He's also candid about Android 15's `dataSync` and `shortService` time limits.

The last section looks at progress: sampled throughput, `-1` for unknown size, and a bar that stays in the right place across a relaunch. It's worth reading before you write your own retry loop for large files.

---
title: "Mastering Crash Analytics with New Relic in .NET MAUI"
link: https://medium.com/@thimanshu1993/mastering-crash-analytics-with-new-relic-in-net-maui-a-step-by-step-guide-6f9ea05874df
description: "Himanshu Tyagi sets up New Relic crash reporting in a .NET MAUI app, written as a replacement path after App Center's retirement was announced. Separate iOS and Android tokens, the MAUI plugin, and the difference between a crash and a handled exception."
date: 2024-03-27
author: thimanshu1993
contentType: article
---

App Center's retirement notice sent a lot of MAUI apps looking for another place to land crashes. Himanshu Tyagi uses New Relic, and this guide is the setup he followed for Android and iOS rather than a tour of the product.

## What you'll learn

- **Two apps, two tokens** — New Relic appends `-android` and `-ios` to the name you choose, and each platform gets its own application token
- **Version floor** — .NET 6 or newer, Android 7 (API 24) or newer, iOS 11 or newer, current Xcode
- **The plugin** — `NewRelic.MAUI.Plugin`, then `HandleUncaughtException`, `TrackShellNavigatedEvents`, and `CrossNewRelic.Current.Start` in `App` with a platform-specific token and collector addresses
- **Android manifest** — `ACCESS_NETWORK_STATE` and `INTERNET` before any data leaves the device
- **Proving it works** — throw from a button to simulate a crash, and `RecordException` for failures you already caught

Read the guide for the token lookup path in the New Relic UI and the screenshots of what a crash looks like once the agent is running.

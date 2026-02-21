---
title: "Page Resolver and Navigation Extension for MAUI"
link: https://goforgoldman.com/posts/maui-page-resolver
description: "Introducing the MAUI Page Resolver library, providing dependency injection and navigation extensions for .NET MAUI apps with fully resolved dependencies."
date: 2021-06-17
author: matt-goldman
---

Before .NET MAUI shipped, Matt Goldman built **PageResolver** to make DI-driven navigation easier—pushing pages by type and letting the container resolve pages, ViewModels, and dependencies.

This post introduces the idea, the motivation, and the basic usage pattern that later evolved into the broader PageResolver/SmartNavigation work.


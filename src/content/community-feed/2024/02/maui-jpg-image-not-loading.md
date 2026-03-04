---
title: "MAUI - embedded .jpg image not loading"
link: https://tonyedwardspz.co.uk/blog/maui-jpg-image-not-loading/
description: This quick fix explains why local JPG assets can fail to render in MAUI even when file paths look correct. Tony walks through the `.csproj` build action correction and naming constraints required for reliable image loading.
date: 2024-02-18
author: tonyedwardspz
contentType: article
---

This is a practical debugging note for a common asset pipeline issue that can block UI development unexpectedly.

## What you'll learn

- How incorrect build actions like `BundleResource` can break MAUI image resolution
- Why switching to `MauiImage` fixes the resource packaging path
- Which filename rules matter for Android compatibility
- When to clean `bin/obj` to validate asset pipeline changes

## Why read it

If your images compile but still don't display, this gives you a short, high-probability checklist to get back on track.

---
title: "Fixing video file not streaming from Azure Blob Storage on Android"
link: https://blog.pieeatingninjas.be/2021/12/21/fixing-video-file-not-streaming-from-azure-blob-storage-on-android/
description: "Pieter Nijs tracks down why an mp4 hosted in Azure Blob Storage played on iOS but not Android in a Xamarin.Forms app. The answer is a service property you can only set from code, not from the portal."
date: 2021-12-21
author: PieEatingNinjas
contentType: article
---

A video that plays perfectly on iOS but won't start on Android is a frustrating bug. Pieter Nijs hit it with the Xamarin Community Toolkit's `MediaElement` and an mp4 served from Azure Blob Storage, and realized he'd solved the same problem on an earlier project and forgotten how.

The fix is to set the Blob service's `DefaultServiceVersion` to `2011-08-18`. There's no way to do it in the Azure portal, so the post includes a short C# snippet that sets it through the storage SDK. He also notes that the snippet uses the older WindowsAzure.Storage package, because he couldn't get the newer Azure.Storage.Blobs package to work.

It's a Xamarin-era post, but worth knowing if you stream media from Blob Storage to Android.

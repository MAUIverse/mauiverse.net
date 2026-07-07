---
title: "Bringing AI On-Device: Building and Integrating TensorFlow Lite Models in .NET MAUI"
link: https://shaunebu.com/DjRgw
description: "Jorge Perales Diaz walks the full lifecycle of on-device ML — training a model in Python, optimizing it as TensorFlow Lite, and wiring it into .NET MAUI for real-time inference. It's the end-to-end pipeline most tutorials skip, covering the crucial integration and performance details."
date: 2026-05-10
author: jpd21122012
contentType: article
---

Machine learning on mobile is production-ready, but the hard part isn't training — it's building a pipeline that integrates cleanly with your app. This guide covers the entire path: dataset → training → optimization → TFLite → MAUI inference layer.

## What you'll learn

- Designing a mobile-friendly dataset and applying data augmentation for better on-device generalization
- Training with transfer learning using a lightweight MobileNetV2 backbone in Python/Keras
- Converting to TensorFlow Lite and why INT8 quantization matters (~75% smaller, much faster)
- Adding labels and metadata so your MAUI app interprets outputs without hardcoding
- Building a `TFLiteService` inference layer in MAUI, plus the key integration challenges: matching image preprocessing, threading off the UI, and loading the model once
- Hardware acceleration per platform (NNAPI/GPU, Metal), AOT compilation, and real-world inference timings

A great read if you want fast, private, on-device intelligence in your MAUI apps.

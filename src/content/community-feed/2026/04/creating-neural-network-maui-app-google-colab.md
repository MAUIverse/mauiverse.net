---
title: "Creating a Neural Network Based MAUI Mobile App - Part 1 (Google Colab)"
link: https://philotalk.com/mobile-neural-network
description: "Stephen Moreton-Howell designs and trains a neural network in Python/Keras on Google Colab, then runs it inside a .NET MAUI app via ONNX. It's a hands-on pipeline for deploying ML models into cross-platform mobile apps."
date: 2026-04-23
author: steve3008
contentType: article
---

Bringing his AI masters degree back into his .NET MAUI work, Stephen Moreton-Howell walks through training a simple neural network in Google Colab and deploying it into a mobile app using ONNX.

## What you'll learn

- **The tooling** — using Python, Keras, NumPy, and Google Colab to build and train a network
- **A worked example** — classifying lists of ten numbers as low, medium, or high from generated training data
- **Building the model** — defining a `Sequential` Keras model, compiling, training, and testing it
- **Exporting for mobile** — saving the trained model as `.tflite` and `.onnx` files
- **Running it in .NET MAUI** — installing `Microsoft.ML.OnnxRuntime` and using an `OnnxModelInference` to make predictions in-app

Read the full post for the complete Colab and MAUI code, and continue to part 2.

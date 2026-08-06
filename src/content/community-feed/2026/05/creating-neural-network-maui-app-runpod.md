---
title: "Creating a Neural Network Based MAUI Mobile App - Part 2 (RunPod)"
link: https://philotalk.com/mobile-neural-network-2
description: "Stephen Moreton-Howell pushes past Google Colab's free-GPU limits by trying RunPod to train a more ambitious neural network for a .NET MAUI app. It's a candid, warts-and-all account of wrestling with cloud GPU environments."
date: 2026-05-09
author: steve3008
contentType: article
---

With Colab timing out on non-trivial training runs, Stephen Moreton-Howell experiments with RunPod to train a face-generating GAN destined for a .NET MAUI app, and documents the real-world friction along the way.

## What you'll learn

- **Why move beyond Colab** — hitting free-GPU timeouts when training larger networks like a faces GAN
- **Setting up RunPod** — creating an account, adding credit, and choosing a GPU pod
- **The real-world snags** — pods hanging on initialization, scarce GPU availability, and unexpected charges
- **Migrating notebooks** — moving a WGAN Jupyter notebook from Colab into RunPod's Jupyter Lab
- **The verdict** — why he ultimately returned to Google Colab for now

Read the full post for the day-by-day account, and start with part 1 for the ONNX-to-MAUI pipeline.

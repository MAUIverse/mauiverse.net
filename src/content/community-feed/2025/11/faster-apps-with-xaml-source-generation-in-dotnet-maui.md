---
title: "Faster Apps with XAML Source Generation in .NET MAUI"
link: https://www.youtube.com/watch?v=3APIPxqpzTc
description: This video explains XAML Source Generation in .NET MAUI and how it improves runtime behavior in development builds. You will see how to enable it, inspect generated output, and debug with fewer release-vs-debug surprises.
date: 2025-11-04
author: jfversluis
contentType: video
---

XAML Source Generation changes the MAUI inner loop by reducing runtime XAML parsing overhead and making behavior more consistent between debug and release. Gerald walks through enabling the feature, inspecting generated files, and using those outputs for more transparent debugging.

### What you will learn

- What XAML Source Generation does under the hood in .NET MAUI
- How to enable it in a project and inspect generated code artifacts
- Why it helps performance and makes debug behavior closer to production

### Note

- Hot Reload behavior and generated-code workflows can differ from classic XAML parsing paths, so test your team’s dev loop expectations

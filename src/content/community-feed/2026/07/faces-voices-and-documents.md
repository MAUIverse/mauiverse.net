---
title: "Faces, Voices & Documents — On-Device Recognition Controls for .NET MAUI"
link: https://allanritchie.com/blog/2026/07/recognition-intelligence/
description: "Allan Ritchie introduces on-device face, voice, and document recognition stacks for .NET MAUI — no cloud APIs, no inference bills. Part of MAUI UI July 2026, it centers on drop-in controls that hide the camera, enrollment, and matching plumbing."
date: 2026-07-24
author: aritchie
contentType: article
---

Cloud face APIs are fine until someone asks where the biometric data went. Allan Ritchie’s MAUI UI July post builds the offline answer: face, voice, and document recognition that runs locally with ONNX models and sqlite-vec, wrapped in MAUI controls so consumers stay at a few lines of XAML.

## What you'll learn

- **Recognition as convenience, not auth** — why shared workplace devices are the sweet spot, and why there’s no liveness detection in the box today
- **FaceRecognitionView and FaceEnrollmentView** — camera lifecycle, overlays, and guided enrollment so you don’t relearn AspectFill coordinate traps
- **VoiceEnrollmentView and the IVoiceRecorder seam** — agreement-based enrollment, a VU meter with an acceptance threshold, and capture that stays outside the core library
- **DocumentIntelligence** — native scanning plus on-device extraction into typed receipts, IDs, passports, and masked card numbers
- **ONNX + sqlite-vec plumbing** — lazy model loading, enroll/recognize sharing one pipeline, and vector stores that don’t leak between stacks
- **The MAUI CameraView gotcha** — why starting the camera in `OnAppearing` silently no-ops before the handler connects

Read the full post for the architecture, honest limitations, and the upcoming NuGet package split under `shinyorg/recogintelligence`.

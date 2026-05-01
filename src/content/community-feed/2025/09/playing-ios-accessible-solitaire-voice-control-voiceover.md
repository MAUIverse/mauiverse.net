---
title: "Playing iOS Accessible Solitaire with Both Voice Control and VoiceOver: Part 1"
link: https://www.linkedin.com/pulse/playing-ios-accessible-solitaire-both-voice-control-voiceover-barker-j0x2e
description: "Guy Barker explores playing his .NET MAUI Accessible Solitaire game using iOS Voice Control and VoiceOver simultaneously. The post documents the setup, the Voice Control commands needed, and the opportunities for improving this interaction model."
date: 2025-09-18
author: gbarkerz
contentType: article
---

Using iOS Voice Control while VoiceOver is running opens up a speech-driven interaction model for .NET MAUI apps — but it introduces unique challenges. Guy tests this combination with his Accessible Solitaire game, documenting what works, what doesn't, and what needs improving.

## What you'll learn

- How to configure Accessible Solitaire, Voice Control, and VoiceOver to work together on iOS
- The small set of Voice Control commands needed to play the game: "Tap game state", "Tap available moves", and card-specific taps
- Challenges with VoiceOver audio being picked up by Voice Control when not using headphones
- Opportunities for improvement: empty pile announcements, button name changes, and silent interaction failures
- How to think about Voice Control + VoiceOver as an interaction model for your own .NET MAUI apps

---
title: "The Event Aggregator Pattern in .NET MAUI: Building Loosely Coupled Communication"
link: https://shaunebu.com/vdelR
description: "Jorge Perales Diaz shows how the Event Aggregator pattern replaces tangled, direct ViewModel references with a strongly-typed in-memory message bus. It's a practical, DI-friendly successor to the deprecated MessagingCenter for scalable, testable MAUI communication."
date: 2026-02-24
author: jpd21122012
contentType: article
---

As a MAUI app grows, ViewModels referencing each other directly turns into architectural debt that's hard to test and maintain. This post introduces the Event Aggregator pattern — a centralized messaging hub that lets components communicate without knowing about one another.

## What you'll learn

- Why tight coupling between ViewModels, services, and navigation causes hidden ripple effects
- How to build an Event Aggregator from scratch: defining events, an `IEventAggregator` interface, a minimal implementation, and registering it in DI
- Publishing and subscribing to strongly-typed events so ViewModels stay fully decoupled
- Why it fits MAUI's short-lived pages and changing navigation stacks especially well
- Critical considerations: avoiding memory leaks via unsubscribe/weak references, marshalling handlers back to the MainThread, and not overusing events
- How it compares to the deprecated `MessagingCenter`, and how it makes unit testing simple to mock

A solid pattern to keep growing MAUI codebases modular and maintainable.

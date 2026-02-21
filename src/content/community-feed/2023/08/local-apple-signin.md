---
title: "Testing Sign-in with Apple in your local development environment"
link: https://goforgoldman.com/posts/local-apple-signin
description: "How to test Sign-in with Apple in your local development environment by working around Apple's localhost restrictions with DNS and host file configurations."
date: 2023-08-01
author: matt-goldman
---

Apple won’t accept `localhost` callback URLs for Sign in with Apple, which makes local debugging painful. Matt Goldman shares a practical workaround using a hosts file entry and a self-signed certificate with the correct SAN configuration.

The post also calls out a couple of Apple quirks that make local testing especially valuable (like profile claims only being returned once).


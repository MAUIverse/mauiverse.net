---
title: ".NET MAUI + GitHub Actions + Commas in Certificate Names"
link: https://mitchelsellers.com/blog/article/net-maui-github-actions-commas-in-certificate-names
description: "Mitchel Sellers documents a tricky GitHub Actions issue where commas in Apple certificate names break the dotnet publish command. The fix involves transferring the secret to an environment variable and using proper BASH escaping in the CodesignKey parameter."
date: 2023-06-21
author: mitchelsellers
contentType: article
---

Apple issues certificates based on the company's legal name, and if yours includes a comma (like "IowaComputerGurus, Inc."), dotnet tries to split the input into an array instead of treating it as a literal string — even when quoted. This post documents the issue and the hard-won fix.

## What you'll learn

- Why commas in Apple certificate names cause `MSB1006: Property is not valid` errors in GitHub Actions
- How to transfer the certificate name secret into an environment variable instead of injecting it directly
- The exact BASH escaping syntax needed for the `CodesignKey` parameter in the publish step
- A complete working GitHub Actions publish step for .NET MAUI iOS builds with proper quoting

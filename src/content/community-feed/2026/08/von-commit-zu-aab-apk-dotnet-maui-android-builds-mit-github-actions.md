---
title: "Von Commit zu AAB/APK: .NET MAUI Android Builds mit GitHub Actions automatisieren"
link: https://www.tsjdev-apps.de/von-commit-zu-aab-apk/
description: "Sebastian Jensen zeigt Schritt für Schritt, wie eine .NET MAUI Android App per GitHub Actions gebaut, signiert und als .aab und .apk bereitgestellt wird. Ein reproduzierbarer Release-Prozess mit Keystore, Base64-Secrets, global.json und automatischer Versionierung — inklusive Beispiel-Repository."
date: 2026-08-26
author: tsjdev-apps
contentType: article
---

Eine Android-App lokal zu bauen ist einfach — reproduzierbar und unabhängig vom Entwicklerrechner wird es schwieriger. Sebastian Jensen zeigt, wie eine .NET MAUI Android App komplett über GitHub Actions gebaut und signiert wird, sodass am Ende sowohl eine `.aab`- als auch eine `.apk`-Datei als Workflow-Artifact bereitstehen.

## What you'll learn

- **Reproduzierbare Builds** — dieselben SDK- und Workload-Versionen bei jedem Run, festgelegt über `global.json` und `actions/setup-dotnet`
- **Keystore und Secrets** — einen Keystore mit `keytool` erzeugen, nach Base64 konvertieren und als `ANDROID_KEYSTORE`, Alias und Passwörter als GitHub Secrets hinterlegen
- **Der komplette Workflow** — Checkout, MAUI Workload, Keystore-Decode, `dotnet publish` mit Signing-Parametern und `AndroidPackageFormats="aab;apk"`
- **Automatische Versionierung** — `ApplicationVersion` und Display-Version aus `github.run_number` ableiten
- **Typische Fehlerquellen** — falscher Projektpfad, unpassende Secrets, fehlendes Workload und warum nur eine `.aab` entsteht

Lies den vollständigen Beitrag für den kompletten YAML-Workflow und das verlinkte [Beispiel-Repository](https://github.com/tsjdev-apps/github-actions-dotnet-maui).

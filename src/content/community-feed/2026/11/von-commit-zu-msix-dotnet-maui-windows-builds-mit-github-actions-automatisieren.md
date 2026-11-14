---
title: "Von Commit zu MSIX: .NET MAUI Windows Builds mit GitHub Actions automatisieren"
link: https://www.tsjdev-apps.de/von-commit-zu-msix/
description: "Sebastian Jensen zeigt, wie eine .NET MAUI Windows App per GitHub Action gebaut und mit einem selbstsignierten Testzertifikat zu einem .msix-Paket signiert wird. Der Beitrag erklärt, wie Paketidentität, Zertifikat und Vertrauen auf dem Zielrechner zusammenpassen müssen."
date: 2026-11-11
author: tsjdev-apps
contentType: article
---

Ein erfolgreicher Build heißt bei Windows noch nicht, dass sich die App auf einem anderen Rechner installieren lässt. Sebastian Jensen ergänzt seine Reihe zu Android und iOS um den Windows-Teil: ein Workflow, der ein signiertes `.msix`-Paket erzeugt und es zusammen mit dem öffentlichen Zertifikat und einer kurzen Installationsanleitung für Tester bereitstellt.

Entscheidend ist, dass der `Publisher` im `Package.appxmanifest` exakt zum Subject des Zertifikats passt. Der Beitrag führt durch diese Schritte:

- **Paketidentität anpassen:** die Platzhalterwerte im Manifest ersetzen
- **Projekt vorbereiten:** `global.json` und der Wechsel von `WindowsPackageType=None` auf MSIX beim Veröffentlichen
- **Zertifikat erstellen:** ein selbstsigniertes Testzertifikat per PowerShell, exportiert als `.pfx` und `.cer`, mit Base64-Secrets in GitHub
- **Workflow und Installation:** was die Action tut und wie das Testpaket auf einem anderen Rechner installiert wird, inklusive Vertrauen im Speicher "Vertrauenswürdige Personen"

Sebastian grenzt den Anwendungsfall klar ab: Das selbstsignierte Zertifikat ist für Tests und kontrollierte Verteilung gedacht, nicht für die öffentliche Veröffentlichung. Ein eigener Abschnitt behandelt typische Probleme, etwa nicht passende Publisher, fehlende Abhängigkeiten oder eine Paketversion, die nicht steigt.

---
title: "Von Commit zu IPA: .NET MAUI iOS Builds mit GitHub Actions automatisieren"
link: https://www.tsjdev-apps.de/von-commit-zu-ipa/
description: "Sebastian Jensen zeigt, wie eine .NET MAUI iOS App in einer GitHub Action gebaut, signiert und als .ipa-Artifact bereitgestellt wird, mit .NET 10 und einem macOS-Runner. Der Beitrag behandelt auch die typischen Stolperfallen beim Signing, von der Bundle ID bis zum Provisioning Profile."
date: 2026-11-04
author: tsjdev-apps
contentType: article
---

Eine iOS-App auf dem eigenen Mac zu bauen ist eine Sache. Einen reproduzierbaren Release-Build zu erzeugen, der nicht von diesem einen Rechner abhängt, ist die andere. Sebastian Jensen schließt diese Lücke mit einem Workflow, der nach einem Commit eine signierte `.ipa` liefert, die sich direkt über den Workflow-Run herunterladen lässt.

Der Beitrag setzt voraus, dass die Apple-Ressourcen bereits vorbereitet sind: Distribution Certificate als `.p12`, Bundle ID, App Store Provisioning Profile und App Store Connect API Key. Wer hier noch Nachholbedarf hat, findet in seinem Beitrag zur Signing-Vorbereitung den passenden Einstieg.

Der Weg zur fertigen Pipeline führt über diese Schritte:

- **SDK und Target Framework festlegen:** `net10.0-ios` in der `.csproj` und eine `global.json` für eine feste SDK-Version
- **Secrets vorbereiten:** das Zertifikat nach Base64 konvertieren und zusammen mit den übrigen Zugangsdaten als GitHub Secrets hinterlegen
- **Workflow verstehen:** was die einzelnen Schritte der Action tun, vom Import des Zertifikats bis zum Download des Provisioning Profiles während des Builds
- **Probleme eingrenzen:** falsche Bundle ID, fehlschlagender `.p12`-Import, nicht passende Xcode- und Workload-Versionen oder eine `.ipa`, die nicht gefunden wird

Ein Beispiel-Repository mit einer einfachen MAUI-App und dem vollständigen iOS-Workflow ist verlinkt. Für alle, die iOS-Releases bisher von Hand bauen, ist das ein guter Ausgangspunkt.

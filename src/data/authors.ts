/**
 * Optional display name overrides for GitHub usernames.
 * Key: GitHub username. Value: display name shown in the feed.
 */
export const authorDisplayNames: Record<string, string> = {
  tonyedwardspz: 'Tony Edwards',
  davidortinau: 'David Ortinau',
  PureWeen: 'Shane Neuville',
  Redth: 'Jonathan Dick',
  'matt-goldman': 'Matt Goldman',
  jfversluis: 'Gerald Versluis',
  LeomarisReyes: 'Leomaris Reyes',
  dhindrik: 'Daniel Hindrikes',
  'dotnet-foundation': '.NET Foundation',
  dotnet: '.NET',
  MaxMa04: 'Max Mannstein',
  ilija2407: 'Ilija Rushkovski',
  Kode4Hue: 'Hubert Graham',
};

export function getAuthorDisplayName(githubUsername: string): string {
  return authorDisplayNames[githubUsername] ?? `@${githubUsername}`;
}

/**
 * Optional display name overrides for GitHub usernames.
 * Key: GitHub username. Value: display name shown in the feed.
 */
export const authorDisplayNames: Record<string, string> = {
  tonyedwardspz: 'Tony Edwards',
};

export function getAuthorDisplayName(githubUsername: string): string {
  return authorDisplayNames[githubUsername] ?? `@${githubUsername}`;
}

import { getCollection, type CollectionEntry } from 'astro:content';

export type ToolkitReleaseEntry = CollectionEntry<'toolkit-release'>;

function sortReleasesByDateDesc<T extends { data: { date: Date } }>(entries: T[]): T[] {
  return [...entries].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getToolkitReleases(): Promise<ToolkitReleaseEntry[]> {
  const entries = await getCollection('toolkit-release');
  return sortReleasesByDateDesc(entries);
}

export function isContributorInToolkitRelease(
  release: ToolkitReleaseEntry,
  githubUsername: string
): boolean {
  const normalized = githubUsername.trim().toLowerCase();
  return release.data.contributors.some((c) => c.trim().toLowerCase() === normalized);
}

export function getMostRecentToolkitReleaseForContributor(
  releases: ToolkitReleaseEntry[],
  githubUsername: string
): ToolkitReleaseEntry | undefined {
  const normalized = githubUsername.trim().toLowerCase();
  return releases.find((r) =>
    r.data.contributors.some((c) => c.trim().toLowerCase() === normalized)
  );
}


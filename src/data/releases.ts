import { getCollection, type CollectionEntry } from 'astro:content';

export type MauiReleaseEntry = CollectionEntry<'maui-release'>;

function sortReleasesByDateDesc<T extends { data: { date: Date } }>(entries: T[]): T[] {
  return [...entries].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getMauiReleases(): Promise<MauiReleaseEntry[]> {
  const entries = await getCollection('maui-release');
  return sortReleasesByDateDesc(entries);
}

export function isContributorInRelease(
  release: MauiReleaseEntry,
  githubUsername: string
): boolean {
  const normalized = githubUsername.trim().toLowerCase();
  return release.data.contributors.some(
    (c) => c.trim().toLowerCase() === normalized
  );
}

export function getMostRecentReleaseForContributor(
  releases: MauiReleaseEntry[],
  githubUsername: string
): MauiReleaseEntry | undefined {
  const normalized = githubUsername.trim().toLowerCase();
  return releases.find((r) =>
    r.data.contributors.some((c) => c.trim().toLowerCase() === normalized)
  );
}

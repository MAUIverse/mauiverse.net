import { getCollection, type CollectionEntry } from 'astro:content';
import type { MauiReleaseEntry } from './releases';
import type { ToolkitReleaseEntry } from './toolkit-releases';

export type UnifiedFeedEntry =
  | CollectionEntry<'community-feed'>
  | CollectionEntry<'community-standup'>
  | CollectionEntry<'toolkit-standup'>
  | CollectionEntry<'event'>;

export type ContributorFeedEntry = UnifiedFeedEntry | MauiReleaseEntry | ToolkitReleaseEntry;

export function isReleaseEntry(
  entry: ContributorFeedEntry
): entry is MauiReleaseEntry | ToolkitReleaseEntry {
  return entry.collection === 'maui-release' || entry.collection === 'toolkit-release';
}

export function sortFeedEntriesByDateDesc<T extends { data: { date: Date } }>(entries: T[]): T[] {
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getUnifiedFeedEntries(): Promise<UnifiedFeedEntry[]> {
  const [communityEntries, communityStandupEntries, toolkitEntries, eventEntries] = await Promise.all([
    getCollection('community-feed'),
    getCollection('community-standup'),
    getCollection('toolkit-standup'),
    getCollection('event'),
  ]);

  return sortFeedEntriesByDateDesc([
    ...communityEntries,
    ...communityStandupEntries,
    ...toolkitEntries,
    ...eventEntries,
  ]);
}

export function isToolkitStandupEntry(entry: UnifiedFeedEntry): boolean {
  return entry.collection === 'toolkit-standup';
}

export function isCommunityStandupEntry(entry: UnifiedFeedEntry): boolean {
  return entry.collection === 'community-standup';
}

export function isEventEntry(entry: UnifiedFeedEntry): boolean {
  return entry.collection === 'event';
}

export function getFeaturingAuthorKeys(entry: UnifiedFeedEntry): string[] {
  const baseFeaturing = entry.data.featuring ?? [];
  const eventPeople =
    entry.collection === 'event'
      ? [...entry.data.speakers, ...entry.data.team]
      : [];
  const combined = [...baseFeaturing, ...eventPeople].map((value) => value.trim()).filter(Boolean);
  const seen = new Set<string>();
  const unique: string[] = [];

  for (const value of combined) {
    const normalized = value.toLowerCase();
    if (seen.has(normalized)) continue;
    seen.add(normalized);
    unique.push(value);
  }

  return unique;
}

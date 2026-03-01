import { getCollection, type CollectionEntry } from 'astro:content';

export type UnifiedFeedEntry = CollectionEntry<'community-feed'> | CollectionEntry<'toolkit-standup'>;

export function sortFeedEntriesByDateDesc<T extends { data: { date: Date } }>(entries: T[]): T[] {
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getUnifiedFeedEntries(): Promise<UnifiedFeedEntry[]> {
  const [communityEntries, toolkitEntries] = await Promise.all([
    getCollection('community-feed'),
    getCollection('toolkit-standup'),
  ]);

  return sortFeedEntriesByDateDesc([...communityEntries, ...toolkitEntries]);
}

export function isToolkitStandupEntry(entry: UnifiedFeedEntry): boolean {
  return entry.collection === 'toolkit-standup';
}

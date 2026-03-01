import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { authorEntries } from './data/authors.generated';

const authorKeys = authorEntries.map((entry) => entry.key) as [
  (typeof authorEntries)[number]['key'],
  ...(typeof authorEntries)[number]['key'][]
];
const legacyAuthorKeys = [] as const;
const validAuthorKeys = [...authorKeys, ...legacyAuthorKeys] as const;
const authorHandleSchema = z.union([z.enum(validAuthorKeys), z.string()]);

const communityFeed = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/community-feed' }),
  schema: z.object({
    title: z.string(),
    link: z.string().url(),
    description: z.string(),
    date: z.coerce.date(),
    author: authorHandleSchema.optional(),
    featuring: z.array(authorHandleSchema).optional(),
    contentType: z.string().optional(),
    isStandup: z.boolean().optional(),
    isToolkitStandup: z.boolean().optional(),
  }),
});

const builtWithMaui = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/built-with-maui' }),
});

const communityStandup = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/community-standup' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    liveUrl: z.string().url().optional(),
  }),
});

const toolkitStandup = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/toolkit-standup' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    liveUrl: z.string().url().optional(),
  }),
});

const communityContributors = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/community-contributors' }),
  schema: z.object({
    gitHubUsername: z.string(),
    displayName: z.string(),
    avatarImagePath: z.string().optional(),
    disableGitHubProfileLink: z.boolean().optional(),
    bskyUrl: z.string().optional(),
    twitterUrl: z.string().optional(),
    instagramUrl: z.string().optional(),
    linkedInUrl: z.string().optional(),
    youTubeUrl: z.string().optional(),
    tikTokUrl: z.string().optional(),
    blogUrl: z.string().optional(),
    blogRSSFeedUrl: z.string().optional(),
    podcastWebsiteUrl: z.string().optional(),
    podcastRssUrl: z.string().optional(),
    twitchProfileUrl: z.string().optional(),
  }),
});

export const collections = {
  'community-feed': communityFeed,
  'built-with-maui': builtWithMaui,
  'community-standup': communityStandup,
  'toolkit-standup': toolkitStandup,
  'community-contributors': communityContributors,
};

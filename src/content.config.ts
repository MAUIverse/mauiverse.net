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
  }),
});

const builtWithMaui = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/built-with-maui' }),
});

const communityStandup = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/community-standup' }),
  schema: z.object({
    title: z.string(),
    link: z.string().url(),
    description: z.string(),
    date: z.coerce.date(),
    author: authorHandleSchema.optional(),
    featuring: z.array(authorHandleSchema).optional(),
    contentType: z.string().optional(),
  }),
});

const toolkitStandup = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/toolkit-standup' }),
  schema: z.object({
    title: z.string(),
    link: z.string().url(),
    description: z.string(),
    date: z.coerce.date(),
    author: authorHandleSchema.optional(),
    featuring: z.array(authorHandleSchema).optional(),
    contentType: z.literal('video'),
  }),
});

const event = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/event' }),
  schema: z.object({
    title: z.string(),
    link: z.string().url(),
    description: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    speakers: z.array(authorHandleSchema),
    team: z.array(authorHandleSchema),
    author: authorHandleSchema.optional(),
    featuring: z.array(authorHandleSchema).optional(),
    contentType: z.literal('event'),
    slug: z.string().optional(),
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

const mauiRelease = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/maui-release' }),
  schema: z.object({
    title: z.string(),
    link: z.string().url(),
    date: z.coerce.date(),
    contributors: z.array(z.string()),
    prerelease: z.boolean(),
    contentType: z.literal('release'),
  }),
});

const toolkitRelease = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/toolkit-release' }),
  schema: z.object({
    title: z.string(),
    link: z.string().url(),
    date: z.coerce.date(),
    contributors: z.array(z.string()),
    prerelease: z.boolean(),
    contentType: z.literal('release'),
  }),
});

export const collections = {
  'community-feed': communityFeed,
  'built-with-maui': builtWithMaui,
  'community-standup': communityStandup,
  'toolkit-standup': toolkitStandup,
  'event': event,
  'community-contributors': communityContributors,
  'maui-release': mauiRelease,
  'toolkit-release': toolkitRelease,
};

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const communityFeed = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/community-feed' }),
  schema: z.object({
    title: z.string(),
    link: z.string().url(),
    description: z.string(),
    date: z.coerce.date(),
    author: z.string().optional(),
    contentType: z.string().optional(),
    isStandup: z.boolean().optional(),
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

export const collections = {
  'community-feed': communityFeed,
  'built-with-maui': builtWithMaui,
  'community-standup': communityStandup,
};

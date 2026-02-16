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
  }),
});

export const collections = {
  'community-feed': communityFeed,
};

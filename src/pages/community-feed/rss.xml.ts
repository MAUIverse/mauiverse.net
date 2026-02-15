import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

function hasBody(entry: { body?: string }): boolean {
  return Boolean(typeof entry.body === 'string' && entry.body.trim().length > 0);
}

export async function GET(context: { site: string | undefined }) {
  const entries = (await getCollection('community-feed')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  const baseUrl = (context.site ?? 'https://mauiverse.net').replace(/\/$/, '');

  return rss({
    title: 'MAUIverse Community Feed',
    description:
      'Notable moments, packages, projects, and celebrations from the MAUIverse community.',
    site: baseUrl,
    items: entries.map((entry) => {
      const hasContent = hasBody(entry);
      const link = hasContent
        ? `${baseUrl}/community-feed/${entry.id}/`
        : entry.data.link;
      return {
        title: entry.data.title,
        description: entry.data.description,
        link,
        pubDate: entry.data.date,
      };
    }),
  });
}

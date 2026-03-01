import rss from '@astrojs/rss';
import { extractYouTubeVideoId } from '../../utils/youtube';
import { getUnifiedFeedEntries } from '../../data/feed';

function hasBody(entry: { body?: string }): boolean {
  return Boolean(typeof entry.body === 'string' && entry.body.trim().length > 0);
}

export async function GET(context: { site: string | undefined }) {
  const entries = await getUnifiedFeedEntries();

  const site = context.site ?? 'https://mauiverse.net';
  const baseUrl = typeof site === 'string' ? site.replace(/\/$/, '') : 'https://mauiverse.net';

  return rss({
    title: 'MAUIverse Community Feed',
    description:
      'Notable moments, packages, projects, and celebrations from the MAUIverse community.',
    site: baseUrl,
    items: entries.map((entry) => {
      const hasContent = hasBody(entry);
      const videoId = extractYouTubeVideoId(entry.data.link);
      const isInternal = hasContent || videoId;
      const link = isInternal
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

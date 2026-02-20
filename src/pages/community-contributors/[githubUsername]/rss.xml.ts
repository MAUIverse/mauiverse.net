import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import {
  getAuthorDisplayName,
  getAuthorKeys,
  isSameAuthorKey,
} from '../../../data/authors';
import { extractYouTubeVideoId } from '../../../utils/youtube';

function hasBody(entry: { body?: string }): boolean {
  return Boolean(typeof entry.body === 'string' && entry.body.trim().length > 0);
}

export function getStaticPaths() {
  return getAuthorKeys().map((githubUsername) => ({
    params: { githubUsername },
    props: { githubUsername, displayName: getAuthorDisplayName(githubUsername) },
  }));
}

export async function GET(context: {
  site: string | undefined;
  props: { githubUsername: string; displayName: string };
}) {
  const { githubUsername, displayName } = context.props;
  const entries = (await getCollection('community-feed'))
    .filter((entry) => entry.data.author && isSameAuthorKey(entry.data.author, githubUsername))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  const site = context.site ?? 'https://mauiverse.net';
  const baseUrl = typeof site === 'string' ? site.replace(/\/$/, '') : 'https://mauiverse.net';

  return rss({
    title: `${displayName} | MAUIverse Contributor Feed`,
    description: `Community Feed entries from ${displayName} on MAUIverse.`,
    site: baseUrl,
    items: entries.map((entry) => {
      const hasContent = hasBody(entry);
      const videoId = extractYouTubeVideoId(entry.data.link);
      const isInternal = hasContent || videoId;
      const link = isInternal ? `${baseUrl}/community-feed/${entry.id}/` : entry.data.link;

      return {
        title: entry.data.title,
        description: entry.data.description,
        link,
        pubDate: entry.data.date,
      };
    }),
  });
}

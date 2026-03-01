import type { APIRoute } from 'astro';
import {
  getAuthorDisplayName,
  getAuthorImageSrc,
  getInternalContributorProfileHref,
} from '../../data/authors';
import { extractYouTubeVideoId, getYouTubeThumbnailUrl } from '../../utils/youtube';
import { isGitHubUrl } from '../../utils/link';
import { formatLongDateUS } from '../../utils/date';
import { getUnifiedFeedEntries, isToolkitStandupEntry } from '../../data/feed';

function hasBody(entry: { body?: string }): boolean {
  return Boolean(typeof entry.body === 'string' && entry.body.trim().length > 0);
}

function normalizeContentType(value?: string): string {
  if (!value) return 'unknown';
  const normalized = value.trim().replace(/^'+|'+$/g, '').toLowerCase();
  return normalized || 'unknown';
}

export const GET: APIRoute = async () => {
  const entries = await getUnifiedFeedEntries();

  const records = entries.map((entry) => {
    const videoId = extractYouTubeVideoId(entry.data.link);
    const withBody = hasBody(entry);
    const isInternal = withBody || !!videoId;
    const authorKey = entry.data.author?.trim().toLowerCase() || '';
    const authorProfileHref = authorKey
      ? getInternalContributorProfileHref(authorKey)
      : null;

    return {
      id: entry.id,
      title: entry.data.title,
      description: entry.data.description,
      link: entry.data.link,
      dateISO: entry.data.date.toISOString(),
      dateLabel: formatLongDateUS(entry.data.date),
      authorKey,
      authorLabel: authorKey ? getAuthorDisplayName(authorKey) : '',
      authorImageSrc: authorKey ? getAuthorImageSrc(authorKey, 64) : '',
      authorProfileHref: authorProfileHref ?? '',
      contentType: normalizeContentType(entry.data.contentType),
      videoId: videoId ?? '',
      videoThumbnailUrl: videoId ? getYouTubeThumbnailUrl(videoId) : '',
      hasBody: withBody,
      isInternal,
      isGitHub: isGitHubUrl(entry.data.link),
      isToolkitStandup: isToolkitStandupEntry(entry),
    };
  });

  return new Response(JSON.stringify(records), {
    headers: { 'Content-Type': 'application/json' },
  });
};

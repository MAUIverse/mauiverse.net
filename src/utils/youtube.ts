/**
 * Extracts the YouTube video ID from common YouTube URL formats.
 * Returns null if the URL is not a recognized YouTube URL.
 */
export function extractYouTubeVideoId(url: string): string | null {
  if (typeof url !== 'string' || !url.trim()) return null;

  try {
    const u = new URL(url);

    // youtu.be/VIDEO_ID
    if (u.hostname === 'youtu.be') {
      const id = u.pathname.slice(1).split('/')[0];
      return id && /^[a-zA-Z0-9_-]{11}$/.test(id) ? id : null;
    }

    // youtube.com (watch, embed, shorts, live)
    if (
      u.hostname === 'www.youtube.com' ||
      u.hostname === 'youtube.com' ||
      u.hostname === 'm.youtube.com'
    ) {
      // /watch?v=VIDEO_ID
      const v = u.searchParams.get('v');
      if (v && /^[a-zA-Z0-9_-]{11}$/.test(v)) return v;

      // /embed/VIDEO_ID, /shorts/VIDEO_ID, /live/VIDEO_ID
      const pathParts = u.pathname.split('/').filter(Boolean);
      const id =
        (pathParts[0] === 'embed' ||
          pathParts[0] === 'shorts' ||
          pathParts[0] === 'live') &&
        pathParts[1]
          ? pathParts[1].split('?')[0]
          : null;
      if (id && /^[a-zA-Z0-9_-]{11}$/.test(id)) return id;
    }

    return null;
  } catch {
    return null;
  }
}

export function isYouTubeUrl(url: string): boolean {
  return extractYouTubeVideoId(url) !== null;
}

/** Thumbnail URL served directly from YouTube's image CDN. */
export function getYouTubeThumbnailUrl(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

/** Privacy-enhanced embed URL (youtube-nocookie.com). */
export function getYouTubeEmbedUrl(videoId: string): string {
  return `https://www.youtube-nocookie.com/embed/${videoId}`;
}

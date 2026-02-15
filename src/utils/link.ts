/**
 * Returns true if the URL is a GitHub URL (github.com or www.github.com).
 */
export function isGitHubUrl(url: string): boolean {
  if (typeof url !== 'string' || !url.trim()) return false;
  try {
    const u = new URL(url);
    return (
      u.hostname === 'github.com' ||
      u.hostname === 'www.github.com' ||
      u.hostname === 'gist.github.com' ||
      u.hostname === 'www.gist.github.com'
    );
  } catch {
    return false;
  }
}

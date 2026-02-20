import { docsMauiContributorUsernames } from './docs-maui-contributors.generated';
import { mauiContributorUsernames } from './maui-contributors.generated';
import { mauiToolkitContributorUsernames } from './maui-toolkit-contributors.generated';
import { mauiverseWebsiteContributorUsernames } from './mauiverse-website-contributors.generated';
import { nugetAuthorUsernames } from './nuget-authors.generated';
import { syncfusionMauiToolkitContributorUsernames } from './syncfusion-maui-toolkit-contributors.generated';
import { authorEntries } from './authors.generated';

const authorDisplayNames: Record<string, string> = {};
const authorImageOverrides: Record<string, string> = {};
const authorGitHubLinkDisabled: Record<string, boolean> = {};
const authorKeyLookup: Record<string, string> = {};
for (const entry of authorEntries) {
  const { key, displayName } = entry;
  authorDisplayNames[key] = displayName;
  authorKeyLookup[key.toLowerCase()] = key;
  if ('imagePath' in entry && entry.imagePath != null) authorImageOverrides[key] = entry.imagePath;
  if ('disableGitHubProfileLink' in entry && entry.disableGitHubProfileLink === true) {
    authorGitHubLinkDisabled[key] = true;
  }
}

function resolveAuthorKey(githubUsername: string): string {
  return authorKeyLookup[githubUsername.toLowerCase()] ?? githubUsername;
}

const mauiContributorUsernameSet = new Set(
  mauiContributorUsernames.map((username) => username.toLowerCase())
);

const mauiContributorUsernameOverrides: Record<string, string> = {
  // Add known aliases here if a profile username differs from contributor login.
  // 'local-profile-key': 'github-login'
};

export function isMauiContributor(githubUsername: string): boolean {
  const normalizedKey = resolveAuthorKey(githubUsername).toLowerCase();
  const contributorLogin = mauiContributorUsernameOverrides[normalizedKey] ?? normalizedKey;
  return mauiContributorUsernameSet.has(contributorLogin);
}

const docsMauiContributorUsernameSet = new Set(
  docsMauiContributorUsernames.map((username) => username.toLowerCase())
);

const docsMauiContributorUsernameOverrides: Record<string, string> = {
  // Add known aliases here if a profile username differs from contributor login.
  // 'local-profile-key': 'github-login'
};

export function isDocsMauiContributor(githubUsername: string): boolean {
  const normalizedKey = resolveAuthorKey(githubUsername).toLowerCase();
  const contributorLogin = docsMauiContributorUsernameOverrides[normalizedKey] ?? normalizedKey;
  return docsMauiContributorUsernameSet.has(contributorLogin);
}

const mauiToolkitContributorUsernameSet = new Set(
  mauiToolkitContributorUsernames.map((username) => username.toLowerCase())
);

const mauiToolkitContributorUsernameOverrides: Record<string, string> = {
  // Add known aliases here if a profile username differs from contributor login.
  // 'local-profile-key': 'github-login'
};

export function isMauiToolkitContributor(githubUsername: string): boolean {
  const normalizedKey = resolveAuthorKey(githubUsername).toLowerCase();
  const contributorLogin = mauiToolkitContributorUsernameOverrides[normalizedKey] ?? normalizedKey;
  return mauiToolkitContributorUsernameSet.has(contributorLogin);
}

const syncfusionMauiToolkitContributorUsernameSet = new Set(
  syncfusionMauiToolkitContributorUsernames.map((username) => username.toLowerCase())
);

const syncfusionMauiToolkitContributorUsernameOverrides: Record<string, string> = {
  // Add known aliases here if a profile username differs from contributor login.
  // 'local-profile-key': 'github-login'
};

export function isSyncfusionMauiToolkitContributor(githubUsername: string): boolean {
  const normalizedKey = resolveAuthorKey(githubUsername).toLowerCase();
  const contributorLogin =
    syncfusionMauiToolkitContributorUsernameOverrides[normalizedKey] ?? normalizedKey;
  return syncfusionMauiToolkitContributorUsernameSet.has(contributorLogin);
}

const mauiverseWebsiteContributorUsernameSet = new Set(
  mauiverseWebsiteContributorUsernames.map((username) => username.toLowerCase())
);

const mauiverseWebsiteContributorUsernameOverrides: Record<string, string> = {
  // Add known aliases here if a profile username differs from contributor login.
  // 'local-profile-key': 'github-login'
};

export function isWebsiteContributor(githubUsername: string): boolean {
  const normalizedKey = resolveAuthorKey(githubUsername).toLowerCase();
  const contributorLogin =
    mauiverseWebsiteContributorUsernameOverrides[normalizedKey] ?? normalizedKey;
  return mauiverseWebsiteContributorUsernameSet.has(contributorLogin);
}

const nugetAuthorUsernameSet = new Set(nugetAuthorUsernames.map((username) => username.toLowerCase()));

const nugetAuthorUsernameOverrides: Record<string, string> = {
  // Add known aliases here if a profile username differs from contributor login.
  // 'local-profile-key': 'github-login'
};

export function isNugetAuthor(githubUsername: string): boolean {
  const normalizedKey = resolveAuthorKey(githubUsername).toLowerCase();
  const contributorLogin = nugetAuthorUsernameOverrides[normalizedKey] ?? normalizedKey;
  return nugetAuthorUsernameSet.has(contributorLogin);
}

export function isSameAuthorKey(leftKey: string, rightKey: string): boolean {
  return resolveAuthorKey(leftKey).toLowerCase() === resolveAuthorKey(rightKey).toLowerCase();
}

/** Display name for feed; key is the author value from frontmatter (often GitHub username). */
export function getAuthorDisplayName(githubUsername: string): string {
  const key = resolveAuthorKey(githubUsername);
  return authorDisplayNames[key] ?? `@${githubUsername}`;
}

/** Avatar URL: custom path if set, otherwise GitHub avatar. Size is ignored for custom paths. */
export function getAuthorImageSrc(githubUsername: string, size: number): string {
  const key = resolveAuthorKey(githubUsername);
  const override = authorImageOverrides[key];
  if (override) return override;
  return `https://github.com/${githubUsername}.png?size=${size}`;
}

/** GitHub profile URL, or null when author uses a custom image (no real GitHub user). */
export function getAuthorGitHubUrl(githubUsername: string): string | null {
  const key = resolveAuthorKey(githubUsername);
  if (authorGitHubLinkDisabled[key] || authorImageOverrides[key]) return null;
  return `https://github.com/${githubUsername}`;
}

/** Internal community contributor profile URL, or null when the author key is not known. */
export function getInternalContributorProfileHref(githubUsername: string): string | null {
  const key = resolveAuthorKey(githubUsername);
  if (!(key in authorDisplayNames)) return null;
  return `/community-contributors/${encodeURIComponent(key)}/`;
}

/** All author keys (for contributor listing and static paths). */
export function getAuthorKeys(): string[] {
  return authorEntries.map(({ key }) => key);
}

/** All contributor usernames for dotnet/maui. */
export function getMauiContributorUsernames(): string[] {
  return [...mauiContributorUsernames];
}

/** All contributor usernames for CommunityToolkit/Maui. */
export function getMauiToolkitContributorUsernames(): string[] {
  return [...mauiToolkitContributorUsernames];
}

/** All contributor usernames for syncfusion/maui-toolkit. */
export function getSyncfusionMauiToolkitContributorUsernames(): string[] {
  return [...syncfusionMauiToolkitContributorUsernames];
}

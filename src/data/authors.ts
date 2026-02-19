import { mauiContributorUsernames } from './maui-contributors.generated';
import { mauiToolkitContributorUsernames } from './maui-toolkit-contributors.generated';
import { nugetAuthorUsernames } from './nuget-authors.generated';
import { syncfusionMauiToolkitContributorUsernames } from './syncfusion-maui-toolkit-contributors.generated';

/**
 * Author entries: [githubUsername, displayName, imagePath?].
 * When imagePath is present, the username is a placeholder and GitHub profile links are not shown.
 */
const authorTuples: [string, string, string?][] = [
  ['tonyedwardspz', 'Tony Edwards'],
  ['davidortinau', 'David Ortinau'],
  ['PureWeen', 'Shane Neuville'],
  ['Redth', 'Jonathan Dick'],
  ['matt-goldman', 'Matt Goldman'],
  ['mrlacey', 'Matt Lacey'],
  ['jfversluis', 'Gerald Versluis'],
  ['LeomarisReyes', 'Leomaris Reyes'],
  ['dhindrik', 'Daniel Hindrikes'],
  ['dotnet-foundation', '.NET Foundation'],
  ['dotnet', '.NET'],
  ['syncfusion', 'Syncfusion'],
  ['PaulAndersonS', 'Paul Anderson'],
  ['jsuarezruiz', 'Javier Suárez'],
  ['pictos', 'Pedro Jesus'],
  ['codrinamerigo', 'Codrina Merigo'],
  ['MaxMa04', 'Max Mannstein'],
  ['ilija2407', 'Ilija Rushkovski'],
  ['Kode4Hue', 'Hubert Graham'],
  ['Toine-db', 'Toine de Boer'],
  ['zleao', 'José Pereira'],
  ['dansiegel', 'Dan Siegel'],
  ['sthewissen', 'Steven Thewissen'],
  ['adospace', 'Adolfo Marinucci'],
  ['rachelkang', 'Rachel Kang'],
  ['jonathanpeppers', 'Jonathan Peppers'],
  ['jamesmontemagno', 'James Montemagno'],
  ['Sweekriti91', 'Sweeky Satpathy'],
  ['abhayprince', 'Abhay Prince'],
  ['maddymontaquila', 'Maddy Montaquila'],
  ['dellis1972', 'Dean Ellis'],
  ['VladislavAntonyuk', 'Vladislav Antonyuk'],
  ['roubachof', 'Jean-Marie Alfonsi'],
  ['unoplatform', 'Uno Platform'],
  ['morning4coffe-dev', 'Dominik Titl'],
  ['TheCodeTraveler', 'Brandon Minnick'],
  ['eschimmel', 'Ed Schimmel'],
  ['framinosona', 'François Raminosona'],
  ['its-AliRaza', 'Ali Raza'],
  ['jBijsterboschNL', 'John Bijsterbosch'],
  ['NickA55', 'Nick Alonge'],
  ['tsjdev-apps', 'Sebastian Jensen'],
  ['Calinciurariu', 'Calin Ciurariu'],
  ['bijington', 'Shaun Lawrence'],
  ['hprez21', 'Hector Perez Rojas'],
  ['davidnsai', 'David Nsai'],
  ['icebeam7', 'Luis Antonio Beltran Prieto'],
  ['taublast', 'Nick Kovalsky'],
  ['JohanSmarius', 'Johan Smarius'],
  ['freakyali', 'Gulam Ali H.'],
  ['jasho', 'Roman Jasek'],
  ['plattski', 'David Platt'],
  ['mallibone', 'Mark Allibone'],
  ['matthewrdev', 'Matthew Robbins'],
  ['AntPolkanov', 'Anton Polkanov'],
  ['michaelstonis', 'Michael Stonis'],
  ['CliffAgius', 'Clifford Agius'],
  ['Alexgoon', 'Alexander Russkov'],
  ['JaneySprings', 'Nikita Romanov'],
  ['hot33331', 'Tobias Hoppenthaler'],
  ['aritchie', 'Allan Ritchie'],
  ['melissahoughton', 'Melissa Houghton'],
  ['alyssamichelle', 'Alyssa Nicoll'],
  ['dirivero', 'Diego Rivero'],
  ['ewerspej', 'Julian Ewers-Peters'],
  ['samidip', 'Sam Basu'],
  ['fdmomtaz', 'Farshad Momtaz'],
  ['danielmonettelli', 'Daniel Monettelli'],
  ['andreas-nesheim', 'Andreas Nesheim'],
  ['almirvuk', 'Almir Vuk'],
  ['flaviogoncalves', 'Flavio Gonclaves'],
  ['naweed', 'Naweed Akram'],
  ['csaba8472', 'Csaba Huszár'],
  ['tkapa', 'Tylah Kapa'],
  ['mattjohnsonpint', 'Matt Johnson-Pint'],
  ['bradystroud', 'Brady Stroud'],
  ['liamelliott', 'Liam Elliott'],
  ['damianantonowicz', 'Damian Antonowicz'],
  ['luismts', 'Luis Matos'],
  ['Kapusch', 'Jean-Emmanuel BAILLAT'],
  ['damiendoumer', 'Damien Doumer'],
  ['Char0394', 'Charlin Agramonte'],
  ['saamerm', 'Saamer Mansoor'],
  ['SirJohnK', 'Johan Svensson'],
  ['kubaflo', 'Jakub Florkowski'],
  ['dotnetMAUIPodcast', 'The .NET MAUI Podcast', '/img/contributors/dotnetMAUIPodcast.jpg'],
];

const authorDisplayNames: Record<string, string> = {};
const authorImageOverrides: Record<string, string> = {};
const authorKeyLookup: Record<string, string> = {};
for (const [key, displayName, imagePath] of authorTuples) {
  authorDisplayNames[key] = displayName;
  authorKeyLookup[key.toLowerCase()] = key;
  if (imagePath != null) authorImageOverrides[key] = imagePath;
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
  if (authorImageOverrides[key]) return null;
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
  return authorTuples.map(([key]) => key);
}

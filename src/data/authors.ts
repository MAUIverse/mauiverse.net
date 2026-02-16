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
  ['dotnetMAUIPodcast', 'The .NET MAUI Podcast', '/img/contributors/dotnetMAUIPodcast.png'],
];

const authorDisplayNames: Record<string, string> = {};
const authorImageOverrides: Record<string, string> = {};
for (const [key, displayName, imagePath] of authorTuples) {
  authorDisplayNames[key] = displayName;
  if (imagePath != null) authorImageOverrides[key] = imagePath;
}

/** Display name for feed; key is the author value from frontmatter (often GitHub username). */
export function getAuthorDisplayName(githubUsername: string): string {
  return authorDisplayNames[githubUsername] ?? `@${githubUsername}`;
}

/** Avatar URL: custom path if set, otherwise GitHub avatar. Size is ignored for custom paths. */
export function getAuthorImageSrc(githubUsername: string, size: number): string {
  const override = authorImageOverrides[githubUsername];
  if (override) return override;
  return `https://github.com/${githubUsername}.png?size=${size}`;
}

/** GitHub profile URL, or null when author uses a custom image (no real GitHub user). */
export function getAuthorGitHubUrl(githubUsername: string): string | null {
  if (authorImageOverrides[githubUsername]) return null;
  return `https://github.com/${githubUsername}`;
}

/** All author keys (for contributor listing and static paths). */
export function getAuthorKeys(): string[] {
  return authorTuples.map(([key]) => key);
}

/**
 * Optional display name overrides for GitHub usernames.
 * Key: GitHub username. Value: display name shown in the feed.
 */
export const authorDisplayNames: Record<string, string> = {
  tonyedwardspz: 'Tony Edwards',
  davidortinau: 'David Ortinau',
  PureWeen: 'Shane Neuville',
  Redth: 'Jonathan Dick',
  'matt-goldman': 'Matt Goldman',
  mrlacey: 'Matt Lacey',
  jfversluis: 'Gerald Versluis',
  LeomarisReyes: 'Leomaris Reyes',
  dhindrik: 'Daniel Hindrikes',
  'dotnet-foundation': '.NET Foundation',
  dotnet: '.NET',
  syncfusion: 'Syncfusion',
  PaulAndersonS: 'Paul Anderson',
  jsuarezruiz: 'Javier Suárez',
  pictos: 'Pedro Jesus',
  codrinamerigo: 'Codrina Merigo',
  MaxMa04: 'Max Mannstein',
  ilija2407: 'Ilija Rushkovski',
  Kode4Hue: 'Hubert Graham',
  'Toine-db': 'Toine de Boer',
  zleao: 'José Pereira',
  dansiegel: 'Dan Siegel',
  sthewissen: 'Steven Thewissen',
  adospace: 'Adolfo Marinucci',
  rachelkang: 'Rachel Kang',
  jonathanpeppers: 'Jonathan Peppers',
  jamesmontemagno: 'James Montemagno',
  Sweekriti91: 'Sweeky Satpathy',
  abhayprince: 'Abhay Prince',
  maddymontaquila: 'Maddy Montaquila',
  dellis1972: 'Dean Ellis',
  VladislavAntonyuk: 'Vladislav Antonyuk',
  roubachof: 'Jean-Marie Alfonsi',
  unoplatform: 'Uno Platform',
  'morning4coffe-dev': 'Dominik Titl',
  'TheCodeTraveler': 'Brandon Minnick',
};

export function getAuthorDisplayName(githubUsername: string): string {
  return authorDisplayNames[githubUsername] ?? `@${githubUsername}`;
}

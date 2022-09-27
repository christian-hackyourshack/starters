import packageJson from '../../../package.json';

export const site = {
  title: packageJson.description,
  url: packageJson.homepage,
  twitter: packageJson.author.twitter,
};

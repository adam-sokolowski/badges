import { readCoverageJson } from './helpers/readCoverageJson';

export function generateBadges() {
  const JSON = readCoverageJson();

  console.info(JSON);
  return "..";
}
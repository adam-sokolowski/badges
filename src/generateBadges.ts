import { readCoverageJson } from './helpers/readCoverageJson';
import { writeBadgeFile } from './helpers/writeCoverageBadges';

export function generateBadges() {
  const JSON = readCoverageJson();

  console.info(JSON);
  writeBadgeFile();
  return "..";
}
import { argv } from 'yargs';
import { writeFile, existsSync, mkdirSync } from 'fs';
import { map, get, size, toString, sumBy, values, round, upperFirst } from 'lodash';
import { generateBadge, logger, readCoverageJson } from './helpers';

const source = get(argv, 'read', 'coverage/coverage-summary.json') as string;
const destination = get(argv, 'save', 'coverage') as string;

if (!existsSync(destination)){
  mkdirSync(destination);
}

function generateBadges(coveragePath:string , badgesPath: string) {
  readCoverageJson(coveragePath)
    .then(coverage => {      
      const average = round(sumBy(values(coverage), 'pct') / size(coverage), 2);
      const averageBadge = generateBadge(average);

      writeFile(`${badgesPath}/average.svg`, averageBadge, logger);

      return map(coverage, (value, key) => {
        const badge = generateBadge(get(value, 'pct'), upperFirst(toString(key)));
        writeFile(`${badgesPath}/${toString(key)}.svg`, badge, logger);
      })
    });
}

generateBadges(source, destination);
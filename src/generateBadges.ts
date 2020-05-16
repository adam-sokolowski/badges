import { writeFile } from 'fs';
import { map, get, size, toString, sumBy, values, round, upperFirst } from 'lodash';
import { generateBadge, logger, readCoverageJson } from './helpers';

export function generateBadges(coveragePath = 'coverage/coverage-summary.json', badgesPath = 'coverage') {
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
import { writeFile } from 'fs';
import { map, get, size, toString, sumBy, values, round, upperFirst } from 'lodash';
import { generateBadge, readCoverageJson } from './helpers';

export function generateBadges(path = 'coverage') {
  readCoverageJson()
    .then(coverage => {      
      const average = round(sumBy(values(coverage), 'pct') / size(coverage), 2);
      const averageBadge = generateBadge(average);

      writeFile(`${path}/average.svg`, averageBadge, () => {});

      return map(coverage, (value, key) => {
        const badge = generateBadge(get(value, 'pct'), upperFirst(toString(key)));
        writeFile(`${path}/${toString(key)}.svg`, badge, () => {});
      })
    });
}
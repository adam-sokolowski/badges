import { map, get, size, toString, sumBy, values,  upperFirst } from 'lodash';
import { generateBadge, readCoverageJson, writeBadgeFile } from './helpers';

export function generateBadges() {
  readCoverageJson()
    .then(coverage => {      
      const average = sumBy(values(coverage), 'pct') / size(coverage);
      const averageBadge = generateBadge(average);

      writeBadgeFile(averageBadge);

      return map(coverage, (value, key) => {
        const badge = generateBadge(get(value, 'pct'), upperFirst(toString(key)));
        writeBadgeFile(badge);
      })
    });
  
  return "..";
}
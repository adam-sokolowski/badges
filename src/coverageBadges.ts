import { argv } from 'yargs';
import { writeFile, existsSync, mkdirSync } from 'fs';
import { map, get, size, toString, sumBy, values, round, upperFirst } from 'lodash';
import { generateBadge, logger, readJson } from './helpers';
import { COLORS } from './helpers/colors.const';

const source = get(argv, 'read', 'coverage/coverage-summary.json') as string;
const destination = get(argv, 'save', 'coverage') as string;

if (!existsSync(destination)) {
  mkdirSync(destination);
}

const color = (coverage: number) => coverage >= 90
  ? COLORS.green
  : coverage >= 70
    ? COLORS.blue
    : coverage >= 50
      ? COLORS.yellow
      : COLORS.red;

function coverageBadges(coveragePath: string, badgesPath: string) {
  readJson(coveragePath, 'total')
    .then(coverage => {
      const average = round(sumBy(values(coverage), 'pct') / size(coverage), 2);
      const averageBadge = generateBadge(
        `${average}%`,
        color(average)
      );

      writeFile(`${badgesPath}/average.svg`, averageBadge, logger);

      return map(coverage, (value, key) => {
        const coverage = get(value, 'pct');
        const badge = generateBadge(
          `${coverage}%`,
          color(coverage),
          upperFirst(toString(key))
        );

        writeFile(`${badgesPath}/${toString(key)}.svg`, badge, logger);
      })
    });
}

coverageBadges(source, destination);
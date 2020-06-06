import { Badge } from './helpers/badges.model';
import { argv } from 'yargs';
import { writeFile, existsSync, mkdirSync } from 'fs';
import { map, get, upperFirst } from 'lodash';
import { generateBadge, logger, readJson } from './helpers';

const source = get(argv, 'read', 'badges.json') as string;
const destination = get(argv, 'save', 'coverage') as string;

if (!existsSync(destination)) {
  mkdirSync(destination);
}

function customBadges(customBadgesPath: string, badgesPath: string) {
  readJson(customBadgesPath, 'badges')
    .then((badges: any) => {
      return map(badges, (items: Badge[]) => {
        map(items, (badge, key) => {
          const { value, label, color } = badge;

          const customBadge = generateBadge(
            value,
            color,
            upperFirst(label),
            true
          );

          writeFile(`${badgesPath}/${key}.svg`, customBadge, logger);

        });
      })
    });
}

customBadges(source, destination);
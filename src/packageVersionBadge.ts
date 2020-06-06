import { argv } from 'yargs';
import { writeFile, existsSync, mkdirSync } from 'fs';
import { get } from 'lodash';
import { generateBadge, logger, readJson } from './helpers';
import { COLORS } from './helpers/colors.const';

const destination = get(argv, 'save', 'coverage') as string;

if (!existsSync(destination)) {
  mkdirSync(destination);
}

function versionBadge(versionPath: string, badgePath: string, ) {
  readJson(versionPath, 'version')
    .then(packageVersion => {

      const versionBadge = generateBadge(
        `${packageVersion}`,
        COLORS.blue,
        'Version',
        true
      );

      writeFile(`${badgePath}/version.svg`, versionBadge, logger);

    });
}

versionBadge('package.json', destination);
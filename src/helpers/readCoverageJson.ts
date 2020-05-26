import { get } from 'lodash';
import { readFile } from 'fs';

export function readCoverageJson(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (error, data) => {
      if (error) {

        console.group()
        console.log('\n============================================================');
        console.error('\n Error reading coverage file:', error, '\n');
        console.info('Please provide correct path to coverage-summary.json in --path= parameter\n');
        console.log('============================================================\n');
        console.groupEnd()

        return reject(error);
      }

      const coverage = get(JSON.parse(data), 'total');
      return resolve(coverage);
    });
  });
}

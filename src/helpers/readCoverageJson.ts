import { get } from 'lodash';
import { readFile } from 'fs';

export function readCoverageJson(path = './../coverage/coverage-summary.json'): Promise<string> {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (error, data) => {
      if (error) {
        console.info(error, 'E');
        return reject(error);
      }
      
      const coverage = get(JSON.parse(data), 'total');
      return resolve(coverage);
    });
  });
}

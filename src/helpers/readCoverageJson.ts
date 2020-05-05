import { readFile } from 'fs';

export function readCoverageJson(path = '/coverage/coverage-summary.json'): Promise<string> {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (error, data) => {
      if (error) {
        return reject(error);
      }

      return resolve(data);
    });
  });
}

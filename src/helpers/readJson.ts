import { get } from 'lodash';
import { readFile } from 'fs';

export function readJson(path: string, property?: string): Promise<string> {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf-8', (error, data) => {
      if (error) {

        console.group()
        console.log('\n============================================================');
        console.error('\n Error reading file:', error, '\n');
        console.info('Please provide correct path to your data source in --path= parameter\n');
        console.log('============================================================\n');
        console.groupEnd()

        return reject(error);
      }
      const jsonContent = JSON.parse(data);
      const value = property ? get(jsonContent, property) : jsonContent;
      return resolve(value);
    });
  });
}

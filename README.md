# Jest coverage badges generator
Module installs a binary command `coverage-badges` in your repository

## Installation:

> `yarn add @adso-ts/badges`

## Dependencies
Jest coverage report must be saved as `coverage-summary.json`, thus requires the following entries in `jest.config.js` are necessary:

```javascript
module.exports = {
  ...
    collectCoverage: true,
    coverageReporters: ['json-summary'],
  ...
};  
```

## Generate badges:
#### yarn script
```javascript
"scripts": {
    "badges": "coverage-badges --read=custom_path_to_coverage-summary.json --save=custom_badges_folder"
}
```
And in the console
```
yarn badges
or
yarn coverage-badges
```
## Parameters (optional)
- `read` : alternative location of `Jest` coverage summary file (`coverage-summary.json`)
- `save` : custom save badge svg files

#### shell
`node node_modules/@adso-ts/badges`
or
`yarn coverage-badges`

## Usage in markdown files

```md
 ![Average](./badges/average.svg)  
 
 ![Lines](./badges/lines.svg)
 ![Statements](./badges/statements.svg)
 ![Branches](./badges/branches.svg)
 ![Functions](./badges/functions.svg)
 ```

#### Results

 ![Average](./badges/average.svg)  
 
 ![Lines](./badges/lines.svg)
 ![Statements](./badges/statements.svg)
 ![Branches](./badges/branches.svg)
 ![Functions](./badges/functions.svg)

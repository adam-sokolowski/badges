# Jest coverage badges generator

## Installation:

> `yarn add @adso-ts/badges`

## Generate badges:
#### yarn script
```
"scripts": {
    "badges": "node node_modules/@adso-ts/badges"
}
```
And in the console
```
yarn badges
```
## Parameters (optional)
- `read` : custom path to coverage summary file (`coverage-summary.json`)
- `save` : path to save badge svg files

#### shell
`node node_modules/@adso-ts/badges`

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

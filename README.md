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

## Use in markdown files

 ![Average](./coverage/average.svg)  
 
 ![Lines](./coverage/lines.svg)
 ![Statements](./coverage/statements.svg)
 ![Branches](./coverage/branches.svg)
 ![Functions](./coverage/functions.svg)

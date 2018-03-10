// @flow

const fs = require('fs')
const path = require('path')
const readline = require('readline-sync')

const inputDir = path.resolve(__dirname, '../pages')
const outputDir = path.resolve(__dirname, '../helpers')

const routeWithOrder = route => ({
  order: readline.question(`What should be the order of ${route}? `),
  route,
})

const routes = fs.readdirSync(inputDir) // Gets all the pages
  .filter(route => route.indexOf('_') !== 0) // Removes the special documents
  .map(route => routeWithOrder(route.slice(0, route.indexOf('.js')))) // Creates object with the order of display
  .sort((a, b) => a.order - b.order) // Sort the routes by order
  .map(route => route.route) // Removes the orders from the array

fs.writeFileSync(
  `${outputDir}/routes.json`,
  JSON.stringify({ routes }),
)

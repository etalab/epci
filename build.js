#!/usr/bin/env node
const main = require('./lib/build')

main().catch(error => {
  console.error(error)
  process.exit(1)
})

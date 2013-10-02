#!/usr/bin/env node

var mung = require('./mung')

var argv = require('optimist')
  .alias('i', 'input')
  .alias('s', 'skip').default('s', 0)
  .alias('r', 'replacement').default('r',65)
  .argv

mung(argv.input, process.stdout, argv.skip, argv.replacement)


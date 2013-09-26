#!/usr/bin/env node

var mung = require('./mung')

var argv = require('optimist')
  .alias('i', 'input')
  .alias('s', 'skip').default('s', 0)
  .argv

mung(argv.input, process.stdout, argv.skip)


var fs = require('fs')
var assert = require('assert')

var cdo = require('..')
var path = __dirname + '/../example/package.json'

var pkgOrig = JSON.parse(fs.readFileSync(path))
var keys = Object.keys(pkgOrig.dependencies)

assert.equal(keys[0], 'request')

var pkgSorted = cdo(pkgOrig)
var keysSorted = Object.keys(pkgSorted.dependencies)

assert.equal(keysSorted[0], 'async')
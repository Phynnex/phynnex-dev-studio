'use strict'

const base = require('neostandard')({})

module.exports = [
  {
    ignores: ['next-env.d.ts', '.next/**', 'node_modules/**']
  },
  ...base,
  {
    name: 'old-standard',
    rules: {
      'no-var': 'off',
      'object-shorthand': 'off'
    }
  }
]

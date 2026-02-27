'use strict'

const next = require('eslint-config-next')

module.exports = [
  {
    ignores: ['next-env.d.ts', '.next/**', 'node_modules/**']
  },
  ...next,
  {
    rules: {
      'no-var': 'off',
      'object-shorthand': 'off'
    }
  }
]

'use strict'

const nextPlugin = require('@next/eslint-plugin-next')
const reactPlugin = require('eslint-plugin-react')

module.exports = [
  {
    ignores: ['next-env.d.ts', '.next/**', 'node_modules/**']
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
      react: reactPlugin
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...reactPlugin.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'no-var': 'off',
      'object-shorthand': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
]

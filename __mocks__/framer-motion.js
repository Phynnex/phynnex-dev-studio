/* eslint-disable @typescript-eslint/no-require-imports */
const React = require('react');

const motion = {
  div: ({ children, ...rest }) => React.createElement('div', rest, children),
};

module.exports = { motion };

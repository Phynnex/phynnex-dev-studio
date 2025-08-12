// import nextJest from 'next/jest.js';

// const createJestConfig = nextJest({
//   dir: './',
// });

// const customJestConfig = {
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
//   testEnvironment: 'jest-environment-jsdom',
//   moduleNameMapper: {
//     '^framer-motion$': '<rootDir>/__mocks__/framer-motion.js',
//   },
// };

// export default createJestConfig(customJestConfig);

// jest.config.cjs
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^framer-motion$': '<rootDir>/__mocks__/framer-motion.js',
  },
};

module.exports = createJestConfig(customJestConfig);

const path = require('path');

module.exports = {
  moduleDirectories: ['node_modules', path.join(__dirname, 'src')],
  testEnvironment: 'jest-environment-jsdom',
  // testEnvironment: 'node',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  collectCoverageFrom: ['**/src/app/**/*.ts', '**/src/app/**/*.tsx'],
  coveragePathIgnorePatterns: ['.*/__tests__/.*'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};

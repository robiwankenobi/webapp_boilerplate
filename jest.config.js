const path = require('path');

module.exports = {
  moduleDirectories: ['node_modules', path.join(__dirname, 'src'), __dirname],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'ts', 'tsx'],
};

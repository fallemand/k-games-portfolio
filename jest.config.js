module.exports = {
  verbose: true,
  testEnvironment: 'node',
  testRegex: '\\/tests\\/unit\\/.*(test|spec)\\.jsx?$',
  collectCoverage: true,
  coverageReporters: [
    'html',
  ],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/tests/unit/setup/styleMock.js',
    '\\.(png)$': '<rootDir>/tests/unit/setup/styleMock.js',
  },
  collectCoverageFrom: [
    '*.{js}',
    'app/**/*.{js,jsx}',
    'services/**/*.{js,jsx}',
  ],
  setupFiles: ['<rootDir>/tests/unit/setup/setup.js'],
};

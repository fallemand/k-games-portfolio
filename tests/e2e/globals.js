const config = require('../../config');

module.exports = {
  site: `${config.host}:${config.port}`,
  environment: 'desktop',
  waitForConditionPollInterval: 50,
  waitForConditionTimeout: 5000,
  retryAssertionTimeout: 10000,
  screenshots: './tests/e2e/screenshots/',
};

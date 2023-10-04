const { getJestConfig } = require('@storybook/test-runner');

const resolver = require('@nx/jest/plugins/resolver').default;
module.exports = {
  ...getJestConfig(),
  resolver: resolver,
};

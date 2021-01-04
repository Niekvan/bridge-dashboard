module.exports = {
  coverageDirectory: 'coverage',
  collectCoverage: true,
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  }
};

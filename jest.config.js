module.exports = {
  setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
  },
};

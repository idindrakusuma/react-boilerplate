module.exports = {
  setupFilesAfterEnv: ['@testing-library/react/cleanup-after-each', '@testing-library/jest-dom/extend-expect'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
  },
};

const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'), // because use relative path, so we need path from node modules
    filename: 'ap p.bundle.js',
  },
};
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'), // because use relative path, so we need path from node modules
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // regex expression for get all js file
        loader: 'babel-loader',
        exclude: /node_modules/, // node_modules should be exclude because we dont want to compile NODE_MODULES
        options: {
          presets: ['@babel/preset-env'], // we need our code can be run on old browser, so we need babel for transform our code to old javascript syntax
        },
      },
    ],
  },
};
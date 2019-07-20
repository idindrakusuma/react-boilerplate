const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        test: /\.js$/, // regex expression for get all `.js` file
        loader: 'babel-loader',
        exclude: /node_modules/, // node_mod ules should be exclude because we dont want to compile NODE_MODULES
      },
      {
        test: /\.css$/, // only load while `.css` type
        use: ['style-loader', 'css-loader'], // this loader for style loader
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};

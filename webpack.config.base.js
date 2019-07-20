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
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: ['last 2 versions', 'not dead', 'not < 2%'],
              },
            ],
            '@babel/preset-react',
          ],
          plugins: [
            'react-hot-loader/babel',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-dynamic-import',
          ],
          // so we need `@babel/preset-env` for transform our code to old javascript syntax.
          // and we need `@babel/preset-react` for compile our JSX code to old javascript syntax
        },
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

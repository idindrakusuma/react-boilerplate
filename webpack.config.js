const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"), // because use relative path, so we need path from node modules
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/, // regex expression for get all `.js` file
        loader: "babel-loader",
        exclude: /node_modules/, // node_mod ules should be exclude because we dont want to compile NODE_MODULES
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
          // so we need `@babel/preset-env` for transform our code to old javascript syntax.
          // and we need `@babel/preset-react` for compile our JSX code to old javascript syntax
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html',
  })],
};
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 4000, // you can custom to port whatever you want
  },
  devtool: 'source-map', // this properties make us easy to debug in devtool
});

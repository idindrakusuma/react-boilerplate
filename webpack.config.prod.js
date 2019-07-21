const merge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'bundle_size.html',
      openAnalyzer: false,
    }),
  ],
  // for more details of BundleAnalyzer,
  // check this out https://github.com/webpack-contrib/webpack-bundle-analyzer
});

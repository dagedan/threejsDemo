const webpack = require('webpack')
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  // devtool: 'inline-source-map',
  devtool: 'eval-source-map',
  devServer: {
    port: 3000,
    compress: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /.(less|css)$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
});
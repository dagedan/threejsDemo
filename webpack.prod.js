const webpack = require('webpack');
const { merge } = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 0,
      maxSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: "~",
      name: false,
      cacheGroups: {
        vendor: {
          name: "vendor",
          test: /[\\/]node_modules[\\/]/,
          minSize: 0,
          chunks: "all",
          priority: 10
        },
        common: {
          name: "common",
          test: /[\\/]src[\\/]/,
          minSize: 1024,
          chunks: "all",
          priority: 5
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /.(less|css)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new UglifyJSPlugin(),
    new MiniCssExtractPlugin({filename: 'css/[name].css'}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});
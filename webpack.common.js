const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')

const PnpWebpackPlugin = require(`pnp-webpack-plugin`);
module.exports = {
  entry: {
    app: './src/controller/main.js'
  },
  resolve: {
    plugins: [
      PnpWebpackPlugin,
    ],
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  resolveLoader: {
    plugins: [
      PnpWebpackPlugin.moduleLoader(module),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ] 
      },
      {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
       {
         loader: 'file-loader',
         options: {
          name (file) {
            return 'assets/[name].[hash].[ext]'
          }
        }
       }, {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true
          },
        }
      ]
    }, ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({filename: 'css/[name].css'}),
    new HtmlWebpackPlugin({
      title: 'test product',
      template: 'public/index.html'
    }),
    new CheckerPlugin(),
    PnpWebpackPlugin
  ],
  
  output: {
    filename: 'js/[name].[chunkhash].bundle.js',
    chunkFilename: 'js/[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
        ]
      }, {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }, {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
         {
           loader: 'file-loader',
           options: {
            name (file) {
              return 'assets/[name].[hash].[ext]'
            }
          }
         }, {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true
            },
          }
        ]
      }, 
    ]
  }
}
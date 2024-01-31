const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { merge } = require('webpack-merge');
const sharedWebpackConfig = require('./webpack.common');

dotenv.config();

/** @type {import('webpack').Configuration} */
const devWebpackConfig = {
  mode: 'development',
  entry: path.resolve(process.cwd(), 'src', 'index.js'),
  devServer: {
    port: 3000,
    https: false,
    hot: true,
    open: true,
    static: [
      {
        directory: path.resolve(
          process.cwd(),
          'node_modules',
          'heller-2-lite',
          'build',
          'css'
        )
      },
      {
        directory: path.resolve(process.cwd(), 'assets')
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: 'public/index.html' })]
};

module.exports = merge(sharedWebpackConfig, devWebpackConfig);

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { merge } = require('webpack-merge');
const sharedWebpackConfig = require('./webpack.common');

/** @type {import('webpack').Configuration} */
const prodWebpackConfig = {
    mode: 'production',
    entry: path.resolve(process.cwd(), 'src', 'index.js'),
    output: {
        clean: true,
        path: path.resolve(process.cwd(), 'dist'),
        filename: '[name].js',
        module: true,
        chunkFormat: 'module'
    },
    experiments: {
        outputModule: true
    },
    cache: false,
    plugins: [new HtmlWebpackPlugin({ template: "public/index.html" })]
};

module.exports = merge(sharedWebpackConfig, prodWebpackConfig);
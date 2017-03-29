const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

webpackConfig = {
  entry: './client/index.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index_bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
    })
  ],
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  }
}

module.exports = webpackConfig;
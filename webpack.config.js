'use strict';

const path = require('path');
const webpack = require('webpack');


module.exports = {
  // devtool: 'inline-source-map',
  entry: './app/public/app.js',
  output: {
    path: path.join(__dirname, 'app/public/dist'),
    filename: '[name].js',
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js',
    },
  },
  context: __dirname,
  node: {
    __dirname: true,
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader' },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        exclude: /favicon\.png$/,
        // use: [{
        //   loader: 'url-loader',
        //   options: {  webpack 将移除parseQuery 用getOptions代替
        //     limit: 10000
        //   }
        // }]
        loader: 'url-loader?limit:10000',
      },
    ],
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'based',
    //   filename: 'based.js',
    // }),
    new webpack.BannerPlugin('the file is created by gatinul'),
  ],
};


const path = require('path');
const webpack = require('webpack');


module.exports = {
  devtool: 'inline-source-map',
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'based',
    //   filename: 'based.js',
    // }),
    new webpack.BannerPlugin('the file is created by gatinul'),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        );
      },
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),
  ],
};

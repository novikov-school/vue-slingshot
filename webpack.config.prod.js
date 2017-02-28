/* eslint-disable no-var */
var webpack = require('webpack');
var cssnext = require('postcss-cssnext');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var dist = require('./tools/dist');

var GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production'),
  __DEV__: false
};

module.exports = {
  resolve: {
    extensions: ['', '.js', '.json'],
    alias: {
      vue: 'vue/dist/vue'
    }
  },
  entry: [
    path.resolve(__dirname, 'src/main')
  ],
  output: {
    path: dist.output,
    publicPath: '/',
    filename: 'bundle.js'
  },
  /*
  resolveLoader: {
    root: `${__dirname}/node_modules`
  },
  */
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  plugins: [
    // Optimize the order that items are bundled. This assures the hash is deterministic.
    new webpack.optimize.OccurenceOrderPlugin(),

    // http://vue-loader.vuejs.org/en/workflow/production.html
    new webpack.DefinePlugin(GLOBALS),

    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin("styles.css"),

    // Generate HTML file that contains references to generated bundles. See here for how this works: https://github.com/ampedandwired/html-webpack-plugin#basic-usage
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',

      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },

      inject: true,
      // Note that you can add custom options here if you need to handle other custom logic in index.html
      // To track JavaScript errors via bugsnag
      // bugsnagToken: '14bd51b71b4c3b129155d054b16f6d79'
    }),

    // Eliminate duplicate packages when generating bundle
    new webpack.optimize.DedupePlugin()

    /*
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),*/
  ],
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        query: {
          name: '[name].[ext]'
        }
      },
      {
        test: /\.(ico|gif|png|jpg|jpeg|svg|webp)$/,
        loaders: ["file?context=public&name=/[path][name].[ext]"],
        exclude: /node_modules/
      },
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap!postcss')},
      //{test: /(\.css|\.scss)$/, loader: ExtractTextPlugin.extract('css?sourceMap!postcss!sass?sourceMap')},
      {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'url?name=[name].[ext]'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]"},
      {test: /\.ttf(\?v=\d+.\d+.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]'},
      {test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]'}
    ]
  },
  devtool: '#source-map',
  postcss: [
    require("postcss-import")({
      addDependencyTo: webpack
    }),
    cssnext,
  ],
};

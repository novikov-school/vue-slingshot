/* eslint-disable no-var */
var webpack = require('webpack');
var cssnext = require('postcss-cssnext');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue'
    }
  },
  entry: [
    // must be first entry to properly set public path
    './src/webpack-public-path',
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'), // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  /*
  externals: {
    "Vue": "Vue"
  },*/
  resolveLoader: {
    root: __dirname + 'node_modules'
  },
  target: 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
  plugins: [
    new ExtractTextPlugin("styles.css"),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'), // Tells React to build in either dev or prod modes. https://facebook.github.io/react/downloads.html (See bottom)
      __DEV__: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({     // Create HTML file that includes references to bundled CSS and JS.
      template: path.resolve(__dirname, 'src/index.ejs'),
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      inject: true
    })
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
        test: /\.(ico|gif|png|jpg|jpeg|svg|webp)$/,
        loaders: ["file?context=public&name=/[path][name].[ext]"],
        exclude: /node_modules/
      },
      /*
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },*/
      {test: /\.css$/, loaders: ['style', 'css?sourceMap', 'postcss']},
      {test: /\.scss$/, loaders: ['style', 'css?sourceMap', 'postcss', 'sass?sourceMap']},
      {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'url?name=[name].[ext]'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]"},
      {test: /\.ttf(\?v=\d+.\d+.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]'},
      {test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]'}
    ]
  },
  debug: true,
  noInfo: true, // set to false to see a list of every file being bundled.
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps
  // and https://webpack.github.io/docs/configuration.html#devtool
  devtool: 'cheap-module-eval-source-map',
  postcss: ()=> [cssnext], //[autoprefixer]
  vue: {
    loaders: {
      // js: 'babel'
      // sass: "vue-style-loader!css-loader!sass?indentedSyntax"
    }
  }
};

// This file configures a web server for testing the production build
// on your local machine.
/* eslint-disable no-console, no-var */
var browserSync = require('browser-sync');
var chalk = require('./chalkConfig');
var historyApiFallback = require('connect-history-api-fallback');
var dist = require('./dist');

console.log(chalk.processing('Opening production build...'));

// Run Browsersync
browserSync({
  port: 3000,
  ui: {
    port: 3001
  },
  server: {
    baseDir: dist.output,
    routes: {
      "/public": dist.publicDir
    },
  },
  files: [
    'src/*.ejs'
  ],
  middleware: [historyApiFallback()]
});

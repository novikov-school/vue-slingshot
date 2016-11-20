// Centralized configuration for chalk, which is used to add color to console.log statements.
/* eslint-disable no-console, no-var */
var chalk = require('chalk');

var chalkConfig = {
  error: chalk.red,
  success: chalk.green,
  warning: chalk.yellow,
  processing: chalk.blue
};

module.exports = chalkConfig;

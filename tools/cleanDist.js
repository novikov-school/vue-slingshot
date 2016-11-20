/* eslint-disable */
var rimraf = require('rimraf');
var mkdirp = require('mkdirp');

var dist = require('./dist');
var chalk = require('./chalkConfig');

console.log(chalk.processing('Cleaning dist folder: ' + dist.output + '...'));
rimraf(dist.output, error => {
  if(error) {
    console.log(chalk.error(error));
  }
  else {
    mkdirp(dist.output, error => {
      if(error) {
        console.log(chalk.error(error));
      }    
    });
  }
});


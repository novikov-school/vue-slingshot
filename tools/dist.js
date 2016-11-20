var path = require('path');

var distDir = path.resolve(__dirname, 'dist');
var publicDir = path.resolve(__dirname, 'public');

module.exports = {
  output: distDir,
  publicDir: publicDir
};

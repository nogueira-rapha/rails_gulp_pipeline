const { series, parallel }           = require('gulp');
const { clean }            = require('./clean');
const { stylesheets }      = require('./stylesheets');
const { images }           = require('./images');
const { fonts }            = require('./fonts');

exports.build = series(
  clean,
  parallel(images, fonts),
  stylesheets
);
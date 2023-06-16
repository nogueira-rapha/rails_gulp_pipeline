const { series, parallel, watch } = require('gulp');
const { clean }            = require('./clean');
const { stylesheets }      = require('./stylesheets');
const { images }           = require('./images');
const { fonts }            = require('./fonts');
const { bundle }           = require('./bundle');
const { javascripts }      = require('./javascripts');
const config = require('./config');

exports.build = series(
  clean,
  parallel(images, fonts),
  stylesheets,
  bundle,
  javascripts
);

exports.default = series(
  images,
  fonts,
  stylesheets,
  bundle,
  javascripts,
  function () {
    watch(config.javascripts.src, javascripts);
    watch(config.stylesheets.src, stylesheets);
    watch(config.fonts.src, fonts);
    watch(config.images.src, images);
    watch(config.bundle.src, bundle);
  }
)
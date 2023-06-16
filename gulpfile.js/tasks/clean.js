const gulp    = require('gulp');
const del     = require('del');
const config  = require('../config');

gulp.task('clean:js', function () {
  var bundlePath = '!' + config.publicJsBundleAssetsPath;
  var jsPath = config.publicJsAssetsPath + '/**/*.js'

  return del([jsPath, bundlePath]);
});

gulp.task('clean:js:bundle', function () {
  return del(config.publicJsBundleAssetsPath);
});

gulp.task('clean:style', function () {
  return del(config.publicStyleAssetsPath);
});

gulp.task('clean:images', function () {
  return del(config.publicImagesAssetsPath);
});

gulp.task('clean:fonts', function () {
  return del(config.publicFontsAssetsPath);
});

gulp.task('clean:all', function () {
  return del(config.publicAssetsBasePath);
});
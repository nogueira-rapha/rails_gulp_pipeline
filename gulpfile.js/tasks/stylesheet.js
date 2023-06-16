const gulp          = require('gulp');
const uglify        = require('gulp-clean-css');
const config        = require('../config').stylesheets;
const sass          = require('gulp-sass')(require('sass'));
var handleErrors    = require('../util/handleErrors');
const autoprefixer  = require('gulp-autoprefixer');

gulp.task('sass:transpile', function () {
  return gulp.src(config.src)
    .pipe(sass(config.settings))
    .on('error', handleErrors)
    .pipe(uglify())
    .on('error', handleErrors)
    .pipe(autoprefixer(config.prefixer.browsers))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});
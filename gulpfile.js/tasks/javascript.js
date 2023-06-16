const gulp          = require('gulp');
const config        = require('../config').javascripts;
const concat        = require('gulp-concat');
const uglify        = require('gulp-uglify');
const strip         = require('gulp-strip-comments');
const fileinclude   = require('gulp-file-include');

gulp.task('js:minify', function () {
  return gulp.src([config.src, "!" + config.bundle.src])
    .pipe(concat(config.filename))
    .pipe(uglify())
    .pipe(gulp.dest(config.dest));
});

gulp.task('bundle', function () {
  return gulp.src(config.bundle.src)
    .pipe(fileinclude(config.bundle.fileinclude_options))
    .pipe(strip())
    .pipe(uglify())
    .pipe(gulp.dest(config.dest));
});
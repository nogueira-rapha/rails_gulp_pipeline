const gulp      = require('gulp');
const config    = require('../config').images;
const changed   = require('gulp-changed');
const imagemin  = require('gulp-imagemin');

gulp.task('images:build', function () {
  return gulp.src(config.src, { since: gulp.lastRun('images:build') })
    .pipe(changed(config.dest))
    .pipe(imagemin())
    .pipe(gulp.dest(config.dest));
});
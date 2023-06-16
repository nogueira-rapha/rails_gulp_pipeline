const gulp      = require('gulp');
const config    = require('../config').fonts;

gulp.task('fonts:build', function () {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
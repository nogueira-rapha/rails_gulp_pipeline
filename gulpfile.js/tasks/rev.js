const config       = require('../config');
const gulp         = require('gulp');
const rev          = require('gulp-rev');
const revCollector = require('gulp-rev-collector');
var revdel = require('gulp-rev-delete-original');

// Add md5 hashes to assets
gulp.task('rev:assets', function(){
  return gulp.src(config.publicAssetsBasePath + '/**/**.!(css|js|min.js)')
    .pipe(rev())
    .pipe(gulp.dest(config.publicAssetsBasePath))
    .pipe(revdel())
    .pipe(rev.manifest())
    .pipe(gulp.dest(config.publicAssetsBasePath));
});

// Replace asset references in compiled css and js files
gulp.task('rev', function(){
  return gulp.src([config.publicAssetsBasePath + '/rev-manifest.json', config.publicAssetsBasePath + '/**/*.{css,js}'])
    .pipe(revCollector())
    .pipe(gulp.dest(config.publicAssetsBasePath));
});
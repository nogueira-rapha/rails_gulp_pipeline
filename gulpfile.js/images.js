const config                 = require('./config').images;
const { dest, src, lastRun } = require('gulp');
const changed                = require('gulp-changed');
const browserSync            = require('browser-sync');
const imagemin               = require('gulp-imagemin');

exports.images = function images(done) {
  src(config.src, { since: lastRun(images) })
    .pipe(changed(config.dest))
    .pipe(imagemin())
    .pipe(dest(config.dest))
    .pipe(browserSync.reload({stream: true}));

  done();
}
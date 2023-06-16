const config        = require('./config').images;
const { dest, src } = require('gulp');
const changed       = require('gulp-changed');
const browserSync   = require('browser-sync');

exports.images = function images(done) {
  src(config.src)
    .pipe(changed(config.dest))
    .pipe(dest(config.dest))
    .pipe(browserSync.reload({stream: true}));

  done();
}
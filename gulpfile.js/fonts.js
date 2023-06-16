const config        = require('./config').fonts;
const { dest, src } = require('gulp');
const changed       = require('gulp-changed');
const browserSync   = require('browser-sync');

exports.fonts = function fonts(done) {
  src(config.src)
    .pipe(changed(config.dest))
    .pipe(dest(config.dest))
    .pipe(browserSync.reload({stream: true}));

  done();
}
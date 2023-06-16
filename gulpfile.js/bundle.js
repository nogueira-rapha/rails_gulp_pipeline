const { src, dest } = require('gulp');
const strip         = require('gulp-strip-comments');
const fileinclude   = require('gulp-file-include');
const config        = require('./config').bundle;
const uglify        = require('gulp-uglify');
const browserSync   = require('browser-sync');

exports.bundle = function bundle(done) {
  src(config.src)
    .pipe(fileinclude(config.fileinclude_options))
    .pipe(strip())
    .pipe(uglify())
    .pipe(dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
  
  done();
}
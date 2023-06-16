const { src, dest } = require('gulp');
const browserSync   = require('browser-sync');
const sass          = require('gulp-sass')(require('sass'));
const handleErrors  = require('./util/handleErrors');
const config        = require('./config').stylesheets;
const autoprefixer  = require('gulp-autoprefixer');
const uglify        = require('gulp-clean-css');

exports.stylesheets = function stylesheets(done) {
  src(config.src)
    .pipe(sass(config.settings))
    .pipe(uglify())
    .on('error', handleErrors)
    .pipe(autoprefixer(config.prefixer.browsers))
    .pipe(dest(config.dest))
    .pipe(browserSync.reload({stream:true}));

  done();
}
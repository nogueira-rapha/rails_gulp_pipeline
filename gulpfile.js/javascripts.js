const { src, dest } = require('gulp');
const config        = require('./config').javascripts;
const uglify        = require('gulp-uglify');
const concat        = require('gulp-concat');
const browserSync   = require('browser-sync');

exports.javascripts = function javascripts(done) {
  src(config.src)
    .pipe(concat(config.output_filename))
    .pipe(uglify())
    .pipe(dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
  
  done();
}
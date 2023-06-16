require('require-dir')('./tasks/');
const { series, parallel } = require('gulp');

exports.default = series(
  'clean:all',
  'fonts:build',
  'images:build',
  'sass:transpile',
  'js:minify',
  'bundle',
  'rev:assets',
  'rev'
);

exports.build = series(
  'clean:all',
  parallel(
    'fonts:build',
    'images:build',
  ),
  parallel(
    'sass:transpile',
    'js:minify',
    'bundle',
  ),
  'rev:assets',
  'rev'
);
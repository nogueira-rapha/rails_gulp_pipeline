const del    = require('del');
const config = require('./config');

exports.clean = function clean(done) {
  del(config.publicAssets);

  done();
}
var publicAssets = "./public/assets";
var sourceFiles  = "./app/assets";

module.exports = {
  publicAssets: publicAssets,
  images: {
    src: sourceFiles + "/images/**",
    dest: publicAssets + "/images"
  },
  fonts: {
    src: sourceFiles + "/fonts/**",
    dest: publicAssets + "/fonts"
  },
  stylesheets: {
    src: sourceFiles + "/stylesheets/**/*.scss",
    dest: publicAssets + "/stylesheets",
    settings: {
      indentedSyntax: false, // Enable .sass syntax!
      imagePath: '/assets/images' // Used by the image-url helper
    },
    prefixer: {
      browsers: ['last 2 versions']
    }
  }
};
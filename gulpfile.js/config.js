var publicAssetsBasePath = "./public/assets";
var sourceFilesBasePath  = "./app/assets";

module.exports = {
  publicAssetsBasePath: publicAssetsBasePath,
  publicJsAssetsPath: publicAssetsBasePath + '/javascripts',
  publicJsBundleAssetsPath: publicAssetsBasePath + '/javascripts/bundle.js',
  publicStyleAssetsPath: publicAssetsBasePath + '/stylesheets',
  publicImagesAssetsPath: publicAssetsBasePath + '/images',
  publicFontsAssetsPath: publicAssetsBasePath + '/fonts',
  browserSync: {
    proxy: 'localhost:3000',
    files: ['./app/views/**']
  },
  fonts: {
    src: sourceFilesBasePath + '/fonts/**',
    dest: publicAssetsBasePath + '/fonts'
  },
  images: {
    src: sourceFilesBasePath + "/images/**",
    dest: publicAssetsBasePath + "/images"
  },
  stylesheets: {
    src: sourceFilesBasePath + "/stylesheets/**/*.scss",
    dest: publicAssetsBasePath + "/stylesheets",
    settings: {
      indentedSyntax: false, // Enable .sass syntax!
      imagePath: '/assets/images' // Used by the image-url helper
    },
    prefixer: {
      browsers: ['last 2 versions']
    }
  },
  javascripts:{
    src: sourceFilesBasePath + "/javascripts/**/*.js",
    dest: publicAssetsBasePath + "/javascripts",
    bundle: {
      src: sourceFilesBasePath + "/javascripts/bundle.js",
      fileinclude_options:  {
        prefix: '@@',
        basepath: '@file',
        context: {
          nodeRoot: '../../../'
        }
      }
    },
    filename: "app.min.js"
  },
};
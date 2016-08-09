var gulp = require('gulp');
var bundle = require('aurelia-bundler').bundle;

var config = {
    force: true,
    baseURL: '.',                   // baseURL of the application
    configPath: './config.js',      // config.js file. Must be within `baseURL`
    bundles: {
        'dist/app-build': {           // bundle name/path. Must be within `baseURL`. Final path is: `baseURL/dist/app-build.js`.
            includes: [
                '[*.js]',
                '*.html',
                '*.css'
            ],
            options: {
                inject: true,
                minify: true
            }
        },
        'dist/vendor-build': {
            includes: [
                'aurelia-bootstrapper',
                'aurelia-framework',
                'aurelia-http-client',
                'aurelia-router',
                'aurelia-validation',
                'aurelia-validatejs'
            ],
            options: {
                inject: true,
                minify: true
            }
        }
    }
};

gulp.task('bundle', function () {
    return bundle(config);
});
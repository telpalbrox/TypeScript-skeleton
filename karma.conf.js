// Karma configuration
// Generated on Sun Jul 05 2015 14:52:10 GMT+0200 (CEST)
var webpackConf = require('./webpack.config.js');
module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'tests/testIndex.js'
        ],


        // list of files to exclude
        exclude: [
        ],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            // add webpack as preprocessor
            'tests/testIndex.js': ['webpack', 'sourcemap']
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        plugins: [
            'karma-webpack',
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-spec-reporter',
            'karma-sourcemap-loader'
        ],

        webpack: {
            module: webpackConf.module,
            resolve: webpackConf.resolve,
            devtool: 'inline-source-map'
        },
        webpackServer: {
            noInfo: true
        }
    })
};

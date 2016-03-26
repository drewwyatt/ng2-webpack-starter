var webpack = require('webpack');
var webpackConfig = require('./webpack.tests.config.js');

module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        singleRun: true,
        frameworks: ['jasmine'],
        files: [
            'webpack.tests.context.js'
        ],
        preprocessors: {
            'webpack.tests.context.js': ['webpack', 'sourcemap']
        },
        reporters: ['dots'],
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
};
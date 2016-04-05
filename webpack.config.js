var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = require('webpack').optimize.CommonsChunkPlugin;
module.exports = {
    context: __dirname,
    entry: {
        'angular2': [
            'rxjs',
            'zone.js',
            'reflect-metadata',
            'angular2/common',
            'angular2/core',
            'angular2/router',
            'angular2/http',
            'angular2/platform/browser'
        ],
        'app': [
            './src/app/bootstrap'
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].js.map',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        loaders: [
            { test: /\.html$/,  loader: 'raw' },
            { test: /\.css$/,   loader: 'raw' },
            {test: /\.ts$/, loader: 'ts-loader'}
        ]
    },
    resolve: {
        extensions: ['','.ts','.js','.json']
    },
    plugins: [
        new CommonsChunkPlugin("angular2", "angular2.bundle.js", Infinity),
        new HtmlWebpackPlugin({ template: 'src/index.html', chunksSortMode: 'none' })
    ],
    devServer: {
        port: 3000,
        host: "localhost",
        historyApiFallback: true,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
  }
};
module.exports = {
    devtool: 'inline-source-map', //just do inline source maps instead of the default
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts-loader'}
        ]
    },
    resolve: {
        extensions: ['','.ts','.js','.json']
    }
};
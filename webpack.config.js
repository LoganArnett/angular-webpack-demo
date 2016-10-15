var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        path: './app',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'app'),
        progress: true,
        hot: true,
        stats: 'errors-only',
        inline: true,
        host: '127.0.0.1',
        port: 8080
    }
};

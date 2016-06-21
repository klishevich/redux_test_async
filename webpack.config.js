var path = require('path');
// var webpack = require('webpack');
var config = {
    devServer: {
        contentBase: './build',
        host: 'localhost',
        port: 3000
    },
    entry: {
        main: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname, 'index.js')
        ],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            query: {
              presets: [
                'babel-preset-es2015',
                'babel-preset-react',
                'babel-preset-stage-0'
              ].map(require.resolve),
            }
        }]
    },

};

module.exports = config;
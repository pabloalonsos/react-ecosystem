const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        './src/tests'
    ],
    output: {
        path: path.join(__dirname, 'tests'),
        filename: 'test.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.js?$/,
                loader: 'babel-istanbul-instrumenter',
                exclude: /node_modules|tests/
            },
            {
                test: /\.json?$/,
                loader: 'json',
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json'],
        alias: {
            actions: path.join(__dirname, 'src/js/actions'),
            components: path.join(__dirname, 'src/js/components'),
            constants: path.join(__dirname, 'src/js/constants'),
            containers: path.join(__dirname, 'src/js/containers'),
            reducers: path.join(__dirname, 'src/js/reducers')
        }
    }
};
// webpack --config webpack.test.config.js --target=node
// node_modules/.bin/mocha test/test.js
//
// webpack-dev-server --config webpack.test.config.js
// 'mocha!'

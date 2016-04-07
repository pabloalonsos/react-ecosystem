var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        './src/js/app.js'
    ],
    output: {
        path: path.join(__dirname, 'target'),
        filename: 'bundle.js'
    },
    eslint: {
        configFile: path.join(__dirname, '../.eslintrc')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0'],
                    plugins: [
                        "transform-react-jsx",
                        "transform-react-display-name"
                    ]
                }
            },
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
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
    },
    devtool: 'eval'
};

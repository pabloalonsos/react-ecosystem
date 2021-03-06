var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: './src/js/app-prod.js',
        vendor: [
            'react',
            'react-dom',
            'react-immutable-proptypes',
            'react-router',
            'redux',
            'react-redux',
            'redux-react-router',
            'immutable',
            'reselect',
            'history'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js")
    ],
    eslint: {
        configFile: path.join(__dirname, '../.eslintrc')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel', 'eslint'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', '!css?sourceMap!sass?sourceMap'),
                exclude: /node_modules/
            }
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
    devtool: 'source-map'
};

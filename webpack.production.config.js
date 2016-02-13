var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

module.exports = [
    {
        name: 'client',
        devtool: 'source-map',
        entry: {
            vendor: [
                "classnames",
                "history",
                "immutable",
                "react",
                "react-dom",
                "react-immutable-proptypes",
                "react-redux",
                "react-router",
                "react-router-redux",
                "redux",
                "redux-thunk"
            ],
            app: './src/client'
        },
        output: {
            path: path.join(__dirname, 'target'),
            filename: 'bundle.js',
            publicPath: '/static/'
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin(
                {
                    name: "vendor",
                    filename: "vendor.js",
                    minChunks: Infinity
                }
            ),
            new CleanWebpackPlugin(['target'])
        ],
        resolve: {
            alias: {
                'react': path.join(__dirname, 'node_modules', 'react')
            },
            extensions: ['', '.js']
        },
        resolveLoader: {
            'fallback': path.join(__dirname, 'node_modules')
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel',
                    exclude: /node_modules/,
                    include: __dirname
                }
            ]
        }
    },
    {
        name: 'server',
        devtool: 'source-map',
        entry: './src/server',
        target: 'node',
        externals: [nodeExternals()],
        output: {
            path: path.join(__dirname, 'target'),
            filename: 'server.js'
        },
        resolve: {
            extensions: ['', '.js']
        },
        resolveLoader: {
            'fallback': path.join(__dirname, 'node_modules')
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel',
                    exclude: /node_modules/,
                    include: __dirname
                }
            ]
        }
    }
];

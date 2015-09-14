var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:4444', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './client/src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'target'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    eslint: {
        configFile: path.join(__dirname, '.eslintrc')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel', 'eslint-loader'],
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map'
};

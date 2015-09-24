var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'mocha!./src/tests'
    ],
    output: {
          path: path.join(__dirname, "test"),
          filename: "test.js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    }
};

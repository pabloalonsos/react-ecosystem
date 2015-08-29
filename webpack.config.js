module.exports = {
    entry: ['./src/app.js'],
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map'
};

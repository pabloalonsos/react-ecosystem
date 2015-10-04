var webpack = require('webpack');
var express = require('express');
var path = require('path');
var devConfig = require('./webpack.config');
var testConfig = require('./webpack.test.config');

var devApp = express();
var testApp = express();

var devCompiler = webpack(devConfig);
var testCompiler = webpack(testConfig);

/*
 * Dev Server
 */
devApp.use(require('webpack-dev-middleware')(devCompiler, {
    noInfo: true,
    stats: { colors: true }
}));

devApp.use(require('webpack-hot-middleware')(devCompiler));

devApp.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

devApp.listen(4444, 'localhost', function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Dev Server listening on port 4444');
});

/*
 * Test Server
 */
testApp.use(require('webpack-dev-middleware')(testCompiler, {
    noInfo: true,
    publicPath: '/test/',
    stats: { colors: true }
}));

testApp.use(require('webpack-hot-middleware')(testCompiler));

testApp.listen(5555, 'localhost', function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Test Server listening on port 5555');
});

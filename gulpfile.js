var gulp = require('gulp');
var webpack = require('gulp-webpack');

var webpackConfig = require('./webpack.config.js');

gulp.task('default', ['build', 'test']);

gulp.task('build', function() {
    return gulp.src('src/app.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('target/'));
});

gulp.task('test', ['build'], function() {
    return;
});

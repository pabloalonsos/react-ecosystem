var gulp = require('gulp');
var webpack = require('gulp-webpack');
var install = require('gulp-install');

var webpackConfig = require('./webpack.config.js');

gulp.task('default', ['build', 'test']);

gulp.task('dependencies', function() {
    return gulp.src(['./package.json'])
        .pipe(install());
})

gulp.task('build', ['dependencies'], function() {
    return gulp.src('client/src/app.js')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('target/'));
});

gulp.task('test', ['build'], function() {
    return;
});

var gulp = require('gulp');
var webpack = require('gulp-webpack');
var install = require('gulp-install');
var clean = require('gulp-clean');

var webpackDevConfig = require('./webpack.config.js');
var webpackProdConfig = require('./webpack.production.config.js');

gulp.task('default', ['build-dev', 'test']);
gulp.task('prod', ['build-prod', 'copy']);

gulp.task('dependencies', function() {
    return gulp.src(['./package.json'])
        .pipe(install());
});

gulp.task('clean-dev', function() {
    return gulp.src(['target/'], { read: false })
        .pipe(clean());
});

gulp.task('build-dev', ['clean-dev', 'dependencies'], function() {
    return gulp.src('src/js/app.js')
        .pipe(webpack(webpackDevConfig))
        .pipe(gulp.dest('target/'));
});

gulp.task('clean-prod', function() {
    return gulp.src(['dist/'], { read: false })
        .pipe(clean());
});

gulp.task('build-prod', ['clean-prod', 'dependencies'], function() {
    return gulp.src('src/js/app.js')
        .pipe(webpack(webpackProdConfig))
        .pipe(gulp.dest('dist/'));
});

gulp.task('copy', ['clean-prod'], function() {
    return gulp.src('index.html')
        .pipe(gulp.dest('dist/'));
})

gulp.task('test', ['build-dev'], function() {
    return;
});

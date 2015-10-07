var gulp = require('gulp');
var webpack = require('gulp-webpack');
var install = require('gulp-install');
var clean = require('gulp-clean');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');

var webpackDevConfig = require('./webpack.config.js');
var webpackProdConfig = require('./webpack.production.config.js');
var webpackTestConfig = require('./webpack.test.config.js');

/*
 * TODO:
 *  - Merge webpack files
 */

gulp.task('default', ['build-dev', 'test']);
gulp.task('prod', ['build-prod', 'copy', 'test']);

gulp.task('dependencies', function() {
    return gulp.src(['./package.json'])
        .pipe(install());
});

gulp.task('clean-dev', function() {
    return gulp.src(['target'], { read: false })
        .pipe(clean());
});

gulp.task('build-dev', ['clean-dev', 'dependencies'], function() {
    return gulp.src('src/js/app.js')
        .pipe(webpack(webpackDevConfig))
        .pipe(gulp.dest('target'));
});

gulp.task('clean-prod', function() {
    return gulp.src(['dist'], { read: false })
        .pipe(clean());
});

gulp.task('build-prod', ['clean-prod', 'dependencies'], function() {
    return gulp.src('src/js/app.js')
        .pipe(webpack(webpackProdConfig))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy', ['clean-prod'], function() {
    return gulp.src('index.html')
        .pipe(gulp.dest('dist'));
})

gulp.task('compile-test', function() {
    return gulp.src('src/tests')
        .pipe(webpack(webpackTestConfig))
        .pipe(gulp.dest('tests'));
});

gulp.task('test', ['compile-test'], function() {
    return gulp.src('tests/test.js')
        .pipe(mocha());
});

gulp.task('coverage', ['compile-test'], function(done) {
    return gulp.src('tests/test.js')
        .pipe(mocha())
        .pipe(istanbul.writeReports({
            coverageVariable: '__coverage__',
            dir: './coverage',
            reporters: ['lcov', 'json', 'text', 'text-summary']
        }));
});


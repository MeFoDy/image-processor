const gulp = require('gulp');
const clean = require('gulp-clean');
const config = require('./config');

/**
 * Cleans the dist directory
 *
 * @task {clean}
 * @group {Utils}
 */
gulp.task('clean', () =>
    gulp.src(config.base.dist, {
        read: false,
        allowEmpty: true,
    }).pipe(clean()));

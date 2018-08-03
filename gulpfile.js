const gulp = require('gulp');

const gutil = require('gulp-util');
const usage = require('gulp-help-doc');

require('require-dir')('./gulp-tasks');

/**
 * Prints this help text
 *
 * @task {help}
 * @group {Misc}
 */
gulp.task('help', () => usage(gulp, {
    logger: gutil,
    emptyLineBetweenTasks: false,
}));

gulp.task('default', gulp.series('convert'));

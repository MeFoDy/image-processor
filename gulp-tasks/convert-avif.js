const gulp = require('gulp');
const exec = require('gulp-exec');

const config = require('./config');

/**
 * Convert jpg and png to avif
 *
 * @task {convert:avif}
 * @group {Convert}
 */
gulp.task('convert:avif', () => {
    let src = `${config.base.dist}/**/*.{jpg,png}`;
    return gulp.src(src)
        .pipe(exec((file) =>
            // brew install joedrago/repo/avifenc
            `avifenc -c aom --min 20 --max 50 ${file.path} ${file.path.replace(/(png|jpg)$/ig, 'avif')}`
        ));
});

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminSvgo = require('imagemin-svgo');

const config = require('./config');

/**
 * Optimize svg using svgo
 *
 * @task {optimize:svg}
 * @group {Optimize}
 */
gulp.task('optimize:svg', () => {
    let src = `${config.base.src}/**/*.svg`;
    let dest = `${config.base.dist}`;
    return gulp.src(src)
        .pipe(imagemin([
             imageminSvgo({
                 convertColors: true,
             })]))
        .pipe(gulp.dest(dest))
});

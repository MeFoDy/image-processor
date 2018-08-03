const gulp = require("gulp");
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');

const config = require('./config');

/**
 * Optimize png using pngquant
 *
 * @task {optimize:png}
 * @group {Optimize}
 */
gulp.task('optimize:png', () => {
    let src = `${config.base.dist}/**/*.png`;
    let dest = `${config.base.dist}`;
    return gulp
        .src(src)
        .pipe(imagemin([imageminPngquant({ quality: 85 })]))
        .pipe(gulp.dest(dest));
});

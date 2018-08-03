const gulp = require("gulp");
const imagemin = require('gulp-imagemin');
const imageminGuetzli = require('imagemin-guetzli');

const config = require('./config');

/**
 * Optimize jpeg using guetzli
 *
 * @task {optimize:guetzli}
 * @group {Optimize}
 */
gulp.task('optimize:guetzli', () => {
    let src = `${config.base.dist}/**/*.jpg`;
    let dest = `${config.base.dist}`;
    return gulp
        .src(src)
        .pipe(imagemin([imageminGuetzli({ quality: 85 })]))
        .pipe(gulp.dest(dest));
});

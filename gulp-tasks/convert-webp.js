const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const webp = require("imagemin-webp");
const extReplace = require("gulp-ext-replace");

const config = require('./config');

/**
 * Convert jpg and png to webp
 *
 * @task {convert:webp}
 * @group {Convert}
 */
gulp.task('convert:webp', () => {
    let src = `${config.base.dist}/**/*.{jpg,png}`;
    let dest = `${config.base.dist}`;
    return gulp.src(src)
        .pipe(imagemin([
            webp({
                quality: 90
            })
        ]))
        .pipe(extReplace('.webp'))
        .pipe(gulp.dest(dest));
});

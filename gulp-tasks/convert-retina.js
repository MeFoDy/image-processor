const gulp = require("gulp");
const responsive = require('gulp-responsive');

const config = require('./config');

/**
 * Convert jpg and png to @2x and @1x sizes
 *
 * @task {convert:retina}
 * @group {Convert}
 */
gulp.task('convert:retina', () => {
    let src = `${config.base.src}/**/*.{jpg,png}`;
    let dest = `${config.base.dist}`;
    return gulp.src(src)
        .pipe(responsive(
            {
                'photos/*': [{
                    width: 600,
                    rename: {
                        suffix: '@2x',
                    },
                }, {
                    width: 300,
                    rename: {
                        suffix: '@1x',
                    },
                }]
            },
            {
                withMetadata: false,
                withoutEnlargement: true,
                errorOnEnlargement: false,
                errorOnUnusedImage: false,
                quality: 100,
            }
        ))
        .pipe(gulp.dest(dest));
});

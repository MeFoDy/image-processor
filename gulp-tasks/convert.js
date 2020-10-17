const gulp = require('gulp');
require('./clean');
require('./optimize-guetzli');
require('./optimize-png');
require('./optimize-svg');
require('./convert-webp');
require('./convert-retina');

/**
 * Convert all images
 *
 * @task {convert}
 * @group {Convert}
 * @order {0}
 */
gulp.task('convert', gulp.series(
    'clean',
    'convert:retina',
    'convert:webp',
    'convert:avif',
    gulp.parallel('optimize:guetzli', 'optimize:png', 'optimize:svg'),
));

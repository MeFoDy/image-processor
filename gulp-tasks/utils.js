const notify = require('gulp-notify');

function notifyError(title) {
    return notify.onError({
        title: title,
        subtitle: '<%= error.relativePath %>:<%= error.line %>',
        message: '<%= error.messageOriginal %>',
        open: 'file://<%= error.file %>',
        onLast: true,
    });
}

module.exports = {
    notifyError,
};

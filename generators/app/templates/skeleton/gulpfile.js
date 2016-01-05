var gulp = require('gulp');
var server = require('gulp-express');

gulp.task('serve', function () {
    // Start the server at the beginning of the task
    server.run(['index.js']);

    gulp.watch(['public/**.*'], server.notify);
});

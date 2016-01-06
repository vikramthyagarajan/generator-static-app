var gulp = require('gulp');
var server = require('gulp-express');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var htmlSrc = require('gulp-html-src');
var uglify = require('gulp-uglify');
var merge = require('merge-stream');
var minifyCss = require('gulp-minify-css');
var htmlreplace = require('gulp-html-replace');

gulp.task('serve', function () {
  // Start the server at the beginning of the task
  server.run(['index.js']);

  gulp.watch(['public/**/*.*'], server.notify);
});

gulp.task('clean', function() {
  return gulp.src('dist', {read: false})
    .pipe(clean());
});

gulp.task('compress', function() {
  var jsStream = gulp.src('public/**/*.html')
                                      .pipe(htmlSrc())
                                      .pipe(concat('app.min.js'))
                                      .pipe(uglify())
                                      .pipe(gulp.dest('dist/'));
  var cssStream = gulp.src('public/**/*.html')
                                      .pipe(htmlSrc({presets: 'css'}))
                                      .pipe(concat('app.min.css'))
                                      .pipe(minifyCss())
                                      .pipe(gulp.dest('dist/'));
  return merge(jsStream, cssStream);
});

//copies everything that's not a js and css file to the dist folder. Copy depends on clean to get done before it starts the copy operation
gulp.task('copy', ['clean'], function() {
  return gulp.src(['public/**/**.*', '!public/**/**.js', '!public/**/**.css'])
    .pipe(gulp.dest('dist/'));
})

gulp.task('build', ['clean', 'compress', 'copy'], function() {
  gulp.src('dist/**/*.html')
                     .pipe(htmlreplace({js: 'app.min.js', css: 'app.min.css'}))
                     .pipe(gulp.dest('dist/'));
});

var gulp = require('gulp');
var jshint = require('gulp-jshint');

var paths = {
  js: ['app/**/*.js', 'features/**/*.js', 'page-objects/**/*.js']
};

gulp.task('lint', function() {
    return gulp.src(paths.js)
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
    gulp.watch(paths.js, ['lint']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['lint', 'watch']);
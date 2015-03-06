// Note, fo a cross-platform way to kill node processes, needed to end the Gulp tasks
// if you want to use Gulp on your CI server, see
// http://krasimirtsonev.com/blog/article/Nodejs-managing-child-processes-starting-stopping-exec-spawn.

var exec = require('child_process').exec;

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
    gulp.watch(paths.js, ['lint', 'protractor']);
});
 
gulp.task('serve-app', function(cb) {
  exec('node server.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });
  // Callback synchronously because this task doesn't complete.
  cb();
});

gulp.task('start-webdriver', function(cb) {
  exec('node node_modules/protractor/bin/webdriver-manager start', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });
  // Callback synchronously because this task doesn't complete.
  cb();
});

gulp.task('protractor', ['serve-app', 'start-webdriver'], function(cb) {
  exec('node node_modules/protractor/bin/protractor ./protractor-conf.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['lint', 'protractor', 'watch']);



var gulp = require('gulp');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var gutil = require('gulp-util');
var path = require('path');

// LESS path
var lesspath = 'less/main.less';

// Compiles just the JS scripts
gulp.task('js',['coffee','vendor'],function() {
  console.log("JS Ready");
});

// I prefer to have a production task to run when I am ready to
// compile for production
gulp.task('production',['coffee','vendor','less'],function() {
  console.log("Ready for production");
});

// Gulp LESS task that compiles the less and saves to the destination path of ./styles
gulp.task('less',function() {
  gulp.src(lesspath)
  .pipe(less({
    paths : [path.join(__dirname, 'less','includes')]
  }))
  .pipe(gulp.dest('./styles'))
  .on('error',gutil.log);
});

// Gulp vendor task. Puts all vendor scripts into one file
gulp.task('vendor',function() {
  return gulp.src('vendor/*.js')
  .pipe(concat('vendor.js'))
  .pipe(uglify())
  .pipe(gulp.dest('build/vendor.js'))
  .on('error',gutil.log);
});

// Gulp coffee task
gulp.task('coffee',function() {
  return gulp.src('coffee/main.coffee')
  .pipe(coffee({bare:true})).on('error',gutil.log)
  .pipe(gulp.dest('js/main.js'))
  .on('error',gutil.log);
});

// Task to watch all the things that need to be watched.
// Can be extended to watch coffeescript changing etc.
gulp.task('watch',function() {
  gulp.watch(lesspath,['less']);
});

gulp.task('default',['watch']);

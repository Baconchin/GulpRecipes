var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');

var watcher = gulp.watch('html/less/styles.less');

watcher.on('change',function(event) {
	// get the less file src. 
	// Event.path is the path to the file that has changed. so
	gulp.src(event.path)
	.pipe(less({
		paths:[path.join(__dirname,'less','includes')]
	}))
	.pipe(gulp.dest('html/css'));

});

var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var libsass = require('gulp-sass');
var csso = require('gulp-csso');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
//var imagemin = require('gulp-imagemin');

/*
//Optimize images
gulp.task('optimg', function(){
    gulp.src('pre-img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('img'))
});
*/

/*
//Minify and concatenate scripts
gulp.task('scripts', function(){
  gulp.src(['js/pc_functions1.j', 'js/pc_functions2.js', 'js/pc_functions3.js', 'js/pc_functions4.js'])
  .pipe(concat('custom.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./'));
});

*/

gulp.task('styles', function() {
  return gulp.src('scss/custom.scss')
  .pipe(libsass({outputStyle:'expanded'}).on('error', libsass.logError))
  .pipe(autoprefixer({browsers: ['last 10 versions'], cascade: false }))
  .pipe(csso())
  .pipe(gulp.dest('css'))
  .pipe(browserSync.stream());
});

//Start browser sync
gulp.task('browser-sync', ['styles'], function() {
    browserSync.init({
        proxy: 'http://localhost/lovejeans'
    });
});

//Gulp watch scss files for change
gulp.task('watch', function(){
	gulp.watch(['scss/**/**/*.scss'], ['styles']);
});

gulp.task('default', ['browser-sync', 'watch']);

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-css');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');

gulp.task('css', function(){
  return gulp.src('assets/scss/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('static/css'))
});

gulp.task('watch', function(){
    gulp.watch('assets/scss/**/*.scss', ['css'])
  })

gulp.task('js', function(){
  return gulp.src('assets/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('static/js'))
});

// Gulp watch syntax
gulp.watch('app/scss/**/*.scss', ['css']); 

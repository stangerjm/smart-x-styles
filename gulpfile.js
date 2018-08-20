let gulp = require('gulp');

let sass = require('gulp-sass');
let beautify = require('gulp-jsbeautifier');
let clean = require('gulp-clean-css');
let rename = require('gulp-rename');

//Compile all SASS and output the result to style.css
gulp.task('sass', function () {
  let cssPath = './dist';
  return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(beautify())
    .pipe(rename({
      basename: 'styles'
    }))
    .pipe(gulp.dest(cssPath))
    .pipe(clean({compatibility: 'ie8'}))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(cssPath))
});
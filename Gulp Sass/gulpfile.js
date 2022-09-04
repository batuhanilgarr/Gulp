const gulp = require('gulp')
const concat = require('gulp-concat')
const minifyCSS = require('gulp-minify-css')
const autoprefixer = require('gulp-autoprefixer')
const uglify = require('gulp-uglify')
const sass = require('gulp-sass')(require('sass'))
const rename = require('gulp-rename')




// Let create another task to copy the html files to the dist folder
gulp.task('taskHTML', function() {
 return gulp.src('./dev/index.html')
 .pipe(gulp.dest('./dist/'))
})



//Process CSS
gulp.task('taskCSS', async () => {
  return gulp
    .src('./dev/scss/main.scss')
    .pipe(sass({ outputStyled: 'expanded' }))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(rename('dist.main.css'))
    .pipe(gulp.dest('./dist/css/'))
})

//Process JS
gulp.task('taskJS', async function () {
  return gulp
    .src('./dev/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'))
})

//Watch
gulp.task('watch', async function () {
  gulp.watch('./dev/scss/**/*.scss', gulp.series('taskCSS'))
  gulp.watch('./dev/js/**/*.js', gulp.series('taskJS'))
  gulp.watch('./dev/index.html', gulp.series('taskHTML'))
})

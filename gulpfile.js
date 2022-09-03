
//installation
//npm install gulp gulp-sass sass gulp-clean-css gulp-autoprefixer gulp-terser





const {src, dest, series, watch} = require('gulp');

//styles
const scss = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssMinify = require('gulp-clean-css');




function styles(){
 return src('./frontend/src/styles/**/*.scss')
         .pipe(scss())
         .pipe(autoprefixer('last 2 versions'))
         .pipe(cssMinify())
         .pipe(dest('./frontend/dist/styles/'));
}




//scripts
const jsMiniy = require('gulp-terser');

function scripts(){
 return src('./frontend/src/scripts/**/*.js')
         .pipe(jsMiniy())
         .pipe(dest('./frontend/dist/scripts/'));  
}


//watchtask

function watchTask(){
 watch(
  ['frontend/src/styles/**/*.scss', 'frontend/src/scripts/**/*.js'],
  series(styles, scripts)
 )
}



exports.default = series (styles, scripts, watchTask);
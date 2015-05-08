var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    notify = require('gulp-notify');

gulp.task('scss', function() {
    return gulp.src('assets/scss/typestylist.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(minifycss())
        .pipe(gulp.dest('css'))
        .pipe(notify({ message: 'SCSS files processed' }));
});

gulp.task('js', function() {
    return gulp.src('assets/js/typestylist.js')
        .pipe(uglify())
        .pipe(gulp.dest('js'))
        .pipe(notify({ message: 'JS files processed' }));
});

gulp.task('default', ['scss', 'js']);
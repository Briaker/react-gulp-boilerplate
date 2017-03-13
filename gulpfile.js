const gulp          = require('gulp');
const sass          = require('gulp-sass');
const concat        = require('gulp-concat');
const autoprefixer  = require('gulp-autoprefixer');
const notify        = require('gulp-notify');
const plumber       = require('gulp-plumber');
const browserSync   = require('browser-sync').create();

const babelify      = require('babelify');
const browserify    = require('browserify');
const buffer        = require('vinyl-buffer');
const source        = require('vinyl-source-stream');

const reload        = browserSync.reload;

gulp.task('browser-sync', () => {
    browserSync.init({
        server: './dist'
    })
});

gulp.task('html', () => {
    return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist/'))
    .pipe(reload({stream: true}));
});

gulp.task('styles', () => {
    return gulp.src('./src/assets/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('./dist/assets/styles/'))
    .pipe(reload({stream: true}));
});

gulp.task('es6', () => {
    return browserify('./src/app.js')
    .transform('babelify', {
        presets: ['es2015', 'react']
    })
    .bundle()
    .on('error',notify.onError({
        message: "Error: <%= error.message %>",
        title: 'Error in JS 💀'
    }))
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/assets/js'))
    .pipe(reload({stream: true}));
});

gulp.task('watch', () => {
    gulp.watch('./src/assets/styles/**/*.scss', ['styles']);
    gulp.watch('./src/app.js', ['es6']);
    gulp.watch('./dist/*.html', reload);
});

gulp.task('build', ['html', 'styles', 'es6']);

gulp.task('default', ['html', 'styles', 'es6', 'browser-sync', 'watch']);

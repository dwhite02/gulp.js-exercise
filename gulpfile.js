const gulp = require('gulp');
const {series} = require ('gulp');
const { parallel } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const browserSync =  require('browser-sync').create()



function scss() {
    return gulp.src('app/scss/main.scss')
        .pipe(sass().on('error', sass.logError)) 
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
};

function images() {
    return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
        .pipe(browserSync.stream());
};

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })

    gulp.watch('app/scss/**/*.scss', scss); 
    gulp.watch(['app/images/**/*.png', 'app/images/**/*.svg' ]).on('add', images); 
    gulp.watch('./*.html').on('change', browserSync.reload); 
    gulp.watch('app/*.js').on('change', browserSync.reload); 
};

exports.default = series(
    parallel(scss, images),
    watch);

/* gulp.task('sass', function () {
    return gulp.src('app/scss/main.scss')
        .pipe(sass()) 
        .pipe(gulp.dest('app/css'))
}); */

//gulp.watch('app/scss/**/*.scss', ['sass']); 
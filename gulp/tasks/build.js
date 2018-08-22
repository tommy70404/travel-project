var gulp = require('gulp'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
imagemin = require('gulp-imagemin'),
browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
    browserSync.init({
        notify: false,
        server: {
           baseDir: "docs"
       } 
    });
})

gulp.task('deleteDistFolder', ['icons'], function() {
    return del('./docs');
})

gulp.task('copyGeneralFile', ['deleteDistFolder'], function() {
    var pathToCopy = [
        './app/**/*',
        '!./app/index/index.html',
        '!./app/assets/images/**',
        '!./app/assets/scripts/**',
        '!./app/assets/styles/**',
        '!./app/temp/**',
        '!./app/temp'
    ];


    return gulp.src(pathToCopy)
        .pipe(gulp.dest('./docs'));
})

gulp.task('optimizeImage', ['deleteDistFolder'], function() {
    return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
        .pipe(imagemin({
            progressive: true,
            interlaced: true,
            multipass: true,
        }))
        .pipe(gulp.dest('./docs/assets/images'))
})

gulp.task('useminTrigger', function() {
    gulp.start('usemin')
})

gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], function() {
    return gulp.src('./app/index.html')
        .pipe(usemin({
            css: [function() {return rev()}, function() {return cssnano()}],
            js: [function() {return rev()}, function() {return uglify()}]
        }))
        .pipe(gulp.dest('./docs'))
})


gulp.task('build',['deleteDistFolder', 'copyGeneralFile','optimizeImage', 'useminTrigger']);
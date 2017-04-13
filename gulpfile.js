<<<<<<< HEAD
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('default', () =>
    gulp.src('./img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./img'))
);
||||||| merged common ancestors
=======
// var gulp = require('gulp'),
//     sass = require('gulp-ruby-sass'),
//     autoprefixer = require('gulp-autoprefixer'),
//     cssnano = require('gulp-cssnano'),
//     jshint = require('gulp-jshint'),
//     uglify = require('gulp-uglify'),
//     imagemin = require('gulp-imagemin'),
//     rename = require('gulp-rename'),
//     concat = require('gulp-concat'),
//     notify = require('gulp-notify'),
//     cache = require('gulp-cache'),
//     livereload = require('gulp-livereload'),
//     del = require('del');
//
// gulp.task('default', function() {
//   // 将你的默认的任务代码放在这
// });

// 引入 gulp
var gulp = require('gulp');

// 引入组件
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// 检查脚本
gulp.task('lint', function() {
    gulp.src('./js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// 编译Sass
gulp.task('sass', function() {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

// 合并，压缩文件
gulp.task('scripts', function() {
    gulp.src('./js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

// 默认任务
gulp.task('default', function(){
    gulp.run('lint', 'sass', 'scripts');

    // 监听文件变化
    gulp.watch('./js/*.js', function(){
        gulp.run('lint', 'sass', 'scripts');
    });
});
>>>>>>> origin/master

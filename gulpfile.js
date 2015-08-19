var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');

gulp.task('styles', function () {
    gulp.src('public/style.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('public/build'));
});

gulp.task('lint', function () {
  gulp.src('./**/*.js')
    .pipe(jshint());
});

gulp.task('develop', function () {
  nodemon({ script: 'index.js',
            ext: 'html js css',
            ignore: ['ignored.js'],
            tasks: ['styles']
          })
    .on('restart', function () {
      console.log('restarted!');
    });
});

gulp.task('watch', function() {
  gulp.watch('public/style.css', ['styles']);
});

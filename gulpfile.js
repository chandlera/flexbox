var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {
    gulp.src('public/style.css')
        .pipe(autoprefixer())
        .pipe(gulp.dest('public/build'));
});

gulp.task('watch', function() {
  gulp.watch('public/style.css', ['styles']);
});

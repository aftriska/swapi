var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create(),
historyFallback = require('connect-history-api-fallback');

gulp.task('default', () => {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "app",
      middleware: [
        historyFallback()
      ]
    }
  });

  watch('./app/index.html', () => browserSync.reload());

  watch('./app/assets/styles/**/*.css', () => gulp.start('cssInject'));

  watch('./app/assets/scripts/**/*.js', () => gulp.start('scriptsRefresh'));
});

gulp.task('cssInject', ['styles'], () => {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], () => browserSync.reload());

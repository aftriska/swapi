var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin'),
rev = require('gulp-rev'),
cssnano = require('gulp-cssnano'),
uglify = require('gulp-uglify'),
browserSync = require('browser-sync').create(),
historyFallback = require('connect-history-api-fallback');

gulp.task('previewProd', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "docs",
      middleware: [
        historyFallback()
      ]
    }
  });
});

//MUST DELETE THE EXISTING DOCS FOLDER EVERYTIME BUILD RUNS
gulp.task('deleteDocsFolder', function() {
  return del("./docs");
});

// TO COPY OTHER necessary folder/files, for example for when we use wordpress.
gulp.task('copyGeneralFiles', ['deleteDocsFolder'], function() {
  var pathToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ]

  return gulp.src(pathToCopy)
    .pipe(gulp.dest("./docs"));
});

// TO OPTIMIZE IMAGES
gulp.task('optimizeImages', ['deleteDocsFolder'], function() {
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*',
  '!./app/assets/images/**/*-i.*'])
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      multipass: true
    }))
    .pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('useminTrigger', ['deleteDocsFolder'], function() {
  gulp.start('usemin');
});

// This will copy the index.html file and the compressed and revised css and js files.
gulp.task('usemin', ['styles', 'scripts'], function() {
  return gulp.src("./app/index.html")
    .pipe(usemin({
      css: [function() {return rev()}, function() {return cssnano()}],
      js: [function() {return rev()}, function() {return uglify()}]
    }))
    .pipe(gulp.dest("./docs"));
});

gulp.task('build', ['deleteDocsFolder', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);

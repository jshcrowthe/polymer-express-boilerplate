var gulp = require('gulp');
var COMPONENTS_DIR = './public/components';
var COMPONENT_DEST = './public/html';
var vulcanize = require('gulp-vulcanize');
var minifyHTML = require('gulp-minify-html');
var minify_CSS_JS = require('gulp-minify-inline');
var rename = require('gulp-rename');

gulp.task('x-app', function() {
  return gulp.src(COMPONENTS_DIR + '/x-app/x-app.html')
            .pipe(vulcanize({
              inline:true,
              dest: COMPONENT_DEST
            }))
            .pipe(minifyHTML())
            .pipe(minify_CSS_JS())
            .pipe(rename(function(path) {
              path.extname = '.min' + path.extname;
            }))
            .pipe(gulp.dest(COMPONENT_DEST));
});

gulp.task('build', ['x-app']);

gulp.task('default',['build'], function() {
  gulp.watch([COMPONENTS_DIR + '/*', COMPONENTS_DIR + '/**/*'], ['build']);
});
var gulp = require('gulp');
var COMPONENTS_DIR = './public/components';

gulp.task('build', []);

gulp.task('default', function() {
  gulp.watch(COMPONENTS_DIR, ['build']);
});
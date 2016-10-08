var wc = require('gulp-word-count');
var gulp = require('gulp');
 
 
gulp.task('default', ()=>{
  var today = new Date();
  var datetime = [today.getDate(), today.getMonth() + 1, today.getFullYear()].join('_');
  
  return gulp.src('../node_modules/**/README.md')
    .pipe(wc('wc_'+datetime+'.log'))
    .pipe(gulp.dest('../logs/'));
});
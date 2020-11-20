// function defaultTask(cb) {
//   // place code for your default task here
//   cb();
// }

// exports.default = defaultTask



// var pug = require('gulp-pug');
 
// gulp.task('views', function buildHTML() {
//   return gulp.src('views/*.pug')
//   .pipe(pug({
//     // Your options in here.
//   }))
// });



var gulp = require('gulp');
var pug = require('gulp-pug');

gulp.task('pug', function(){  
    gulp.src('./src/*.pug')
      .pipe(pug({
        pretty: true
      }))
    .pipe(gulp.dest('./dist'))

})

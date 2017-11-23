var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');


gulp.task('styles', function(){
  gulp.src('scss/main.scss')
  .pipe(sass())
  .on('error', function (err){
    console.log(err.message);
  })
  .pipe(autoprefixer({
    browsers: ['last 2 versions', '> 1%', '> 1% in PL']
  }))
  .pipe(cleanCss())
  .pipe(rename('main.min.css'))
  .pipe(gulp.dest('dist/css/'))
})


gulp.task('reload', function(){
  browserSync.reload();
})

gulp.task('serve', function(){
  browserSync({
    server: 'dist'
  });
});

gulp.task('watch', function(){
  gulp.watch('dist/*.html', ['reload']);
  gulp.watch('dist/css/*.css', ['reload']);
  gulp.watch('dist/js/*.js', ['reload']);
  gulp.watch('scss/**/*.scss', ['styles']);
})


gulp.task('default', ['styles', 'serve', 'watch']);

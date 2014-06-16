var sourceMaps = require('gulp-sourcemaps');
var less = require('gulp-less');
var gulp = require('gulp');
gulp.task('less', function() {
  return gulp.src('less/*.less')
    .pipe(less({
      sourceMap: true,
      sourceMapBasepath: process.cwd(),
      // this is the magic part
      // `convert-source-map` which is used by 
      // `gulp-sourcemaps` doesn't support `encodeURIComponent`-ed sourcemaps
      writeSourceMap: function(content) {
        this._css.push([
          '/*# sourceMappingURL=',
          'data:application/json;base64,',
          new Buffer(content).toString('base64')
        ].join(''));
      }
    }))
    .pipe(sourceMaps.init())
    // you could minify or concat (or you name it)
    .pipe(sourceMaps.write('.'))
    .pipe(gulp.dest('css'))
});
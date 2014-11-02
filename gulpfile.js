var gulp = require("gulp");
var ts = require("gulp-typescript");

gulp.task('compile', function()
{
	var result = gulp.src("./src/**/*.ts")
				 .pipe(ts({
				 	declarationFiles: false,
				 	noExternalResolve: false,
				 	module : 'commonjs',
				 	target : 'ES5'
				 }));

	 return result.js.pipe(gulp.dest('./'));
});

gulp.task('watch', ['compile'], function() {
    gulp.watch('src/*.ts', ['compile']);
});

gulp.task('default', ['compile'], function()
{

});
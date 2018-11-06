var gulp = require("gulp"),
watch = require("gulp-watch"),
browserSync = require("browser-sync").create();

gulp.task("watch", function(){

	browserSync.init({
		notify: false, // remove the annoying notificaition;
		server : {
			baseDir: "app"
		}
	});
	// first item is the file in our computer for saved changes.
	// second arguments is the function. 
	watch("./app/index.html", function(){
		browserSync.reload()
	});
	watch("./app/assets/styles/**/*.css", function(){
		gulp.start("cssInject");
	});
});

gulp.task("cssInject", ["styles"], function(){ 
//begin and complete the 'styles' running then run the cssInject
	return gulp.src("./app/temp/styles/styles.css")
	.pipe(browserSync.stream());
});
var jade = require('gulp-jade');

module.exports = function(gulp, callback) {
	return gulp.src(jadeSrc, { cwd: config.source.template + '/pages/starter-kit/' })
		.pipe(jade({
			pretty: true,
			data: {
                // debug: false,
                useLayout: myLayout, // Predefined layout name i.e vertical-light-sidebar
                useDirection: myTextDirection,
                rtl: rtl,
                app_assets_path : config.app_assets_path,
                assets_path : config.assets_path
            }
		}))
		.pipe(gulp.dest(config.starter_kit + '/' + myTextDirection + '/' + myLayoutName));
};
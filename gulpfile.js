import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass  from 'sass'
import imagemin from 'gulp-imagemin';
const sass = gulpSass(dartSass)

// Compile Sass
gulp.task('sass', function(){
    gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

// Optimize Images
gulp.task('imageMin', () =>
	gulp.src('./images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);


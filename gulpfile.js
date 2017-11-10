var gulp = require('gulp'), // Подключаем Gulp
  sass = require('gulp-sass'); // Подключаем Sass пакет
autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов
gulp.task('sass', function() { // Создаем таск "sass"
  return gulp.src(['sass/**/*.sass', 'sass/**/*.scss']) // Берем источник
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Соз
    .pipe(gulp.dest('css')) // Выгружаем результата в папку css
});
gulp.task('watch', function() {
  gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']); // Наблюдение за sass файлами в папке sass
});
gulp.task('default', ['watch']);
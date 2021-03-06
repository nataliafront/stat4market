const {
		dest, src, watch, series, parallel, task,
	} = require('gulp'),
	svgSprite = require('gulp-svg-sprite'),
	svgmin = require('gulp-svgmin'),
	cheerio = require('gulp-cheerio'),
	replace = require('gulp-replace');

module.exports = task('sprites', () => src('src/images/svg/*.svg')
	.pipe(dest('./build/images/svg/icons'))
	// сжатие svg
	.pipe(svgmin({
		js2svg: {
			pretty: true,
		},
	}))
	// удаление ненужных атрибутов
	.pipe(cheerio({
		run($) {
			$('[fill]').removeAttr('fill');
			$('[stroke]').removeAttr('stroke');
			$('[style]').removeAttr('style');
		},
		parserOptions: { xmlMode: true },
	}))
	// предотвращение замены символа в кодировку
	.pipe(replace('&gt;', '>'))
	// создание спрайта
	.pipe(svgSprite({
		mode: {
			symbol: {
				sprite: 'sprite.svg',
			},
		},
	}))
	.pipe(dest('./build/images/svg/sprite')));
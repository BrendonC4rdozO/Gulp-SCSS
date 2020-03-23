const { dest, src, watch } = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
sass.compiler = require('node-sass');

const SASSProcess = (cb) => {
    src('./scss/global.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(dest('./build'));
    cb();
};

const SASSWatch = (cb) => {
    watch([
        './scss/global.scss',
        './scss/import/*.scss'
    ], SASSProcess);

    cb();
};

exports.sass_w = SASSWatch;
exports.sass = SASSProcess;
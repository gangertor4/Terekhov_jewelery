const gulp = require('gulp');
const sass = require("gulp-sass")(require("sass"));
const browserSync = require('browser-sync').create();
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const concat = require("gulp-concat");

const stylesMin = () => {
  return gulp.src("sass/style.scss")
    .pipe(sass())
    .pipe(postcss([
      autoprefixer(),
    ]))
    .pipe(gulp.dest("css"))
    .pipe(browserSync.stream());
};

const server = (done) => {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "main.html"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

const reload = done => {
  browserSync.reload();
  done();
}

// const html = () => {
//   return gulp.src("*.html")
//     .pipe(gulp.dest("./"));
// }

const concatJsript = () => {
  return gulp.src("js/modules/*.js")
    .pipe(concat("script.js"))
    .pipe(gulp.dest("js"));
}

exports.concatJsript = concatJsript;

const concatJsvendor = () => {
  return gulp.src("js/vendor/*.js")
  .pipe(concat("vendor.js"))
  .pipe(gulp.dest("js"));
}

exports.concatJsvendor = concatJsvendor;

const watcher = () => {
  gulp.watch("sass/**/*.scss", gulp.series(stylesMin));
  gulp.watch("js/**/*.js", gulp.series(concatJsript, concatJsvendor, reload));
  gulp.watch("*.html").on("change", browserSync.reload);
}

exports.default = gulp.series(
  server,
  watcher,
  );


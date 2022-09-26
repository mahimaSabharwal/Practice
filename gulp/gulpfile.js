const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
var uglifycss = require("gulp-uglifycss");

gulp.task("buildStyles", function () {
  return gulp
    .src("./sass/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task("css", function () {
  return gulp
    .src("./css/*.css")
    .pipe(
      uglifycss({
        maxLineLen: 0,
        uglyComments: true,
      })
    )
    .pipe(gulp.dest("./dist/"));
});

gulp.task("run", () => {
  return ["buildStyles", "css"];
});

gulp.task("watch", function () {
  gulp.watch("./sass/*.scss", ["buildStyles"]);
  gulp.watch("./css/*.css", ["css"]);
});

gulp.task("default", () => {
  return ["run", "watch"];
});

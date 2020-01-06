const gulp = require("gulp");
const { series } = require("gulp");
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const clean = require("gulp-clean");

function cleanDest() {
  return gulp.src("dist/*", { read: false }).pipe(clean());
}

function copyAssets() {
  return gulp.src(["src/assets/**/*"]).pipe(gulp.dest("dist/assets"));
}

function copyExtra() {
  return gulp
    .src([
      "src/favicon.ico",
      "src/manifest.json",
      "src/robots.txt",
      "netlify.toml",
      "_redirects"
    ])
    .pipe(gulp.dest("dist/"));
}

function copyImages() {
  return gulp
    .src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"));
}

function minHtml() {
  return gulp
    .src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist"));
}

exports.build = series(cleanDest, copyExtra, copyAssets, copyImages, minHtml);

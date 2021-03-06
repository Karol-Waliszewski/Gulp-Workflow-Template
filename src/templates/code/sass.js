var cssDev = () => {
  return gulp
    .src(`${srcDir}/styles/**/*.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(sourcemaps.write(`./maps`))
    .pipe(gulp.dest(`${distDir}/styles`))
    .pipe(browserSync.stream());
};

var cssBuild = () => {
  return gulp
    .src(`${srcDir}/styles/**/*.scss`)
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(
      purify([`${srcDir}/js/**/*.js`, `${srcDir}/**/*.html`], {
        minify: true
      })
    )
    .pipe(gulp.dest(`${distDir}/styles`))
    .pipe(browserSync.stream());
};

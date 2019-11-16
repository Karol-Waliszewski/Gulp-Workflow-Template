const fs = require("fs");
const path = require("path");

const MODULE = {
  require: "",
  watch: "gulp.watch(`${srcDir}/scss/**/*.css`, cssDev);",
  code: fs.readFileSync(path.join(__dirname, "../code/sass.js"), "utf8")
};

module.exports = MODULE;

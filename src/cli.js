// Modules
const inquirer = require("./inquirer");
const args = require("./arguments");
const builder = require("./builder");
const { install } = require("pkg-install");

// (async () => {
//   const { stdout } = await install(
//     {
//       sass: undefined
//     },
//     {
//       dev: true,
//       prefer: "npm"
//     }
//   );
//   console.log(stdout);
// })();

const init = function() {
  inquirer().then(answers => {
    builder.build();
    // If project's name has been chosen by shortcut
    if (!("project_name" in answers)) {
      answers.project_name = args.getProjectName();
    }

    console.log(answers);

    builder.build();
  });
};

module.exports = {
  init
};

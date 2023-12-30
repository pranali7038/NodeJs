//const chalk = require("chalk");
//console.log(chalk.blue.italic("first chalk program!!"));

const { default: chalk } = require("chalk");
const validator = require("validator");
const res = validator.isEmail("jahagirdarpranali3409@gmail.com");
console.log(res);
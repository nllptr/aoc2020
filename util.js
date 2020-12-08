const fs = require("fs");

exports.loadInputNumbers = (path) => {
  return fs
    .readFileSync(path, "utf8")
    .split("\n")
    .map((item) => {
      return Number(item);
    });
};

exports.loadInputStrings = (path) => {
  return fs.readFileSync(path, "utf8").split("\n");
};

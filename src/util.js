const fs = require("fs");
const path = require("path");

exports.loadInput = (filePath) => {
  return fs.readFileSync(path.resolve(__dirname, filePath), "utf8");
};

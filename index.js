const { loadInputNumbers, loadInputStrings } = require("./util");
const { findMatch2, findMatch3 } = require("./day1/puzzle");
const { validator, rule2 } = require("./day2/puzzle");

let input = loadInputNumbers("./day1/input.txt");
match2 = findMatch2(input, 2020);
console.log(match2[0] * match2[1]);

match3 = findMatch3(input, 2020);
console.log(match3[0] * match3[1] * match3[2]);

input = loadInputStrings("./day2/input.txt");
console.log(validator(input));
console.log(validator(input, rule2));

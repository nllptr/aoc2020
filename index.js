const {
  loadInputNumbers,
  loadInputStrings,
  loadInputSingleString,
} = require("./util");
const { findMatch2, findMatch3 } = require("./day1/puzzle");
const { validator, rule2 } = require("./day2/puzzle");
const { newSlope, readMap, run, runMany } = require("./day3/puzzle");
const day4 = require("./day4/puzzle");

let input = loadInputNumbers("./day1/input.txt");
match2 = findMatch2(input, 2020);
console.log(match2[0] * match2[1]);
match3 = findMatch3(input, 2020);
console.log(match3[0] * match3[1] * match3[2]);

input = loadInputStrings("./day2/input.txt");
console.log(validator(input));
console.log(validator(input, rule2));

input = loadInputSingleString("./day3/input.txt");
console.log(run(readMap(input), newSlope(3, 1)));
console.log(
  runMany(readMap(input), [
    newSlope(1, 1),
    newSlope(3, 1),
    newSlope(5, 1),
    newSlope(7, 1),
    newSlope(1, 2),
  ]).reduce((product, factor) => product * factor, 1)
);

input = loadInputSingleString("./day4/input.txt");
console.log(day4.processBatch(day4.newValidator(day4.rule), input));

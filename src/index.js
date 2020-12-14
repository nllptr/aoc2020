const { loadInput } = require("./util");
const day1 = require("./day1/puzzle");
const day2 = require("./day2/puzzle");
const day3 = require("./day3/puzzle");
const day4 = require("./day4/puzzle");
const day5 = require("./day5/puzzle");
const day6 = require("./day6/puzzle");

let input = loadInput("./day1/input.txt");
let run = day1.runner();
console.log(run(input));
run = day1.runner(day1.matchThree);
console.log(run(input));

input = loadInput("./day2/input.txt");
let validate = day2.validator();
console.log(validate(input));
validate = day2.validator(day2.rule2);
console.log(validate(input));

input = loadInput("./day3/input.txt");
console.log(day3.runPart1(input));
console.log(day3.runPart2(input));

input = loadInput("./day4/input.txt");
console.log(day4.runPart1(input));
console.log(day4.runPart2(input));

input = loadInput("./day5/input.txt");
console.log(day5.runPart1(input));
console.log(day5.runPart2(input));

input = loadInput("./day6/input.txt");
console.log(day6.runPart1(input));
console.log(day6.runPart2(input));

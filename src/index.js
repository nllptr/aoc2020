const { loadInput } = require("./util");
const day1 = require("./day1/puzzle");
const day2 = require("./day2/puzzle");
const day3 = require("./day3/puzzle");
const day4 = require("./day4/puzzle");
const day5 = require("./day5/puzzle");

let input = loadInput("./day1/input.txt");
console.log(day1.runPart1(input));
console.log(day1.runPart2(input));

input = loadInput("./day2/input.txt");
console.log(day2.runPart1(input));
console.log(day2.runPart2(input));

input = loadInput("./day3/input.txt");
console.log(day3.runPart1(input));
console.log(day3.runPart2(input));

input = loadInput("./day4/input.txt");
console.log(day4.runPart1(input));
console.log(day4.runPart2(input));

input = loadInput("./day5/input.txt");
console.log(day5.findHighestId(input));
console.log(day5.findMySpot(input));

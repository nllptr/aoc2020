const {
  hasTree,
  isDone,
  newSlope,
  readMap,
  run,
  runMany,
} = require("./puzzle");

const mapString = `
..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`;

test("readMap", () => {
  const map = readMap(mapString);
  expect(map.height).toBe(11);
  expect(map.width).toBe(11);
  expect(map.position.x).toBe(0);
  expect(map.position.y).toBe(0);
});

test("newSlope", () => {
  let map = readMap(mapString);
  const slope = newSlope(3, 1);
  map = slope(map);
  expect(map.position.x).toBe(3);
  expect(map.position.y).toBe(1);
});

test("hasTree", () => {
  let map = readMap(mapString);
  const slope = newSlope(3, 1);
  map = slope(map);
  expect(hasTree(map)).toBe(false);
  map = slope(map);
  expect(hasTree(map)).toBe(true);
});

test("isDone", () => {
  let map = readMap(mapString);
  const slope = newSlope(0, 10);
  map = slope(map);
  expect(isDone(map)).toBe(false);
  map = slope(map);
  expect(isDone(map)).toBe(true);
});

test("run", () => {
  const map = readMap(mapString);
  const slope = newSlope(3, 1);
  expect(run(map, slope)).toBe(7);
});

test("runMany and multiply", () => {
  const map = readMap(mapString);
  const slopes = [
    newSlope(1, 1),
    newSlope(3, 1),
    newSlope(5, 1),
    newSlope(7, 1),
    newSlope(1, 2),
  ];
  expect(
    runMany(map, slopes).reduce((product, factor) => product * factor, 1)
  ).toBe(336);
});

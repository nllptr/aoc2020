const { findMatch2, findMatch3 } = require("./puzzle");

test("findMatch2", () => {
  expect(findMatch2([1, 2, 3], 5)).toStrictEqual([2, 3]);
});

test("AoC test case", () => {
  actual = findMatch2([1721, 979, 366, 299, 675, 1456], 2020);
  expect(actual).toContain(299);
  expect(actual).toContain(1721);
  expect(actual.length).toBe(2);
});

test("findMatch3", () => {
  expect(findMatch3([1721, 979, 366, 299, 675, 1456], 2020)).toStrictEqual([
    979,
    366,
    675,
  ]);
});

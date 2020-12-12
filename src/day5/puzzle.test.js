const { binaryPartitioner, decoder } = require("./puzzle");

test("binaryPartitioner", () => {
  expect(binaryPartitioner(0, 127, "F")).toStrictEqual([0, 63]);
  expect(binaryPartitioner(0, 63, "B")).toStrictEqual([32, 63]);
  expect(binaryPartitioner(32, 63, "F")).toStrictEqual([32, 47]);
  expect(binaryPartitioner(32, 47, "B")).toStrictEqual([40, 47]);
  expect(binaryPartitioner(40, 47, "B")).toStrictEqual([44, 47]);
  expect(binaryPartitioner(44, 47, "F")).toStrictEqual([44, 45]);
  expect(binaryPartitioner(44, 45, "F")).toStrictEqual(44);

  expect(binaryPartitioner(0, 7, "R")).toStrictEqual([4, 7]);
  expect(binaryPartitioner(4, 7, "L")).toStrictEqual([4, 5]);
  expect(binaryPartitioner(4, 5, "R")).toStrictEqual(5);
});

test("decoder", () => {
  expect(decoder("FBFBBFFRLR")).toBe(357);
  expect(decoder("BFFFBBFRRR")).toBe(567);
  expect(decoder("FFFBBBFRRR")).toBe(119);
  expect(decoder("BBFFBBFRLL")).toBe(820);
});

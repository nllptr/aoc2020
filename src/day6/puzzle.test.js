const { countGroup, runPart1, runPart2 } = require("./puzzle");

test("countGroup", () => {
  const input = `
abcx
abcy
abcz`;
  expect(countGroup(input)).toBe(6);
});

test("sumGroups", () => {
  const input = `
abc

a
b
c

ab
ac

a
a
a
a

b`;
  expect(runPart1(input)).toBe(11);
});

test("sumGroupsAllYes", () => {
  const input = `
abc

a
b
c

ab
ac

a
a
a
a

b`;
  expect(runPart2(input)).toBe(6);
});

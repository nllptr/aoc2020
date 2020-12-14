const {
  lineMapper,
  mapper,
  defaultRule,
  rule2,
  validator,
} = require("./puzzle");

test("lineMapper", () => {
  expect(lineMapper("1-3 a: abcde")).toStrictEqual({
    num1: 1,
    num2: 3,
    letter: "a",
    password: "abcde",
  });
  expect(lineMapper("1-3 b: cdefg")).toStrictEqual({
    num1: 1,
    num2: 3,
    letter: "b",
    password: "cdefg",
  });
  expect(lineMapper("2-9 c: ccccccccc")).toStrictEqual({
    num1: 2,
    num2: 9,
    letter: "c",
    password: "ccccccccc",
  });
});

test("mapper", () => {
  const input = `
1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;

  expect(mapper(input)).toStrictEqual([
    {
      num1: 1,
      num2: 3,
      letter: "a",
      password: "abcde",
    },
    {
      num1: 1,
      num2: 3,
      letter: "b",
      password: "cdefg",
    },
    {
      num1: 2,
      num2: 9,
      letter: "c",
      password: "ccccccccc",
    },
  ]);
});

test("rule", () => {
  expect(defaultRule(lineMapper("1-3 a: abcde"))).toBe(true);
  expect(defaultRule(lineMapper("1-3 b: cdefg"))).toBe(false);
  expect(defaultRule(lineMapper("2-9 c: ccccccccc"))).toBe(true);
});

test("rule2", () => {
  expect(rule2(lineMapper("1-3 a: abcde"))).toBe(true);
  expect(rule2(lineMapper("1-3 b: cdefg"))).toBe(false);
  expect(rule2(lineMapper("2-9 c: ccccccccc"))).toBe(false);
});

test("validator", () => {
  expect(validator()("1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc")).toBe(2);
});

test("validator with new rule", () => {
  expect(validator(rule2)("1-3 a: abcde\n1-3 b: cdefg\n2-9 c: ccccccccc")).toBe(
    1
  );
});

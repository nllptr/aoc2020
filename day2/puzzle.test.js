const { mapper, rule, rule2, validator } = require("./puzzle");

test("mapper", () => {
  expect(mapper("1-3 a: abcde")).toStrictEqual({
    num1: 1,
    num2: 3,
    letter: "a",
    password: "abcde",
  });
  expect(mapper("1-3 b: cdefg")).toStrictEqual({
    num1: 1,
    num2: 3,
    letter: "b",
    password: "cdefg",
  });
  expect(mapper("2-9 c: ccccccccc")).toStrictEqual({
    num1: 2,
    num2: 9,
    letter: "c",
    password: "ccccccccc",
  });
});

test("rule", () => {
  expect(rule(mapper("1-3 a: abcde"))).toBe(true);
  expect(rule(mapper("1-3 b: cdefg"))).toBe(false);
  expect(rule(mapper("2-9 c: ccccccccc"))).toBe(true);
});

test("rule2", () => {
  expect(rule2(mapper("1-3 a: abcde"))).toBe(true);
  expect(rule2(mapper("1-3 b: cdefg"))).toBe(false);
  expect(rule2(mapper("2-9 c: ccccccccc"))).toBe(false);
});

test("validator", () => {
  expect(validator(["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"])).toBe(
    2
  );
});

test("validator with new rule", () => {
  expect(
    validator(["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"], rule2)
  ).toBe(1);
});

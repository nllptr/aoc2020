const mapper = (line) => {
  const [limits, letter, password] = line.split(" ");
  const [num1, num2] = limits.split("-");
  return {
    num1: Number.parseInt(num1),
    num2: Number.parseInt(num2),
    letter: letter.slice(0, 1),
    password: password,
  };
};

const rule = (pwObject) => {
  numLetters = pwObject.password.split("").reduce((total, current) => {
    return current === pwObject.letter ? total + 1 : total;
  }, 0);
  return numLetters >= pwObject.num1 && numLetters <= pwObject.num2;
};

const rule2 = (pwObject) => {
  numLetters = [
    pwObject.password[pwObject.num1 - 1],
    pwObject.password[pwObject.num2 - 1],
  ].reduce((total, current) => {
    return current === pwObject.letter ? total + 1 : total;
  }, 0);
  return numLetters == 1;
};

const validator = (input, ruleFunc) => {
  const useRule = ruleFunc ? ruleFunc : rule;
  return input.reduce((total, current) => {
    return useRule(mapper(current)) ? total + 1 : total;
  }, 0);
};

exports.mapper = mapper;
exports.rule = rule;
exports.rule2 = rule2;
exports.validator = validator;

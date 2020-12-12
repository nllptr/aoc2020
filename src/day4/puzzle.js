const mapper = (input) => {
  return input
    .trim()
    .split("\n\n")
    .map((passportString) => {
      return passportString
        .split(/\s/)
        .map((field) => {
          const [key, value] = field.split(":");
          const fieldMap = new Object();
          fieldMap[key] = value;
          return fieldMap;
        })
        .reduce((object, keyVal) => {
          return Object.assign(object, keyVal);
        }, {});
    });
};

const newValidator = (ruleFunc) => {
  return (passport) => {
    return ruleFunc(passport);
  };
};

const rule = (passport) => {
  const requiredFields = ["byr", "ecl", "eyr", "hcl", "hgt", "iyr", "pid"];
  return requiredFields.reduce((result, requiredField) => {
    return result && passport.hasOwnProperty(requiredField);
  }, true);
};

const rule2 = (passport) => {
  const requiredFields = {
    byr: /^19[2-9][0-9]|200[0-2]$/, // 1920-2002
    ecl: /^amb|blu|brn|gry|grn|hzl|oth$/,
    eyr: /^202[0-9]|2030$/, // 2020-2030
    hcl: /^#[a-f0-9]{6}$/, // hexadecimal color code
    hgt: /^1[5-8][0-9]cm|19[0-3]cm|59in|6[0-9]in|7[0-6]in$/, // 150-193cm or 59-76in
    iyr: /^201[0-9]|2020$/, // 2010-2020,
    pid: /^\d{9}$/, // nine digits, including leading zeroes
  };
  return Object.entries(requiredFields).reduce((result, [key, regexp]) => {
    return result && passport.hasOwnProperty(key) && regexp.test(passport[key]);
  }, true);
};

const processBatch = (validator, batch) => {
  return mapper(batch)
    .map(validator)
    .reduce((total, isValid) => total + (isValid ? 1 : 0), 0);
};

const runPart1 = (input) => {
  return processBatch(newValidator(rule), input);
};

const runPart2 = (input) => {
  return processBatch(newValidator(rule2), input);
};

exports.mapper = mapper;
exports.newValidator = newValidator;
exports.processBatch = processBatch;
exports.rule = rule;
exports.rule2 = rule2;
exports.runPart1 = runPart1;
exports.runPart2 = runPart2;

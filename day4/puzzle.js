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

const processBatch = (validator, batch) => {
  return mapper(batch)
    .map(validator)
    .reduce((total, isValid) => total + (isValid ? 1 : 0), 0);
};

exports.mapper = mapper;
exports.newValidator = newValidator;
exports.processBatch = processBatch;
exports.rule = rule;

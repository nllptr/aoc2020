const mapper = (input) => {
  return input
    .trim()
    .split("\n")
    .map((item) => Number(item));
};

const matchTwo = (records, target) => {
  for (const record1 of records) {
    for (const record2 of records) {
      if (record1 + record2 === target) return [record1, record2];
    }
  }
  return [];
};

const matchThree = (records, target) => {
  for (const record1 of records) {
    for (const record2 of records) {
      for (const record3 of records) {
        if (record1 + record2 + record3 === target)
          return [record1, record2, record3];
      }
    }
  }
  return [];
};

const runner = (matcher = matchTwo) => {
  return (input) => {
    return matcher(mapper(input), 2020).reduce(
      (product, current) => product * current,
      1
    );
  };
};

module.exports = {
  mapper,
  matchTwo,
  matchThree,
  runner,
};

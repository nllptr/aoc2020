const mapper = (input) => {
  return input
    .trim()
    .split("\n")
    .map((item) => Number(item));
};

const matchTwo = (records, target) => {
  for (i = 0; i < records.length; i++) {
    for (j = i + 1; j < records.length; j++) {
      if (records[i] + records[j] == target) return [records[i], records[j]];
    }
  }
  return [];
};

const matchThree = (records, target) => {
  for (i = 0; i < records.length; i++) {
    for (j = i + 1; j < records.length; j++) {
      for (k = j + 1; k < records.length; k++) {
        if (records[i] + records[j] + records[k] == target)
          return [records[i], records[j], records[k]];
      }
    }
  }
  return [];
};

const runner = (matcher) => {
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

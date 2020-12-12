const mapper = (input) => {
  return input
    .trim()
    .split("\n")
    .map((item) => Number(item));
};

const findMatch2 = (records, target) => {
  for (i = 0; i < records.length; i++) {
    for (j = i + 1; j < records.length; j++) {
      if (records[i] + records[j] == target) return [records[i], records[j]];
    }
  }
  return [];
};

const findMatch3 = (records, target) => {
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

const runPart1 = (input) => {
  const match = findMatch2(mapper(input), 2020);
  return match[0] * match[1];
};

const runPart2 = (input) => {
  const match = findMatch3(mapper(input), 2020);
  return match[0] * match[1] * match[2];
};

module.exports = {
  mapper,
  findMatch2,
  findMatch3,
  runPart1,
  runPart2,
};

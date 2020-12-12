const { isExpressionWithTypeArguments } = require("typescript");

const binaryPartitioner = (lowerLimit, upperLimit, choice) => {
  let result;
  switch (choice) {
    case "F": // lower
    case "L":
      result = [
        lowerLimit,
        lowerLimit + Math.floor((upperLimit - lowerLimit) / 2),
      ];
      break;
    case "B": // upper
    case "R":
      result = [
        lowerLimit + Math.ceil((upperLimit - lowerLimit) / 2),
        upperLimit,
      ];
      break;
  }
  return result[0] == result[1] ? result[0] : result;
};

const decoder = (boardingPass) => {
  const rowPart = boardingPass.slice(0, 7);
  const colPart = boardingPass.slice(7);
  const row = rowPart
    .split("")
    .reduce((row, FB) => binaryPartitioner(row[0], row[1], FB), [0, 127]);
  const col = colPart
    .split("")
    .reduce((col, LR) => binaryPartitioner(col[0], col[1], LR), [0, 7]);
  return row * 8 + col;
};

const mapper = (input) => {
  return input.trim().split("\n");
};

const findHighestId = (input) => {
  return mapper(input)
    .map(decoder)
    .reduce((highest, current) => (current > highest ? current : highest), 0);
};

const findMySpot = (input) => {
  return mapper(input)
    .map(decoder)
    .sort()
    .reduce((mySpot, current, idx, allIds) => {
      // If the next item is +2 in value, rather than +1, we have a gap.
      return allIds[idx + 1] === current + 2 ? current + 1 : mySpot;
    }, undefined);
};

exports.binaryPartitioner = binaryPartitioner;
exports.decoder = decoder;
exports.findHighestId = findHighestId;
exports.findMySpot = findMySpot;

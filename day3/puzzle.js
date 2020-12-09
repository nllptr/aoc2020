const readMap = (mapString) => {
  const split = mapString.trim().split("\n");
  return {
    data: split,
    height: split.length,
    width: split[0].length,
    position: {
      x: 0,
      y: 0,
    },
  };
};

const newSlope = (x, y) => {
  return (map) => {
    return {
      data: map.data,
      height: map.height,
      width: map.width,
      position: {
        x: map.position.x + x,
        y: map.position.y + y,
      },
    };
  };
};

const hasTree = (map) => {
  return isDone(map)
    ? false
    : map.data[map.position.y].charAt(map.position.x % map.width) === "#";
};

const isDone = (map) => {
  return map.position.y >= map.height;
};

const run = (inputMap, slope) => {
  let map = inputMap;
  let trees = 0;
  while (!isDone(map)) {
    trees = hasTree(map) ? trees + 1 : trees;
    map = slope(map);
  }
  return trees;
};

const runMany = (map, slopes) => {
  return slopes.map((slope) => run(map, slope));
};

exports.hasTree = hasTree;
exports.isDone = isDone;
exports.newSlope = newSlope;
exports.readMap = readMap;
exports.run = run;
exports.runMany = runMany;

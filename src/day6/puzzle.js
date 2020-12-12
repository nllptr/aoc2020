const countGroup = (input) => {
  return input
    .trim()
    .split("\n")
    .reduce((totalSet, currentPerson) => {
      currentPerson.split("").forEach((character) => totalSet.add(character));
      return totalSet;
    }, new Set()).size;
};

const countGroupAllYes = (input) => {
  const stuff = input
    .trim()
    .split("\n")
    .reduce((totalSet, currentPerson, index, groupArray) => {
      if (index === 0) {
        currentPerson.split("").forEach((character) => totalSet.add(character));
      } else {
        totalSet.forEach((character) => {
          if (!currentPerson.includes(character)) {
            totalSet.delete(character);
          }
        });
      }
      return totalSet;
    }, new Set()).size;
  return stuff;
};

const sumGroups = (input) => {
  return input
    .trim()
    .split("\n\n")
    .reduce((sum, currentGroup) => {
      return sum + countGroup(currentGroup);
    }, 0);
};

const sumGroupsAllYes = (input) => {
  return input
    .trim()
    .split("\n\n")
    .reduce((sum, currentGroup) => {
      return sum + countGroupAllYes(currentGroup);
    }, 0);
};

module.exports = {
  countGroup,
  runPart1: sumGroups,
  runPart2: sumGroupsAllYes,
};

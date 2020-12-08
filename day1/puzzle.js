exports.findMatch2 = (records, target) => {
  for (i = 0; i < records.length; i++) {
    for (j = i + 1; j < records.length; j++) {
      if (records[i] + records[j] == target) return [records[i], records[j]];
    }
  }
  return [];
};

exports.findMatch3 = (records, target) => {
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

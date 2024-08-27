function getMinMax(str) {
  str = str.match(/-?\d+?[.\d+]*/g);

  let minNum = str.reduce((acc, next) => Math.min(acc, next));
  let maxNum = str.reduce((acc, next) => Math.max(acc, next));

  return {
    min: minNum,
    max: maxNum,
  };
}

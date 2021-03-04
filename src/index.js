
exports.min = function min (array) {
  if (!array || array == null || array.length == 0) {
    return 0;
  } else {
    return Math.min.apply(Math, array);
  }
}

exports.max = function max (array) {
  if (!array || array == null || array.length == 0) {
    return 0;
  } else {
  return Math.max.apply(Math, array);
  }
}

exports.avg = function avg (array) {
  if (!array || array == null || array.length == 0) {
    return 0;
  } else {
  let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += parseInt(array[i], 10);
    }
  return sum/array.length;
  }
}

function iterativeLog(array) {
  array.forEach(call);
}

function call(element, index, array) {
  console.log(index + ": " + element);
}

function callback(n) {
  n = n += 1;
}

function iterate(callback) {
  var arr = [1,2,3];
  arr.forEach(callback);
  return arr;
}

function doToArray(array, callback) {
  array.forEach(callback);
}

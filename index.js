function iterativeLog(array) {
  for (var i = 0, len = array.length; i < len; i++) {
    console.log(`${i}: ${array[i]}`) 
  }
}

function iterate(callback) {
  var array = [1,2,3,4,5];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
  return array;
}

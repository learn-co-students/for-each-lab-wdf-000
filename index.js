function iterativeLog(array) {  
  array.forEach(logArrayElements);
}

function logArrayElements(element, index, array) {
  console.log(`${index}: ${element}`);
}

function iterate(callback) {
  newAry = [1, 2, 3, 4, 5];
  newAry.forEach(callback);
  return  newAry;
}

function doToArray(array, callback) {
  array.forEach(callback);
}

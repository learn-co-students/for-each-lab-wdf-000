function iterativeLog(array) {
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback) {
  var desserts = ["cookies", "cakes", "ice cream"];
  desserts.forEach(callback);
  return desserts;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
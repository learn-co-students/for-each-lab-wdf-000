function iterativeLog(arr) {
  arr.forEach((elem, index) => {
    console.log(`${index}: ${elem}`)
  })
}

function iterate(callback) {
  var arr = [1,2,3];
  arr.forEach(callback); return arr;
}

function doToArray(array, callback) {
  array.forEach(callback)
  return array
}
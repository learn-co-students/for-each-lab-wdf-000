function iterativeLog(array) {
  array.forEach((el, i) => {
    console.log(`${i}: ${el}`)
  })
}

function iterate(callback) {
  var array = ["bob"]
  array.forEach(callback)
  return array
}

function doToArray(array, callback) {
  array.forEach(callback)
  return array
}

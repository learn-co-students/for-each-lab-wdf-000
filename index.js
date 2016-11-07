


function iterativeLog(array) {
  for (var i = 0, l = array.length; i < l; i++) {
    console.log(`${i}: ${array[i]}`)
  }
}



function iterate(iterativeLog) {
  var array = [1,2,3]
  iterativeLog(array)
  return array
}



function doToArray(array, callback) {
  array.forEach(callback)
}

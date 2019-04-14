function iterativeLog(array){
   array.forEach(yo => {console.log(`${array.indexOf(yo)}: ${yo}`)})
}

function iterate(callback){
  test_array = [1,2,3];
  test_array.forEach(callback);
  return test_array
}

function doToArray(array, callback){
  array.forEach(callback);
  return array
}

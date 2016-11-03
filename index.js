function iterativeLog(array){
  // var i = 0;
  // for(i; i<array.length;i++){
  //   console.log(`${i}: ${array[i]}`)
  // }
  array.forEach((element, i) => {
  console.log(`${i}: ${element}`)
})

}

function iterate(callback){
  var array = ["bob"];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback){
  array.forEach(callback);
  return array;
}

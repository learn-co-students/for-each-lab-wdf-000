function iterativeLog(array){
  array.forEach((element, index, array) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback){
  var bestRapArtist = ["J.Cole","Jay-Z","Eminem"];
  bestRapArtist.forEach(callback);
  return bestRapArtist;
}

function doToArray(array, callback){
  array.forEach(callback);
}

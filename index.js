function iterativeLog(array){
	array.forEach((element, index) => {
		console.log(`${index}: ${element}`)
	})
}

function iterate(callback) {
	var color = ["purple", "red", "blue", "black"]
	color.forEach(callback)
	return color
}

function doToArray(array, callback){
	array.forEach(callback)
}
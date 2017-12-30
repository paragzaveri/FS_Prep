
function doYouPlayTheTheremin(name){
	var lowerName = name.toLowerCase();
	if (lowerName[0] === 's'){
		return `${name} plays the Theremin!`;
	} else {
		return `${name} does not play the Theremin!`;
	}
}


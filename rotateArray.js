function rotate(array, shift){
	var newArray = [];
	for (var i = 0; i < array.length; i++){
		newArray.push(array[(i+shift)%array.length]);
	}
	return newArray;
}


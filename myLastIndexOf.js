function myLastIndexOf(array, value, index){
	var arrayLength = index + 1;
	var indexOfValue = -1;
	if (index === undefined){
		arrayLength = array.length;
	}
	for (var i = 0; i < arrayLength; i++){
		if (array[i] === value){
			indexOfValue = i;
		}
	}
	return indexOfValue;

}

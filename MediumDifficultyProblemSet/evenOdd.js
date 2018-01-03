function evenOdd(array){
	var evenArray = [];
	var oddArray = [];
	for (var i = 0; i < array.length; i++){
		if (array[i] % 2 === 0){
			evenArray.push(array[i]);
		} else {
			oddArray.push(array[i]);
		}
	}
	return [evenArray, oddArray];

}


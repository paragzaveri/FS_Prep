function mySlice(array, begin, end){
	var newArray = [];
	if (!begin && begin !== 0){
		var begin = 0;
	}
	if (!end && end !== 0){
		var end = array.length;
	}
	if (begin < 0){
    	begin+=array.length;
  	}
	if (end < 0) {
		end+=array.length;
	}
	for (var i = begin; i < end; i++){
		newArray.push(array[i]);
	}
	return newArray;
}



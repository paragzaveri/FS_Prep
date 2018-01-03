function myJoin(array, separator){
	var str = '';
	if (array.length === 0){
		return str;
	}
	if (separator === undefined){
		separator = ',';
	}
	var i = 0;
	for (i; i < array.length - 1; i++){
		if (array[i] !== null && array[i] !== undefined){
			str += String(array[i]) + separator;
		}
	}
	str += String(array[i]);

	return str;
}





function removeZeros(num){
	var str = '';
	for (var i = 0; i < String(num).length; i++){
		if (String(num)[i] !== '0'){
			str+=String(num)[i];
		}
	}
	var newNum = Number(str);
	if (newNum === 0){
		return NaN;
	} else {
		return newNum;
	}
}










function vowelsCount(str){
	var count = 0;
	for (var i = 0; i < str.length; i++){
		if (str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e' ||
			str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' ||
			str[i].toLowerCase() === 'u'){
			count++;
		}
	}
	return count;
}



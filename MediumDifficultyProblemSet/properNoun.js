function properNounFilter(str){
	var bool = true;
	var strLower = str.toLowerCase();
	var strUpper = str.toUpperCase();
	if (str[0] === strLower[0]){
		bool = false;
	} else {
		for (var i = 1; i < str.length; i++){
			if (str[i] === strUpper[i]){
				bool = false;
			}
		}
	}
	return bool;
}



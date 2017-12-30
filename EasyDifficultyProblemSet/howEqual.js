

function howEqual(val1, val2){
	if (val1 === val2){
		return 'strictly';
	} else if ((val1 === val2) !== (val1 == val2)){
		return 'loosely';
	} else {
		return 'not equal';
	}
}


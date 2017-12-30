

function exponentiate(num, power){
	var result = num;
	for (var i = 1; i < power; i++){
		result *= num;
	}
	return result;
}



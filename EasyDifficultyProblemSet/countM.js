function count(n, m, str){
	var numArray = [];
	var high = 0;
	var low = 0;
	if (n >= m) {
		high = n;
		low = m;
	} else {
		high = m;
		low = n;
	}
	if (str.toLowerCase() === 'up'){
		for (var i = low; i <= high; i = i + low){
			numArray.push(i);
		}
	} else if (str.toLowerCase() === 'down'){
		for (var i = high; i >= 0; i = i - low) {
			numArray.push(i);
		}
	}
	return numArray;
}

// console.log(count(10,2,'up'));
// console.log(count(11, 2, 'dOwn'));


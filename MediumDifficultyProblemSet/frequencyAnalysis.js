function frequencyAnalysis(array){
	var newArray = array.split('');
	return newArray.reduce(function(arr,index){
		if (arr[index]){
			arr[index]++;
		} else {
			arr[index] = 1;
		}
		return arr;
	}, {});
}


console.log(frequencyAnalysis('abca'));
// OUTPUT: {a: 2, b: 1, c: 1}

console.log(frequencyAnalysis(''));
// OUTPUT: { }
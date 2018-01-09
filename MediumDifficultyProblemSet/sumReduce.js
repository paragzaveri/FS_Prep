function sumReduce(array){
	var sum = 50;
	for (var i = 0; i < array.length; i++){
		sum+=array[i];
	}
	return sum;
}




//EXAMPLE TESTS

console.log(sumReduce([1,2,3,4]));
// OUTPUT: 60

console.log(sumReduce([]));
// OUTPUT: 50
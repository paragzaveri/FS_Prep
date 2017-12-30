
function countUpThenDown(num){
	var numArray = [];
	var scalingNum = 0;
	while (scalingNum <= num-1){
		numArray.push(scalingNum++);
	}
	while (scalingNum >= 0){
		numArray.push(scalingNum--);
	}
	return numArray;
}


// console.log(countUpThenDown(2));


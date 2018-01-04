function mySplice(array, start, deleteCount){
	var returnArray = [];
	var remainingValues = [];
	var argumentsFilled = 3;
	if (deleteCount === undefined){
		argumentsFilled = 2;

		deleteCount = array.length - start;

	}
	if (start === undefined){
		start = 0;
	}
	for (var i = 0; i < start; i++) {
		remainingValues.push(array.shift());
	}

	for (var i = start; i < deleteCount + start; i++){
		returnArray.push(array.shift());
	}
	for (var i = arguments.length - 1; i >= argumentsFilled; i--){
		array.unshift(arguments[i]);
	}
	for (var i = 0, j = remainingValues.length; i < j; i++){
		array.unshift(remainingValues.pop());
	}
	return returnArray;
}

// function mySplice(arr, start, deleteCount) {
//   var deleted = [];
//   var keep = [];

//   if (deleteCount === undefined) {
//     deleteCount = arr.length - start;
//   }

//   for (var i = 0; i < start; i++) {
//     keep.push(arr.shift());
//   }

//   for (var x = 0; x < deleteCount; x++) {
//     deleted.push(arr.shift());
//   }

//   for (var y = arguments.length - 1; y > 2; y--) {
//     arr.unshift(arguments[y]);
//   }

//   for (var j = 0, length = keep.length; j < length; j++) {
//     arr.unshift(keep.pop());
//   }

//   return deleted;
// }




//EXAMPLE TESTS

var arr = [1,2,3,4]

console.log(mySplice(arr, 1));    
//OUTPUT: [2, 3, 4]  --> arr is now [1]

console.log(mySplice(arr, 0, 0, 5, 6, 7));
//OUTPUT: []  --> arr is now [5, 6, 7, 1]

console.log(mySplice(arr, 1, 2, 'new'));
//OUTPUT: [6, 7] --> arr is now [5, 'new', 1]



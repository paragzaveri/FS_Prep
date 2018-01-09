function compareObjects(obj1, obj2){
	var boolean = true;
	var arr1 = [];
	var arr2 = [];
	for (var key in obj1){
		arr1 += key;
		arr1 += obj1[key];
	}
	for (var key in obj2){
		arr2 += key;
		arr2 += obj2[key];
	}
	if (arr1.length >= arr2.length){
		var arrLength = arr1.length;
	} else {
		var arrLength = arr2.length;
	}
	for (var i = 0; i < arrLength; i++){
		if (arr1[i] !== arr2[i]){
			boolean = false;
		}
	}
	return boolean;
}






//EXAMPLE TESTS

console.log(compareObjects({ name: 'giselle' }, { name: 'zeke' }));
// OUTPUT: false

console.log(compareObjects({ name: 'nick' }, { name: 'nick' }));
// OUTPUT: true
function strFrequency(array){
	var newObj = array.reduce(function(arr, index) {
    console.log(arr[index]);
    if(arr[index]) {
      arr[index]++;
    } else {
    	arr[index] = 1;
    }
     return arr;
  }, {})

  	return newObj;
}




//EXAMPLE TEST

var names = ["Bob", "Bill", "Bo", "Ben", "Bob", "Brett", "Ben", "Bill", "Bo", "Ben", "Bob", "Ben"];

console.log(strFrequency(names));
//OUTPUT: {Bob: 3, Bill: 2, Bo: 2, Ben: 4, Brett: 1}

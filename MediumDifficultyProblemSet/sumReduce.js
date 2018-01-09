// function sumReduce(array){	
// 	return array.reduce(function (total,num){ return total+num;},50);
// }
var sumReduce = (array) => array.reduce(function (total,num){ return total+num;},50);



//EXAMPLE TESTS

console.log(sumReduce([1,2,3,4]));
// OUTPUT: 60

console.log(sumReduce([]));
// OUTPUT: 50
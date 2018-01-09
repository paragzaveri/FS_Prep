function objectifier(array){
  var newArray = {};

  for (var i = 0; i < array.length; i++){
  	newArray[`${array[i][0]}`] = {};
  	var arrayItems = array[i][1];
 	for (var j = 0; j < arrayItems.length; j++){
 		if (j%2 === 0){
 			newArray[`${array[i][0]}`][`${arrayItems[j]}`] = arrayItems[j+1];
 		}
 	}
  }

  return newArray;
}


//EXAMPLE TEST

var data = [
  [ 'animals',
  	[
      'dogs', ['Corgi', 'Sheltie'],
      'cats', ['Tabby','Black'],
      'pigs', ['Teacup']
    ]
  ],

  [ 'guitars',
    [
      'Fender', ['Telecaster', 'Stratocaster','Jazzmaster'],
      'Gibson', ["Gibson Flying-V", 'Firebird', 'Les Paul']
    ]
  ]
]

console.log(objectifier(data));
//OUTPUT: 
//
// {
// animals : {
//     dogs : ['Corgi', 'Sheltie'],
//     cats : ['Tabby','Black'],
//     pigs : ['Teacup']
// },
// guitars : {
//     Fender : ['Telecaster', 'Stratocaster','Jazzmaster'],
//     Gibson : ["Gibson Flying-V", 'Firebird', 'Les Paul']
// }
// }
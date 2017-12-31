const playNameGame = str => str + ' ' + str + ' Bo' + ' B' + 
	str.slice(1, str.length) + ' Banana Fana Fo F' 
	+ str.slice(1,str.length) + ' Fee Fi Mo M' +
	str.slice(1, str.length) + ' ' + str;


console.log(playNameGame('Daniel'));
console.log(playNameGame('Ariel'));
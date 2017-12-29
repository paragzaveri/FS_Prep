function askPolitely(str){
	if (str.slice(-7, str.length) === ('please?'.toLowerCase())){
		return str;
	}else if (str.slice(-7, str.length) !== ('please?'.toLowerCase()) &&
		str[str.length -1] === '?'){
		return str.slice(0, str.length-1) + ' please?';
	} else{
		return str;
	}
} 

console.log(askPolitely("May I borrow your pencil?"));
console.log(askPolitely("May I borrow your pencil please?"));
console.log(askPolitely("My name is Grace Hopper"));






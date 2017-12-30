
function palindrome(str){
	var bool = true; 
	var reversedStr = '';
	for (var i = str.length - 1; i >= 0; i--){
		reversedStr += str[i];
	}
	for (var i = 0; i < str.length; i++){
		if (str[i] !== reversedStr[i]){
			bool = false;
		}
	}
	return bool;
}


// console.log(palindrome('racecar')); //racecar


// console.log(palindrome('animal'));  // lamina








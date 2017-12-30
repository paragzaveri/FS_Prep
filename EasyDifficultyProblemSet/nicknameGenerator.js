function nicknameGenerator(str){
	if (str[2] === 'a' || str[2] === 'e' 
		|| str[2] === 'i' || str[2] === 'o' 
		|| str[2] === 'u') {
		return str.slice(0,4);
	} else {
		return str.slice(0,3);
	}
}
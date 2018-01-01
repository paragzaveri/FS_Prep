function underToCamel(str){
	var index = 0;
	while(index++ < str.length){
		if (str[index] === '_'){
			str = str.slice(0, index) + 
			str[index+1].toUpperCase() + 
			str.slice(index+2, str.length);
		}
	}
	return str;
}

console.log(underToCamel("first_name"));
//OUTPUT: "firstName"

console.log(underToCamel("my_income_tax_from_2015"));
//OUTPUT: "myIncomeTaxFrom2015"


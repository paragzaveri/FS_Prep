
function sumOfDigits(num){
	var sum = 0;
	while (Math.floor(num) !== 0){
		sum += Math.floor(num) % 10;
		num /= 10;
	}
	return sum;
}


console.log(sumOfDigits(414));
//OUTPUT: 9

console.log(sumOfDigits(2913));
//OUTPUT: 15

console.log(sumOfDigits(50));
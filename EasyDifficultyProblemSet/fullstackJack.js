

// Pass two arrays with each deck as arguments
// Array 1 - players 1's deck, Array 2 - player 2's deck

// Score Keeping Variable(s) --> One for player1, one for player 2

function convertDeck(arr){
	for (var i = 0; i < arr.length; i++){
		if (arr[i] === 'A'){
			arr[i] = 14;
		} else if (arr[i] === 'K'){
			arr[i] = 13;
		} else if (arr[i] === 'Q'){
			arr[i] = 12;
		} else if (arr[i] === 'J'){
			arr[i] = 11;
		}
	}
	return arr;
}

function fullstackJack(arr1, arr2){
	var player1Score = 0;
	var player2Score = 0;
	convertDeck(arr1);
	convertDeck(arr2);
	for (var i = 0; i < arr1.length; i++){
		if (arr1[i] > arr2[i]){
			player1Score++;
		} else if (arr1[i] < arr2[i]){
			player2Score++;
		}
	}
	if (player1Score > player2Score){
		return `Player 1 wins ${player1Score} to ${player2Score}!`;
	} else if (player1Score < player2Score) {
		return `Player 2 wins ${player2Score} to ${player1Score}!`;
	} else {
		return 'Tie!';
	}
}


console.log(fullstackJack(['A', '7', '8'], ['K', '5', '9']));
//'Player 1 Wins!'

console.log(fullstackJack(['K', 'Q', 'J'], ['Q', 'K', 'J']));
//'Tie!'

console.log(fullstackJack(['A', '7'], ['K', '5']));

console.log(fullstackJack(['K', '5'], ['A', '7']));




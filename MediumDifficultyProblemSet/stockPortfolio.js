function totalPortfolioValue(ticker, portfolio){
	var sum = 0;
	for (var i = 0; i < portfolio.length; i++){
		sum += (ticker[ticker.indexOf(portfolio[i][0]) + 1]) 
		* (portfolio[i][1]);
	}
	return sum;
}


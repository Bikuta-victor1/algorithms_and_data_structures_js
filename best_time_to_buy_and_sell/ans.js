// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function(prices) {
    if (prices.length == 0){
        return 0 ;
    }
     
    let buy = Math.min();
    let profit = 0 ;
    for(let i = 0 ; i < prices.length ; i ++ ){
        if (prices[i] - buy >  profit){
            console.log(buy);
            profit = prices[i] - buy ;
        } else if (buy > prices[i]){
            buy = prices[i]
        }
    }
    
    return profit;
};
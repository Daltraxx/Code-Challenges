/*You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.*/

const maxProfitBruteForce = prices => {
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        const maxSellPrice = Math.max(...prices.slice(i + 1));
        maxProfit = Math.max(maxSellPrice - prices[i], maxProfit);
    }

    return maxProfit;
}

//Time complexity: O(n^2)
/*The code contains a nested loop where for each element in the prices array, 
it calculates the maximum sell price by slicing the array and then calculates the profit. 
This results in a time complexity of O(n^2) 
where n is the number of elements in the prices array.*/

const maxProfitOnePass = prices => {
     
}

const prices = [7,1,5,3,6,4];

console.log(maxProfit(prices));
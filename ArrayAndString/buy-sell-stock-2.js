/*You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. 
You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.*/

const maxProfitBruteForce = (prices) => {
    const calculate = (prices, s) => {
        if (s >= prices.length) {
            return 0;
        }

        let max = 0;

        for (let start = s; start < prices.length; start++) {
            let maxProfit = 0;
            for (let i = start + 1; i < prices.length; i++) {
                if (prices[start] < prices[i]) {
                    let profit = calculate(prices, i + 1) + prices[i] - prices[start];

                    maxProfit = Math.max(profit, maxProfit);
                }
            }

            max = Math.max(max, maxProfit);
        }

        return max;
    }

    return calculate(prices, 0);
} 

/*Time complexity : O(n^n). Recursive function is called n^n times.
Space complexity : O(n). Depth of recursion is n.*/

const maxProfitPeaksValleys = (prices) => {
    let i = 0;
    let valley = prices[0], peak = prices[0];
    let maxProfit = 0;

    while (i < prices.length - 1) {
        while (i < prices.length - 1 && prices[i] >= prices[i + 1]) i++;
        valley = prices[i];
        while (i < prices.length - 1 && prices[i] <= prices[i + 1]) i++;
        peak = prices[i];

        maxProfit += peak - valley;
    }

    return maxProfit;
}

/*Time complexity : O(n). Single pass.
Space complexity : O(1). Constant space required.*/

const maxProfitPeaksValleysSimplified = (prices) => {
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }

    return maxProfit;
}

const prices = [7,1,5,3,6,4];

console.log(maxProfitPeaksValleysSimplified(prices));
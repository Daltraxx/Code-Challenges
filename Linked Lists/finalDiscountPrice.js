/*You are given an integer array prices where prices[i] is the price of the ith item in a shop.

There is a special discount for items in the shop. If you buy the ith item, 
then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i]. 
Otherwise, you will not receive any discount at all.

Return an integer array answer where answer[i] 
is the final price you will pay for the ith item of the shop, 
considering the special discount.*/

const finalPricesBruteForce = (prices) => {
    const ans = [];
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] <= prices[i]) {
                ans[i] = prices[i] - prices[j];
                break;
            } else if (prices[j] > prices[i] && j === prices.length - 1) {
                ans[i] = prices[i];
            }
        }
    }

    ans[prices.length - 1] = prices[prices.length - 1];

    return ans;
}

const finalPricesMonotonic = (prices) => {
    const stack = [];
    const ans = [];

    //iterate backwards through prices array
    for (let i = prices.length - 1; i >= 0; i--) {
        //maintain monotonically increasing stack to keep track of later prices
        while (stack.length && stack[stack.length - 1] > prices[i]) {
            stack.pop();
        }

        //if there is nothing in stack, current price is greater than all later prices (or price is last price in array)
        if (!stack.length) {
            ans[i] = prices[i];
        } else {
            //if price remains in monotonically increasing stack, it must be less than current price so apply discount
            ans[i] = prices[i] - stack[stack.length - 1];
        }

        //add current price to monotonically increasing stack
        stack.push(prices[i]);
    }

    return ans;
}

const prices = [8,4,6,2,3];
console.log(finalPricesMonotonic(prices));
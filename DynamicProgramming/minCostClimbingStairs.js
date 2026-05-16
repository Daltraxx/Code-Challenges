const minCostClimbingStairsTopDown = (cost) => {
  const dp = (i) => {
    if (i <= 1) {
      return 0;
    }

    if (memo[i] !== undefined) return memo[i];
    memo[i] = Math.min(dp(i - 2) + cost[i - 2], dp(i - 1) + cost[i - 1]);
    return memo[i];
  };

  const n = cost.length;
  const memo = new Array(n + 1);
  return dp(cost.length);
};

// Time complexity: O(n) where n is the number of steps.
// Space complexity: O(n) for the recursion stack and the memo array.

const minCostClimbingStairsBottomUp = (cost) => {
  const n = cost.length;
  const dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 0;

  for (let i = 2; i < n + 1; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp.at(-1);
};

// Time complexity: O(n) where n is the number of steps.
// Space complexity: O(n) for the dp array.

const minCostClimbingStairsBottomUpConstantSpace = (cost) => {
  let downOne = 0;
  let downTwo = 0;
  let currentCost = 0;

  for (let i = 2; i < cost.length + 1; i++) {
    currentCost = Math.min(downOne + cost[i - 1], downTwo + cost[i - 2]);
    downTwo = downOne;
    downOne = currentCost;
  }

  return currentCost;
};

// Time complexity: O(n) where n is the number of steps.
// Space complexity: O(1) for the constant space used.

console.log(minCostClimbingStairsBottomUp(cost));

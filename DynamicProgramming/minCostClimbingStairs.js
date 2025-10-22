const minCostClimbingStairsTopDown = (cost) => {
  const memo = new Map();
  const dp = (i) => {
    if (i <= 1) {
      return 0;
    }

    if (memo.has(i)) return memo.get(i);

    memo.set(i, Math.min(dp(i - 1) + cost[i - 1], dp(i - 2) + cost[i - 2]));
    return memo.get(i);
  };

  return dp(cost.length);
};

// Time Complexity: O(n)
// Space Complexity: O(n)

const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCostClimbingStairsTopDown(cost));

const minCostClimbingStairsBottomUp = (cost) => {
  const dp = new Array(cost.length + 1);
  dp[0] = 0;
  dp[1] = 0;

  for (let i = 2; i < dp.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  return dp.at(-1);
};

const minCostClimbingStairsBottomUpConstantSpace = (cost) => {
  let downOne = 0;
  let downTwo = 0;

  for (let i = 2; i < cost.length + 1; i++) {
    const temp = downOne;
    downOne = Math.min(downOne + cost[i - 1], downTwo + cost[i - 2]);
    downTwo = temp;
  }

  return downOne;
};

// Time Complexity: O(n)
// Space Complexity: O(1)

console.log(minCostClimbingStairsBottomUp(cost));

// TOP-DOWN
const climbStairsTopDown = (n) => {
  const memo = new Array(n + 1).fill(-1);

  const dp = (i) => {
    if (i === 1) return 1;
    if (i === 2) return 2;

    if (memo[i] !== -1) return memo[i];
    memo[i] = dp(i - 1) + dp(i - 2);
    return memo[i];
  };

  return dp(n);
};

// Time complexity: O(n) because each subproblem is solved only once due to memoization.
// Space complexity: O(n) for the memoization array and the call stack.

// BOTTOM-UP
const climbStairsBottomUp = (n) => {
  const dp = new Array(n + 1);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i < dp.length; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[n];
};

// Time complexity: O(n) due to the single loop filling the dp array.
// Space complexity: O(n) for the dp array.

const climbStairsConstantSpace = (n) => {
  let downTwo = 1;
  let downOne = 2;
  for (let i = 3; i <= n; i++) {
    const currentStep = downOne + downTwo;
    downTwo = downOne;
    downOne = currentStep;
  }

  return downOne;
};

// Time complexity: O(n) due to the single loop.
// Space complexity: O(1) since we only use a constant amount of space.

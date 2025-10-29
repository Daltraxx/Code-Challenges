const climbStairsBacktracking = (n) => {
  let ways = 0;
  const backtrack = (step) => {
    if (step === n) {
      ways++;
      return;
    } else if (step > n) {
      return;
    }

    backtrack(step + 1);
    backtrack(step + 2);
  };

  backtrack(0);
  return ways;
};

// Time O(2^n)
// Space O(n)

const n = 4;
console.log(climbStairsBacktracking(n));

// TOP-DOWN
const climbStairs = (n) => {
  const memo = new Array(n + 1);

  const getWaysToReachStep = (i) => {
    if (i > n) return 0;
    if (i === n) return 1;

    if (memo[i] !== undefined) return memo[i];
    memo[i] = getWaysToReachStep(i + 1) + getWaysToReachStep(i + 2);
    return memo[i];
  };

  return getWaysToReachStep(0);
};

console.log(climbStairs(n));

// Time O(n)
// Space O(n)

// BOTTOM-UP
const climbStairsBottomUp = (n) => {
  const dp = new Array(n + 1);
  dp[1] = 1; // one way to get to step 1
  dp[2] = 2 // two ways to get to step 2
  for (let i = 3; i < dp.length; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  return dp[n];
}

console.log(climbStairsBottomUp(n));

// Time O(n)
// Space O(n)

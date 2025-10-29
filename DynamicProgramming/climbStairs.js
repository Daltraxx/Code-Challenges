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

const n = 3;
console.log(climbStairsBacktracking(n));

// TOP-DOWN
const climbStairs = (n) => {
  const memo = new Array(n + 1);
  // 1 way to reach first step, 2 ways to reach second step
  for (let i = 0; i < 3; i++) memo[i] = i;

  const getWaysToReachStep = (step) => {
    if (memo[step] !== undefined) return memo[step];

    memo[step] = 2 + getWaysToReachStep(n - 2);
    return memo[step];
  };

  return getWaysToReachStep(n);
};

console.log(climbStairs(n));

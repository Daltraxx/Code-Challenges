const mostPointsTopDown = (questions: number[][]): number => {
  const getMostPoints = (i: number): number => {
    if (i >= n) return 0;
    if (memo[i] !== -1) return memo[i];
    const [points, brainPower] = questions[i];
    const nextSolvable = i + brainPower + 1;
    const solve = points + getMostPoints(nextSolvable);
    const skip = getMostPoints(i + 1);
    memo[i] = Math.max(solve, skip);
    return memo[i];
  };

  const n = questions.length;
  const memo = new Array(n).fill(-1);
  return getMostPoints(0);
};

// Time complexity: O(n) we visit each question at most once
// Space complexity: O(n) for the memoization array and the call stack in the worst case

const mostPointsBottomUp = (questions: number[][]): number => {
  const n = questions.length;
  const dp = new Array(n + 1).fill(0); // dp[n] = 0 for out of bounds
  dp[n - 1] = questions[n - 1][0];
  for (let i = n - 1; i >= 0; i--) {
    const [points, brainPower] = questions[i];
    const nextSolvable = i + brainPower + 1;
    const solve = points + dp[Math.min(nextSolvable, n)];
    const skip = dp[i + 1];
    dp[i] = Math.max(solve, skip);
  }
  return dp[0];
};

// Time complexity: O(n) we fill the dp array once
// Space complexity: O(n) for the dp array

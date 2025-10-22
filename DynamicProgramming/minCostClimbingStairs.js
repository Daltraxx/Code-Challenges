const minCostClimbingStairs = (cost) => {
  const dp = (i) => {
    if (i === 0 || i === 1) {
      return 0;
    }

    return Math.min(dp(i - 1), dp(i - 2));
  }

  return dp(cost.length);
}
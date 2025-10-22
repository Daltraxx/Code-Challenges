const minCostClimbingStairs = (cost) => {
  const runningCosts = new Array(cost.length + 1);
  const dp = (i) => {
    if (i === 0 || i === 1) {
      runningCosts[i] = 0;
      return runningCosts[i];
    }

    if (!runningCosts[i])
      runningCosts[i] = Math.min(
        Math.min(dp(i - 1) + cost[i - 1], dp(i - 2) + cost[i - 2])
      );

    return runningCosts[i];
  };

  return dp(cost.length);
};

const cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCostClimbingStairs(cost));

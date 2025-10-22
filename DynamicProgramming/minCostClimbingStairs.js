const minCostClimbingStairs = (cost) => {
  const dp = (i) => {
    if (i === 0 || i === 1) {
      return 0;
    }


    return Math.min(dp(i - 1) + cost[i - 1], dp(i - 2) + cost[i - 2]);
  }

  return dp(cost.length);
}

const cost = [10, 15, 20];
console.log(minCostClimbingStairs(cost));
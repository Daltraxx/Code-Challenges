package DynamicProgramming;

public class MinCostClimbingStairs {
  int[] cost;

  public int minCostClimbingStairs(int[] cost) {
    this.cost = cost;
    return dp(cost.length);
  }

  private int dp(int i) {
    if (i <= 1) {
      return 0;
    }

    return Math.min(dp(i - 1) + cost[i - 1], dp(i - 2) + cost[i - 2]);
  }
}

package DynamicProgramming;

import java.util.HashMap;
import java.util.Map;

public class MinCostClimbingStairs {
  int[] cost;
  Map<Integer, Integer> memo;

  public int minCostClimbingStairsBottomUp(int[] cost) {
    this.cost = cost;
    this.memo = new HashMap<>();
    return dp(cost.length);
  }

  private int dp(int i) {
    if (i <= 1) {
      return 0;
    }

    if (memo.containsKey(i))
      return memo.get(i);

    memo.put(i, Math.min(dp(i - 1) + cost[i - 1], dp(i - 2) + cost[i - 2]));

    return memo.get(i);
  }

  // Top down solution
  public int minCostClimbingStairsTopDown(int[] cost) {
    int[] dp = new int[cost.length + 1];

    for (int i = 2; i < dp.length; i++) {
      dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }

    return dp[dp.length - 1];
  }

  public static void main(String[] args) {
    MinCostClimbingStairs minCostClimbingStairs = new MinCostClimbingStairs();
    int[] cost = { 10, 15, 20 };
    System.out.println(minCostClimbingStairs.minCostClimbingStairsBottomUp(cost)); // Output: 15
    System.out.println(minCostClimbingStairs.minCostClimbingStairsTopDown(cost)); // Output: 15
  }
}

// Time Complexity: O(n)
// Space Complexity: O(n)

package DynamicProgramming;

import java.util.HashMap;
import java.util.Map;

public class MinCostClimbingStairs {
  int[] cost;
  Map<Integer, Integer> memo;

  public int minCostClimbingStairs(int[] cost) {
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

  public static void main(String[] args) {
    MinCostClimbingStairs minCostClimbingStairs = new MinCostClimbingStairs();
    int[] cost = {10, 15, 20};
    System.out.println(minCostClimbingStairs.minCostClimbingStairs(cost)); // Output: 15
  }
}

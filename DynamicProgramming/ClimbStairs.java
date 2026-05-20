public class ClimbStairs {
  // TOP-DOWN
  int[] memo;

  public int climbStairsTopDown(int n) {
    memo = new int[n + 1];
    return dp(n);
  }

  private int dp(int step) {
    if (step < 3) {
      return step;
    }

    if (memo[step] != 0)
      return memo[step];

    memo[step] = dp(step - 1) + dp(step - 2);
    return memo[step];
  }

  // Time complexity: O(n) because each subproblem is solved only once.
  // Space complexity: O(n) for the dp array and the call stack.

  // BOTTOM-UP
  public int climbStairsBottomUp(int n) {
    if (n < 3)
      return n;

    int[] dp = new int[n + 1];
    dp[1] = 1;
    dp[2] = 2;
    for (int i = 3; i < dp.length; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
  }

  // Time complexity: O(n) due to the single loop filling the dp array.
  // Space complexity: O(n) for the dp array.

  // CONSTANT SPACE
  public int climbStairsConstantSpace(int n) {
    if (n < 3)
      return n;

    int downOne = 2;
    int downTwo = 1;
    for (int i = 3; i <= n; i++) {
      int currentStep = downOne + downTwo;
      downTwo = downOne;
      downOne = currentStep;
    }

    return downOne;
  }

  // Time complexity: O(n) due to the single loop.
  // Space complexity: O(1) since we only use a constant amount of space.
}

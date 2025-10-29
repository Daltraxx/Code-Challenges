public class ClimbStairs {
  // TOP-DOWN
  int[] memo;

  public int climbStairs(int n) {
    memo = new int[n + 1];
    return getWaysToReachStep(n);
  }

  private int getWaysToReachStep(int step) {
    if (step == 1)
      return 1;
    if (step == 2)
      return 2;

    if (memo[step] != 0)
      return memo[step];

    memo[step] = getWaysToReachStep(step - 1) + getWaysToReachStep(step - 2);
    return memo[step];
  }

  // Time O(n)
  // Space O(n)
  
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

  // Time O(n)
  // Space O(n)

  // CONSTANT SPACE
  public int climbStairsConstantSpace(int n) {
    if (n < 3)
      return n;
    int downOne = 2;
    int downTwo = 1;
    int currentStep = 3; // only initialized to prevent compile error
    for (int i = 3; i <= n; i++) {
      currentStep = downOne + downTwo;
      downTwo = downOne;
      downOne = currentStep;
    }

    return currentStep;
  }

  // Time O(n)
  // Space O(1)
}

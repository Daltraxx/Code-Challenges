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
}

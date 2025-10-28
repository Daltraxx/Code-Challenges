import java.util.Arrays;

public class MostPoints {
  // TOP DOWN APPROACH
  int[][] questions;
  long[] memo;

  public long mostPoints(int[][] questions) {
    this.questions = questions;
    memo = new long[questions.length];
    Arrays.fill(memo, -1);
    return dp(0);
  }

  private long dp(int i) {
    if (i >= questions.length) {
      return 0;
    }

    if (memo[i] != -1) {
      return memo[i];
    }

    int points = questions[i][0];
    int questionsToSkip = questions[i][1];
    int j = i + questionsToSkip + 1;
    memo[i] = Math.max(points + dp(j), dp(i + 1));
    return memo[i];
  }

  // BOTTOM UP APPROACH
  public long mostPointsBottomUp(int[][] questions) {
    int n = questions.length;
    long[] dp = new long[n + 1]; // n + 1 to avoid out of bounds
    dp[n] = 0;
    for (int i = n - 1; i >= 0; i--) {
      int points = questions[i][0];
      int questionsToSkip = questions[i][1];
      int j = Math.min(i + questionsToSkip + 1, n); // n as safeguard to make sure we don't go out of bounds
      dp[i] = Math.max(points + dp[j], dp[i + 1]);
    }

    return dp[0];
  }
}

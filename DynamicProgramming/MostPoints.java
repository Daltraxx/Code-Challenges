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
    memo[i] = Math.max(points + dp(i + questionsToSkip + 1), dp(i + 1));
    return memo[i];
  }
}

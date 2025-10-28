import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class MostPoints {
  // TOP DOWN APPROACH
  int[][] questions;
  Map<Integer, Long> memo;

  public long mostPoints(int[][] questions) {
    this.questions = questions;
    memo = new HashMap<>();
    return dp(0);
  }

  private long dp(int i) {
    if (i >= questions.length) {
      return 0;
    }

    if (memo.containsKey(i)) {
      return memo.get(i);
    }

    int points = questions[i][0];
    int questionsToSkip = questions[i][1];
    memo.put(i, Math.max(points + dp(i + questionsToSkip + 1), dp(i + 1)));
    return memo.get(i);
  }
}

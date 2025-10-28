public class MostPoints {
  // TOP DOWN APPROACH
  int[][] questions;

  public long mostPoints(int[][] questions) {
    this.questions = questions;
    return dp(0);
  }

  private long dp(int i) {
    if (i >= questions.length) {
      return 0;
    }
    int points = questions[i][0];
    int questionsToSkip = questions[i][1];
    return Math.max(points + dp(i + questionsToSkip + 1), dp(i + 1));
  }
}

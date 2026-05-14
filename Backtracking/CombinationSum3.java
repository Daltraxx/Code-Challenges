import java.util.ArrayList;
import java.util.List;

public class CombinationSum3 {
  int k;
  int n;
  List<List<Integer>> combinations;
  int largestPossibleNum;

  public List<List<Integer>> combinationSum3(int k, int n) {
    this.k = k;
    this.n = n;
    combinations = new ArrayList<>();
    largestPossibleNum = Math.min(9, n - k + 1);
    backtrack(new ArrayList<>(), 0, 1);
    return combinations;
  }

  private void backtrack(List<Integer> currCombo, int currSum, int startNum) {
    if (currCombo.size() == k) {
      if (currSum == n) {
        combinations.add(new ArrayList<>(currCombo));
      }
      return;
    }

    for (int num = startNum; num <= largestPossibleNum; num++) {
      int newSum = currSum + num;
      if (newSum <= n) {
        currCombo.add(num);
        backtrack(currCombo, newSum, num + 1);
        currCombo.remove(currCombo.size() - 1);
      } else {
        return;
      }
    }
  }

  // Time complexity: O(k * C(9, k)) where C(9, k)
  // is the number of combinations of 9 numbers taken k at a time.
  // Space complexity: O(k) for the recursion stack
  // and O(C(9, k)) for storing the combinations.
}

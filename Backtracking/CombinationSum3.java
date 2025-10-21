import java.util.ArrayList;
import java.util.List;

public class CombinationSum3 {
  int target;
  int k;
  List<List<Integer>> combinations;
  int largestPossibleNum;

  public List<List<Integer>> combinationSum3(int k, int n) {
    target = n;
    this.k = k;
    combinations = new ArrayList<>();
    largestPossibleNum = n < 10 ? n : 9;
    backtrack(new ArrayList<>(), 1, 0);
    return combinations;
  }
  
  private void backtrack(List<Integer> curr, int i, int currSum) {
    if (curr.size() == k) {
      if (currSum == target)
        combinations.add(new ArrayList<>(curr));
      return;
    }

    for (int j = i; j < largestPossibleNum; j++) {
      int newSum = currSum + j;
      if (newSum <= target) {
        curr.add(j);
        backtrack(curr, j + 1, newSum);
        curr.remove(curr.size() - 1);
      } else {
        return;
      }
    }
  }
}

import java.util.ArrayList;
import java.util.List;

public class CombinationSum {
  List<List<Integer>> combinations;
  int[] candidates;
  int target;

  public List<List<Integer>> combinationSum(int[] candidates, int target) {
    this.candidates = candidates;
    this.target = target;
    combinations = new ArrayList<>();
    backtrack(new ArrayList<>(), 0, 0);
    return combinations;
  }

  private void backtrack(List<Integer> currCombo, int currSum, int i) {
    if (currSum == target) {
      combinations.add(new ArrayList<>(currCombo));
      return;
    }

    for (int j = i; j < candidates.length; j++) {
      int num = candidates[j];
      if (currSum + num <= target) {
        currCombo.add(num);
        backtrack(currCombo, currSum + num, i);
        currCombo.remove(currCombo.size() - 1);
      }
    }
  }
}

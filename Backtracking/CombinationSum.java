import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class CombinationSum {
  List<List<Integer>> combinations;
  int[] candidates;
  int target;

  public List<List<Integer>> combinationSum(int[] candidates, int target) {
    Arrays.sort(candidates);
    this.candidates = candidates;
    this.target = target;
    combinations = new ArrayList<>();
    backtrack(new ArrayList<>(), 0, 0);
    return combinations;
  }

  private void backtrack(List<Integer> currCombo, int currSum, int start) {
    if (currSum == target) {
      combinations.add(new ArrayList<>(currCombo));
      return;
    }

    for (int i = start; i < candidates.length; i++) {
      int num = candidates[i];
      if (currSum + num > target) {
        break;
      }
      currCombo.add(num);
      backtrack(currCombo, currSum + num, i);
      currCombo.remove(currCombo.size() - 1);
    }
  }
}

// Time complexity: O(N^(T/M + 1)) where N is the number of candidates,
// T is the target,
// and M is the minimum value in candidates.
// This is because in the worst case, we can use the smallest candidate T/M
// times,
// and for each of those times we have N choices.
// For interview purposes, saying “exponential backtracking with pruning” is
// usually sufficient.
// Space complexity: O(T/M ) for the recursion stack and the current combination
// list,
// not counting the output list which can grow exponentially in size.
// The sorted array takes O(N) space, but it is not the dominant factor in space
// complexity.
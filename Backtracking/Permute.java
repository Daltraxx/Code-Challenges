package Backtracking;

import java.util.ArrayList;
import java.util.List;

public class Permute {
  int[] nums;
  List<List<Integer>> permutations;

  public List<List<Integer>> permute(int[] nums) {
    this.nums = nums;
    this.permutations = new ArrayList<>();
    backtrack(new ArrayList<>());
    return permutations;
  }

  private void backtrack(List<Integer> current) {
    if (current.size() == nums.length) {
      permutations.add(new ArrayList<>(current));
      return;
    }

    for (int num : nums) {
      if (!current.contains(num)) {
        current.add(num);
        backtrack(current);
        current.remove(current.size() - 1);
      }
    }
  }
}

package Backtracking;

import java.util.ArrayList;
import java.util.List;

public class Subsets {
  List<List<Integer>> subsetsList;
  int[] nums;

  public List<List<Integer>> subsets(int[] nums) {
    subsetsList = new ArrayList<>();
    this.nums = nums;
    backtrack(new ArrayList<>(), 0);
    return subsetsList;
  }

  private void backtrack(List<Integer> curr, int i) {
    subsetsList.add(new ArrayList<>(curr));

    for (int j = i; j < nums.length; j++) {
      curr.add(nums[j]);
      backtrack(curr, j + 1);
      curr.remove(curr.size() - 1);
    }
  }
}

// Time O(n⋅2^n)
// Space O(n⋅2^n)

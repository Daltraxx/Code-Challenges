import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class PermuteUnique {
  private Map<Integer, Integer> counts;
  private List<List<Integer>> permutations;
  private int n;

  public List<List<Integer>> permuteUnique(int[] nums) {
    permutations = new ArrayList<>();
    counts = new HashMap<>();
    n = nums.length;
    for (int num : nums) {
      counts.merge(num, 1, Integer::sum);
    }

    backtrack(new ArrayList<Integer>());
    return permutations;
  }

  private void backtrack(List<Integer> current) {
    if (current.size() == n) {
      permutations.add(new ArrayList<>(current));
      return;
    }

    counts.forEach((num, count) -> {
      if (count > 0) {
        counts.merge(num, -1, Integer::sum);
        current.add(num);
        backtrack(current);
        current.remove(current.size() - 1);
        counts.put(num, count);
      }
    });
  }
}

// Time Complexity: O(N * N!), where N is the length of the input array nums.
// Space Complexity: O(N), the space used by the recursion stack and the current permutation list
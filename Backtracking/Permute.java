import java.util.ArrayList;
import java.util.List;
import java.util.HashSet;
import java.util.Set;

public class Permute {
  int[] nums;
  List<List<Integer>> permutations;

  public List<List<Integer>> permute(int[] nums) {
    this.nums = nums;
    this.permutations = new ArrayList<>();
    backtrack(new ArrayList<>(), new HashSet<>());
    return permutations;
  }

  private void backtrack(List<Integer> current, Set<Integer> used) {
    if (current.size() == nums.length) {
      permutations.add(new ArrayList<>(current));
      return;
    }

    for (int num : nums) {
      if (!used.contains(num)) {
        current.add(num);
        used.add(num);
        backtrack(current, used);
        current.remove(current.size() - 1);
        used.remove(num);
      }
    }
  }
}

// Time O(n⋅n!)
// Space O(n⋅n!)

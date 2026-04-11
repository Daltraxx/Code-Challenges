import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Intersection {
  public List<Integer> intersection(int[][] nums) {
    Map<Integer, Integer> counts = new HashMap<>();
    for (int[] arr : nums) {
      for (int num : arr) {
        counts.merge(num, 1, Integer::sum);
      }
    }

    int n = nums.length;
    List<Integer> ans = new ArrayList<>();
    for (int num : counts.keySet()) {
      if (counts.get(num) == n) {
        ans.add(num);
      }
    }

    Collections.sort(ans);
    return ans;
  }
}

// Time complexity: O(n + m log m) where n is the total number of elements in
// all arrays
// and m is the number of unique elements across all arrays.
// The O(n) comes from iterating through all elements to count their
// occurrences,
// and the O(m log m) comes from sorting the unique elements in the final answer
// list.
// Space complexity: O(n) in the worst case if all elements are unique.
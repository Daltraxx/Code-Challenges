import java.util.HashMap;
import java.util.Map;

public class NumberOfSubarrays {
  public int numberOfSubarrays(int[] nums, int k) {
    Map<Integer, Integer> prefixCounts = new HashMap<>();
    // Base case: one way to have prefix sum = 0 (before starting)
    // Enables counting subarrays starting at index 0
    prefixCounts.put(0, 1);
    int currPrefix = 0;
    int subarrayCount = 0;
    for (int num : nums) {
      currPrefix += num & 1;
      int targetPrefix = currPrefix - k;
      subarrayCount += prefixCounts.getOrDefault(targetPrefix, 0);
      prefixCounts.merge(currPrefix, 1, Integer::sum);
    }

    return subarrayCount;
  }
}

// Time complexity: O(n) where n is the number of elements in the input array.
// Space complexity: O(n) in the worst case, when all numbers in the input array
// are odd.
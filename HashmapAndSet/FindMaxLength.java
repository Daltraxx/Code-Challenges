import java.util.HashMap;
import java.util.Map;

public class FindMaxLength {
  public int findMaxLength(int[] nums) {
    Map<Integer, Integer> prefixes = new HashMap<>();
    // Important: We need to initialize the prefix 0 to index -1
    // to account for subarrays that start at index 0.
    prefixes.put(0, -1);
    int currPrefix = 0;
    int maxSubarray = 0;
    for (int i = 0; i < nums.length; i++) {
      int num = nums[i];
      currPrefix += num == 1 ? 1 : -1;
      if (prefixes.containsKey(currPrefix)) {
        int j = prefixes.get(currPrefix);
        maxSubarray = Math.max(i - j, maxSubarray);
      } else {
        prefixes.put(currPrefix, i);
      }
    }
    return maxSubarray;

  }
}

// Time Complexity: O(n) where n is the length of the input array.
// Space Complexity: O(n) in the worst case, if all prefix sums are unique.
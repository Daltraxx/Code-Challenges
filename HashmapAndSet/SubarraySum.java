import java.util.HashMap;
import java.util.Map;

public class SubarraySum {
  public int subarraySum(int[] nums, int k) {
    Map<Integer, Integer> prefixCount = new HashMap<>();
    prefixCount.put(0, 1);
    int currSum = 0;
    int subarrayCount = 0;
    for (int num : nums) {
      currSum += num;
      subarrayCount += prefixCount.getOrDefault(currSum - k, 0);
      prefixCount.merge(currSum, 1, Integer::sum);
    }
    return subarrayCount;
  }
}

// Time complexity: O(n) where n is the number of elements in the input array.
// We iterate through the input array once, performing constant time operations
// for each element.
// Space complexity: O(n) in the worst case where all prefix sums are unique.
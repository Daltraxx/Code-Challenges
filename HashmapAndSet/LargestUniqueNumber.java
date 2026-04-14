import java.util.HashMap;
import java.util.Map;

public class LargestUniqueNumber {
  public int largestUniqueNumber(int[] nums) {
    Map<Integer, Integer> counts = new HashMap<>();
    for (int num : nums) {
      counts.merge(num, 1, Integer::sum);
    }

    int maxUniqueNum = -1;
    for (Map.Entry<Integer, Integer> count : counts.entrySet()) {
      if (count.getValue() == 1) {
        maxUniqueNum = Math.max(count.getKey(), maxUniqueNum);
      }
    }

    return maxUniqueNum;
  }
}

// Time Complexity: O(n) - We traverse the array once to count frequencies
// and then iterate through the map to find the largest unique number
// (O(n) in the worst case where all numbers are unique).
// Space Complexity: O(n) - In the worst case, all numbers are unique,
// and we store them in the map.
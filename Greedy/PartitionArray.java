import java.util.Arrays;

public class PartitionArray {
  public int partitionArray(int[] nums, int k) {
    Arrays.sort(nums);
    int count = 1; // Start with one partition
    int left = 0;

    for (int right = 0; right < nums.length; right++) {
      if (nums[right] - nums[left] > k) {
        left = right; // Start a new partition
        count++;
      }
    }

    return count;
  }
}

// Time complexity: O(n log n) due to the sorting step,
// where n is the length of the input array nums.
// The two-pointer traversal takes O(n) time,
// but the sorting dominates the overall time complexity.
// Space complexity: O(1) since we are sorting the array in place.
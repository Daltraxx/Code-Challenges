import java.util.stream.IntStream;

public class PivotIndex {
  public int pivotIndex(int[] nums) {
    int totalSum = IntStream.of(nums).sum();
    int leftSum = 0;
    for (int i = 0; i < nums.length; i++) {
      int rightSum = totalSum - nums[i] - leftSum;
      if (leftSum == rightSum)
        return i;
      leftSum += nums[i];
    }
    return -1;
  }
}

// Time Complexity: O(n)
// Space Complexity: O(1)
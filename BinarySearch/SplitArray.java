public class SplitArray {
  public int splitArray(int[] nums, int k) {
    int left = 0;
    int right = 0;
    for (int num : nums) {
      left = Math.max(num, left);
      right += num;
    }

    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (check(mid, nums, k)) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }

  private boolean check(int maxSum, int[] nums, int k) {
    int currentSum = 0;
    int subArrayCount = 1;
    for (int num : nums) {
      if (currentSum + num > maxSum) {
        currentSum = 0;
        subArrayCount++;
        if (subArrayCount > k)
          return false;
      }
      currentSum += num;
    }

    return true;
  }
}

// Time complexity: O(n log m) 
// where n is the length of the nums array
// and m is the sum of the nums array.
// Space complexity: O(1).

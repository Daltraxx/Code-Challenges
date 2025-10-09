public class SplitArray {
  public int splitArray(int[] nums, int k) {
    int left = Integer.MIN_VALUE;
    int right = 0;
    for (int num : nums) {
      left = Math.max(num, left);
      right += num;
    }

    int minLargestSum = 0;
    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (check(mid, nums, k)) {
        right = mid - 1;
        minLargestSum = mid;
      } else {
        left = mid + 1;
      }
    }

    return minLargestSum;
  }

  private boolean check(int maxSum, int[] nums, int k) {
    int currentSum = 0;
    int subArrayCount = 0;
    for (int num : nums) {
      if (currentSum + num > maxSum) {
        currentSum = 0;
        subArrayCount++;
        if (subArrayCount > k)
          return false;
      }
      currentSum += num;
    }

    return subArrayCount + 1 <= k;
  }
}

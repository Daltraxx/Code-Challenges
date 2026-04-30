public class SmallestDivisor {
  int[] nums;
  int threshold;

  public int smallestDivisor(int[] nums, int threshold) {
    this.nums = nums;
    this.threshold = threshold;
    int left = 1;
    int right = 0;
    for (int num : nums)
      right = Math.max(num, right);

    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (check(mid)) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }

  public boolean check(int divisor) {
    int sum = 0;
    for (int num : nums) {
      sum += (num + divisor - 1) / divisor;
      if (sum > threshold) {
        return false;
      }
    }

    return true;
  }
}

// Time complexity: O(n log m) where n is the length of nums
// and m is the maximum value in nums.
// The log(m) factor comes from the binary search on the divisor values,
// and the O(n) factor comes from the check function
// that iterates through nums for each divisor value.
// Space complexity: O(1)

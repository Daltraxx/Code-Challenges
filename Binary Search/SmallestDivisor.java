public class SmallestDivisor {
  public int smallestDivisor(int[] nums, int threshold) {
    int left = 1;
    int right = 0;
    for (int num : nums)
      right = Math.max(num, right);

    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (check(mid, nums, threshold)) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }

  public boolean check(double divisor, int[] nums, int threshold) {
    int sum = 0;
    for (double num : nums) {
      sum += Math.ceil(num / divisor);
    }

    return sum <= threshold;
  }
}

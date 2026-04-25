public class SearchInsert {
  public int searchInsert(int[] nums, int target) {
    int left = 0;
    int right = nums.length - 1;
    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (nums[mid] == target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return left;
  }
}

// Time Complexity: O(log n) where n is the length of the input array.
// Space Complexity: O(1) since we are using only a constant amount of extra
// space.
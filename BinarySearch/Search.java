public class Search {
  public int search(int[] nums, int target) {
    int left = 0;
    int right = nums.length - 1;
    while (left <= right) {
      int mid = left + (right - left) / 2;
      if (nums[mid] == target) {
        return mid;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return -1;
  }
}

// Time complexity: O(log n) where n is the number of elements in the input array.
// This is because we are halving the search space in each iteration of the loop.
// Space complexity: O(1) because we are using a constant amount of extra space.
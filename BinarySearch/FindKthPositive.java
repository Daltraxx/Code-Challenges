public class FindKthPositive {
  public int findKthPositive(int[] arr, int k) {
    int left = 0;
    int right = arr.length - 1;
    while (left <= right) {
      int mid = (int) Math.floor((left + right) / 2);
      int missingNums = arr[mid] - mid - 1;
      if (missingNums < k) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return left + k;
  }
}

// Time complexity: O(log n) where n is the length of the input array.
// Space complexity: O(1) since we are using constant space.
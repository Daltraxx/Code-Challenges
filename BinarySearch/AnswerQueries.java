import java.util.Arrays;

public class AnswerQueries {
  public int[] answerQueries(int[] nums, int[] queries) {
    int n = nums.length;
    int m = queries.length;

    int[] sortedPrefix = Arrays.copyOf(nums, n);
    Arrays.sort(sortedPrefix);
    for (int i = 1; i < n; i++) {
      sortedPrefix[i] += sortedPrefix[i - 1];
    }

    int[] answer = new int[m];
    for (int i = 0; i < m; i++) {
      answer[i] = binarySearch(sortedPrefix, queries[i]);
    }

    return answer;
  }

  // Upper bound binary search to find the rightmost insertion point 
  // for the target in the prefix sums array
  public int binarySearch(int[] arr, int target) {
    int left = 0;
    int right = arr.length;

    while (left < right) {
      int mid = left + (right - left) / 2;
      if (arr[mid] > target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    // left is the index of the first element greater than target,
    // and is therefore the count of elements that can be included
    return left;
  }
}

// Time complexity: O(n log n + m log n) 
// where n is the length of nums and m is the length of queries
// Space complexity: O(n) for the prefix sums array

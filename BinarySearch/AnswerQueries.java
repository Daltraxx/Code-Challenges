import java.util.Arrays;

public class AnswerQueries {
  public int[] answerQueries(int[] nums, int[] queries) {
    int n = nums.length;
    int m = queries.length;

    Arrays.sort(nums);
    int[] numsPrefix = new int[n];
    int sum = 0;
    for (int i = 0; i < n; i++) {
      sum += nums[i];
      numsPrefix[i] = sum;
    }

    int[] answer = new int[m];
    for (int i = 0; i < m; i++) {
      answer[i] = binarySearch(numsPrefix, queries[i]);
    }

    return answer;
  }

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

    return left;
  }
}

// Time complexity O(nlogn + n + mlogn) or O(nlogn + mlogn) = O((n+m)logn) ... n is dominated by nlogn so not necessary to include
// Space O(n) for prefix sum array, could be reduced to O(1) if we overwrite input nums array

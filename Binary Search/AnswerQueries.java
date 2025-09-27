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

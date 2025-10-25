import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class LengthOfLIS {
  // Top Down Approach
  Map<Integer, Integer> memo;
  int[] nums;

  public int lengthOfLIS(int[] nums) {
    memo = new HashMap<>();
    this.nums = nums;

    int longest = 1;
    for (int i = 0; i < nums.length; i++) {
      longest = Math.max(getLongest(i), longest);
    }
    return longest;
  }

  private int getLongest(int i) {
    if (memo.containsKey(i)) {
      return memo.get(i);
    }

    int longest = 1;
    for (int j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        longest = Math.max(getLongest(j) + 1, longest);
      }
    }

    memo.put(i, longest);
    return longest;
  }

  // Bottom Up Approach
  public int lengthOfLISBottomUp(int[] nums) {
    int[] longestSubsequences = new int[nums.length];
    Arrays.fill(longestSubsequences, 1);
    int longest = 1;
    for (int i = 1; i < nums.length; i++) {
      for (int j = 0; j < i; j++) {
        if (nums[j] < nums[i]) {
          longestSubsequences[i] = Math.max(longestSubsequences[j] + 1, longestSubsequences[i]);
          longest = Math.max(longestSubsequences[i], longest);
        }
      }
    }

    return longest;
  }

  // Binary Search Approach - O(n log n)
  public int lengthOfLISBS(int[] nums) {
    int[] dp = new int[nums.length];
    int len = 0;
    
    for (int num : nums) {
      int pos = binarySearch(dp, 0, len, num);
      dp[pos] = num;
      if (pos == len) {
        len++;
      }
    }

    System.out.println("DP Array: " + Arrays.toString(dp));
    
    return len;
  }
  
  private int binarySearch(int[] dp, int left, int right, int target) {
    while (left < right) {
      int mid = left + (right - left) / 2;
      if (dp[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }

  public static void main(String[] args) {
    LengthOfLIS lis = new LengthOfLIS();
    int[] nums = {10, 9, 2, 5, 3, 7, 101, 18, 4};
    System.out.println("Length of LIS (Binary Search): " + lis.lengthOfLISBS(nums)); // Output: 4
  }
}

// Same Time and Space Complexities (not including Binary Search solution)
// Time O(n^2)
// Space O(n)
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
}

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class LengthOfLIS {
  // TOP DOWN APPROACH
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

  // BOTTOM UP APPROACH
  public int lengthOfLISBottomUp(int[] nums) {
    int[] dp = new int[nums.length];
    Arrays.fill(dp, 1);
    int longest = 1;
    for (int i = 1; i < nums.length; i++) {
      for (int j = 0; j < i; j++) {
        if (nums[j] < nums[i]) {
          dp[i] = Math.max(dp[j] + 1, dp[i]);
          longest = Math.max(dp[i], longest);
        }
      }
    }

    return longest;
  }

  // BINARY SEARCH APPROACH
  public int lengthOfLISBS(int[] nums) {
    // tails[i] will hold smallest possible tail for
    // subsequence of length i + 1
    List<Integer> tails = new ArrayList<>();
    for (int num : nums) {
      // Find smallest index where num <= tails[i]
      int left = 0;
      int right = tails.size();
      while (left < right) {
        int mid = left + (right - left) / 2;
        if (num <= tails.get(mid)) {
          right = mid;
        } else {
          left = mid + 1;
        }
      }
      if (left == tails.size()) {
        // We have extended the longest subsequence
        tails.add(num);
      } else {
        // We have found a more optimal tail for
        // subsequence of length left + 1
        tails.set(left, num);
      }
    }
    
    return tails.size();
  }
}
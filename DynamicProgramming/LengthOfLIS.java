import java.util.HashMap;
import java.util.Map;

public class LengthOfLIS {
  Map<Integer, Integer> memo;
  int[] nums;

  public int lengthofLIS(int[] nums) {
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
}

import java.util.HashMap;
import java.util.Map;

public class MaximumSum {
  public int maximumsSum(int[] nums) {
    Map<Integer, Integer> digitSumMap = new HashMap<>();
    int maxSum = -1;
    for (int num : nums) {
      int digitSum = 0;
      int temp = num;
      while (temp > 0) {
        digitSum += temp % 10;
        temp /= 10;
      }
      if (digitSumMap.containsKey(digitSum)) {
        int currentMax = digitSumMap.get(digitSum);
        maxSum = Math.max(currentMax + num, maxSum);
        digitSumMap.put(digitSum, Math.max(currentMax, num));
      } else {
        digitSumMap.put(digitSum, num);
      }
    }

    return maxSum;
  }
}

// Time complexity: O(n) where n is the length of the input array nums.
// It would be O(n * m) where m is the number of digits in the largest number,
// since we calculate the digit sum for each number,
// but since m is capped by a constant (for example, for numbers up to 10^9, m
// is at most 10),
// we can treat it as O(n).
// and we perform constant time operations to update the maximum values and
// calculate the sum.
// Space complexity: O(1) since we are only storing the top two maximum values
// for each digit sum,
// and the number of unique digit sums is limited by the range of possible digit
// sums
// (which is at most 9 * number of digits in the largest number, or 81 for
// numbers up to 10^9).
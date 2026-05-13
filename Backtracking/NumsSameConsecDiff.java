import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

public class NumsSameConsecDiff {
  public int[] numsSameConsecDiff(int n, int k) {
    // Stack holds arrays indicating [currNum, lastDigit, digitCount]
    Deque<int[]> stack = new ArrayDeque<>();
    for (int firstDigit = 1; firstDigit < 10; firstDigit++) {
      stack.offerLast(new int[] { firstDigit, firstDigit, 1 });
    }
    List<Integer> ans = new ArrayList<>();

    while (stack.size() != 0) {
      int[] state = stack.pollLast();
      int currNum = state[0];
      int lastDigit = state[1];
      int digitCount = state[2];
      if (digitCount == n) {
        ans.add(currNum);
        continue;
      }

      int nextDigit1 = lastDigit + k;
      int nextDigit2 = lastDigit - k;
      if (nextDigit1 < 10) {
        stack.offerLast(new int[] { currNum * 10 + nextDigit1, nextDigit1, digitCount + 1 });
      }
      if (k != 0 && nextDigit2 >= 0) {
        stack.offerLast(new int[] { currNum * 10 + nextDigit2, nextDigit2, digitCount + 1 });
      }
    }

    return ans.stream().mapToInt(Integer::intValue).toArray();
  }
}

// Time complexity: O(2^n) in the worst case, as each digit can lead to two
// possible next digits (lastDigit + k and lastDigit - k).
// Space complexity: O(n) for the stack, as the maximum depth of the stack is n.

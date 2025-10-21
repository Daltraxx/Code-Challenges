import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Deque;

public class NumsSameConsecDiff {
  public int[] numsSameConsecDiff(int n, int k) {
    Deque<Integer> queue = new ArrayDeque<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9));

    for (int level = 1; level < n; level++) {
      int size = queue.size();
      for (int node = 0; node < size; node++) {
        int num = queue.removeFirst();
        int lastDigit = num % 10;

        if (k == 0) {
          int newNum = num * 10 + lastDigit;
          queue.add(newNum);
          continue;
        }

        if (lastDigit + k < 10) {
          int newNum = num * 10 + lastDigit + k;
          queue.add(newNum);
        }

        if (lastDigit - k >= 0) {
          int newNum = num * 10 + lastDigit - k;
          queue.add(newNum);
        }
      }
    }

    int[] ans = queue.stream().mapToInt(Integer::intValue).toArray();

    return ans;
  }
}

// Time O(2^n)
// Space O(2^n)

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Deque;
import java.util.List;

public class NumsSameConsecDiff {
  public int[] numsSameConsecDiff(int n, int k) {
    List<Integer> validInts = new ArrayList<>();
    Deque<Integer> queue = new ArrayDeque<>(Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9));

    while (!queue.isEmpty()) {
      int num = queue.removeFirst();
      String numString = Integer.toString(num);
      if (numString.length() == n) {
        validInts.add(Integer.parseInt(numString));
        continue;
      }
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

    int[] ans = validInts.stream().mapToInt(Integer::intValue).toArray();

    return ans;
  }
}

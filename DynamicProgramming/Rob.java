import java.util.HashMap;
import java.util.Map;

public class Rob {
  int[] houses;
  Map<Integer, Integer> memo;
  public int rob(int[] nums) {
    houses = nums;
    memo = new HashMap<>();
    return maxMoney(nums.length - 1);
  }

  private int maxMoney(int i) {
    if (i == 0)
      return houses[0];
    if (i == 1)
      return Math.max(houses[0], houses[1]);

    if (memo.containsKey(i))
      return memo.get(i);

    memo.put(i, Math.max(maxMoney(i - 2) + houses[i], maxMoney(i - 1)));

    return memo.get(i);
  }

  // Top-down approach with tabulation
  
  
  public static void main(String[] args) {
    Rob robber = new Rob();
    int[] houses = {2,7,9,3,1};
    System.out.println(robber.rob(houses)); // Output: 12
  }
}